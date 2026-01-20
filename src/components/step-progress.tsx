'use client'

import * as React from 'react'
import { Check } from '@phosphor-icons/react'
import { cn } from '../lib/utils'

export interface Step {
  id: number
  label: string
  description?: string
}

export interface StepProgressProps {
  steps: Step[]
  currentStep: number
  onStepClick?: (step: number) => void
  /** Orientation of the stepper */
  orientation?: 'horizontal' | 'vertical'
  /** Size variant */
  size?: 'sm' | 'default' | 'lg'
  /** Whether to show labels */
  showLabels?: boolean
  className?: string
}

const StepProgress = React.forwardRef<HTMLDivElement, StepProgressProps>(
  (
    {
      steps,
      currentStep,
      onStepClick,
      orientation = 'horizontal',
      size = 'default',
      showLabels = true,
      className,
    },
    ref
  ) => {
    const sizeStyles = {
      sm: {
        indicator: 'w-6 h-6 text-xs',
        icon: 12,
        label: 'text-xs',
        connector: orientation === 'horizontal' ? 'h-0.5' : 'w-0.5',
        connectorLength: orientation === 'horizontal' ? 'w-4 sm:w-8' : 'h-6',
      },
      default: {
        indicator: 'w-7 h-7 text-xs',
        icon: 14,
        label: 'text-sm',
        connector: orientation === 'horizontal' ? 'h-0.5' : 'w-0.5',
        connectorLength: orientation === 'horizontal' ? 'w-6 sm:w-10 md:w-14' : 'h-8',
      },
      lg: {
        indicator: 'w-8 h-8 text-sm',
        icon: 16,
        label: 'text-sm',
        connector: orientation === 'horizontal' ? 'h-0.5' : 'w-0.5',
        connectorLength: orientation === 'horizontal' ? 'w-8 sm:w-12 md:w-16' : 'h-10',
      },
    }

    const styles = sizeStyles[size]

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col',
          className
        )}
      >
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep
          const isCurrent = step.id === currentStep
          const isClickable = onStepClick && step.id < currentStep

          return (
            <div
              key={step.id}
              className={cn(
                'flex',
                orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col items-start'
              )}
            >
              {/* Step */}
              <button
                type="button"
                onClick={() => isClickable && onStepClick(step.id)}
                disabled={!isClickable}
                className={cn(
                  'flex items-center gap-2 px-2 py-1.5 rounded-sm transition-colors',
                  isClickable ? 'cursor-pointer hover:bg-gray-50' : 'cursor-default',
                  orientation === 'vertical' && 'flex-row'
                )}
              >
                {/* Number/Check indicator */}
                <span
                  className={cn(
                    'rounded-sm flex items-center justify-center font-bold transition-colors',
                    styles.indicator,
                    isCompleted
                      ? 'bg-[var(--cyan)] text-white'
                      : isCurrent
                        ? 'bg-[var(--black)] text-white'
                        : 'bg-gray-100 text-gray-400'
                  )}
                >
                  {isCompleted ? (
                    <Check size={styles.icon} weight="bold" />
                  ) : (
                    step.id
                  )}
                </span>

                {/* Label */}
                {showLabels && (
                  <div className={cn(
                    orientation === 'horizontal' && 'hidden sm:block',
                    'text-left'
                  )}>
                    <span
                      className={cn(
                        'font-medium transition-colors whitespace-nowrap',
                        styles.label,
                        isCompleted
                          ? 'text-[var(--cyan)]'
                          : isCurrent
                            ? 'text-[var(--black)]'
                            : 'text-gray-400'
                      )}
                    >
                      {step.label}
                    </span>
                    {step.description && orientation === 'vertical' && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {step.description}
                      </p>
                    )}
                  </div>
                )}
              </button>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'transition-colors',
                    styles.connector,
                    styles.connectorLength,
                    isCompleted ? 'bg-[var(--cyan)]' : 'bg-gray-200',
                    orientation === 'vertical' && 'ml-[13px] my-1'
                  )}
                />
              )}
            </div>
          )
        })}
      </div>
    )
  }
)
StepProgress.displayName = 'StepProgress'

// Compact variant - just dots
export interface StepDotsProps {
  totalSteps: number
  currentStep: number
  onStepClick?: (step: number) => void
  className?: string
}

const StepDots = React.forwardRef<HTMLDivElement, StepDotsProps>(
  ({ totalSteps, currentStep, onStepClick, className }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-center gap-2', className)}>
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isCompleted = step < currentStep
          const isCurrent = step === currentStep
          const isClickable = onStepClick && step < currentStep

          return (
            <button
              key={step}
              type="button"
              onClick={() => isClickable && onStepClick(step)}
              disabled={!isClickable}
              className={cn(
                'w-2 h-2 rounded-full transition-colors',
                isClickable && 'cursor-pointer',
                !isClickable && 'cursor-default',
                isCompleted || isCurrent ? 'bg-[var(--cyan)]' : 'bg-gray-200'
              )}
              aria-label={`Step ${step}`}
            />
          )
        })}
      </div>
    )
  }
)
StepDots.displayName = 'StepDots'

export { StepProgress, StepDots }
