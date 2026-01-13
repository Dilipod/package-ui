'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'
import { Progress } from './progress'

const usageBarVariants = cva('space-y-3', {
  variants: {
    size: {
      sm: '',
      default: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const progressColorVariants = cva('', {
  variants: {
    color: {
      cyan: '[&>div]:bg-[var(--cyan)]',
      purple: '[&>div]:bg-purple-500',
      green: '[&>div]:bg-green-500',
      amber: '[&>div]:bg-amber-500',
      red: '[&>div]:bg-red-500',
    },
  },
  defaultVariants: {
    color: 'cyan',
  },
})

export interface UsageBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof usageBarVariants> {
  /** Label for the usage metric */
  label: string
  /** Current usage value */
  used: number
  /** Maximum/included value */
  included: number
  /** Icon component to display */
  icon?: React.ComponentType<{ className?: string }>
  /** Color scheme for the progress bar */
  color?: 'cyan' | 'purple' | 'green' | 'amber' | 'red'
  /** Show the over-limit message when exceeded */
  showOverLimit?: boolean
}

const UsageBar = React.forwardRef<HTMLDivElement, UsageBarProps>(
  (
    {
      className,
      size,
      label,
      used,
      included,
      icon: Icon,
      color = 'cyan',
      showOverLimit = true,
      ...props
    },
    ref
  ) => {
    const percentage = included > 0 ? Math.min((used / included) * 100, 100) : 0
    const isOverLimit = used > included

    const progressHeight = {
      sm: 'h-1.5',
      default: 'h-2.5',
      lg: 'h-3',
    }[size || 'default']

    return (
      <div
        ref={ref}
        className={cn(usageBarVariants({ size }), className)}
        {...props}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Icon && (
              <Icon className={cn(
                'h-5 w-5',
                isOverLimit ? 'text-red-500' : 'text-gray-500'
              )} />
            )}
            <span className="font-medium text-[var(--black)]">{label}</span>
          </div>
          <div className="text-right">
            <span
              className={cn(
                'text-lg font-semibold',
                isOverLimit ? 'text-red-500' : 'text-[var(--black)]'
              )}
            >
              {used.toLocaleString()}
            </span>
            <span className="text-gray-500"> / {included.toLocaleString()}</span>
          </div>
        </div>
        <Progress
          value={percentage}
          className={cn(
            progressHeight,
            isOverLimit
              ? '[&>div]:bg-red-500'
              : progressColorVariants({ color })
          )}
        />
        {isOverLimit && showOverLimit && (
          <p className="text-sm text-red-500">
            Over limit by {(used - included).toLocaleString()} actions
          </p>
        )}
      </div>
    )
  }
)
UsageBar.displayName = 'UsageBar'

export { UsageBar, usageBarVariants }
