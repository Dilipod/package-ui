'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variant of the skeleton */
  variant?: 'default' | 'circular' | 'rounded'
  /** Width of the skeleton (can be number for px or string like '100%') */
  width?: number | string
  /** Height of the skeleton (can be number for px or string like '2rem') */
  height?: number | string
  /** Whether to show animation */
  animate?: boolean
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'default', width, height, animate = true, style, ...props }, ref) => {
    const variantStyles = {
      default: 'rounded-sm',
      circular: 'rounded-full',
      rounded: 'rounded-md',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'bg-muted',
          animate && 'animate-pulse',
          variantStyles[variant],
          className
        )}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          ...style,
        }}
        {...props}
      />
    )
  }
)
Skeleton.displayName = 'Skeleton'

// Common skeleton patterns
export interface SkeletonTextProps extends Omit<SkeletonProps, 'variant'> {
  /** Number of lines to render */
  lines?: number
  /** Gap between lines */
  gap?: number
}

const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  ({ lines = 3, gap = 8, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-2', className)} style={{ gap }}>
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton
            key={i}
            height={16}
            width={i === lines - 1 ? '70%' : '100%'}
            {...props}
          />
        ))}
      </div>
    )
  }
)
SkeletonText.displayName = 'SkeletonText'

export interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether to include a header */
  hasHeader?: boolean
  /** Whether to include an avatar/icon */
  hasAvatar?: boolean
}

const SkeletonCard = React.forwardRef<HTMLDivElement, SkeletonCardProps>(
  ({ hasHeader = true, hasAvatar = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rounded-lg border p-6 space-y-4', className)}
        {...props}
      >
        {hasHeader && (
          <div className="flex items-center gap-4">
            {hasAvatar && <Skeleton variant="circular" width={40} height={40} />}
            <div className="space-y-2 flex-1">
              <Skeleton height={20} width="50%" />
              <Skeleton height={14} width="30%" />
            </div>
          </div>
        )}
        <SkeletonText lines={3} />
      </div>
    )
  }
)
SkeletonCard.displayName = 'SkeletonCard'

export { Skeleton, SkeletonText, SkeletonCard }
