'use client'

import * as React from 'react'
import { cn } from '../lib/utils'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'

export type DateRangePreset = '7d' | '30d' | '90d' | 'custom' | 'today' | 'yesterday' | 'this-week' | 'this-month' | 'this-year'

export interface DateRangePickerProps {
  /** Currently selected preset */
  value: DateRangePreset
  /** Callback when preset changes */
  onChange: (value: DateRangePreset) => void
  /** Custom start date (ISO string) */
  customStart?: string
  /** Custom end date (ISO string) */
  customEnd?: string
  /** Callback when custom dates change */
  onCustomChange?: (start: string, end: string) => void
  /** Available presets to show */
  presets?: DateRangePreset[]
  /** Size variant */
  size?: 'sm' | 'default'
  /** Additional class name */
  className?: string
  /** Show custom date inputs inline */
  inlineCustom?: boolean
}

const presetLabels: Record<DateRangePreset, string> = {
  'today': 'Today',
  'yesterday': 'Yesterday',
  '7d': 'Last 7 days',
  '30d': 'Last 30 days',
  '90d': 'Last 90 days',
  'this-week': 'This week',
  'this-month': 'This month',
  'this-year': 'This year',
  'custom': 'Custom',
}

const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      value,
      onChange,
      customStart = '',
      customEnd = '',
      onCustomChange,
      presets = ['7d', '30d', '90d', 'custom'],
      size = 'default',
      className,
      inlineCustom = true,
    },
    ref
  ) => {
    const buttonSize = size === 'sm' ? 'sm' : 'default'

    return (
      <div ref={ref} className={cn('flex flex-wrap items-center gap-2', className)}>
        {presets.map((preset) => (
          <Button
            key={preset}
            variant={value === preset ? 'default' : 'outline'}
            size={buttonSize}
            onClick={() => onChange(preset)}
          >
            {presetLabels[preset]}
          </Button>
        ))}

        {value === 'custom' && inlineCustom && onCustomChange && (
          <div className="flex items-center gap-2">
            <div className="space-y-1">
              <Label htmlFor="start-date" className="text-xs sr-only">
                Start
              </Label>
              <Input
                id="start-date"
                type="date"
                value={customStart}
                onChange={(e) => onCustomChange(e.target.value, customEnd)}
                className={cn(size === 'sm' ? 'h-8 text-xs' : 'h-9')}
                aria-label="Start date"
              />
            </div>
            <span className="text-muted-foreground">to</span>
            <div className="space-y-1">
              <Label htmlFor="end-date" className="text-xs sr-only">
                End
              </Label>
              <Input
                id="end-date"
                type="date"
                value={customEnd}
                onChange={(e) => onCustomChange(customStart, e.target.value)}
                className={cn(size === 'sm' ? 'h-8 text-xs' : 'h-9')}
                aria-label="End date"
              />
            </div>
          </div>
        )}
      </div>
    )
  }
)
DateRangePicker.displayName = 'DateRangePicker'

// Compact variant with dropdown
export interface DateRangeSelectProps {
  value: DateRangePreset
  onChange: (value: DateRangePreset) => void
  presets?: DateRangePreset[]
  className?: string
}

const DateRangeSelect = React.forwardRef<HTMLSelectElement, DateRangeSelectProps>(
  ({ value, onChange, presets = ['7d', '30d', '90d'], className }, ref) => {
    return (
      <select
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value as DateRangePreset)}
        className={cn(
          'h-9 rounded-sm border border-input bg-background px-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
      >
        {presets.map((preset) => (
          <option key={preset} value={preset}>
            {presetLabels[preset]}
          </option>
        ))}
      </select>
    )
  }
)
DateRangeSelect.displayName = 'DateRangeSelect'

// Helper to calculate date range from preset
export function getDateRangeFromPreset(preset: DateRangePreset): { start: Date; end: Date } {
  const now = new Date()
  const end = new Date(now)
  end.setHours(23, 59, 59, 999)

  let start = new Date(now)
  start.setHours(0, 0, 0, 0)

  switch (preset) {
    case 'today':
      break
    case 'yesterday':
      start.setDate(start.getDate() - 1)
      end.setDate(end.getDate() - 1)
      break
    case '7d':
      start.setDate(start.getDate() - 7)
      break
    case '30d':
      start.setDate(start.getDate() - 30)
      break
    case '90d':
      start.setDate(start.getDate() - 90)
      break
    case 'this-week':
      start.setDate(start.getDate() - start.getDay())
      break
    case 'this-month':
      start.setDate(1)
      break
    case 'this-year':
      start.setMonth(0, 1)
      break
    default:
      break
  }

  return { start, end }
}

export { DateRangePicker, DateRangeSelect }
