'use client'

import * as React from 'react'
import { CaretLeft, CaretRight, DotsThree } from '@phosphor-icons/react'
import { cn } from '../lib/utils'
import { Button } from './button'

export interface PaginationProps {
  /** Current page (1-indexed) */
  currentPage: number
  /** Total number of pages */
  totalPages: number
  /** Callback when page changes */
  onPageChange: (page: number) => void
  /** Number of pages to show around current page */
  siblingCount?: number
  /** Whether to show first/last page buttons */
  showBoundaryPages?: boolean
  /** Size variant */
  size?: 'sm' | 'default' | 'lg'
  /** Additional class name */
  className?: string
}

function generatePagination(
  currentPage: number,
  totalPages: number,
  siblingCount: number
): (number | 'ellipsis')[] {
  const totalPageNumbers = siblingCount * 2 + 5 // siblings + first + last + current + 2 ellipsis

  if (totalPageNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  const showLeftDots = leftSiblingIndex > 2
  const showRightDots = rightSiblingIndex < totalPages - 1

  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => i + 1
    )
    return [...leftRange, 'ellipsis', totalPages]
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => totalPages - (3 + siblingCount * 2) + i + 1
    )
    return [1, 'ellipsis', ...rightRange]
  }

  const middleRange = Array.from(
    { length: siblingCount * 2 + 1 },
    (_, i) => leftSiblingIndex + i
  )
  return [1, 'ellipsis', ...middleRange, 'ellipsis', totalPages]
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      siblingCount = 1,
      showBoundaryPages = true,
      size = 'default',
      className,
    },
    ref
  ) => {
    const pages = generatePagination(currentPage, totalPages, siblingCount)

    const buttonSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default'
    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16

    if (totalPages <= 1) {
      return null
    }

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn('flex items-center gap-1', className)}
      >
        {/* Previous button */}
        <Button
          variant="outline"
          size={buttonSize}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Go to previous page"
        >
          <CaretLeft size={iconSize} />
        </Button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {pages.map((page, index) => {
            if (page === 'ellipsis') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="flex h-9 w-9 items-center justify-center text-muted-foreground"
                >
                  <DotsThree size={iconSize} />
                </span>
              )
            }

            const isCurrentPage = page === currentPage
            return (
              <Button
                key={page}
                variant={isCurrentPage ? 'default' : 'outline'}
                size={buttonSize}
                onClick={() => onPageChange(page)}
                aria-label={`Go to page ${page}`}
                aria-current={isCurrentPage ? 'page' : undefined}
              >
                {page}
              </Button>
            )
          })}
        </div>

        {/* Next button */}
        <Button
          variant="outline"
          size={buttonSize}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Go to next page"
        >
          <CaretRight size={iconSize} />
        </Button>
      </nav>
    )
  }
)
Pagination.displayName = 'Pagination'

// Simple variant with just prev/next
export interface SimplePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  size?: 'sm' | 'default' | 'lg'
  className?: string
  showPageInfo?: boolean
}

const SimplePagination = React.forwardRef<HTMLElement, SimplePaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      size = 'default',
      className,
      showPageInfo = true,
    },
    ref
  ) => {
    const buttonSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default'
    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16

    if (totalPages <= 1) {
      return null
    }

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn('flex items-center gap-2', className)}
      >
        <Button
          variant="outline"
          size={buttonSize}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Go to previous page"
        >
          <CaretLeft size={iconSize} />
          <span className="ml-1">Previous</span>
        </Button>

        {showPageInfo && (
          <span className="text-sm text-muted-foreground px-2">
            Page {currentPage} of {totalPages}
          </span>
        )}

        <Button
          variant="outline"
          size={buttonSize}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Go to next page"
        >
          <span className="mr-1">Next</span>
          <CaretRight size={iconSize} />
        </Button>
      </nav>
    )
  }
)
SimplePagination.displayName = 'SimplePagination'

export { Pagination, SimplePagination }
