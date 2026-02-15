'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Show error state */
  error?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-sm border bg-white px-3 py-2 text-base text-[var(--black)] placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors resize-none',
          error
            ? 'border-red-500'
            : 'border-gray-300',
          className
        )}
        ref={ref}
        aria-invalid={error ? 'true' : undefined}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
