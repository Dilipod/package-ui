'use client'

import { useMemo } from 'react'
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  useNodesState,
  useEdgesState,
  Position,
  MarkerType,
  Handle,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

// ============================================
// Types
// ============================================

export interface N8nNode {
  id: string
  name: string
  type: string
  parameters?: Record<string, unknown>
}

export interface N8nWorkflow {
  name: string
  nodes: N8nNode[]
  connections: Record<string, Record<string, Array<Array<{ node: string; type: string; index: number }>>>>
}

export interface WorkflowFlowProps {
  /** The n8n workflow to visualize */
  workflow: N8nWorkflow
  /** Height of the flow diagram container */
  height?: number
  /** Additional CSS class name */
  className?: string
}

// ============================================
// Helper Functions
// ============================================

function getNodeTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'n8n-nodes-base.webhook': 'Webhook',
    'n8n-nodes-base.scheduleTrigger': 'Schedule',
    'n8n-nodes-base.if': 'Condition',
    'n8n-nodes-base.httpRequest': 'HTTP Request',
    'n8n-nodes-base.set': 'Set Data',
    'n8n-nodes-base.code': 'Code',
    'n8n-nodes-base.respondToWebhook': 'Response',
    '@n8n/n8n-nodes-langchain.agent': 'AI Agent',
    '@n8n/n8n-nodes-langchain.lmChatOpenAi': 'OpenAI',
    '@n8n/n8n-nodes-langchain.lmChatAnthropic': 'Anthropic',
  }
  return labels[type] || type.split('.').pop()?.replace(/([A-Z])/g, ' $1').trim() || type
}

// ============================================
// Custom Node Component
// ============================================

function CustomNode({ data }: { data: { label: string; type: string } }) {
  return (
    <div className="px-3 py-2 rounded bg-white border border-slate-200 shadow-sm min-w-[110px] text-center">
      <Handle type="target" position={Position.Left} className="!bg-slate-300 !w-1.5 !h-1.5 !border-0" />
      <div className="text-xs font-medium text-slate-700 truncate max-w-[130px]">
        {data.label}
      </div>
      <div className="text-[10px] text-slate-400 truncate max-w-[130px]">
        {getNodeTypeLabel(data.type)}
      </div>
      <Handle type="source" position={Position.Right} className="!bg-slate-300 !w-1.5 !h-1.5 !border-0" />
    </div>
  )
}

const nodeTypes = { custom: CustomNode }

// ============================================
// Main Component
// ============================================

