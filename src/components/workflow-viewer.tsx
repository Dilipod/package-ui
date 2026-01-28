'use client'

import { useState, lazy, Suspense, ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Button } from './button'
import { Badge } from './badge'
import { Textarea } from './textarea'
import { Alert } from './alert'
import { Select } from './select'
import {
  WebhooksLogo,
  Timer,
  GitBranch,
  Globe,
  Robot,
  Code,
  CheckCircle,
  Package,
  CloudArrowUp,
  CloudArrowDown,
  Copy,
  PencilSimple,
  Eye,
  TreeStructure,
  DownloadSimple,
  ArrowSquareOut,
  ClockCounterClockwise,
  ArrowsClockwise,
  ArrowsLeftRight,
  Plus,
  Minus,
  Pencil,
  X,
} from '@phosphor-icons/react'

// Lazy load the flow visualization to avoid SSR issues
const WorkflowFlow = lazy(() => import('./workflow-flow').then(m => ({ default: m.WorkflowFlow })))

// ============================================
// Types
// ============================================

export interface N8nWorkflow {
  name: string
  nodes: Array<{
    id: string
    name: string
    type: string
    parameters?: Record<string, unknown>
  }>
  connections: Record<string, unknown>
  settings?: Record<string, unknown>
  tags?: Array<{ name: string }>
}

/**
 * Sim Studio workflow state format
 * Uses blocks (object keyed by ID) and edges (array)
 */
export interface SimWorkflow {
  // Actual Sim Studio state format
  blocks?: Record<string, {
    id: string
    type: string
    name: string
    position?: { x: number; y: number }
    subBlocks?: Record<string, unknown>
    outputs?: Record<string, unknown>
    enabled?: boolean
  }>
  edges?: Array<{
    id?: string
    source?: string
    target?: string
    sourceHandle?: string
    targetHandle?: string
    // Legacy format support
    from?: string
    to?: string
  }>
  loops?: Record<string, unknown>
  parallels?: Record<string, unknown>
  variables?: Record<string, unknown>
  lastSaved?: number
  isDeployed?: boolean
  // Legacy format (for backwards compatibility)
  name?: string
  description?: string
  trigger?: {
    type: string
    config?: Record<string, unknown>
  }
  nodes?: Array<{
    id: string
    type: string
    config?: Record<string, unknown>
  }>
}

export type WorkflowTemplate = 'blank' | 'request_analyzer' | 'knowledge_builder' | 'execution_monitor' | 'usage_reporter' | 'custom'

export interface WorkflowViewerProps {
  /** The workflow definition to display */
  workflow: N8nWorkflow | SimWorkflow | null
  /** Which platform the workflow is for */
  platform: 'n8n' | 'sim'
  /** Card title */
  title?: string
  /** Webhook URL to display */
  webhookUrl?: string | null
  /** External workflow ID (e.g., n8n workflow ID) */
  workflowId?: string | null
  /** Internal workflow definition ID */
  workflowDefinitionId?: string | null
  /** Associated worker/agent ID */
  workerId?: string | null
  /** Associated worker/agent name */
  workerName?: string | null
  /** Internal worker type for templates */
  internalWorkerType?: string | null
  /** Last sync timestamp */
  lastSynced?: string | null
  /** Whether the workflow is active */
  isActive?: boolean
  /** Sync error message */
  syncError?: string | null
  /** Additional CSS class */
  className?: string
  /** Allow editing the workflow JSON */
  editable?: boolean
  /** Allow creating new workflows */
  allowCreate?: boolean
  /** Allow changing the platform */
  allowPlatformChange?: boolean
  /** Allow changing the active status */
  allowStatusChange?: boolean
  /** Callback when workflow is updated */
  onWorkflowUpdate?: (workflow: N8nWorkflow | SimWorkflow) => void
  /** Callback when workflow is created */
  onWorkflowCreated?: (workflowDefId: string) => void
  /** Callback when platform changes */
  onPlatformChange?: (platform: 'n8n' | 'sim') => void
  /** Callback when status changes */
  onStatusChange?: (isActive: boolean) => void
  /** Custom API handlers for save/sync operations */
  apiHandlers?: {
    /** Save workflow to database */
    saveWorkflow?: (workflowDefId: string, workflow: N8nWorkflow | SimWorkflow, platform: 'n8n' | 'sim') => Promise<{ success: boolean; error?: string }>
    /** Save settings (platform, status) */
    saveSettings?: (workflowDefId: string, settings: { platform?: 'n8n' | 'sim'; is_active?: boolean }) => Promise<{ success: boolean; error?: string }>
    /** Push workflow to n8n */
    pushToN8n?: (workerId: string) => Promise<{ success: boolean; error?: string }>
    /** Pull workflow from n8n */
    pullFromN8n?: (workflowDefId: string) => Promise<{ success: boolean; error?: string; descriptionSync?: { needsUpdate: boolean; reason?: string } }>
    /** Export workflow from Sim Studio (backup) */
    exportFromSim?: (workflowDefId: string) => Promise<{ success: boolean; error?: string; backup?: { id: string; version: number; exportedAt: string }; workflow?: { blocksCount: number; edgesCount: number } }>
    /** Get backup history for Sim workflow */
    getSimBackups?: (workflowDefId: string) => Promise<{ success: boolean; error?: string; backups?: Array<{ id: string; version: number; versionLabel?: string; workflowName: string; isDeployed: boolean; exportedAt: string }> }>
    /** Get a specific backup's full state */
    getBackupState?: (workflowDefId: string, backupId: string) => Promise<{ success: boolean; error?: string; backup?: { id: string; version: number; versionLabel?: string; workflowName: string; isDeployed: boolean; exportedAt: string; state: SimWorkflow | null } }>
    /** Push workflow to Sim Studio */
    pushToSim?: (workflowDefId: string) => Promise<{ success: boolean; error?: string; workflowId?: string }>
    /** Pull workflow from Sim Studio */
    pullFromSim?: (workflowDefId: string) => Promise<{ success: boolean; error?: string; descriptionSync?: { needsUpdate: boolean; reason?: string } }>
    /** Create new workflow */
    createWorkflow?: (data: { agent_id: string; name: string; platform: 'n8n' | 'sim'; n8n_workflow?: N8nWorkflow | null; sim_workflow?: SimWorkflow | null; is_active: boolean; is_global: boolean }) => Promise<{ success: boolean; error?: string; workflow?: { id: string } }>
    /** Load workflow template */
    loadTemplate?: (type: string, workerId: string) => Promise<{ success: boolean; error?: string; workflow?: N8nWorkflow | SimWorkflow }>
    /** Switch workflow platform (e.g., n8n to Sim) */
    switchPlatform?: (workflowDefId: string, targetPlatform: 'n8n' | 'sim') => Promise<{ success: boolean; error?: string; simWorkflowId?: string }>
  }
  /** Sim workflow ID (for Sim Studio integration) */
  simWorkflowId?: string | null
  /** Sim Studio base URL for external links */
  simStudioUrl?: string
  /** Custom loading component */
  loadingComponent?: ReactNode
  /** Format distance function for timestamps */
  formatDistance?: (date: Date, options?: { addSuffix?: boolean }) => string
}

