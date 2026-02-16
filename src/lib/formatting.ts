/**
 * Formatting Utilities
 *
 * Shared text, currency, duration, and date formatting used across apps.
 */

import { differenceInHours, differenceInMinutes, formatDistanceToNow } from 'date-fns'

/**
 * Convert a cent value to euros (numeric).
 * e.g. 2900 → 29
 */
export function formatCentsToEuros(cents: number): string {
  return `€${(cents / 100).toLocaleString()}`
}

/**
 * Format a euro value as a display string.
 * e.g. 299 → "€299" or 299.5 with decimals=2 → "€299.50"
 */
export function formatEuros(euros: number, decimals?: number): string {
  if (decimals !== undefined) {
    return `€${euros.toFixed(decimals)}`
  }
  return `€${euros.toLocaleString()}`
}

/**
 * Format milliseconds as a human-readable duration.
 * e.g. 1500 → "1.5s"
 */
export function formatDuration(ms: number): string {
  return `${(ms / 1000).toFixed(1)}s`
}

/**
 * Format a date into a compact relative-time string.
 * Returns "—" for null/undefined, "5m" for < 1 hour, "2h" for < 48 hours,
 * or a relative distance like "3 days" for older dates.
 */
export function formatRelativeTime(date: Date | string | null): string {
  if (!date) return '—'
  const d = typeof date === 'string' ? new Date(date) : date
  const hours = differenceInHours(new Date(), d)
  if (hours < 1) {
    const mins = differenceInMinutes(new Date(), d)
    return `${mins}m`
  }
  if (hours < 48) return `${hours}h`
  return formatDistanceToNow(d, { addSuffix: false })
}
