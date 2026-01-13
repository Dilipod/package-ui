'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const alertVariants = cva(
  'rounded-sm border p-3 text-sm',
  {
    variants: {
      variant: {
        default: 'bg-background border-border text-foreground',
        success: 'bg-green-50 border-green-200 text-green-900',
        error: 'bg-red-50 border-red-200 text-red-900',
        warning: 'bg-amber-50 border-amber-200 text-amber-900',
        info: 'bg-blue-50 border-blue-200 text-blue-900',
        primary: 'bg-[var(--cyan)]/10 border-[var(--cyan)]/20 text-[var(--cyan)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /** Optional icon to display */
  icon?: React.ReactNode
  /** Optional title */
  title?: string
  /** Optional action button */
  action?: React.ReactNode
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, icon, title, action, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            {icon && <div className="shrink-0 mt-0.5">{icon}</div>}
            <div className="flex-1 min-w-0">
              {title && (
                <p className="font-semibold mb-1">{title}</p>
              )}
              <div className={title ? 'text-sm' : ''}>{children}</div>
            </div>
          </div>
          {action && (
            <div className="shrink-0">
              {action}
            </div>
          )}
        </div>
      </div>
    )
  }
)
Alert.displayName = 'Alert'

export { Alert, alertVariants }
