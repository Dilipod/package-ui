'use client'

import * as React from 'react'
import { Card, CardContent } from './card'
import { IconBox } from './icon-box'
import { Button } from './button'
import { cn } from '../lib/utils'

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title text */
  title?: string
  /** Description text */
  description?: string
  /** Whether to show the retry button */
  showRetry?: boolean
  /** Whether to show the home/dashboard link */
  showHomeLink?: boolean
  /** Custom retry button text */
  retryText?: string
  /** Custom home link text */
  homeLinkText?: string
  /** Callback when retry is clicked */
  onRetry?: () => void
  /** Callback when home link is clicked */
  onHomeClick?: () => void
  /** Custom icon to display */
  icon?: React.ReactNode
  /** Custom action buttons */
  actions?: React.ReactNode
}

const ErrorState = React.forwardRef<HTMLDivElement, ErrorStateProps>(
  (
    {
      title = 'Something went wrong',
      description = 'We encountered an error loading this page. Please try again.',
      showRetry = true,
      showHomeLink = true,
      retryText = 'Try again',
      homeLinkText = 'Go to dashboard',
      onRetry,
      onHomeClick,
      icon,
      actions,
      className,
      ...props
    },
    ref
  ) => {
    // Default icon - Warning icon
    const defaultIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-red-500"
      >
        <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" />
      </svg>
    )

    // Default refresh icon for retry button
    const refreshIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="mr-2"
      >
        <path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64A80,80,0,1,0,207.6,176.16a8,8,0,1,1,13.54,8.49A96,96,0,1,1,227.59,64l.3-.31L208,44.31V56a8,8,0,0,0,8,8h16A8,8,0,0,0,240,56Z" />
      </svg>
    )

    const hasDefaultActions = (showRetry && onRetry) || (showHomeLink && onHomeClick)

    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-center min-h-[60vh]', className)}
        {...props}
      >
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <IconBox size="lg" className="mx-auto mb-4 bg-red-50">
              {icon || defaultIcon}
            </IconBox>
            <h2 className="text-lg font-semibold text-[var(--black)] mb-2">
              {title}
            </h2>
            <p className="text-sm text-muted-foreground mb-6">{description}</p>
            {actions ? (
              <div className="flex gap-3 justify-center">{actions}</div>
            ) : hasDefaultActions ? (
              <div className="flex gap-3 justify-center">
                {showRetry && onRetry && (
                  <Button variant="outline" onClick={onRetry}>
                    {refreshIcon}
                    {retryText}
                  </Button>
                )}
                {showHomeLink && onHomeClick && (
                  <Button onClick={onHomeClick}>{homeLinkText}</Button>
                )}
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>
    )
  }
)
ErrorState.displayName = 'ErrorState'

export { ErrorState }
