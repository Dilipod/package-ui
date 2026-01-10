'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const statVariants = cva('', {
  variants: {
    variant: {
      default: '',
      card: 'p-3 rounded-sm bg-gray-50 text-center',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'default',
    align: 'left',
  },
})

const valueVariants = cva('font-bold', {
  variants: {
    size: {
      sm: 'text-lg',
      default: 'text-2xl',
      lg: 'text-4xl md:text-5xl',
      xl: 'text-5xl md:text-6xl',
    },
    color: {
      default: 'text-[var(--black)]',
      primary: 'text-[var(--cyan)]',
      white: 'text-white',
      gradient: 'text-gradient',
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'default',
  },
})

export interface StatProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statVariants> {
  /** The main value to display */
  value: string | number
  /** Label below the value */
  label?: string
  /** Optional suffix after value (e.g., "faster", "cheaper") */
  suffix?: string
  /** Size of the value text */
  valueSize?: 'sm' | 'default' | 'lg' | 'xl'
  /** Color of the value */
  valueColor?: 'default' | 'primary' | 'white' | 'gradient'
}

const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  (
    {
      className,
      variant,
      align,
      value,
      label,
      suffix,
      valueSize = 'default',
      valueColor = 'default',
      ...props
    },
    ref
  ) => {
    const justifyClass = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    }[align || 'left']

    return (
      <div
        ref={ref}
        className={cn(statVariants({ variant, align }), className)}
        {...props}
      >
        <div className={cn('flex flex-wrap lg:flex-nowrap items-baseline gap-x-2', justifyClass)}>
          <span className={cn(valueVariants({ size: valueSize, color: valueColor }))}>
            {value}
          </span>
          {suffix && (
            <span className={cn(
              "font-medium text-[var(--cyan)] shrink-0",
              valueSize === 'lg' || valueSize === 'xl' ? 'text-lg md:text-xl' : 'text-base md:text-lg'
            )}>
              {suffix}
            </span>
          )}
        </div>
        {label && (
          <div className={cn(
            "font-medium mt-1",
            valueColor === 'white' ? 'text-white/70 text-sm md:text-base' : 'text-gray-500 text-xs md:text-sm'
          )}>
            {label}
          </div>
        )}
      </div>
    )
  }
)
Stat.displayName = 'Stat'

export { Stat, statVariants, valueVariants }
