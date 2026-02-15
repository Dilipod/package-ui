'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '../lib/utils'

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /** Show value label */
  showValue?: boolean
  /** Format function for the value display */
  formatValue?: (value: number) => string
  /** Size variant */
  size?: 'sm' | 'default' | 'lg'
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, showValue, formatValue, size = 'default', ...props }, ref) => {
  const value = props.value ?? props.defaultValue ?? [0]
  const currentValue = Array.isArray(value) ? value[0] : value

  const sizeStyles = {
    sm: {
      track: 'h-1',
      thumb: 'h-3.5 w-3.5',
    },
    default: {
      track: 'h-1.5',
      thumb: 'h-4 w-4',
    },
    lg: {
      track: 'h-2',
      thumb: 'h-5 w-5',
    },
  }

  return (
    <div className={cn('flex items-center gap-3', showValue && 'pr-12 relative')}>
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          'relative flex w-full touch-none select-none items-center',
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(
            'relative w-full grow overflow-hidden rounded-full bg-gray-200',
            sizeStyles[size].track
          )}
        >
          <SliderPrimitive.Range className="absolute h-full bg-[var(--cyan)]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={cn(
            'block rounded-full border-2 border-[var(--cyan)] bg-white shadow-md transition-colors',
            'focus-visible:outline-none',
            'disabled:pointer-events-none disabled:opacity-50',
            'hover:border-[var(--cyan-dark,#00bfaa)] cursor-pointer',
            sizeStyles[size].thumb
          )}
        />
      </SliderPrimitive.Root>
      {showValue && (
        <span className="absolute right-0 text-sm font-mono text-[var(--black)] min-w-[3rem] text-right">
          {formatValue ? formatValue(currentValue) : currentValue}
        </span>
      )}
    </div>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

// Convenience component with label
export interface LabeledSliderProps extends SliderProps {
  label: string
  helperText?: string
}

const LabeledSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  LabeledSliderProps
>(({ label, helperText, className, ...props }, ref) => {
  return (
    <div className={cn('space-y-2', className)}>
      <label className="text-sm font-medium leading-none text-[var(--black)]">
        {label}
      </label>
      <Slider ref={ref} {...props} />
      {helperText && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  )
})
LabeledSlider.displayName = 'LabeledSlider'

export { Slider, LabeledSlider }
