'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from '@phosphor-icons/react'
import { cn } from '../lib/utils'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle weight="fill" className="h-2.5 w-2.5 fill-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

// Convenience component for labeled radio items
export interface RadioGroupOptionProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string
  description?: string
}

const RadioGroupOption = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupOptionProps
>(({ label, description, className, id, ...props }, ref) => {
  const optionId = id || React.useId()

  return (
    <div className={cn('flex items-start gap-3', className)}>
      <RadioGroupItem ref={ref} id={optionId} {...props} />
      <div className="space-y-0.5">
        <label
          htmlFor={optionId}
          className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  )
})
RadioGroupOption.displayName = 'RadioGroupOption'

// Card variant for selection cards
export interface RadioGroupCardProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string
  description?: string
  children?: React.ReactNode
}

const RadioGroupCard = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupCardProps
>(({ label, description, children, className, id, ...props }, ref) => {
  const cardId = id || React.useId()

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      id={cardId}
      className={cn(
        'relative flex cursor-pointer rounded-lg border bg-background p-4 transition-all hover:border-[var(--cyan)]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=checked]:border-[var(--cyan)] data-[state=checked]:ring-1 data-[state=checked]:ring-[var(--cyan)] disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <div className="flex w-full items-start gap-3">
        <div className="flex h-5 items-center">
          <div className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow">
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center h-full">
              <Circle weight="fill" className="h-2.5 w-2.5 fill-[var(--cyan)]" />
            </RadioGroupPrimitive.Indicator>
          </div>
        </div>
        <div className="flex-1 space-y-1">
          <label
            htmlFor={cardId}
            className="text-sm font-medium leading-none cursor-pointer"
          >
            {label}
          </label>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
          {children}
        </div>
      </div>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupCard.displayName = 'RadioGroupCard'

export { RadioGroup, RadioGroupItem, RadioGroupOption, RadioGroupCard }
