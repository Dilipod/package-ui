'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Text to display in the divider */
  text?: string
  /** Orientation */
  orientation?: 'horizontal' | 'vertical'
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, text, orientation = 'horizontal', ...props }, ref) => {
    if (orientation === 'vertical') {
      return (
        <div
          ref={ref}
          className={cn('w-px h-full bg-border', className)}
          {...props}
        />
      )
    }

    if (text) {
      return (
        <div
          ref={ref}
          className={cn('relative flex items-center', className)}
          {...props}
        >
          <div className="flex-1 border-t" />
          <span className="px-2 text-xs uppercase text-muted-foreground bg-background">
            {text}
          </span>
          <div className="flex-1 border-t" />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn('border-t', className)}
        {...props}
      />
    )
  }
)
Divider.displayName = 'Divider'

export { Divider }
