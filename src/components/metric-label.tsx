'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface MetricLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** The label text */
  children: React.ReactNode
}

/**
 * MetricLabel - A utility component for consistent metric labeling
 * 
 * Uses the standardized pattern: text-xs uppercase tracking-wide text-muted-foreground
 * Typically used above metric values in dashboards and cards.
 * 
 * @example
 * <MetricLabel>Monthly Revenue</MetricLabel>
 * <p className="text-2xl font-bold">€5,000</p>
 */
const MetricLabel = React.forwardRef<HTMLParagraphElement, MetricLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-xs text-muted-foreground uppercase tracking-wide',
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)
MetricLabel.displayName = 'MetricLabel'

export interface MetricValueProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** The value to display */
  children: React.ReactNode
  /** Size variant */
  size?: 'default' | 'lg' | 'sm'
  /** Highlight the value (uses brand cyan) */
  highlight?: boolean
}

/**
 * MetricValue - A utility component for consistent metric value display
 * 
 * Pairs with MetricLabel for a complete metric display pattern.
 * 
 * @example
 * <MetricLabel>Monthly Revenue</MetricLabel>
 * <MetricValue highlight>€5,000</MetricValue>
 */
const MetricValue = React.forwardRef<HTMLParagraphElement, MetricValueProps>(
  ({ className, children, size = 'default', highlight = false, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'font-bold mt-1',
          size === 'lg' && 'text-3xl',
          size === 'default' && 'text-2xl',
          size === 'sm' && 'text-xl',
          highlight && 'text-[#00e5cc]',
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)
MetricValue.displayName = 'MetricValue'

export interface MetricSubtextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** The subtext content */
  children: React.ReactNode
}

/**
 * MetricSubtext - A utility component for metric subtitles/descriptions
 * 
 * @example
 * <MetricLabel>Monthly Revenue</MetricLabel>
 * <MetricValue>€5,000</MetricValue>
 * <MetricSubtext>ARR: €60,000</MetricSubtext>
 */
const MetricSubtext = React.forwardRef<HTMLParagraphElement, MetricSubtextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-xs text-muted-foreground mt-1',
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)
MetricSubtext.displayName = 'MetricSubtext'

/**
 * Metric - A compound component combining Label, Value, and optional Subtext
 * 
 * @example
 * <Metric>
 *   <MetricLabel>Monthly Revenue</MetricLabel>
 *   <MetricValue highlight>€5,000</MetricValue>
 *   <MetricSubtext>ARR: €60,000</MetricSubtext>
 * </Metric>
 */
const Metric = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Metric.displayName = 'Metric'

export { MetricLabel, MetricValue, MetricSubtext, Metric }
