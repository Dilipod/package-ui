/**
 * Server-safe exports from @dilipod/ui
 *
 * This entry point does NOT include the "use client" directive,
 * so these utilities can be safely used in Next.js API routes,
 * server actions, and other server-side code.
 */

// Email Template Helpers
export { emailTemplate, buttonHtml, infoBoxHtml, noteBoxHtml } from './lib/email'

// Slack Block Kit Helpers
export { slackMessage, slackSection, slackFields, slackActions } from './lib/slack'
export type { SlackBlock, SlackElement, SlackField, SlackMessage } from './lib/slack'

// Formatting Utilities
export { formatCentsToEuros, formatEuros, formatDuration, formatRelativeTime } from './lib/formatting'

// General Utilities
export { cn } from './lib/utils'
