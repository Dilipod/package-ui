'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-md font-semibold transition-colors',
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
    // Get pulse color based on variant or explicit pulseColor prop
    // Using explicit conditionals so Tailwind can detect the classes
    const getPulseColorClass = () => {
      const color = pulseColorProp || variant || 'default'
      switch (color) {
        case 'success': return 'bg-green-500'
        case 'warning': return 'bg-amber-500'
        case 'error': return 'bg-red-500'
        case 'primary': return 'bg-[var(--cyan)]'
        case 'outline': return 'bg-gray-400'
        default: return 'bg-gray-500'
      }
    }
    
    const pulseColorClass = getPulseColorClass()

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
                pulseColorClass
              )}
            />
            <span
              className={cn(
                'relative inline-flex h-1.5 w-1.5 rounded-full',
                pulseColorClass
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
