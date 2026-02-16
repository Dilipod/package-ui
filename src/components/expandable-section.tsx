'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface ExpandableSectionProps {
  /** Unique key for this section */
  sectionKey: string
  /** Section label text */
  label: string
  /** Optional icon rendered before the label */
  icon?: React.ReactNode
  /** Optional count badge after the label */
  count?: number
  /** Whether the section is currently expanded */
  expanded: boolean
  /** Toggle callback */
  onToggle: (key: string) => void
  /** Section content */
  children: React.ReactNode
  /** Additional class for the outer container */
  className?: string
  /** Additional class for the content area */
  contentClassName?: string
  /** Whether to render the section at all (default: true) */
  show?: boolean
}

export function ExpandableSection({
  sectionKey,
  label,
  icon,
  count,
  expanded,
  onToggle,
  children,
  className,
  contentClassName,
  show = true,
}: ExpandableSectionProps) {
  if (!show) return null

  return (
    <div className={className}>
      <button
        onClick={() => onToggle(sectionKey)}
        className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors w-full text-left"
        type="button"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={cn(
            'shrink-0 transition-transform',
            expanded ? 'rotate-0' : '-rotate-90'
          )}
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {icon}
        <span>{label}</span>
        {count !== undefined && (
          <span className="text-muted-foreground/60">({count})</span>
        )}
      </button>
      {expanded && (
        <div className={cn('mt-2 pl-4', contentClassName)}>
          {children}
        </div>
      )}
    </div>
  )
}

/**
 * Hook to manage expandable section state.
 * Returns [expandedSections, toggleSection] tuple.
 */
export function useExpandedSections(initialExpanded: string[] = []) {
  const [expanded, setExpanded] = React.useState<Set<string>>(
    () => new Set(initialExpanded)
  )

  const toggle = React.useCallback((key: string) => {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }, [])

  const isExpanded = React.useCallback(
    (key: string) => expanded.has(key),
    [expanded]
  )

  return { expanded, toggle, isExpanded } as const
}

ExpandableSection.displayName = 'ExpandableSection'
