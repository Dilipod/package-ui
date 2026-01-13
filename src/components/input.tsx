'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Show error state */
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-sm border bg-white px-3 py-2 text-base text-[var(--black)] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--black)] placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors',
          error
            ? 'border-red-500 focus-visible:ring-red-500'
            : 'border-gray-300 focus-visible:ring-[var(--cyan)]',
          className
        )}
        ref={ref}
        aria-invalid={error ? 'true' : undefined}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
