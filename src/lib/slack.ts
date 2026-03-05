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
 *   slackFields({ Process: 'Invoice Bot', Status: 'Live' })
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
// Modal & Select Builders
// ============================================

export interface SlackModalView {
  type: 'modal'
  callback_id: string
  title: { type: 'plain_text'; text: string }
  submit?: { type: 'plain_text'; text: string }
  close?: { type: 'plain_text'; text: string }
  blocks: SlackBlock[]
  private_metadata?: string
}

export interface SlackOptionGroup {
  label: { type: 'plain_text'; text: string }
  options: Array<{
    text: { type: 'plain_text'; text: string }
    value: string
  }>
}

/**
 * Build a modal view for Slack.
 *
 *   slackModal({
 *     callbackId: 'run_process',
 *     title: 'Run a Process',
 *     submitText: 'Run',
 *     blocks: [...],
 *   })
 */
export function slackModal(options: {
  callbackId: string
  title: string
  submitText?: string
  closeText?: string
  blocks: SlackBlock[]
  privateMetadata?: string
}): SlackModalView {
  return {
    type: 'modal',
    callback_id: options.callbackId,
    title: { type: 'plain_text', text: options.title },
    ...(options.submitText
      ? { submit: { type: 'plain_text', text: options.submitText } }
      : {}),
    ...(options.closeText
      ? { close: { type: 'plain_text', text: options.closeText } }
      : {}),
    blocks: options.blocks,
    ...(options.privateMetadata
      ? { private_metadata: options.privateMetadata }
      : {}),
  }
}

/**
 * Build a static select input block (for modals or messages).
 *
 *   slackStaticSelect({
 *     blockId: 'process_select',
 *     actionId: 'process_id',
 *     label: 'Process',
 *     placeholder: 'Select a process',
 *     optionGroups: [
 *       { label: 'Invoice Bot', options: [{ text: 'Send Invoices', value: 'uuid' }] },
 *     ],
 *   })
 */
export function slackStaticSelect(options: {
  blockId: string
  actionId: string
  label: string
  placeholder?: string
  options?: Array<{ text: string; value: string }>
  optionGroups?: Array<{ label: string; options: Array<{ text: string; value: string }> }>
}): SlackBlock {
  const element: Record<string, unknown> = {
    type: 'static_select',
    action_id: options.actionId,
    placeholder: { type: 'plain_text', text: options.placeholder || 'Select...' },
  }

  if (options.optionGroups) {
    element.option_groups = options.optionGroups.map((group) => ({
      label: { type: 'plain_text', text: group.label },
      options: group.options.map((opt) => ({
        text: { type: 'plain_text', text: opt.text },
        value: opt.value,
      })),
    }))
  } else if (options.options) {
    element.options = options.options.map((opt) => ({
      text: { type: 'plain_text', text: opt.text },
      value: opt.value,
    }))
  }

  return {
    type: 'input',
    block_id: options.blockId,
    label: { type: 'plain_text', text: options.label },
    element,
  } as unknown as SlackBlock
}

/**
 * Build a plain text input block (for modals).
 */
export function slackTextInput(options: {
  blockId: string
  actionId: string
  label: string
  placeholder?: string
  optional?: boolean
  multiline?: boolean
}): SlackBlock {
  return {
    type: 'input',
    block_id: options.blockId,
    optional: options.optional ?? false,
    label: { type: 'plain_text', text: options.label },
    element: {
      type: 'plain_text_input',
      action_id: options.actionId,
      ...(options.placeholder
        ? { placeholder: { type: 'plain_text', text: options.placeholder } }
        : {}),
      ...(options.multiline ? { multiline: true } : {}),
    },
  } as unknown as SlackBlock
}

/**
 * Build a divider block.
 */
export function slackDivider(): SlackBlock {
  return { type: 'divider' } as SlackBlock
}

/**
 * Build a context block (small muted text).
 */
export function slackContext(text: string): SlackBlock {
  return {
    type: 'context',
    elements: [{ type: 'mrkdwn', text }],
  } as unknown as SlackBlock
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
