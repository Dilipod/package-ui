/**
 * Slack Block Kit Helpers
 *
 * Shared Slack message and block builders used by both platform and admin apps.
 * Pure functions with zero dependencies — same pattern as email.ts.
 *
 * Transport layers (sendSlackMessage, sendSlackWebhook) stay local in each app.
 */

// ============================================
// Types
// ============================================

export interface SlackBlock {
  type: string
  text?: { type: string; text: string }
  elements?: SlackElement[]
  fields?: SlackField[]
}

export interface SlackElement {
  type: string
  text?: { type: string; text: string }
  style?: string
  value?: string
  url?: string
  action_id?: string
}

export interface SlackField {
  type: string
  text: string
}

export interface SlackMessage {
  text: string
  blocks: SlackBlock[]
}

// ============================================
// Block Builders
// ============================================

/**
 * Build a single mrkdwn section block.
 *
 *   slackSection('*Hello* world')
 */
export function slackSection(mrkdwn: string): SlackBlock {
  return {
    type: 'section',
    text: { type: 'mrkdwn', text: mrkdwn },
  }
}

/**
 * Build a key-value fields block.
 *
 *   slackFields({ Worker: 'Invoice Bot', Status: 'Live' })
 */
export function slackFields(fields: Record<string, string | number>): SlackBlock {
  return {
    type: 'section',
    fields: Object.entries(fields).map(([key, value]) => ({
      type: 'mrkdwn',
      text: `*${key}:*\n${value}`,
    })),
  }
}

/**
 * Build an actions block with buttons.
 *
 *   slackActions([
 *     { text: 'View', url: 'https://...' },
 *     { text: 'Approve', actionId: 'approve', style: 'primary', value: '123' },
 *   ])
 */
export function slackActions(
  buttons: {
    text: string
    url?: string
    value?: string
    actionId?: string
    style?: 'primary' | 'danger'
  }[]
): SlackBlock {
  return {
    type: 'actions',
    elements: buttons.map((btn) => ({
      type: 'button',
      text: { type: 'plain_text', text: btn.text },
      ...(btn.url ? { url: btn.url } : {}),
      ...(btn.value ? { value: btn.value } : {}),
      ...(btn.actionId ? { action_id: btn.actionId } : {}),
      ...(btn.style ? { style: btn.style } : {}),
    })),
  }
}

// ============================================
// Message Builder
// ============================================

/**
 * Build a complete Slack message with optional details, note, and button.
 * Covers 90% of notification use cases.
 *
 *   slackMessage({
 *     title: '🚀 New signup',
 *     details: { Name: 'John', Email: 'john@acme.com' },
 *     note: 'First user from this company',
 *     buttonText: 'View Customer',
 *     buttonUrl: 'https://admin.dilipod.com/customers/123',
 *   })
 */
export function slackMessage(options: {
  title: string
  details?: Record<string, string | number>
  note?: string
  buttonText?: string
  buttonUrl?: string
}): SlackMessage {
  const blocks: SlackBlock[] = [slackSection(`*${options.title}*`)]

  if (options.details && Object.keys(options.details).length > 0) {
    blocks.push(slackFields(options.details))
  }

  if (options.note) {
    blocks.push(slackSection(options.note))
  }

  if (options.buttonUrl && options.buttonText) {
    blocks.push(slackActions([{ text: options.buttonText, url: options.buttonUrl }]))
  }

  return {
    text: options.title,
    blocks,
  }
}
