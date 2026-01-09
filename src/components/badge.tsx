'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-700',
        primary: 'bg-[var(--cyan)]/10 text-[var(--cyan)]',
        success: 'bg-green-100 text-green-700',
        warning: 'bg-amber-100 text-amber-700',
        error: 'bg-red-100 text-red-700',
        outline: 'border border-gray-200 text-gray-600 bg-white',
      },
      size: {
        sm: 'px-2 py-0.5 text-[10px]',
        default: 'px-2.5 py-1 text-xs',
        lg: 'px-3 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Show animated pulse dot */
  pulse?: boolean
  /** Custom pulse color (overrides variant-based color) */
  pulseColor?: 'default' | 'primary' | 'success' | 'warning' | 'error'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, pulse, pulseColor: pulseColorProp, children, ...props }, ref) => {
    const pulseColorMap = {
      default: 'bg-gray-500',
      primary: 'bg-[var(--cyan)]',
      success: 'bg-green-500',
      warning: 'bg-amber-500',
      error: 'bg-red-500',
      outline: 'bg-gray-400',
    }
    
    // Use custom pulseColor if provided, otherwise derive from variant
    const pulseColor = pulseColorProp 
      ? pulseColorMap[pulseColorProp] 
      : pulseColorMap[variant || 'default']

    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {pulse && (
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={cn(
                'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                pulseColor
              )}
            />
            <span
              className={cn(
                'relative inline-flex h-1.5 w-1.5 rounded-full',
                pulseColor
              )}
            />
          </span>
        )}
        {children}
      </span>
    )
  }
)
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