// Blank workflow templates
const BLANK_N8N_WORKFLOW: N8nWorkflow = {
  name: 'New Workflow',
  nodes: [
    {
      id: 'webhook-trigger',
      name: 'Webhook',
      type: 'n8n-nodes-base.webhook',
      parameters: {
        httpMethod: 'POST',
        path: 'my-webhook',
      },
    },
  ],
  connections: {},
  settings: { executionOrder: 'v1' },
}

const BLANK_SIM_WORKFLOW: SimWorkflow = {
  name: 'New Workflow',
  description: 'A new Sim workflow',
  trigger: { type: 'webhook_input' },
  nodes: [
    { id: 'input', type: 'webhook_input' },
    { id: 'output', type: 'output' },
  ],
  edges: [{ from: 'input', to: 'output' }],
}

// ============================================
// Helper Functions
// ============================================

function getNodeIcon(type: string) {
  if (type.includes('webhook')) return <WebhooksLogo size={16} weight="fill" />
  if (type.includes('Trigger') || type.includes('schedule')) return <Timer size={16} weight="fill" />
  if (type.includes('if') || type.includes('switch')) return <GitBranch size={16} weight="fill" />
  if (type.includes('httpRequest')) return <Globe size={16} weight="fill" />
  if (type.includes('langchain') || type.includes('openai') || type.includes('anthropic')) return <Robot size={16} weight="fill" />
  if (type.includes('code')) return <Code size={16} weight="fill" />
  if (type.includes('respondToWebhook')) return <CheckCircle size={16} weight="fill" />
  if (type.includes('set')) return <Package size={16} weight="fill" />
  return <Package size={16} />
}

function getNodeTypeLabel(type: string): string {
  const typeMap: Record<string, string> = {
    'n8n-nodes-base.webhook': 'Webhook Trigger',
    'n8n-nodes-base.scheduleTrigger': 'Schedule Trigger',
    'n8n-nodes-base.if': 'Condition',
    'n8n-nodes-base.httpRequest': 'HTTP Request',
    'n8n-nodes-base.set': 'Set Data',
    'n8n-nodes-base.code': 'Code',
    'n8n-nodes-base.respondToWebhook': 'Webhook Response',
    '@n8n/n8n-nodes-langchain.agent': 'AI Agent',
    '@n8n/n8n-nodes-langchain.lmChatOpenAi': 'OpenAI Model',
    '@n8n/n8n-nodes-langchain.lmChatAnthropic': 'Anthropic Model',
  }
  return typeMap[type] || type.split('.').pop() || type
}

function getSimNodeTypeLabel(type: string): string {
  const typeMap: Record<string, string> = {
    'webhook_input': 'Webhook Input',
    'llm': 'AI/LLM',
    'code': 'Code',
    'http_request': 'HTTP Request',
    'condition': 'Condition',
    'output': 'Output',
  }
  return typeMap[type] || type
}

function defaultFormatDistance(date: Date, options?: { addSuffix?: boolean }): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)
  
  let result = ''
  if (diffMins < 1) result = 'less than a minute'
  else if (diffMins < 60) result = `${diffMins} minute${diffMins > 1 ? 's' : ''}`
  else if (diffHours < 24) result = `${diffHours} hour${diffHours > 1 ? 's' : ''}`
  else result = `${diffDays} day${diffDays > 1 ? 's' : ''}`
  
  return options?.addSuffix ? `${result} ago` : result
}

// ============================================
// Diff Utilities
// ============================================

interface DiffResult {
  blocksAdded: string[]
  blocksRemoved: string[]
  blocksModified: string[]
  edgesAdded: number
  edgesRemoved: number
  summary: string
}

function computeWorkflowDiff(stateA: SimWorkflow | null, stateB: SimWorkflow | null): DiffResult {
  if (!stateA || !stateB) {
    return {
      blocksAdded: [],
      blocksRemoved: [],
      blocksModified: [],
      edgesAdded: 0,
      edgesRemoved: 0,
      summary: 'Unable to compare - missing workflow data',
    }
  }

  const blocksA = stateA.blocks || {}
  const blocksB = stateB.blocks || {}
  const edgesA = stateA.edges || []
  const edgesB = stateB.edges || []

  const blockIdsA = new Set(Object.keys(blocksA))
  const blockIdsB = new Set(Object.keys(blocksB))

  const blocksAdded = [...blockIdsB].filter(id => !blockIdsA.has(id))
  const blocksRemoved = [...blockIdsA].filter(id => !blockIdsB.has(id))

  // Check for modified blocks (blocks that exist in both but have different content)
  const blocksModified: string[] = []
  for (const id of blockIdsA) {
    if (blockIdsB.has(id)) {
      const blockA = blocksA[id]
      const blockB = blocksB[id]
      // Deep compare by stringifying
      if (JSON.stringify(blockA) !== JSON.stringify(blockB)) {
        blocksModified.push(id)
      }
    }
  }

  // Compare edges by creating a signature for each
  const edgeSignature = (e: { source?: string; target?: string; from?: string; to?: string }) =>
    `${e.source || e.from}->${e.target || e.to}`
  const edgeSigsA = new Set(edgesA.map(edgeSignature))
  const edgeSigsB = new Set(edgesB.map(edgeSignature))

  const edgesAdded = [...edgeSigsB].filter(sig => !edgeSigsA.has(sig)).length
  const edgesRemoved = [...edgeSigsA].filter(sig => !edgeSigsB.has(sig)).length

  // Generate summary
  const changes: string[] = []
  if (blocksAdded.length > 0) changes.push(`+${blocksAdded.length} block${blocksAdded.length > 1 ? 's' : ''}`)
  if (blocksRemoved.length > 0) changes.push(`-${blocksRemoved.length} block${blocksRemoved.length > 1 ? 's' : ''}`)
  if (blocksModified.length > 0) changes.push(`~${blocksModified.length} modified`)
  if (edgesAdded > 0) changes.push(`+${edgesAdded} edge${edgesAdded > 1 ? 's' : ''}`)
  if (edgesRemoved > 0) changes.push(`-${edgesRemoved} edge${edgesRemoved > 1 ? 's' : ''}`)

  return {
    blocksAdded,
    blocksRemoved,
    blocksModified,
    edgesAdded,
    edgesRemoved,
    summary: changes.length > 0 ? changes.join(', ') : 'No changes detected',
  }
}

