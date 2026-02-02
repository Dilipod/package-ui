'use client'

import * as React from 'react'

// ============================================
// Types
// ============================================

interface FlowNode {
  id: string
  label: string
  type: 'action' | 'decision' | 'terminal'
}

interface FlowEdge {
  from: string
  to: string
  label?: string
}

// ============================================
// Parser
// ============================================

function parseMermaidFlowchart(mermaid: string): { nodes: FlowNode[]; edges: FlowEdge[] } {
  const nodes = new Map<string, FlowNode>()
  const edges: FlowEdge[] = []

  const lines = mermaid
    .split(/\\n|\n/)
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('flowchart') && !l.startsWith('graph'))

  function parseNodeDef(str: string): { id: string; label?: string; type?: FlowNode['type'] } {
    // Decision: D{Certificate Found?}
    const decisionMatch = str.match(/^([A-Za-z0-9_]+)\{(.+?)\}$/)
    if (decisionMatch) return { id: decisionMatch[1], label: decisionMatch[2], type: 'decision' }
    // Action / terminal: A[Start] or A(Start) or A([Start])
    const bracketMatch = str.match(/^([A-Za-z0-9_]+)\[?\(?\[?(.+?)\]?\)?\]?$/)
    if (bracketMatch) {
      const label = bracketMatch[2]
      const isTerminal = /^(start|end|begin|finish|done)$/i.test(label)
      return { id: bracketMatch[1], label, type: isTerminal ? 'terminal' : 'action' }
    }
    // Just an ID reference
    return { id: str.trim() }
  }

  for (const line of lines) {
    const edgeMatch = line.match(/^(.+?)\s*-->(?:\|(.+?)\|)?\s*(.+)$/)
    if (!edgeMatch) continue

    const leftRaw = edgeMatch[1].trim()
    const edgeLabel = edgeMatch[2]?.trim()
    const rightRaw = edgeMatch[3].trim()

    const left = parseNodeDef(leftRaw)
    const right = parseNodeDef(rightRaw)

    if (left.label && !nodes.has(left.id)) {
      nodes.set(left.id, { id: left.id, label: left.label, type: left.type || 'action' })
    }
    if (right.label && !nodes.has(right.id)) {
      nodes.set(right.id, { id: right.id, label: right.label, type: right.type || 'action' })
    }
    if (!nodes.has(left.id)) {
      nodes.set(left.id, { id: left.id, label: left.id, type: 'action' })
    }
    if (!nodes.has(right.id)) {
      nodes.set(right.id, { id: right.id, label: right.id, type: 'action' })
    }

    edges.push({ from: left.id, to: right.id, label: edgeLabel })
  }

  return { nodes: Array.from(nodes.values()), edges }
}

// ============================================
// Layout Builder
// ============================================

function findMergePoint(
  branchStarts: string[],
  outgoing: Map<string, FlowEdge[]>,
): string | null {
  const reachable = new Map<string, Set<string>>()

  for (const start of branchStarts) {
    const q = [start]
    const seen = new Set<string>()
    while (q.length > 0) {
      const id = q.shift()!
      if (seen.has(id)) continue
      seen.add(id)
      if (!reachable.has(id)) reachable.set(id, new Set())
      reachable.get(id)!.add(start)
      const outs = outgoing.get(id) || []
      for (const e of outs) q.push(e.to)
    }
  }

  const allBranches = new Set(branchStarts)
  const q = [branchStarts[0]]
  const seen = new Set<string>()
  while (q.length > 0) {
    const id = q.shift()!
    if (seen.has(id)) continue
    seen.add(id)
    if (!allBranches.has(id) && reachable.get(id)?.size === branchStarts.length) {
      return id
    }
    const outs = outgoing.get(id) || []
    for (const e of outs) q.push(e.to)
  }
  return null
}

type LayoutItem =
  | { type: 'node'; nodeId: string }
  | { type: 'arrow'; label?: string }
  | { type: 'branch'; decision: string; branches: { label?: string; items: LayoutItem[] }[]; mergeId: string | null }

function buildLayout(
  startId: string,
  outgoing: Map<string, FlowEdge[]>,
  incoming: Map<string, FlowEdge[]>,
  nodeMap: Map<string, FlowNode>,
  visited: Set<string>
): LayoutItem[] {
  const items: LayoutItem[] = []
  let currentId: string | null = startId

  while (currentId) {
    if (visited.has(currentId)) break

    const node = nodeMap.get(currentId)
    if (!node) break

    const outs: FlowEdge[] = outgoing.get(currentId) || []

    if (outs.length <= 1) {
      visited.add(currentId)
      items.push({ type: 'node', nodeId: currentId })
      if (outs.length === 1) {
        const nextId: string = outs[0].to
        if (visited.has(nextId)) break
        items.push({ type: 'arrow', label: outs[0].label })
        currentId = nextId
      } else {
        currentId = null
      }
    } else {
      visited.add(currentId)
      items.push({ type: 'node', nodeId: currentId })

      const branchStarts: string[] = outs.map((e: FlowEdge) => e.to)
      const mergeId = findMergePoint(branchStarts, outgoing)

      const branches: { label?: string; items: LayoutItem[] }[] = []
      for (const edge of outs) {
        if (visited.has(edge.to) && edge.to !== mergeId) {
          branches.push({ label: edge.label, items: [] })
          continue
        }
        const branchItems = buildLayout(edge.to, outgoing, incoming, nodeMap, visited)
        branches.push({ label: edge.label, items: branchItems })
      }

      items.push({ type: 'branch', decision: currentId, branches, mergeId })

      if (mergeId && !visited.has(mergeId)) {
        items.push({ type: 'arrow' })
        currentId = mergeId
      } else {
        currentId = null
      }
    }
  }

  return items
}