export function WorkflowFlow({ workflow, height = 350, className = '' }: WorkflowFlowProps) {
  const { initialNodes, initialEdges } = useMemo(() => {
    const n8nNodes = workflow.nodes || []
    const connections = workflow.connections || {}
    const nodeIdMap = new Map(n8nNodes.map(n => [n.name, n.id || n.name]))
    
    // Build adjacency lists (forward and backward)
    const forwardEdges = new Map<string, string[]>() // from -> [to]
    const backwardEdges = new Map<string, string[]>() // to -> [from]
    const allEdgeData: Array<{ from: string; to: string; outputType: string; oi: number; ci: number }> = []
    
    Object.entries(connections).forEach(([fromNodeName, outputTypes]) => {
      Object.entries(outputTypes).forEach(([outputType, outputs]) => {
        if (!Array.isArray(outputs)) return
        outputs.forEach((outputArray, oi) => {
          if (!Array.isArray(outputArray)) return
          outputArray.forEach((conn, ci) => {
            if (!forwardEdges.has(fromNodeName)) forwardEdges.set(fromNodeName, [])
            forwardEdges.get(fromNodeName)!.push(conn.node)
            
            if (!backwardEdges.has(conn.node)) backwardEdges.set(conn.node, [])
            backwardEdges.get(conn.node)!.push(fromNodeName)
            
            allEdgeData.push({ from: fromNodeName, to: conn.node, outputType, oi, ci })
          })
        })
      })
    })

    // Find trigger nodes (webhooks, schedule triggers) - these are the true starting points
    const triggerNodes = n8nNodes.filter(n => 
      n.type.includes('webhook') || n.type.includes('Trigger') || n.type.includes('schedule')
    )
    
    // If no triggers found, find nodes with no incoming edges as fallback
    const roots = triggerNodes.length > 0 
      ? triggerNodes 
      : n8nNodes.filter(n => !backwardEdges.has(n.name) || backwardEdges.get(n.name)!.length === 0)
    
    // Assign levels using BFS from trigger/root nodes only
    const levels = new Map<string, number>()
    const queue: string[] = []
    
    roots.forEach(r => {
      levels.set(r.name, 0)
      queue.push(r.name)
    })
    
    const visited = new Set<string>()
    while (queue.length > 0) {
      const name = queue.shift()!
      if (visited.has(name)) continue
      visited.add(name)
      
      const children = forwardEdges.get(name) || []
      const myLevel = levels.get(name) || 0
      
      children.forEach(child => {
        const childLevel = levels.get(child)
        if (childLevel === undefined || myLevel + 1 > childLevel) {
          levels.set(child, myLevel + 1)
        }
        if (!visited.has(child)) {
          queue.push(child)
        }
      })
    }
    
    // Handle nodes that weren't reached (like AI models that feed into other nodes)
    // Place them one level before the node they connect to
    n8nNodes.forEach(node => {
      if (!levels.has(node.name)) {
        const targets = forwardEdges.get(node.name) || []
        if (targets.length > 0) {
          // Find the level of the target and place this node one level before
          const targetLevels = targets.map(t => levels.get(t) ?? 0)
          const targetLevel = Math.min(...targetLevels)
          levels.set(node.name, Math.max(0, targetLevel - 1))
        } else {
          // No connections at all, place at the end
          const maxLevel = Math.max(0, ...Array.from(levels.values()))
          levels.set(node.name, maxLevel)
        }
      }
    })
    
    // Group nodes by level
    const nodesByLevel = new Map<number, string[]>()
    levels.forEach((level, name) => {
      if (!nodesByLevel.has(level)) nodesByLevel.set(level, [])
      nodesByLevel.get(level)!.push(name)
    })
    
    // Sort nodes within each level to minimize crossings
    // Simple heuristic: sort by average position of connected nodes in previous level
    const sortedLevels = Array.from(nodesByLevel.keys()).sort((a, b) => a - b)
    
    sortedLevels.forEach((level, levelIdx) => {
      if (levelIdx === 0) return // Skip first level
      
      const nodesInLevel = nodesByLevel.get(level)!
      const prevLevel = sortedLevels[levelIdx - 1]
      const prevNodes = nodesByLevel.get(prevLevel) || []
      const prevPositions = new Map(prevNodes.map((n, i) => [n, i]))
      
      // Calculate average position of parents for each node
      nodesInLevel.sort((a, b) => {
        const parentsA = backwardEdges.get(a) || []
        const parentsB = backwardEdges.get(b) || []
        
        const avgA = parentsA.length > 0 
          ? parentsA.reduce((sum, p) => sum + (prevPositions.get(p) ?? 0), 0) / parentsA.length 
          : 0
        const avgB = parentsB.length > 0 
          ? parentsB.reduce((sum, p) => sum + (prevPositions.get(p) ?? 0), 0) / parentsB.length 
          : 0
        
        return avgA - avgB
      })
    })
    
    // Assign positions
    const positions = new Map<string, { x: number; y: number }>()
    const xGap = 170
    const yGap = 70
    
    sortedLevels.forEach(level => {
      const nodesInLevel = nodesByLevel.get(level)!
      const totalHeight = (nodesInLevel.length - 1) * yGap
      const startY = -totalHeight / 2
      
      nodesInLevel.forEach((name, i) => {
        positions.set(name, { x: level * xGap, y: startY + i * yGap })
      })
    })

    // Create ReactFlow nodes
    const nodes: Node[] = n8nNodes.map(node => ({
      id: node.id || node.name,
      type: 'custom',
      position: positions.get(node.name) || { x: 0, y: 0 },
      data: { label: node.name, type: node.type },
    }))

    // Create edges with better styling
    const edges: Edge[] = allEdgeData.map(({ from, to, oi, ci }) => {
      const fromId = nodeIdMap.get(from)!
      const toId = nodeIdMap.get(to)!
      
      return {
        id: `${fromId}-${toId}-${oi}-${ci}`,
        source: fromId,
        target: toId,
        type: 'smoothstep',
        pathOptions: { borderRadius: 20 },
        style: { stroke: '#94a3b8', strokeWidth: 1.5 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8', width: 14, height: 14 },
      }
    })

    return { initialNodes: nodes, initialEdges: edges }
  }, [workflow])

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div style={{ height }} className={`bg-slate-50 rounded-lg border border-slate-200 overflow-hidden ${className}`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.1, minZoom: 0.8 }}
        minZoom={0.5}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
        defaultEdgeOptions={{
          type: 'smoothstep',
        }}
      >
        <Background color="#e2e8f0" gap={24} size={1} />
      </ReactFlow>
    </div>
  )
}

export default WorkflowFlow
