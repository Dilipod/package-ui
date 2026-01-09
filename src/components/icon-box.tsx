'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const iconBoxVariants = cva(
  'inline-flex items-center justify-center shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-[var(--black)] text-white',
        primary: 'bg-[var(--cyan)] text-[var(--black)]',
        outline: 'border-2 border-gray-200 bg-white text-[var(--black)]',
        ghost: 'bg-gray-100 text-gray-600',
        gradient: 'bg-gradient-to-br from-[var(--black)] to-[var(--cyan-dark)] text-white',
      },
      size: {
        sm: 'w-8 h-8',
        default: 'w-10 h-10',
        lg: 'w-12 h-12',
        xl: 'w-14 h-14',
      },
      rounded: {
        sm: 'rounded-sm',
        default: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'sm',
    },
  }
)

export interface IconBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconBoxVariants> {}

const IconBox = React.forwardRef<HTMLDivElement, IconBoxProps>(
  ({ className, variant, size, rounded, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(iconBoxVariants({ variant, size, rounded }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
IconBox.displayName = 'IconBox'

export { IconBox, iconBoxVariants }
