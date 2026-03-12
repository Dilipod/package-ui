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

interface LayoutNode {
  id: string
  x: number
  y: number
  width: number
  height: number
  layer: number
  node: FlowNode
}

// ============================================
// Layout Constants
// ============================================

const NODE_WIDTH = 180
const NODE_HEIGHT = 44
const DIAMOND_SIZE = 72
const X_GAP = 50
const Y_GAP = 64
const PADDING = 40
const FONT_SIZE = 11
const CHAR_WIDTH = 6.2
const LINE_HEIGHT = 14

// ============================================
// Parser
// ============================================

function stripQuotes(s: string): string {
  const t = s.trim()
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1)
  }
  return t
}

function parseNodeRef(raw: string): { id: string; label?: string; type?: FlowNode['type'] } {
  const s = raw.trim()

  // Decision: ID{Label} or ID{"Label"}
  const decision = s.match(/^([A-Za-z0-9_]+)\{(.+)\}$/)
  if (decision) return { id: decision[1], label: stripQuotes(decision[2]), type: 'decision' }

  // Stadium/terminal: ID([Label])
  const stadium = s.match(/^([A-Za-z0-9_]+)\(\[(.+)\]\)$/)
  if (stadium) return { id: stadium[1], label: stripQuotes(stadium[2]), type: 'terminal' }

  // Circle: ID((Label))
  const circle = s.match(/^([A-Za-z0-9_]+)\(\((.+)\)\)$/)
  if (circle) return { id: circle[1], label: stripQuotes(circle[2]), type: 'terminal' }

  // Rounded rect: ID(Label) — but not ID([...]) or ID((...))
  const rounded = s.match(/^([A-Za-z0-9_]+)\(([^[(].+?)\)$/)
  if (rounded) return { id: rounded[1], label: stripQuotes(rounded[2]), type: 'action' }

  // Rectangle: ID[Label] or ID["Label"] — but not ID([...])
  const rect = s.match(/^([A-Za-z0-9_]+)\[([^(].+?)\]$/)
  if (rect) {
    const label = stripQuotes(rect[2])
    const isTerminal = /^(start|end|begin|finish|done|stop)$/i.test(label)
    return { id: rect[1], label, type: isTerminal ? 'terminal' : 'action' }
  }

  // Bare ID reference
  const bareId = s.match(/^([A-Za-z0-9_]+)$/)
  if (bareId) return { id: bareId[1] }

  return { id: s }
}

function registerNode(
  map: Map<string, FlowNode>,
  ref: { id: string; label?: string; type?: FlowNode['type'] },
) {
  if (!ref.id) return
  const existing = map.get(ref.id)
  if (existing) {
    // Upgrade label/type if current entry only has ID as label
    if (ref.label && existing.label === existing.id) {
      existing.label = ref.label
    }
    if (ref.type && ref.type !== 'action' && existing.type === 'action') {
      existing.type = ref.type
    }
    return
  }
  map.set(ref.id, {
    id: ref.id,
    label: ref.label || ref.id,
    type: ref.type || 'action',
  })
}

function parseMermaidFlowchart(mermaid: string): { nodes: FlowNode[]; edges: FlowEdge[] } {
  const nodeMap = new Map<string, FlowNode>()
  const edges: FlowEdge[] = []

  const lines = mermaid
    .split(/\\n|\n/)
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('%%'))

  for (const line of lines) {
    // Skip directives
    if (/^(flowchart|graph|subgraph|end|style|classDef|class|click|linkStyle)\b/i.test(line)) continue

    // Try edge: A -->|label| B  or  A --> B  or  A ==> B  or  A -.-> B  or  A --- B
    const edgeMatch = line.match(
      /^(.+?)\s*(?:-->|==>|-\.->|---)\s*(?:\|([^|]*)\|)?\s*(.+)$/,
    )

    if (edgeMatch) {
      const leftNode = parseNodeRef(edgeMatch[1].trim())
      const edgeLabel = edgeMatch[2]?.trim() || undefined
      const rightNode = parseNodeRef(edgeMatch[3].trim())

      registerNode(nodeMap, leftNode)
      registerNode(nodeMap, rightNode)
      edges.push({ from: leftNode.id, to: rightNode.id, label: edgeLabel })
      continue
    }

    // Standalone node definition
    const nodeDef = parseNodeRef(line)
    if (nodeDef.label) {
      registerNode(nodeMap, nodeDef)
    }
  }

  return { nodes: Array.from(nodeMap.values()), edges }
}

// ============================================
// Layout (BFS Layered / Sugiyama-lite)
// ============================================

function computeLayout(
  nodes: FlowNode[],
  edges: FlowEdge[],
): { layoutNodes: LayoutNode[]; svgWidth: number; svgHeight: number } {
  if (nodes.length === 0) return { layoutNodes: [], svgWidth: 0, svgHeight: 0 }

  // Build adjacency
  const forward = new Map<string, string[]>()
  const backward = new Map<string, string[]>()
  for (const e of edges) {
    if (!forward.has(e.from)) forward.set(e.from, [])
    forward.get(e.from)!.push(e.to)
    if (!backward.has(e.to)) backward.set(e.to, [])
    backward.get(e.to)!.push(e.from)
  }

  // Find roots
  const roots = nodes.filter(n => !backward.has(n.id) || backward.get(n.id)!.length === 0)
  if (roots.length === 0) roots.push(nodes[0])

  // BFS layering (longest-path for better aesthetics)
  const layers = new Map<string, number>()
  const queue: string[] = []
  for (const r of roots) {
    layers.set(r.id, 0)
    queue.push(r.id)
  }
  const visited = new Set<string>()
  while (queue.length > 0) {
    const id = queue.shift()!
    if (visited.has(id)) continue
    visited.add(id)
    const myLayer = layers.get(id) || 0
    for (const child of forward.get(id) || []) {
      const childLayer = layers.get(child)
      if (childLayer === undefined || myLayer + 1 > childLayer) {
        layers.set(child, myLayer + 1)
      }
      if (!visited.has(child)) queue.push(child)
    }
  }
  // Handle disconnected nodes
  const maxLayer = Math.max(0, ...Array.from(layers.values()))
  for (const n of nodes) {
    if (!layers.has(n.id)) layers.set(n.id, maxLayer + 1)
  }

  // Group by layer
  const nodesByLayer = new Map<number, FlowNode[]>()
  for (const n of nodes) {
    const layer = layers.get(n.id)!
    if (!nodesByLayer.has(layer)) nodesByLayer.set(layer, [])
    nodesByLayer.get(layer)!.push(n)
  }

  // Barycenter sort within layers
  const sortedLayers = Array.from(nodesByLayer.keys()).sort((a, b) => a - b)
  const posInLayer = new Map<string, number>()

  for (let li = 0; li < sortedLayers.length; li++) {
    const layer = sortedLayers[li]
    const nodesInLayer = nodesByLayer.get(layer)!

    if (li > 0) {
      nodesInLayer.sort((a, b) => {
        const parentsA = backward.get(a.id) || []
        const parentsB = backward.get(b.id) || []
        const avgA = parentsA.length > 0
          ? parentsA.reduce((s, p) => s + (posInLayer.get(p) ?? 0), 0) / parentsA.length
          : 0
        const avgB = parentsB.length > 0
          ? parentsB.reduce((s, p) => s + (posInLayer.get(p) ?? 0), 0) / parentsB.length
          : 0
        return avgA - avgB
      })
    }
    nodesInLayer.forEach((n, i) => posInLayer.set(n.id, i))
  }

  // Compute pixel positions
  const layoutNodes: LayoutNode[] = []

  for (const layer of sortedLayers) {
    const nodesInLayer = nodesByLayer.get(layer)!
    const widths = nodesInLayer.map(n => nodeWidth(n))
    const heights = nodesInLayer.map(n => nodeHeight(n))
    const totalWidth = widths.reduce((s, w) => s + w, 0) + (nodesInLayer.length - 1) * X_GAP
    let startX = -totalWidth / 2

    nodesInLayer.forEach((n, i) => {
      layoutNodes.push({
        id: n.id,
        x: startX + widths[i] / 2,
        y: layer * (NODE_HEIGHT + Y_GAP),
        width: widths[i],
        height: heights[i],
        layer,
        node: n,
      })
      startX += widths[i] + X_GAP
    })
  }

  // Normalize so min x/y = PADDING
  const minX = Math.min(...layoutNodes.map(n => n.x - n.width / 2))
  const minY = Math.min(...layoutNodes.map(n => n.y - n.height / 2))
  const offsetX = PADDING - minX
  const offsetY = PADDING - minY
  for (const n of layoutNodes) {
    n.x += offsetX
    n.y += offsetY
  }

  const svgWidth = Math.max(...layoutNodes.map(n => n.x + n.width / 2)) + PADDING
  const svgHeight = Math.max(...layoutNodes.map(n => n.y + n.height / 2)) + PADDING

  return { layoutNodes, svgWidth, svgHeight }
}

function nodeWidth(n: FlowNode): number {
  if (n.type === 'decision') return Math.max(DIAMOND_SIZE * 1.4, 100)
  // Scale width to label length, clamped
  const textWidth = n.label.length * CHAR_WIDTH + 32
  return Math.max(100, Math.min(NODE_WIDTH, textWidth))
}

function nodeHeight(n: FlowNode): number {
  if (n.type === 'decision') return DIAMOND_SIZE
  const w = nodeWidth(n)
  const lines = wrapText(n.label, w - 24)
  return Math.max(NODE_HEIGHT, lines.length * LINE_HEIGHT + 16)
}

// ============================================
// Text Wrapping
// ============================================

function wrapText(text: string, maxPixelWidth: number): string[] {
  const charsPerLine = Math.max(8, Math.floor(maxPixelWidth / CHAR_WIDTH))
  if (text.length <= charsPerLine) return [text]

  const words = text.split(' ')
  const lines: string[] = []
  let cur = ''

  for (const word of words) {
    const test = cur ? `${cur} ${word}` : word
    if (test.length > charsPerLine && cur) {
      lines.push(cur)
      cur = word
    } else {
      cur = test
    }
  }
  if (cur) lines.push(cur)

  // Max 3 lines
  if (lines.length > 3) {
    lines.length = 3
    lines[2] = lines[2].slice(0, -1) + '\u2026'
  }
  return lines
}

// ============================================
// SVG Edge Path
// ============================================

function computeEdgePath(
  from: LayoutNode,
  to: LayoutNode,
): string {
  let startX = from.x
  let startY = from.y + from.height / 2

  // For decisions, exit from side vertex when target is horizontally offset
  if (from.node.type === 'decision') {
    const dx = to.x - from.x
    const halfDiamond = DIAMOND_SIZE / 2
    if (Math.abs(dx) > halfDiamond) {
      startX = from.x + (dx > 0 ? halfDiamond : -halfDiamond)
      startY = from.y
    }
  }

  const endX = to.x
  const endY = to.y - to.height / 2

  // Cubic bezier with vertical control points
  const midY = (startY + endY) / 2
  return `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`
}

// ============================================
// SVG Components
// ============================================

function SvgDefs() {
  return (
    <defs>
      <marker
        id="fc-arrowhead"
        viewBox="0 0 10 7"
        refX="10"
        refY="3.5"
        markerWidth="8"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#D1D5DB" />
      </marker>
      <filter id="fc-shadow" x="-4%" y="-4%" width="108%" height="116%">
        <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.07" />
      </filter>
    </defs>
  )
}

function TextBlock({ lines, x, y, fill, fontSize }: {
  lines: string[]
  x: number
  y: number
  fill: string
  fontSize: number
}) {
  const startY = y - ((lines.length - 1) * LINE_HEIGHT) / 2
  return (
    <text
      x={x}
      textAnchor="middle"
      fill={fill}
      style={{ fontSize: `${fontSize}px`, fontFamily: 'var(--font-outfit, system-ui, sans-serif)', fontWeight: 500 }}
    >
      {lines.map((line, i) => (
        <tspan key={i} x={x} y={startY + i * LINE_HEIGHT}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

function ActionNodeSvg({ n }: { n: LayoutNode }) {
  const lines = wrapText(n.node.label, n.width - 24)
  return (
    <g>
      <rect
        x={n.x - n.width / 2}
        y={n.y - n.height / 2}
        width={n.width}
        height={n.height}
        rx={3}
        fill="white"
        stroke="#E5E7EB"
        strokeWidth={1}
        filter="url(#fc-shadow)"
      />
      <TextBlock lines={lines} x={n.x} y={n.y} fill="#0A0A0A" fontSize={FONT_SIZE} />
    </g>
  )
}

function DecisionNodeSvg({ n }: { n: LayoutNode }) {
  const half = DIAMOND_SIZE / 2
  const points = `${n.x},${n.y - half} ${n.x + half},${n.y} ${n.x},${n.y + half} ${n.x - half},${n.y}`
  const lines = wrapText(n.node.label, DIAMOND_SIZE - 16)
  return (
    <g>
      <polygon
        points={points}
        fill="#FFFBEB"
        stroke="#FCD34D"
        strokeWidth={2}
      />
      <TextBlock lines={lines} x={n.x} y={n.y} fill="#92400E" fontSize={10} />
    </g>
  )
}

function TerminalNodeSvg({ n }: { n: LayoutNode }) {
  return (
    <g>
      <rect
        x={n.x - n.width / 2}
        y={n.y - n.height / 2}
        width={n.width}
        height={n.height}
        rx={n.height / 2}
        fill="#F3F4F6"
        stroke="#E5E7EB"
        strokeWidth={1}
      />
      <TextBlock lines={[n.node.label]} x={n.x} y={n.y} fill="#6B7280" fontSize={FONT_SIZE} />
    </g>
  )
}

function EdgeSvg({ from, to, label }: { from: LayoutNode; to: LayoutNode; label?: string }) {
  const path = computeEdgePath(from, to)

  // Label position at midpoint of the bezier
  const midX = (from.x + to.x) / 2
  const midY = (from.y + from.height / 2 + to.y - to.height / 2) / 2

  return (
    <g>
      <path
        d={path}
        fill="none"
        stroke="#D1D5DB"
        strokeWidth={1.5}
        markerEnd="url(#fc-arrowhead)"
      />
      {label && (
        <g>
          <rect
            x={midX - (label.length * CHAR_WIDTH) / 2 - 6}
            y={midY - 9}
            width={label.length * CHAR_WIDTH + 12}
            height={18}
            rx={9}
            fill="#F5F3FF"
          />
          <text
            x={midX}
            y={midY + 1}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#7C3AED"
            style={{ fontSize: '10px', fontFamily: 'var(--font-outfit, system-ui, sans-serif)', fontWeight: 500 }}
          >
            {label}
          </text>
        </g>
      )}
    </g>
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

  const { layoutNodes, svgWidth, svgHeight } = computeLayout(nodes, edges)
  const nodeById = new Map(layoutNodes.map(n => [n.id, n]))

  return (
    <div className={className}>
      <div className="overflow-x-auto">
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          xmlns="http://www.w3.org/2000/svg"
          className="block"
        >
          <SvgDefs />
          {/* Edges behind nodes */}
          {edges.map((e, i) => {
            const fromNode = nodeById.get(e.from)
            const toNode = nodeById.get(e.to)
            if (!fromNode || !toNode) return null
            return <EdgeSvg key={`e-${i}`} from={fromNode} to={toNode} label={e.label} />
          })}
          {/* Nodes on top */}
          {layoutNodes.map(n => {
            if (n.node.type === 'decision') return <DecisionNodeSvg key={n.id} n={n} />
            if (n.node.type === 'terminal') return <TerminalNodeSvg key={n.id} n={n} />
            return <ActionNodeSvg key={n.id} n={n} />
          })}
        </svg>
      </div>
    </div>
  )
}
