'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional icon to display */
  icon?: React.ReactNode
  /** Title text */
  title?: string
  /** Description text */
  description?: string
  /** Optional action button */
  action?: React.ReactNode
  /** Size variant */
  size?: 'sm' | 'default' | 'lg'
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, size = 'default', ...props }, ref) => {
    const paddingClass = {
      sm: 'p-8',
      default: 'p-12',
      lg: 'p-16',
    }[size]

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-sm border border-dashed text-center',
          paddingClass,
          className
        )}
        {...props}
      >
        {icon && (
          <div className="flex justify-center mb-4">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="text-sm font-semibold text-foreground mb-1">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm text-muted-foreground mb-4">
            {description}
          </p>
        )}
        {action && (
          <div className="flex justify-center">
            {action}
          </div>
        )}
      </div>
    )
  }
)
EmptyState.displayName = 'EmptyState'

export { EmptyState }