// ============================================
// Render Components
// ============================================

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center">
      {label && (
        <span className="text-[10px] font-medium text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded mb-0.5">
          {label}
        </span>
      )}
      <div className="w-px h-4 bg-gray-300" />
      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-gray-300" />
    </div>
  )
}

function FlowNodeBox({ node }: { node: FlowNode }) {
  if (node.type === 'decision') {
    return (
      <div
        className="bg-amber-50 border-2 border-amber-300 rounded-lg px-4 py-2.5 text-xs font-medium text-amber-800 text-center my-1"
        style={{ minWidth: '120px' }}
      >
        <span className="text-amber-400 mr-1">&#x25C7;</span>
        {node.label}
      </div>
    )
  }
  if (node.type === 'terminal') {
    return (
      <div className="bg-gray-100 border border-gray-200 rounded-full px-5 py-1.5 text-xs font-medium text-gray-500 text-center my-1">
        {node.label}
      </div>
    )
  }
  return (
    <div className="bg-white border border-gray-200 rounded-sm px-4 py-2 text-xs font-medium text-[var(--black)] text-center shadow-sm my-1 max-w-[220px]">
      {node.label}
    </div>
  )
}

function RenderLayoutItems({ items, nodeMap }: { items: LayoutItem[]; nodeMap: Map<string, FlowNode> }) {
  return (
    <>
      {items.map((item, i) => {
        if (item.type === 'node') {
          const node = nodeMap.get(item.nodeId)
          if (!node) return null
          return <FlowNodeBox key={`node-${item.nodeId}`} node={node} />
        }
        if (item.type === 'arrow') {
          return <FlowArrow key={`arrow-${i}`} label={item.label} />
        }
        if (item.type === 'branch') {
          return (
            <div key={`branch-${item.decision}-${i}`} className="flex flex-col items-center w-full">
              <div className="w-px h-3 bg-gray-300" />
              <div className="flex items-start justify-center gap-6 w-full">
                {item.branches.map((branch, j) => (
                  <div key={j} className="flex flex-col items-center min-w-[100px]">
                    <div className="flex flex-col items-center">
                      {branch.label && (
                        <span className="text-[10px] font-medium text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded mb-1">
                          {branch.label}
                        </span>
                      )}
                      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-gray-300" />
                    </div>
                    <div className="flex flex-col items-center">
                      <RenderLayoutItems items={branch.items} nodeMap={nodeMap} />
                    </div>
                  </div>
                ))}
              </div>
              {item.mergeId && (
                <div className="w-px h-3 bg-gray-300" />
              )}
            </div>
          )
        }
        return null
      })}
    </>
  )
}

// ============================================
// Public Component
// ============================================

export interface FlowchartDiagramProps {
  /** Mermaid flowchart syntax string */
  mermaid: string
  /** Optional className for the container */
  className?: string
}

export function FlowchartDiagram({ mermaid, className }: FlowchartDiagramProps) {
  const { nodes, edges } = parseMermaidFlowchart(mermaid)

  if (nodes.length === 0) {
    return (
      <pre className="text-xs bg-white border border-gray-100 rounded-sm p-3 overflow-x-auto whitespace-pre-wrap">
        {mermaid}
      </pre>
    )
  }

  const outgoing = new Map<string, FlowEdge[]>()
  const incoming = new Map<string, FlowEdge[]>()
  for (const edge of edges) {
    if (!outgoing.has(edge.from)) outgoing.set(edge.from, [])
    outgoing.get(edge.from)!.push(edge)
    if (!incoming.has(edge.to)) incoming.set(edge.to, [])
    incoming.get(edge.to)!.push(edge)
  }

  const nodeMap = new Map(nodes.map(n => [n.id, n]))

  const roots = nodes.filter(n => !incoming.has(n.id) || incoming.get(n.id)!.length === 0)
  const startId = roots.length > 0 ? roots[0].id : nodes[0].id

  const visited = new Set<string>()
  const layout = buildLayout(startId, outgoing, incoming, nodeMap, visited)

  return (
    <div className={className}>
      <div className="flex flex-col items-center py-2">
        <RenderLayoutItems items={layout} nodeMap={nodeMap} />
      </div>
    </div>
  )
}
