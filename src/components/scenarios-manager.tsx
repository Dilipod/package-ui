'use client'

import * as React from 'react'
import { Plus, PencilSimple, Trash, Warning, CheckCircle, Question, Lightning, Check, CaretDown, CaretUp } from '@phosphor-icons/react'
import { cn } from '../lib/utils'
import { Button } from './button'
import { Badge } from './badge'
import { Input } from './input'
import { Select } from './select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './dialog'

// Types
export type ScenarioType = 'escalation' | 'default_behavior' | 'quality_check' | 'edge_case'

export interface Scenario {
  id: string
  type: ScenarioType
  situation: string
  action: string
}

export interface ScenarioSuggestion {
  type: ScenarioType
  situation: string
  action: string
}

export interface ScenariosManagerProps {
  scenarios: Scenario[]
  onAdd: (scenario: Omit<Scenario, 'id'>) => Promise<void>
  onUpdate: (id: string, scenario: Omit<Scenario, 'id'>) => Promise<void>
  onDelete: (id: string) => Promise<void>
  onComplete?: () => Promise<void>
  suggestions?: ScenarioSuggestion[]
  isLoading?: boolean
  isComplete?: boolean
  minScenariosToComplete?: number
  /** Whether to show expanded by default */
  defaultExpanded?: boolean
  className?: string
}

// Type configuration - using Dilipod brand colors
const typeConfig: Record<ScenarioType, { 
  label: string
  icon: React.ElementType
  color: string
  bgColor: string
  description: string
}> = {
  escalation: {
    label: 'Ask me first',
    icon: Warning,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    description: 'Stop and check with me before proceeding',
  },
  default_behavior: {
    label: 'Handle it',
    icon: CheckCircle,
    color: 'text-[var(--cyan)]',
    bgColor: 'bg-[var(--cyan)]/10',
    description: 'Proceed automatically using this rule',
  },
  quality_check: {
    label: 'Must be correct',
    icon: CheckCircle,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    description: 'This is what "done right" looks like',
  },
  edge_case: {
    label: 'Watch out',
    icon: Question,
    color: 'text-muted-foreground',
    bgColor: 'bg-muted',
    description: 'Common mistakes or tricky situations',
  },
}

// Individual scenario card
function ScenarioCard({
  scenario,
  onEdit,
  onDelete,
}: {
  scenario: Scenario
  onEdit: () => void
  onDelete: () => void
}) {
  const config = typeConfig[scenario.type]
  const Icon = config.icon

  return (
    <div className="group relative border border-border rounded-sm p-4 hover:border-[var(--cyan)]/30 hover:bg-[var(--cyan)]/[0.02] transition-all">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className={cn('w-9 h-9 rounded-sm flex items-center justify-center shrink-0', config.bgColor)}>
            <Icon size={18} weight="fill" className={config.color} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="outline" size="sm" className="font-medium">{config.label}</Badge>
            </div>
            <p className="text-sm text-[var(--black)]">
              <span className="font-medium">When:</span> {scenario.situation}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              <span className="text-[var(--black)] font-medium">Action:</span> {scenario.action}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-[var(--black)]"
            onClick={onEdit}
          >
            <PencilSimple size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-red-600 hover:bg-red-50"
            onClick={onDelete}
          >
            <Trash size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}

// Suggestion chip
function SuggestionChip({
  suggestion,
  onAdd,
  disabled,
}: {
  suggestion: ScenarioSuggestion
  onAdd: () => void
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onAdd}
      disabled={disabled}
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-dashed border-border',
        'text-sm text-muted-foreground hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:bg-[var(--cyan)]/5',
        'transition-all disabled:opacity-50 disabled:cursor-not-allowed'
      )}
    >
      <Plus size={14} weight="bold" />
      {suggestion.situation}
    </button>
  )
}

