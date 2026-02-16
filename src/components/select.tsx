'use client'

import * as React from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { cn } from '../lib/utils'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            'h-10 w-full rounded-sm border bg-white px-3 py-2 text-base text-[var(--black)]',
            'placeholder:text-gray-500',
            'focus-visible:outline-none focus-visible:border-gray-500',
            'disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors',
            'appearance-none pr-10',
            error
              ? 'border-red-500'
              : 'border-gray-300',
            className
          )}
          aria-invalid={error ? 'true' : undefined}
          {...props}
        >
          {children}
        </select>
        <CaretDown 
          size={16} 
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" 
        />
      </div>
    )
  }
)
Select.displayName = 'Select'

export { Select }
