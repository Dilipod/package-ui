'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const progressVariants = cva('h-full rounded-full transition-all duration-300', {
  variants: {
    variant: {
      default: 'bg-[var(--cyan)]',
      success: 'bg-green-500',
      warning: 'bg-amber-500',
      error: 'bg-red-500',
      gradient: 'bg-gradient-to-r from-[var(--cyan-dark)] to-[var(--cyan)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  /** Progress value (0-100) */
  value: number
  /** Show percentage label */
  showLabel?: boolean
  /** Custom label text (defaults to "Progress") */
  label?: string
  /** Size of the progress bar */
  size?: 'sm' | 'default' | 'lg'
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, variant, showLabel, label = 'Progress', size = 'default', ...props }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value))
    
    const heightClass = {
      sm: 'h-1',
      default: 'h-1.5',
      lg: 'h-2.5',
    }[size]

    return (
      <div className={cn('w-full', className)} ref={ref} {...props}>
        {showLabel && (
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-500">{label}</span>
            <span className="font-semibold text-[var(--black)]">{clampedValue}%</span>
          </div>
        )}
        <div
          className={cn(
            'w-full bg-gray-200 rounded-full overflow-hidden',
            heightClass
          )}
        >
          <div
            className={cn(progressVariants({ variant }))}
            style={{ width: `${clampedValue}%` }}
          />
        </div>
      </div>
    )
  }
)
Progress.displayName = 'Progress'

export { Progress, progressVariants }
