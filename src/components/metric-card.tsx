'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'
import { Card } from './card'

const metricCardVariants = cva('p-5', {
  variants: {
    variant: {
      default: '',
      outlined: 'border-l-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const iconContainerVariants = cva('p-2 rounded-lg shrink-0', {
  variants: {
    color: {
      cyan: 'bg-[var(--cyan)]/10',
      purple: 'bg-purple-50',
      green: 'bg-green-50',
      amber: 'bg-amber-50',
      red: 'bg-red-50',
      gray: 'bg-gray-100',
    },
  },
  defaultVariants: {
    color: 'cyan',
  },
})

const iconVariants = cva('h-5 w-5', {
  variants: {
    color: {
      cyan: 'text-[var(--cyan)]',
      purple: 'text-purple-500',
      green: 'text-green-500',
      amber: 'text-amber-500',
      red: 'text-red-500',
      gray: 'text-gray-500',
    },
  },
  defaultVariants: {
    color: 'cyan',
  },
})

export interface MetricCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof metricCardVariants> {
  /** The metric value to display */
  value: string | number
  /** Label describing the metric */
  label: string
  /** Icon component to display */
  icon?: React.ComponentType<{ className?: string }>
  /** Color scheme for the icon */
  iconColor?: 'cyan' | 'purple' | 'green' | 'amber' | 'red' | 'gray'
  /** Border color for outlined variant */
  borderColor?: string
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  (
    {
      className,
      variant,
      value,
      label,
      icon: Icon,
      iconColor = 'cyan',
      borderColor,
      ...props
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          metricCardVariants({ variant }),
          variant === 'outlined' && borderColor,
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          {Icon && (
            <div className={cn(iconContainerVariants({ color: iconColor }))}>
              <Icon className={cn(iconVariants({ color: iconColor }))} />
            </div>
          )}
          <div className="min-w-0">
            <p className="text-2xl font-bold text-[var(--black)] truncate">
              {value}
            </p>
            <p className="text-sm text-gray-500 truncate">{label}</p>
          </div>
        </div>
      </Card>
    )
  }
)
MetricCard.displayName = 'MetricCard'

export { MetricCard, metricCardVariants }