// ============================================
// N8n Workflow Summary Component
// ============================================

function N8nWorkflowSummary({ workflow, showFlow = false }: { workflow: N8nWorkflow; showFlow?: boolean }) {
  const nodes = workflow.nodes || []
  
  const triggerNode = nodes.find(n => 
    n.type.includes('webhook') || n.type.includes('Trigger')
  )
  
  const aiNodes = nodes.filter(n => 
    n.type.includes('langchain') || n.type.includes('openai') || n.type.includes('anthropic')
  )
  
  const httpNodes = nodes.filter(n => 
    n.type === 'n8n-nodes-base.httpRequest'
  )
  
  const conditionNodes = nodes.filter(n => 
    n.type === 'n8n-nodes-base.if'
  )

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-muted/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            {triggerNode && getNodeIcon(triggerNode.type)}
            <span className="text-xs font-medium">Trigger</span>
          </div>
          <p className="text-sm font-semibold truncate">
            {triggerNode ? getNodeTypeLabel(triggerNode.type) : 'None'}
          </p>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <TreeStructure size={16} />
            <span className="text-xs font-medium">Steps</span>
          </div>
          <p className="text-sm font-semibold">{nodes.length} nodes</p>
        </div>
        
        {aiNodes.length > 0 && (
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-purple-600 mb-1">
              <Robot size={16} weight="fill" />
              <span className="text-xs font-medium">AI</span>
            </div>
            <p className="text-sm font-semibold text-purple-700">
              {aiNodes.length} {aiNodes.length === 1 ? 'node' : 'nodes'}
            </p>
          </div>
        )}
        
        {httpNodes.length > 0 && (
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <Globe size={16} weight="fill" />
              <span className="text-xs font-medium">APIs</span>
            </div>
            <p className="text-sm font-semibold text-blue-700">
              {httpNodes.length} {httpNodes.length === 1 ? 'request' : 'requests'}
            </p>
          </div>
        )}
        
        {conditionNodes.length > 0 && (
          <div className="bg-yellow-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-yellow-600 mb-1">
              <GitBranch size={16} weight="fill" />
              <span className="text-xs font-medium">Logic</span>
            </div>
            <p className="text-sm font-semibold text-yellow-700">
              {conditionNodes.length} {conditionNodes.length === 1 ? 'condition' : 'conditions'}
            </p>
          </div>
        )}
      </div>

      {showFlow && (
        <Suspense fallback={
          <div className="h-[320px] bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center">
            <div className="text-slate-400 text-sm">Loading...</div>
          </div>
        }>
          <WorkflowFlow workflow={workflow as any} height={320} />
        </Suspense>
      )}
      
      {!showFlow && (
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Workflow Nodes</h4>
          <div className="flex flex-wrap gap-1.5">
            {nodes.map((node) => (
              <span 
                key={node.id} 
                className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs"
              >
                {node.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// Sim Workflow Summary Component
// ============================================

function SimWorkflowSummary({ workflow }: { workflow: SimWorkflow }) {
  // Handle actual Sim Studio format (blocks object) or legacy format (nodes array)
  const blocks = workflow.blocks || {}
  const blockList = Object.values(blocks)
  const edges = workflow.edges || []

  // Fall back to legacy nodes array if no blocks
  const legacyNodes = workflow.nodes || []
  const hasBlocks = blockList.length > 0
  const displayNodes = hasBlocks ? blockList : legacyNodes

  // Find trigger block (usually 'starter' type)
  const triggerBlock = blockList.find(b => b.type === 'starter' || b.type === 'webhook' || b.type === 'api')
  const triggerType = triggerBlock?.type || workflow.trigger?.type

  // Count AI and HTTP blocks
  const aiBlocks = blockList.filter(b => b.type === 'agent' || b.type === 'llm' || b.type === 'openai' || b.type === 'anthropic')
  const httpBlocks = blockList.filter(b => b.type === 'api' || b.type === 'http_request')

  // Check if workflow is empty
  const isEmpty = displayNodes.length === 0

  if (isEmpty) {
    return (
      <div className="py-8 text-center">
        <TreeStructure size={32} className="mx-auto mb-3 text-muted-foreground/50" />
        <p className="text-sm text-muted-foreground mb-1">No workflow blocks yet</p>
        <p className="text-xs text-muted-foreground">
          Open the workflow in Sim Studio to build it, then click &quot;Pull from Sim&quot; to sync changes.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-muted/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <WebhooksLogo size={16} weight="fill" />
            <span className="text-xs font-medium">Trigger</span>
          </div>
          <p className="text-sm font-semibold">
            {triggerType ? getSimNodeTypeLabel(triggerType) : 'Manual'}
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <TreeStructure size={16} />
            <span className="text-xs font-medium">Blocks</span>
          </div>
          <p className="text-sm font-semibold">{displayNodes.length} blocks</p>
        </div>

        {edges.length > 0 && (
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <GitBranch size={16} />
              <span className="text-xs font-medium">Edges</span>
            </div>
            <p className="text-sm font-semibold">{edges.length} connections</p>
          </div>
        )}

        {aiBlocks.length > 0 && (
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-purple-600 mb-1">
              <Robot size={16} weight="fill" />
              <span className="text-xs font-medium">AI</span>
            </div>
            <p className="text-sm font-semibold text-purple-700">
              {aiBlocks.length} {aiBlocks.length === 1 ? 'block' : 'blocks'}
            </p>
          </div>
        )}

        {httpBlocks.length > 0 && (
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <Globe size={16} weight="fill" />
              <span className="text-xs font-medium">APIs</span>
            </div>
            <p className="text-sm font-semibold text-blue-700">
              {httpBlocks.length} {httpBlocks.length === 1 ? 'request' : 'requests'}
            </p>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Workflow Blocks</h4>
        <div className="flex flex-wrap gap-2">
          {hasBlocks ? (
            blockList.map((block) => (
              <div
                key={block.id}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs bg-gray-100 text-gray-700 border-gray-300"
              >
                <Package size={14} />
                <span className="font-medium">{block.name || getSimNodeTypeLabel(block.type)}</span>
              </div>
            ))
          ) : (
            legacyNodes.map((node) => (
              <div
                key={node.id}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs bg-gray-100 text-gray-700 border-gray-300"
              >
                <Package size={14} />
                <span className="font-medium">{getSimNodeTypeLabel(node.type)}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================
// Main WorkflowViewer Component
// ============================================

export function WorkflowViewer({
  workflow,
  platform,
  title = 'Workflow',
  webhookUrl,
  workflowId,
  workflowDefinitionId,
  workerId,
  workerName,
  internalWorkerType,
  lastSynced,
  isActive,
  syncError,
  className = '',
  editable = false,
  allowCreate = false,
  allowPlatformChange = false,
  allowStatusChange = false,
  onWorkflowUpdate,
  onWorkflowCreated,
  onPlatformChange,
  onStatusChange,
  apiHandlers,
  loadingComponent,
  formatDistance = defaultFormatDistance,
  simWorkflowId,
  simStudioUrl,
}: WorkflowViewerProps) {
  const [viewMode, setViewMode] = useState<'summary' | 'flow' | 'json' | 'edit' | 'create' | 'backups'>('summary')
  const [editedJson, setEditedJson] = useState('')
  const [jsonError, setJsonError] = useState<string | null>(null)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [saving, setSaving] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const [pulling, setPulling] = useState(false)
  const [creating, setCreating] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<WorkflowTemplate>('blank')
  const [exporting, setExporting] = useState(false)
  const [backups, setBackups] = useState<Array<{ id: string; version: number; versionLabel?: string; workflowName: string; isDeployed: boolean; exportedAt: string }>>([])
  const [loadingBackups, setLoadingBackups] = useState(false)
  const [pushingToSim, setPushingToSim] = useState(false)
  const [pullingFromSim, setPullingFromSim] = useState(false)
  const [switchingPlatform, setSwitchingPlatform] = useState(false)
  // Diff comparison state
  const [diffMode, setDiffMode] = useState(false)
  const [selectedBackupA, setSelectedBackupA] = useState<string | null>(null)
  const [selectedBackupB, setSelectedBackupB] = useState<string | null>(null)
  const [backupStateA, setBackupStateA] = useState<SimWorkflow | null>(null)
  const [backupStateB, setBackupStateB] = useState<SimWorkflow | null>(null)
  const [loadingDiff, setLoadingDiff] = useState(false)

  const [localPlatform, setLocalPlatform] = useState<'n8n' | 'sim'>(platform)
  const [localIsActive, setLocalIsActive] = useState(isActive ?? true)
  
  const hasUnsavedChanges = localPlatform !== platform || localIsActive !== (isActive ?? true)

  function copyToClipboard(text: string, label: string = 'Copied') {
    navigator.clipboard.writeText(text)
    setMessage({ type: 'success', text: label })
    setTimeout(() => setMessage(null), 2000)
  }

  function handleLocalPlatformChange(newPlatform: 'n8n' | 'sim') {
    setLocalPlatform(newPlatform)
  }

  function handleLocalStatusChange(newStatus: boolean) {
    setLocalIsActive(newStatus)
  }

  function cancelChanges() {
    setLocalPlatform(platform)
    setLocalIsActive(isActive ?? true)
    setMessage(null)
  }

  async function saveSettings() {
    if (!workflowDefinitionId || !apiHandlers?.saveSettings) {
      setMessage({ type: 'error', text: 'Cannot save - no workflow definition or API handler.' })
      return
    }

    setSaving(true)
    setMessage(null)

    try {
      const updateData: { platform?: 'n8n' | 'sim'; is_active?: boolean } = {}
      
      if (localPlatform !== platform) {
        updateData.platform = localPlatform
      }
      if (localIsActive !== (isActive ?? true)) {
        updateData.is_active = localIsActive
      }

      if (Object.keys(updateData).length === 0) {
        setMessage({ type: 'success', text: 'No changes to save' })
        setSaving(false)
        return
      }

      const result = await apiHandlers.saveSettings(workflowDefinitionId, updateData)

      if (result.success) {
        setMessage({ type: 'success', text: 'Settings saved successfully' })
        onPlatformChange?.(localPlatform)
        onStatusChange?.(localIsActive)
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to save settings' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to save settings' })
    } finally {
      setSaving(false)
    }
  }

  function startEditing() {
    setEditedJson(JSON.stringify(workflow, null, 2))
    setJsonError(null)
    setViewMode('edit')
  }

  function cancelEditing() {
    setEditedJson('')
    setJsonError(null)
    setViewMode('summary')
  }

  function validateJson(json: string): N8nWorkflow | SimWorkflow | null {
    try {
      const parsed = JSON.parse(json)
      if (platform === 'n8n') {
        if (!parsed.nodes || !Array.isArray(parsed.nodes)) {
          throw new Error('n8n workflow must have a nodes array')
        }
      } else {
        // Sim Studio uses blocks object (not nodes array)
        if (!parsed.blocks || typeof parsed.blocks !== 'object') {
          throw new Error('Sim workflow must have a blocks object')
        }
      }
      return parsed
    } catch {
      return null
    }
  }

  async function saveWorkflow() {
    const parsed = validateJson(editedJson)
    if (!parsed) {
      setJsonError('Invalid JSON. Please check the syntax.')
      return
    }

    if (!workflowDefinitionId || !apiHandlers?.saveWorkflow) {
      setJsonError('Cannot save - no workflow definition or API handler.')
      return
    }

    setSaving(true)
    setJsonError(null)

    try {
      const result = await apiHandlers.saveWorkflow(workflowDefinitionId, parsed, platform)

      if (result.success) {
        setMessage({ type: 'success', text: 'Workflow saved to database' })
        setViewMode('summary')
        onWorkflowUpdate?.(parsed)
      } else {
        setJsonError(result.error || 'Failed to save workflow')
      }
    } catch {
      setJsonError('Failed to save workflow')
    } finally {
      setSaving(false)
    }
  }

  async function pushToN8n() {
    if (!workerId || !apiHandlers?.pushToN8n) {
      setMessage({ type: 'error', text: 'Cannot sync - no worker ID or API handler' })
      return
    }

    setSyncing(true)
    setMessage(null)

    try {
      const result = await apiHandlers.pushToN8n(workerId)

      if (result.success) {
        setMessage({ type: 'success', text: 'Pushed to n8n successfully' })
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to push to n8n' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to push to n8n' })
    } finally {
      setSyncing(false)
    }
  }

  async function pullFromN8n() {
    if (!workflowId || !workflowDefinitionId || !apiHandlers?.pullFromN8n) {
      setMessage({ type: 'error', text: 'Cannot pull - no n8n workflow ID or API handler' })
      return
    }

    setPulling(true)
    setMessage(null)

    try {
      const result = await apiHandlers.pullFromN8n(workflowDefinitionId)

      if (result.success) {
        if (result.descriptionSync?.needsUpdate) {
          setMessage({ 
            type: 'success', 
            text: `Pulled from n8n. Note: ${result.descriptionSync.reason || 'Worker description may need updating.'}` 
          })
        } else {
          setMessage({ type: 'success', text: 'Pulled from n8n successfully' })
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to pull from n8n' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to pull from n8n' })
    } finally {
      setPulling(false)
    }
  }

  async function exportFromSim() {
    if (!workflowDefinitionId || !simWorkflowId || !apiHandlers?.exportFromSim) {
      setMessage({ type: 'error', text: 'Cannot export - no Sim workflow ID or API handler' })
      return
    }

    setExporting(true)
    setMessage(null)

    try {
      const result = await apiHandlers.exportFromSim(workflowDefinitionId)

      if (result.success) {
        const blocksCount = result.workflow?.blocksCount || 0
        const edgesCount = result.workflow?.edgesCount || 0
        setMessage({ 
          type: 'success', 
          text: `Exported from Sim Studio (v${result.backup?.version || 1}, ${blocksCount} blocks, ${edgesCount} edges)`
        })
        // Refresh backups list if viewing
        if (viewMode === 'backups') {
          loadBackups()
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to export from Sim Studio' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to export from Sim Studio' })
    } finally {
      setExporting(false)
    }
  }

  async function loadBackups() {
    if (!workflowDefinitionId || !apiHandlers?.getSimBackups) {
      return
    }

    setLoadingBackups(true)

    try {
      const result = await apiHandlers.getSimBackups(workflowDefinitionId)
      if (result.success && result.backups) {
        setBackups(result.backups)
      }
    } catch {
      console.error('Failed to load backups')
    } finally {
      setLoadingBackups(false)
    }
  }

  function showBackups() {
    setViewMode('backups')
    loadBackups()
  }

  async function loadBackupForDiff(backupId: string, slot: 'A' | 'B') {
    if (!workflowDefinitionId || !apiHandlers?.getBackupState) {
      return
    }

    setLoadingDiff(true)
    try {
      const result = await apiHandlers.getBackupState(workflowDefinitionId, backupId)
      if (result.success && result.backup) {
        if (slot === 'A') {
          setBackupStateA(result.backup.state)
          setSelectedBackupA(backupId)
        } else {
          setBackupStateB(result.backup.state)
          setSelectedBackupB(backupId)
        }
      }
    } catch {
      console.error('Failed to load backup for diff')
    } finally {
      setLoadingDiff(false)
    }
  }

  function startDiffMode() {
    setDiffMode(true)
    setSelectedBackupA(null)
    setSelectedBackupB(null)
    setBackupStateA(null)
    setBackupStateB(null)
  }

  function exitDiffMode() {
    setDiffMode(false)
    setSelectedBackupA(null)
    setSelectedBackupB(null)
    setBackupStateA(null)
    setBackupStateB(null)
  }

  function openInSimStudio() {
    if (simStudioUrl && simWorkflowId) {
      window.open(`${simStudioUrl}/w/${simWorkflowId}`, '_blank')
    }
  }

  async function pushToSim() {
    if (!workflowDefinitionId || !apiHandlers?.pushToSim) {
      setMessage({ type: 'error', text: 'Cannot push - no workflow definition ID or API handler' })
      return
    }

    setPushingToSim(true)
    setMessage(null)

    try {
      const result = await apiHandlers.pushToSim(workflowDefinitionId)

      if (result.success) {
        setMessage({ 
          type: 'success', 
          text: result.workflowId 
            ? `Pushed to Sim Studio (workflow: ${result.workflowId})`
            : 'Pushed to Sim Studio successfully'
        })
        // Reload to show updated state
        setTimeout(() => window.location.reload(), 1500)
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to push to Sim Studio' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to push to Sim Studio' })
    } finally {
      setPushingToSim(false)
    }
  }

  async function pullFromSim() {
    if (!workflowDefinitionId || !simWorkflowId || !apiHandlers?.pullFromSim) {
      setMessage({ type: 'error', text: 'Cannot pull - no Sim workflow ID or API handler' })
      return
    }

    setPullingFromSim(true)
    setMessage(null)

    try {
      const result = await apiHandlers.pullFromSim(workflowDefinitionId)

      if (result.success) {
        if (result.descriptionSync?.needsUpdate) {
          setMessage({ 
            type: 'success', 
            text: `Pulled from Sim Studio. Note: ${result.descriptionSync.reason || 'Worker description may need updating.'}` 
          })
        } else {
          setMessage({ type: 'success', text: 'Pulled from Sim Studio successfully' })
        }
        // Reload to show updated state
        setTimeout(() => window.location.reload(), 1500)
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to pull from Sim Studio' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to pull from Sim Studio' })
    } finally {
      setPullingFromSim(false)
    }
  }

  function startCreating() {
    if (internalWorkerType) {
      setSelectedTemplate(internalWorkerType as WorkflowTemplate)
    } else {
      setSelectedTemplate('blank')
    }
    const blank = platform === 'n8n' ? BLANK_N8N_WORKFLOW : BLANK_SIM_WORKFLOW
    setEditedJson(JSON.stringify(blank, null, 2))
    setViewMode('create')
  }

  async function createWorkflow() {
    const parsed = validateJson(editedJson)
    if (!parsed) {
      setJsonError('Invalid JSON. Please check the syntax.')
      return
    }

    if (!workerId || !apiHandlers?.createWorkflow) {
      setJsonError('Cannot create - no worker ID or API handler.')
      return
    }

    setCreating(true)
    setJsonError(null)

    try {
      const workflowName = (parsed as N8nWorkflow).name || 
        `${workerName || 'Worker'} Workflow`

      const result = await apiHandlers.createWorkflow({
        agent_id: workerId,
        name: workflowName,
        platform,
        n8n_workflow: platform === 'n8n' ? parsed as N8nWorkflow : null,
        sim_workflow: platform === 'sim' ? parsed as SimWorkflow : null,
        is_active: true,
        is_global: false,
      })

      if (result.success && result.workflow) {
        setMessage({ type: 'success', text: 'Workflow created successfully' })
        onWorkflowCreated?.(result.workflow.id)
      } else {
        setJsonError(result.error || 'Failed to create workflow')
      }
    } catch {
      setJsonError('Failed to create workflow')
    } finally {
      setCreating(false)
    }
  }

  async function switchPlatform(targetPlatform: 'n8n' | 'sim') {
    if (!workflowDefinitionId || !apiHandlers?.switchPlatform) {
      setMessage({ type: 'error', text: 'Cannot switch platform - no workflow definition ID or API handler' })
      return
    }

    setSwitchingPlatform(true)
    setMessage(null)

    try {
      const result = await apiHandlers.switchPlatform(workflowDefinitionId, targetPlatform)

      if (result.success) {
        setMessage({ 
          type: 'success', 
          text: targetPlatform === 'sim' 
            ? `Switched to Sim Studio${result.simWorkflowId ? ` (workflow: ${result.simWorkflowId})` : ''}`
            : 'Switched to n8n'
        })
        // Reload to show updated state
        setTimeout(() => window.location.reload(), 1500)
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to switch platform' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to switch platform' })
    } finally {
      setSwitchingPlatform(false)
    }
  }

  async function loadTemplate() {
    if (!workerId || !workerName || !apiHandlers?.loadTemplate) {
      setJsonError('Worker information or API handler required to generate template.')
      return
    }

    if (selectedTemplate === 'blank' || selectedTemplate === 'custom') {
      return
    }

    setCreating(true)
    setJsonError(null)

    try {
      const result = await apiHandlers.loadTemplate(selectedTemplate, workerId)
      
      if (result.success && result.workflow) {
        setEditedJson(JSON.stringify(result.workflow, null, 2))
        setMessage({ type: 'success', text: 'Template loaded' })
      } else {
        setJsonError(result.error || 'Failed to load template')
      }
    } catch {
      setJsonError('Failed to load template')
    } finally {
      setCreating(false)
    }
  }

  const DefaultLoading = (
    <div className="h-[320px] bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center">
      <div className="text-slate-400 text-sm">Loading...</div>
    </div>
  )

  // Show create workflow UI when no workflow exists
  if (!workflow) {
    return (
      <Card className={className}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">{title}</CardTitle>
            {allowCreate && viewMode !== 'create' && (
              <Button onClick={startCreating} variant="primary" size="sm">
                Create Workflow
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === 'create' ? (
            <div className="space-y-4">
              {message && (
                <Alert variant={message.type === 'success' ? 'success' : 'error'}>
                  {message.text}
                </Alert>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium">Start from template:</label>
                <div className="flex flex-wrap gap-2">
                  <Button
                    onClick={() => {
                      setSelectedTemplate('blank')
                      const blank = platform === 'n8n' ? BLANK_N8N_WORKFLOW : BLANK_SIM_WORKFLOW
                      setEditedJson(JSON.stringify(blank, null, 2))
                    }}
                    variant={selectedTemplate === 'blank' ? 'primary' : 'outline'}
                    size="sm"
                  >
                    Blank
                  </Button>
                  {internalWorkerType && apiHandlers?.loadTemplate && (
                    <Button
                      onClick={() => {
                        setSelectedTemplate(internalWorkerType as WorkflowTemplate)
                        loadTemplate()
                      }}
                      variant={selectedTemplate === internalWorkerType ? 'primary' : 'outline'}
                      size="sm"
                    >
                      {internalWorkerType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Template
                    </Button>
                  )}
                </div>
              </div>

              {jsonError && (
                <Alert variant="error">{jsonError}</Alert>
              )}
              <Textarea
                value={editedJson}
                onChange={(e) => {
                  setEditedJson(e.target.value)
                  setJsonError(null)
                }}
                className="h-72 font-mono text-xs"
                placeholder="Paste or edit workflow JSON here..."
              />

              <div className="flex gap-2">
                <Button onClick={() => setViewMode('summary')} variant="outline" size="sm">
                  Cancel
                </Button>
                <Button
                  onClick={createWorkflow}
                  disabled={creating || !editedJson.trim()}
                  variant="primary"
                  size="sm"
                >
                  {creating ? 'Creating...' : 'Create Workflow'}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Create a workflow definition. After creating, use &quot;Push to n8n&quot; to deploy it.
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No workflow defined yet.
              {allowCreate && ' Click "Create Workflow" to add one.'}
            </p>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-base">{title}</CardTitle>
            {allowStatusChange && workflowDefinitionId ? (
              <Badge 
                variant={localIsActive ? 'success' : 'default'} 
                size="sm"
              >
                {localIsActive ? 'Active' : 'Inactive'}
              </Badge>
            ) : isActive !== undefined && (
              <Badge variant={isActive ? 'success' : 'default'} size="sm">
                {isActive ? 'Active' : 'Inactive'}
              </Badge>
            )}
            {hasUnsavedChanges && (
              <Badge variant="warning" size="sm">Unsaved</Badge>
            )}
            {syncError && (
              <Badge variant="error" size="sm">Sync Error</Badge>
            )}
          </div>
          <div className="flex gap-1">
            {viewMode === 'edit' ? (
              <>
                <Button onClick={cancelEditing} variant="outline" size="sm">
                  Cancel
                </Button>
                <Button onClick={saveWorkflow} disabled={saving} variant="primary" size="sm">
                  {saving ? 'Saving...' : 'Save JSON'}
                </Button>
              </>
            ) : (
              <>
                <div className="flex border border-border rounded-md overflow-hidden mr-2">
                  <button
                    onClick={() => setViewMode('summary')}
                    className={`px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      viewMode === 'summary' 
                        ? 'bg-primary text-white' 
                        : 'bg-background hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    <Eye size={14} />
                    Summary
                  </button>
                  <button
                    onClick={() => setViewMode('flow')}
                    className={`px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-colors border-l border-border ${
                      viewMode === 'flow'
                        ? 'bg-primary text-white'
                        : 'bg-background hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    <TreeStructure size={14} />
                    Diagram
                  </button>
                  <button
                    onClick={() => setViewMode('json')}
                    className={`px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-colors border-l border-border ${
                      viewMode === 'json' 
                        ? 'bg-primary text-white' 
                        : 'bg-background hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    <Code size={14} />
                    JSON
                  </button>
                </div>
                {editable && apiHandlers?.saveWorkflow && (
                  <Button onClick={startEditing} variant="outline" size="sm" icon={<PencilSimple size={14} />}>
                    Edit
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {message && (
          <Alert variant={message.type === 'success' ? 'success' : 'error'}>
            {message.text}
          </Alert>
        )}

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          {workflowId && (
            <span className="font-mono bg-muted px-2 py-1 rounded">{workflowId}</span>
          )}
          {lastSynced && (
            <span>Synced {formatDistance(new Date(lastSynced), { addSuffix: true })}</span>
          )}
        </div>

        {/* Webhook URL display */}
        {webhookUrl && (
          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded border border-border">
            <WebhooksLogo size={14} className="text-muted-foreground flex-shrink-0" />
            <code className="text-xs font-mono text-foreground truncate flex-1">{webhookUrl}</code>
            <button
              onClick={() => copyToClipboard(webhookUrl, 'Webhook URL copied')}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground flex-shrink-0"
            >
              <Copy size={12} />
              Copy
            </button>
          </div>
        )}

        {(allowPlatformChange || allowStatusChange) && workflowDefinitionId && hasUnsavedChanges && apiHandlers?.saveSettings && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-amber-800">Unsaved changes</span>
              <div className="flex gap-2">
                <Button onClick={cancelChanges} variant="outline" size="sm">
                  Cancel
                </Button>
                <Button onClick={saveSettings} disabled={saving} variant="primary" size="sm">
                  {saving ? 'Saving...' : 'Save'}
                </Button>
              </div>
            </div>
            
            <div className="flex gap-4 text-sm">
              {allowPlatformChange && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Platform:</span>
                  <Select
                    value={localPlatform}
                    onChange={(e) => handleLocalPlatformChange(e.target.value as 'n8n' | 'sim')}
                    className="h-8 text-sm w-28"
                  >
                    <option value="n8n">n8n</option>
                    <option value="sim">Sim Studio</option>
                  </Select>
                </div>
              )}
              {allowStatusChange && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Status:</span>
                  <Select
                    value={localIsActive ? 'active' : 'inactive'}
                    onChange={(e) => handleLocalStatusChange(e.target.value === 'active')}
                    className="h-8 text-sm w-28"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </Select>
                </div>
              )}
            </div>
          </div>
        )}

        {syncError && (
          <Alert variant="error">
            <strong>Sync Error:</strong> {syncError}
          </Alert>
        )}

        {/* n8n sync buttons */}
        {editable && workerId && platform === 'n8n' && viewMode !== 'edit' && apiHandlers?.pushToN8n && (
          <div className="flex flex-wrap gap-2">
            <Button onClick={pushToN8n} disabled={syncing} variant="primary" size="sm" icon={<CloudArrowUp size={16} />}>
              {syncing ? 'Pushing...' : 'Push to n8n'}
            </Button>
            {workflowId && apiHandlers?.pullFromN8n && (
              <Button onClick={pullFromN8n} disabled={pulling} variant="outline" size="sm" icon={<CloudArrowDown size={16} />}>
                {pulling ? 'Pulling...' : 'Pull from n8n'}
              </Button>
            )}
            {/* Switch to Sim Studio button */}
            {workflowDefinitionId && apiHandlers?.switchPlatform && (
              <Button 
                onClick={() => switchPlatform('sim')} 
                disabled={switchingPlatform} 
                variant="outline" 
                size="sm" 
                icon={<ArrowsClockwise size={16} />}
                className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400"
              >
                {switchingPlatform ? 'Switching...' : 'Switch to Sim Studio'}
              </Button>
            )}
          </div>
        )}

        {/* Sim Studio sync buttons */}
        {platform === 'sim' && viewMode !== 'edit' && (
          <div className="flex flex-wrap gap-2">
            {/* Push/Pull buttons (require workflow definition) */}
            {editable && workflowDefinitionId && apiHandlers?.pushToSim && (
              <Button 
                onClick={pushToSim} 
                disabled={pushingToSim} 
                variant="primary" 
                size="sm" 
                icon={<CloudArrowUp size={16} />}
              >
                {pushingToSim ? 'Pushing...' : 'Push to Sim'}
              </Button>
            )}
            {apiHandlers?.pullFromSim && (
              <Button
                onClick={pullFromSim}
                disabled={pullingFromSim || !simWorkflowId}
                variant="outline"
                size="sm"
                icon={<CloudArrowDown size={16} />}
                title={!simWorkflowId ? 'No Sim workflow linked yet. Push to Sim first.' : undefined}
              >
                {pullingFromSim ? 'Pulling...' : 'Pull from Sim'}
              </Button>
            )}
            {/* Export/Backup buttons (require sim workflow id) */}
            {simWorkflowId && apiHandlers?.exportFromSim && (
              <Button 
                onClick={exportFromSim} 
                disabled={exporting} 
                variant="outline" 
                size="sm" 
                icon={<DownloadSimple size={16} />}
              >
                {exporting ? 'Exporting...' : 'Export Backup'}
              </Button>
            )}
            {simWorkflowId && apiHandlers?.getSimBackups && (
              <Button 
                onClick={showBackups} 
                variant="outline" 
                size="sm" 
                icon={<ClockCounterClockwise size={16} />}
              >
                History
              </Button>
            )}
            {simStudioUrl && simWorkflowId && (
              <Button 
                onClick={openInSimStudio} 
                variant="outline" 
                size="sm" 
                icon={<ArrowSquareOut size={16} />}
              >
                Open in Sim
              </Button>
            )}
          </div>
        )}

        <div className="pt-2">
          {viewMode === 'edit' ? (
            <div className="space-y-3">
              {jsonError && (
                <Alert variant="error">{jsonError}</Alert>
              )}
              <Textarea
                value={editedJson}
                onChange={(e) => {
                  setEditedJson(e.target.value)
                  setJsonError(null)
                }}
                className="h-[400px] font-mono text-xs"
              />
              <p className="text-xs text-muted-foreground">
                Edit the workflow JSON above. Changes will be saved to the database. Use &quot;Push to n8n&quot; to sync.
              </p>
            </div>
          ) : viewMode === 'json' ? (
            <div className="relative rounded-sm overflow-hidden border border-border">
              <div className="flex items-center justify-between px-4 py-2 bg-[var(--black)] border-b border-gray-800">
                <span className="text-xs font-medium text-gray-400">JSON</span>
                <Button
                  onClick={() => copyToClipboard(JSON.stringify(workflow, null, 2), 'JSON copied')}
                  variant="outline"
                  size="sm"
                  className="h-7 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500"
                  icon={<Copy size={12} />}
                >
                  Copy
                </Button>
              </div>
              <pre className="p-4 bg-[var(--black)] text-gray-100 text-xs overflow-auto max-h-[500px] font-mono">
                {JSON.stringify(workflow, null, 2)}
              </pre>
            </div>
          ) : viewMode === 'flow' ? (
            <Suspense fallback={loadingComponent || DefaultLoading}>
              <WorkflowFlow workflow={workflow as any} height={380} platform={platform} />
            </Suspense>
          ) : viewMode === 'backups' ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">
                  {diffMode ? 'Compare Versions' : 'Backup History'}
                </h4>
                <div className="flex items-center gap-2">
                  {!diffMode && backups.length >= 2 && apiHandlers?.getBackupState && (
                    <Button
                      onClick={startDiffMode}
                      variant="outline"
                      size="sm"
                      icon={<ArrowsLeftRight size={14} />}
                    >
                      Compare
                    </Button>
                  )}
                  {diffMode && (
                    <Button
                      onClick={exitDiffMode}
                      variant="outline"
                      size="sm"
                      icon={<X size={14} />}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button
                    onClick={() => { exitDiffMode(); setViewMode('summary'); }}
                    variant="outline"
                    size="sm"
                  >
                    Back to Summary
                  </Button>
                </div>
              </div>

              {/* Diff mode: version selection and results */}
              {diffMode && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-muted/50 rounded border border-border">
                      <p className="text-xs font-medium text-muted-foreground mb-2">From (older)</p>
                      <Select
                        value={selectedBackupA || ''}
                        onChange={(e) => loadBackupForDiff(e.target.value, 'A')}
                        disabled={loadingDiff}
                        className="w-full"
                      >
                        <option value="">Select version...</option>
                        {backups.map((b) => (
                          <option key={b.id} value={b.id} disabled={b.id === selectedBackupB}>
                            v{b.version} - {b.versionLabel || b.workflowName}
                          </option>
                        ))}
                      </Select>
                    </div>
                    <div className="p-3 bg-muted/50 rounded border border-border">
                      <p className="text-xs font-medium text-muted-foreground mb-2">To (newer)</p>
                      <Select
                        value={selectedBackupB || ''}
                        onChange={(e) => loadBackupForDiff(e.target.value, 'B')}
                        disabled={loadingDiff}
                        className="w-full"
                      >
                        <option value="">Select version...</option>
                        {backups.map((b) => (
                          <option key={b.id} value={b.id} disabled={b.id === selectedBackupA}>
                            v{b.version} - {b.versionLabel || b.workflowName}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>

                  {/* Diff results */}
                  {loadingDiff ? (
                    <div className="py-4 text-center text-muted-foreground">Loading versions...</div>
                  ) : backupStateA && backupStateB ? (
                    (() => {
                      const diff = computeWorkflowDiff(backupStateA, backupStateB)
                      return (
                        <div className="space-y-3">
                          <div className="p-3 bg-muted/30 rounded border border-border">
                            <p className="text-sm font-medium mb-2">Changes Summary</p>
                            <p className="text-sm text-muted-foreground">{diff.summary}</p>
                          </div>

                          {diff.blocksAdded.length > 0 && (
                            <div className="p-3 bg-green-500/10 rounded border border-green-500/30">
                              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-2">
                                <Plus size={14} />
                                <span className="text-xs font-medium">Blocks Added ({diff.blocksAdded.length})</span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {diff.blocksAdded.map((id) => {
                                  const block = backupStateB?.blocks?.[id]
                                  return (
                                    <Badge key={id} variant="success" size="sm">
                                      {block?.name || id}
                                    </Badge>
                                  )
                                })}
                              </div>
                            </div>
                          )}

                          {diff.blocksRemoved.length > 0 && (
                            <div className="p-3 bg-red-500/10 rounded border border-red-500/30">
                              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-2">
                                <Minus size={14} />
                                <span className="text-xs font-medium">Blocks Removed ({diff.blocksRemoved.length})</span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {diff.blocksRemoved.map((id) => {
                                  const block = backupStateA?.blocks?.[id]
                                  return (
                                    <Badge key={id} variant="error" size="sm">
                                      {block?.name || id}
                                    </Badge>
                                  )
                                })}
                              </div>
                            </div>
                          )}

                          {diff.blocksModified.length > 0 && (
                            <div className="p-3 bg-amber-500/10 rounded border border-amber-500/30">
                              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-2">
                                <Pencil size={14} />
                                <span className="text-xs font-medium">Blocks Modified ({diff.blocksModified.length})</span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {diff.blocksModified.map((id) => {
                                  const block = backupStateB?.blocks?.[id]
                                  return (
                                    <Badge key={id} variant="warning" size="sm">
                                      {block?.name || id}
                                    </Badge>
                                  )
                                })}
                              </div>
                            </div>
                          )}

                          {(diff.edgesAdded > 0 || diff.edgesRemoved > 0) && (
                            <div className="p-3 bg-muted/30 rounded border border-border">
                              <p className="text-xs font-medium text-muted-foreground mb-1">Connection Changes</p>
                              <div className="flex gap-3 text-sm">
                                {diff.edgesAdded > 0 && (
                                  <span className="text-green-600 dark:text-green-400">+{diff.edgesAdded} added</span>
                                )}
                                {diff.edgesRemoved > 0 && (
                                  <span className="text-red-600 dark:text-red-400">-{diff.edgesRemoved} removed</span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })()
                  ) : selectedBackupA || selectedBackupB ? (
                    <div className="py-4 text-center text-muted-foreground text-sm">
                      Select both versions to compare
                    </div>
                  ) : null}
                </div>
              )}

              {/* Regular backup list (when not in diff mode) */}
              {!diffMode && (
                <>
                  {loadingBackups ? (
                    <div className="py-8 text-center text-muted-foreground">Loading backups...</div>
                  ) : backups.length === 0 ? (
                    <div className="py-8 text-center text-muted-foreground">
                      <ClockCounterClockwise size={32} className="mx-auto mb-2 opacity-50" />
                      <p>No backups yet</p>
                      <p className="text-xs mt-1">Click &quot;Export from Sim&quot; to create a backup</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {backups.map((backup, index) => (
                        <div
                          key={backup.id}
                          className="flex items-center justify-between p-3 bg-muted/50 rounded border border-border"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary text-sm font-semibold">
                              v{backup.version}
                            </div>
                            <div>
                              <p className="text-sm font-medium">
                                {backup.versionLabel || backup.workflowName}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {formatDistance(new Date(backup.exportedAt), { addSuffix: true })}
                                {backup.isDeployed && (
                                  <Badge variant="success" size="sm" className="ml-2">Deployed</Badge>
                                )}
                              </p>
                            </div>
                          </div>
                          {index < backups.length - 1 && apiHandlers?.getBackupState && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                startDiffMode()
                                loadBackupForDiff(backups[index + 1].id, 'A')
                                loadBackupForDiff(backup.id, 'B')
                              }}
                              icon={<ArrowsLeftRight size={14} />}
                            >
                              Diff
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            platform === 'n8n' 
              ? <N8nWorkflowSummary workflow={workflow as N8nWorkflow} showFlow={false} />
              : <SimWorkflowSummary workflow={workflow as SimWorkflow} />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default WorkflowViewer
