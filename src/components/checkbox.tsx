'use client'

import * as React from 'react'
import { Check } from '../icons'
import { cn } from '../lib/utils'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onCheckedChange?: (checked: boolean) => void
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          ref={ref}
          {...props}
        />
        <div
          className={cn(
            'w-5 h-5 border border-gray-300 rounded-[2px] flex items-center justify-center transition-colors',
            'peer-checked:bg-[var(--black)] peer-checked:border-[var(--black)]',
            'peer-focus-visible:outline-none',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            className
          )}
        >
          {checked && <Check className="h-3.5 w-3.5 text-white" weight="bold" />}
        </div>
      </label>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export { Checkbox }