// Add/Edit dialog
function ScenarioDialog({
  open,
  onOpenChange,
  scenario,
  onSave,
  isLoading,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  scenario?: Scenario | null
  onSave: (data: Omit<Scenario, 'id'>) => Promise<void>
  isLoading?: boolean
}) {
  const [type, setType] = React.useState<ScenarioType>(scenario?.type || 'escalation')
  const [situation, setSituation] = React.useState(scenario?.situation || '')
  const [action, setAction] = React.useState(scenario?.action || '')
  const [isSaving, setIsSaving] = React.useState(false)

  // Reset form when dialog opens/closes or scenario changes
  React.useEffect(() => {
    if (open) {
      setType(scenario?.type || 'escalation')
      setSituation(scenario?.situation || '')
      setAction(scenario?.action || '')
    }
  }, [open, scenario])

  const handleSave = async () => {
    if (!situation.trim() || !action.trim()) return
    
    setIsSaving(true)
    try {
      await onSave({ type, situation: situation.trim(), action: action.trim() })
      onOpenChange(false)
    } finally {
      setIsSaving(false)
    }
  }

  const isValid = situation.trim() && action.trim()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{scenario ? 'Edit scenario' : 'Add scenario'}</DialogTitle>
          <DialogDescription>
            Define when something happens and what action to take.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--black)]">Type</label>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value as ScenarioType)}
            >
              {Object.entries(typeConfig).map(([key, config]) => (
                <option key={key} value={key}>
                  {config.label} — {config.description}
                </option>
              ))}
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--black)]">When...</label>
            <Input
              placeholder="e.g., Invoice amount doesn't match PO"
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">Describe the situation or trigger</p>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--black)]">Then...</label>
            <Input
              placeholder="e.g., Flag for review, don't process"
              value={action}
              onChange={(e) => setAction(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">What should happen in this situation</p>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={!isValid || isSaving}
            loading={isSaving}
          >
            {scenario ? 'Save changes' : 'Add scenario'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Main component
export function ScenariosManager({
  scenarios,
  onAdd,
  onUpdate,
  onDelete,
  onComplete,
  suggestions = [],
  isLoading,
  isComplete = false,
  minScenariosToComplete = 1,
  defaultExpanded = true,
  className,
}: ScenariosManagerProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [editingScenario, setEditingScenario] = React.useState<Scenario | null>(null)
  const [deletingId, setDeletingId] = React.useState<string | null>(null)
  const [isCompleting, setIsCompleting] = React.useState(false)
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded)

  const canComplete = scenarios.length >= minScenariosToComplete && !isComplete && onComplete

  const handleAddClick = () => {
    setEditingScenario(null)
    setDialogOpen(true)
  }

  const handleEditClick = (scenario: Scenario) => {
    setEditingScenario(scenario)
    setDialogOpen(true)
  }

  const handleSave = async (data: Omit<Scenario, 'id'>) => {
    if (editingScenario) {
      await onUpdate(editingScenario.id, data)
    } else {
      await onAdd(data)
    }
  }

  const handleDelete = async (id: string) => {
    setDeletingId(id)
    try {
      await onDelete(id)
    } finally {
      setDeletingId(null)
    }
  }

  const handleSuggestionAdd = async (suggestion: ScenarioSuggestion) => {
    await onAdd(suggestion)
  }

  const handleComplete = async () => {
    if (!onComplete) return
    setIsCompleting(true)
    try {
      await onComplete()
    } finally {
      setIsCompleting(false)
    }
  }

  // Filter out suggestions that already exist
  const filteredSuggestions = suggestions.filter(
    (s) => !scenarios.some(
      (existing) => existing.situation.toLowerCase() === s.situation.toLowerCase()
    )
  )

  return (
    <div className={cn('space-y-4', className)}>
      {/* Header - clickable to expand/collapse */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between bg-muted/30 border border-border/50 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-[var(--cyan)]/10 flex items-center justify-center">
            <Lightning size={24} weight="fill" className="text-[var(--cyan)]" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-[var(--black)]">Scenarios</h3>
              {isComplete && (
                <Badge variant="secondary" className="bg-[var(--cyan)]/10 text-[var(--cyan)] border-[var(--cyan)]/20 font-medium">
                  <CheckCircle size={12} weight="fill" className="mr-1" />
                  Complete
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {scenarios.length === 0
                ? 'Define rules for edge cases and escalations'
                : `${scenarios.length} scenario${scenarios.length === 1 ? '' : 's'} defined`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isExpanded ? (
            <CaretUp size={20} className="text-muted-foreground" />
          ) : (
            <CaretDown size={20} className="text-muted-foreground" />
          )}
        </div>
      </button>

      {/* Expandable content */}
      {isExpanded && (
        <>
          {/* Add button */}
          <div className="flex justify-end">
            <Button variant="outline" size="sm" onClick={handleAddClick}>
              <Plus size={16} className="mr-1" />
              Add scenario
            </Button>
          </div>

          {/* Scenarios list */}
          {scenarios.length > 0 && (
            <div className="grid gap-3">
              {scenarios.map((scenario) => (
                <ScenarioCard
                  key={scenario.id}
                  scenario={scenario}
                  onEdit={() => handleEditClick(scenario)}
                  onDelete={() => handleDelete(scenario.id)}
                />
              ))}
            </div>
          )}

          {/* Empty state */}
          {scenarios.length === 0 && (
            <div className="border border-dashed border-border rounded-sm p-8 text-center">
              <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center mx-auto mb-3">
                <Lightning size={24} className="text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                No scenarios yet. Add rules for how the worker should handle edge cases.
              </p>
              <Button variant="outline" size="sm" onClick={handleAddClick}>
                <Plus size={16} className="mr-1.5" />
                Add your first scenario
              </Button>
            </div>
          )}

          {/* Suggestions */}
          {filteredSuggestions.length > 0 && !isComplete && (
            <div className="pt-2">
              <p className="text-xs text-muted-foreground mb-2">Suggested scenarios:</p>
              <div className="flex flex-wrap gap-2">
                {filteredSuggestions.map((suggestion, index) => (
                  <SuggestionChip
                    key={index}
                    suggestion={suggestion}
                    onAdd={() => handleSuggestionAdd(suggestion)}
                    disabled={isLoading}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Complete button */}
          {canComplete && (
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between gap-4 bg-[var(--cyan)]/5 rounded-sm p-4 -mx-1">
                <div>
                  <p className="text-sm font-medium text-[var(--black)]">
                    Ready to proceed?
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Mark your scenarios as complete to continue with the onboarding.
                  </p>
                </div>
                <Button
                  onClick={handleComplete}
                  disabled={isCompleting}
                  loading={isCompleting}
                  size="sm"
                  className="shrink-0"
                >
                  <Check size={16} className="mr-1.5" />
                  Mark complete
                </Button>
              </div>
            </div>
          )}

          {/* Complete state - only show when expanded */}
          {isComplete && (
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                You can still add or edit scenarios while we build your worker.
              </p>
            </div>
          )}
        </>
      )}

      {/* Dialog */}
      <ScenarioDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        scenario={editingScenario}
        onSave={handleSave}
        isLoading={isLoading}
      />
    </div>
  )
}
