'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '../lib/utils'

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /** Size variant */
  size?: 'sm' | 'default' | 'lg'
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size = 'default', ...props }, ref) => {
  const sizeStyles = {
    sm: {
      root: 'h-4 w-7',
      thumb: 'h-3 w-3 data-[state=checked]:translate-x-3',
    },
    default: {
      root: 'h-5 w-9',
      thumb: 'h-4 w-4 data-[state=checked]:translate-x-4',
    },
    lg: {
      root: 'h-6 w-11',
      thumb: 'h-5 w-5 data-[state=checked]:translate-x-5',
    },
  }

  return (
    <SwitchPrimitive.Root
      className={cn(
        'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--cyan)] data-[state=unchecked]:bg-input',
        sizeStyles[size].root,
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0',
          sizeStyles[size].thumb
        )}
      />
    </SwitchPrimitive.Root>
  )
})
Switch.displayName = SwitchPrimitive.Root.displayName

// Convenience component with label
export interface LabeledSwitchProps extends SwitchProps {
  label: string
  description?: string
  labelPosition?: 'left' | 'right'
}

const LabeledSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  LabeledSwitchProps
>(({ label, description, labelPosition = 'right', className, id, ...props }, ref) => {
  const switchId = id || React.useId()

  const labelContent = (
    <div className="space-y-0.5">
      <label
        htmlFor={switchId}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        {label}
      </label>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  )

  return (
    <div
      className={cn(
        'flex items-center gap-3',
        labelPosition === 'left' && 'flex-row-reverse justify-end',
        className
      )}
    >
      <Switch ref={ref} id={switchId} {...props} />
      {labelContent}
    </div>
  )
})
LabeledSwitch.displayName = 'LabeledSwitch'

export { Switch, LabeledSwitch }
