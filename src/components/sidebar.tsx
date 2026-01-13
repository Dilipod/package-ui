'use client'

import * as React from 'react'
import { cn } from '../lib/utils'
import type { Icon } from '../icons'

export interface SidebarNavItem {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { weight?: 'fill' | 'regular' }>
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** Navigation items for the main section */
  mainNav?: SidebarNavItem[]
  /** Navigation items for the bottom section */
  bottomNav?: SidebarNavItem[]
  /** Current pathname for active state detection */
  pathname?: string
  /** Optional search button configuration */
  searchButton?: {
    label?: string
    shortcut?: string
    onClick?: () => void
  }
  /** Optional help/support link */
  helpLink?: {
    href: string
    label?: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement> & { weight?: 'fill' | 'regular' }>
  }
  /** Optional assistant button configuration */
  assistantButton?: {
    label?: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement> & { weight?: 'fill' | 'regular' }>
    onClick?: () => void
  }
  /** Header content (e.g., Logo) */
  header?: React.ReactNode
  /** Custom Link component (e.g., Next.js Link) */
  LinkComponent?: React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }>
}

export interface SidebarNavItemProps {
  item: SidebarNavItem
  isActive?: boolean
  className?: string
  /** Custom Link component */
  LinkComponent?: React.ComponentType<{ href: string; className?: string; children?: React.ReactNode } & Record<string, any>>
}

const SidebarNavItem = React.forwardRef<HTMLAnchorElement, SidebarNavItemProps>(
  ({ item, isActive, className, LinkComponent, ...props }, ref) => {
    const Icon = item.icon as React.ComponentType<any>
    const baseClassName = cn(
      'flex items-center gap-3 rounded-sm px-3 py-2 text-sm transition-colors',
      isActive
        ? 'bg-muted text-foreground font-medium'
        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
      className
    )

    if (LinkComponent) {
      const Comp = LinkComponent
      return (
        <Comp
          ref={ref}
          href={item.href}
          className={baseClassName}
          {...(props as any)}
        >
          <Icon className="h-4 w-4" weight={isActive ? 'fill' : 'regular'} />
          {item.name}
        </Comp>
      )
    }

    return (
      <a
        ref={ref}
        href={item.href}
        className={baseClassName}
        {...(props as any)}
      >
        <Icon className="h-4 w-4" weight={isActive ? 'fill' : 'regular'} />
        {item.name}
      </a>
    )
  }
)
SidebarNavItem.displayName = 'SidebarNavItem'

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      mainNav = [],
      bottomNav = [],
      pathname,
      searchButton,
      helpLink,
      assistantButton,
      header,
      LinkComponent,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isActive = (href: string) => {
      if (!pathname) return false
      if (href === '/dashboard' || href === '/') {
        return pathname === '/dashboard' || pathname === '/'
      }
      return pathname.startsWith(href)
    }

    return (
      <aside
        ref={ref}
        className={cn(
          'flex h-full w-60 flex-col border-r bg-background/50',
          className
        )}
        {...props}
      >
        {/* Header */}
        {header && (
          <div className="flex h-14 items-center px-4 border-b">
            {header}
          </div>
        )}

        {/* Search */}
        {searchButton && (
          <div className="px-3 py-3">
            <button
              onClick={searchButton.onClick}
              className="flex w-full items-center gap-2 rounded-sm border bg-background px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 transition-colors"
            >
              {searchButton.label && <span>{searchButton.label}</span>}
              {searchButton.shortcut && (
                <kbd className="ml-auto text-xs bg-muted px-1.5 py-0.5 rounded-sm">
                  {searchButton.shortcut}
                </kbd>
              )}
            </button>
          </div>
        )}

        {/* Main Navigation */}
        {mainNav.length > 0 && (
          <nav className="flex-1 px-3 space-y-1">
            {mainNav.map((item) => (
              <SidebarNavItem
                key={item.name}
                item={item}
                isActive={isActive(item.href)}
                LinkComponent={LinkComponent}
              />
            ))}
          </nav>
        )}

        {/* Custom children content */}
        {children}

        {/* Bottom Navigation */}
        {(bottomNav.length > 0 || helpLink || assistantButton) && (
          <div className="px-3 pb-3 space-y-1 border-t pt-3">
            {bottomNav.map((item) => (
              <SidebarNavItem
                key={item.name}
                item={item}
                isActive={isActive(item.href)}
                LinkComponent={LinkComponent}
              />
            ))}
            {assistantButton && (
              <button
                onClick={assistantButton.onClick}
                className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm bg-[var(--cyan)]/10 text-[var(--black)] hover:bg-[var(--cyan)]/20 transition-colors font-medium"
              >
                {assistantButton.icon && (
                  <assistantButton.icon className="h-4 w-4 text-[var(--cyan)]" />
                )}
                {assistantButton.label}
              </button>
            )}
            {helpLink && (
              <a
                href={helpLink.href}
                className="flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                {helpLink.icon && (
                  <helpLink.icon className="h-4 w-4" />
                )}
                {helpLink.label}
              </a>
            )}
          </div>
        )}
      </aside>
    )
  }
)
Sidebar.displayName = 'Sidebar'

export { Sidebar, SidebarNavItem }
