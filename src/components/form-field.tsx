'use client'

import * as React from 'react'
import { cn } from '../lib/utils'
import { Label } from './label'
import { Input } from './input'
import { Textarea } from './textarea'

export interface FormFieldProps {
  /** Field label */
  label?: string
  /** Error message to display */
  error?: string
  /** Helper text to display */
  helperText?: string
  /** Whether the field is required */
  required?: boolean
  /** Field ID for accessibility */
  id?: string
  /** Additional className */
  className?: string
  /** Field content (Input, Textarea, etc.) */
  children: React.ReactNode
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, error, helperText, required, id, className, children, ...props }, ref) => {
    const fieldId = id || React.useId()
    const errorId = `${fieldId}-error`
    const helperId = `${fieldId}-helper`

    // Clone children to add error state and IDs
    const enhancedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const childProps = child.props as { className?: string; [key: string]: any }
        return React.cloneElement(child as React.ReactElement<any>, {
          id: fieldId,
          'aria-invalid': error ? 'true' : undefined,
          'aria-describedby': error ? errorId : helperText ? helperId : undefined,
          className: cn(
            childProps.className,
            error && 'border-red-500 focus-visible:ring-red-500'
          ),
        })
      }
      return child
    })

    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {label && (
          <Label htmlFor={fieldId} className={required ? 'after:content-["*"] after:ml-0.5 after:text-red-500' : ''}>
            {label}
          </Label>
        )}
        {enhancedChildren}
        {error && (
          <p id={errorId} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="text-xs text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
FormField.displayName = 'FormField'

export { FormField }
