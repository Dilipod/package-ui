'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const tagVariants = cva(
  'inline-flex items-center gap-2 font-medium transition-colors cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-[var(--black)]',
        primary: 'bg-[var(--cyan)]/10 text-[var(--cyan)]',
        outline: 'border border-gray-200 bg-white text-gray-700 hover:border-[var(--black)] hover:text-[var(--black)]',
        dark: 'bg-[var(--black)] text-white',
      },
      size: {
        sm: 'px-2 py-1 text-[10px] rounded',
        default: 'px-3 py-1.5 text-xs rounded-full',
        lg: 'px-4 py-2 text-sm rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  /** Optional icon to display before text */
  icon?: React.ReactNode
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(tagVariants({ variant, size }), className)}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </span>
    )
  }
)
Tag.displayName = 'Tag'

export { Tag, tagVariants }
