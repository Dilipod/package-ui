'use client'

import { useState, ReactNode } from 'react'
import { Button } from './button'
import { Textarea } from './textarea'
import { 
  CircleNotch,
  PaperPlaneTilt,
  CaretDown,
  CaretUp
} from '@phosphor-icons/react'

// ============================================
// Types
// ============================================

export interface Activity {
  /** Unique identifier for the activity */
  id: string
  /** Type of activity (e.g., 'note', 'status_change', 'workflow_update', 'assignment') */
  activity_type: string
  /** Main content of the activity */
  content: string
  /** User who created the activity (display name or email) */
  user: string
  /** When the activity was created */
  created_at: string | Date
  /** Additional metadata */
  metadata?: Record<string, unknown>
}

export interface ActivityTimelineProps {
  /** List of activities to display */
  activities: Activity[]
  /** Whether the activities are loading */
  loading?: boolean
  /** Labels for different activity types (type -> label) */
  activityLabels?: Record<string, string>
  /** Number of activities to show before collapsing (default: 3) */
  collapsedCount?: number
  /** Whether to show the note input form */
  showNoteInput?: boolean
  /** Placeholder for the note input */
  notePlaceholder?: string
  /** Callback when a new note is submitted */
  onAddNote?: (note: string) => Promise<void>
  /** Whether the component is currently submitting a note */
  submitting?: boolean
  /** Custom date formatter function */
  formatDate?: (date: Date | string) => string
  /** Custom loading component */
  loadingComponent?: ReactNode
  /** Custom empty state message */
  emptyMessage?: string
  /** Additional CSS class */
  className?: string
}

// ============================================
// Default Date Formatter
// ============================================

function defaultFormatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)
  
  if (diffMins < 1) return 'just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  
  return d.toLocaleDateString()
}

// ============================================
// Main Component
// ============================================

export function ActivityTimeline({
  activities,
  loading = false,
  activityLabels = {},
  collapsedCount = 3,
  showNoteInput = true,
  notePlaceholder = 'Add a note...',
  onAddNote,
  submitting = false,
  formatDate = defaultFormatDate,
  loadingComponent,
  emptyMessage = 'No activity yet',
  className = '',
}: ActivityTimelineProps) {
  const [newNote, setNewNote] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddNote = async () => {
    if (!newNote.trim() || !onAddNote) return

    setIsSubmitting(true)
    try {
      await onAddNote(newNote.trim())
      setNewNote('')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleAddNote()
    }
  }

  // Show only first N activities unless expanded
  const visibleActivities = expanded ? activities : activities.slice(0, collapsedCount)
  const hasMore = activities.length > collapsedCount

  const isCurrentlySubmitting = submitting || isSubmitting

  const DefaultLoading = (
    <div className="flex items-center justify-center py-4">
      <CircleNotch className="w-5 h-5 animate-spin text-muted-foreground" />
    </div>
  )

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Add Note Form - Compact inline */}
      {showNoteInput && onAddNote && (
        <div className="flex gap-2">
          <Textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={notePlaceholder}
            rows={1}
            className="resize-none min-h-[36px] py-2"
          />
          <Button
            onClick={handleAddNote}
            disabled={isCurrentlySubmitting || !newNote.trim()}
            size="sm"
            className="flex-shrink-0 h-9"
          >
            {isCurrentlySubmitting ? (
              <CircleNotch className="w-4 h-4 animate-spin" />
            ) : (
              <PaperPlaneTilt className="w-4 h-4" weight="bold" />
            )}
          </Button>
        </div>
      )}

      {/* Activity List - Minimal */}
      {loading ? (
        loadingComponent || DefaultLoading
      ) : activities.length === 0 ? (
        <p className="text-xs text-muted-foreground text-center py-2">
          {emptyMessage}
        </p>
      ) : (
        <div className="space-y-2">
          {visibleActivities.map((activity) => {
            const label = activityLabels[activity.activity_type] || ''
            return (
              <div key={activity.id} className="text-sm border-l-2 border-gray-200 pl-3 py-1">
                <p className="text-gray-700">
                  {label && <span className="text-muted-foreground">{label} </span>}
                  {activity.content}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {activity.user} · {formatDate(activity.created_at)}
                </p>
              </div>
            )
          })}
          
          {/* Show more/less toggle */}
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {expanded ? (
                <>
                  <CaretUp className="w-3 h-3" />
                  Show less
                </>
              ) : (
                <>
                  <CaretDown className="w-3 h-3" />
                  Show {activities.length - collapsedCount} more
                </>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default ActivityTimeline
