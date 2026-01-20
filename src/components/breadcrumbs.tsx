'use client'

import * as React from 'react'
import { CaretRight, House } from '@phosphor-icons/react'
import { cn } from '../lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  /** Custom Link component (e.g., Next.js Link) */
  LinkComponent?: React.ComponentType<{
    href: string
    className?: string
    children?: React.ReactNode
  }>
  /** Separator between items */
  separator?: React.ReactNode
  /** Whether to show home icon for first item */
  showHomeIcon?: boolean
  /** Maximum items to show (will collapse middle items) */
  maxItems?: number
  /** Size variant */
  size?: 'sm' | 'default'
}

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      items,
      LinkComponent,
      separator,
      showHomeIcon = false,
      maxItems,
      size = 'default',
      className,
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: 'text-xs gap-1',
      default: 'text-sm gap-1.5',
    }

    const iconSize = size === 'sm' ? 10 : 12

    // Collapse items if maxItems is set
    let displayItems = items
    let isCollapsed = false
    if (maxItems && items.length > maxItems) {
      isCollapsed = true
      displayItems = [
        items[0],
        { label: '...', href: undefined },
        ...items.slice(-(maxItems - 2)),
      ]
    }

    const defaultSeparator = (
      <CaretRight size={iconSize} className="text-gray-400" />
    )

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn('flex items-center text-gray-500', sizeStyles[size], className)}
        {...props}
      >
        <ol className={cn('flex items-center', sizeStyles[size])}>
          {displayItems.map((item, index) => {
            const isFirst = index === 0
            const isLast = index === displayItems.length - 1
            const isEllipsis = item.label === '...'

            return (
              <li key={index} className={cn('flex items-center', sizeStyles[size])}>
                {index > 0 && (
                  <span className="mx-1 text-gray-400">
                    {separator || defaultSeparator}
                  </span>
                )}

                {isEllipsis ? (
                  <span className="text-gray-400">{item.label}</span>
                ) : item.href && !isLast ? (
                  LinkComponent ? (
                    <LinkComponent
                      href={item.href}
                      className="flex items-center gap-1 hover:text-[var(--black)] transition-colors"
                    >
                      {isFirst && showHomeIcon && (
                        <House size={iconSize + 2} weight="fill" />
                      )}
                      {item.icon}
                      <span>{item.label}</span>
                    </LinkComponent>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center gap-1 hover:text-[var(--black)] transition-colors"
                    >
                      {isFirst && showHomeIcon && (
                        <House size={iconSize + 2} weight="fill" />
                      )}
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  )
                ) : (
                  <span
                    className={cn(
                      'flex items-center gap-1',
                      isLast && 'text-[var(--black)] font-medium'
                    )}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {isFirst && showHomeIcon && (
                      <House size={iconSize + 2} weight="fill" />
                    )}
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
)
Breadcrumbs.displayName = 'Breadcrumbs'

// Simple breadcrumb link component for use within the Breadcrumbs
export interface BreadcrumbLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        'hover:text-[var(--black)] transition-colors',
        className
      )}
      {...props}
    />
  )
)
BreadcrumbLink.displayName = 'BreadcrumbLink'

export { Breadcrumbs, BreadcrumbLink }
