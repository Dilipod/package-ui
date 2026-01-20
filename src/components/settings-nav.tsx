'use client'

import * as React from 'react'
import { CaretRight } from '@phosphor-icons/react'
import { cn } from '../lib/utils'

export interface SettingsNavItem {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export interface SettingsNavGroup {
  title: string
  items: SettingsNavItem[]
}

export interface SettingsNavProps extends React.HTMLAttributes<HTMLDivElement> {
  groups: SettingsNavGroup[]
  /** Custom Link component (e.g., Next.js Link) */
  LinkComponent?: React.ComponentType<{
    href: string
    className?: string
    children?: React.ReactNode
  }>
}

const SettingsNav = React.forwardRef<HTMLDivElement, SettingsNavProps>(
  ({ groups, LinkComponent, className, ...props }, ref) => {
    const Link = LinkComponent || 'a'

    return (
      <div ref={ref} className={cn('space-y-8', className)} {...props}>
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3 px-1">
              {group.title}
            </h2>
            <div className="space-y-1">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-sm transition-all hover:bg-gray-50 border border-transparent hover:border-gray-200"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-gray-100 group-hover:bg-[var(--cyan)]/10 transition-colors">
                    <span className="text-gray-600 group-hover:text-[var(--cyan)] transition-colors [&>svg]:w-5 [&>svg]:h-5">
                      {item.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[var(--black)] group-hover:text-[var(--cyan)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <CaretRight
                    size={18}
                    className="text-gray-300 group-hover:text-[var(--cyan)] group-hover:translate-x-0.5 transition-all shrink-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
)
SettingsNav.displayName = 'SettingsNav'

// Single item variant
export interface SettingsNavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
  description?: string
  icon?: React.ReactNode
  /** Custom Link component */
  LinkComponent?: React.ComponentType<{
    href: string
    className?: string
    children?: React.ReactNode
  }>
}

const SettingsNavLink = React.forwardRef<HTMLAnchorElement, SettingsNavLinkProps>(
  ({ title, description, icon, href, LinkComponent, className, ...props }, ref) => {
    const content = (
      <>
        {icon && (
          <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-gray-100 group-hover:bg-[var(--cyan)]/10 transition-colors">
            <span className="text-gray-600 group-hover:text-[var(--cyan)] transition-colors [&>svg]:w-5 [&>svg]:h-5">
              {icon}
            </span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-[var(--black)] group-hover:text-[var(--cyan)] transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <CaretRight
          size={18}
          className="text-gray-300 group-hover:text-[var(--cyan)] group-hover:translate-x-0.5 transition-all shrink-0"
        />
      </>
    )

    const linkClassName = cn(
      'group flex items-center gap-4 p-4 rounded-sm transition-all hover:bg-gray-50 border border-transparent hover:border-gray-200',
      className
    )

    if (LinkComponent && href) {
      return (
        <LinkComponent href={href} className={linkClassName}>
          {content}
        </LinkComponent>
      )
    }

    return (
      <a ref={ref} href={href} className={linkClassName} {...props}>
        {content}
      </a>
    )
  }
)
SettingsNavLink.displayName = 'SettingsNavLink'

export { SettingsNav, SettingsNavLink }
