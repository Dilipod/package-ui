/**
 * Email Template Helpers
 *
 * Shared branded email template and HTML building blocks.
 * Used by both platform and admin apps via their local `lib/email.ts` re-exports.
 */

/**
 * Wrap email body content in the standard Dilipod branded template.
 *
 * Usage:
 *   emailTemplate({
 *     body: '<h2>Hello</h2><p>Content here</p>',
 *   })
 *
 * Or with a preheader (hidden preview text in email clients):
 *   emailTemplate({
 *     preheader: 'Quick summary shown in inbox',
 *     body: '...',
 *   })
 */
export function emailTemplate({ body, preheader }: { body: string; preheader?: string }): string {
  const preheaderHtml = preheader
    ? `<div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${preheader}</div>`
    : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>Dilipod</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f0f0f0; -webkit-font-smoothing: antialiased;">
  ${preheaderHtml}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f0f0;">
    <tr>
      <td align="center" style="padding: 40px 16px;">
        <!-- Main card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px;">
          <!-- Logo header -->
          <tr>
            <td style="padding: 0 0 24px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width: 32px; height: 32px; background-color: #00e5cc; border-radius: 6px; text-align: center; vertical-align: middle; font-size: 16px; font-weight: 700; color: #111111; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                    D
                  </td>
                  <td style="padding-left: 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 17px; font-weight: 600; color: #111111; letter-spacing: -0.2px;">
                    Dilipod
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Content card -->
          <tr>
            <td>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 6px; overflow: hidden; border: 1px solid #e2e2e2;">
                <!-- Accent bar -->
                <tr>
                  <td style="height: 3px; background: linear-gradient(90deg, #00e5cc 0%, #00c8b5 100%); font-size: 0; line-height: 0;">&nbsp;</td>
                </tr>
                <!-- Body content -->
                <tr>
                  <td style="padding: 36px 40px 40px 40px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; line-height: 1.7; color: #374151;">
                    ${body}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 4px 0 4px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #9ca3af;">
                    &copy; ${new Date().getFullYear()} Dilipod &mdash; Your Digital Workforce
                  </td>
                  <td align="right" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px;">
                    <a href="https://dilipod.com" style="color: #9ca3af; text-decoration: none;">dilipod.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

/**
 * Render a CTA button for use inside emailTemplate body.
 *
 *   buttonHtml({ text: 'Reset Password', href: 'https://...' })
 *   buttonHtml({ text: 'View Incident', href: '...', variant: 'danger' })
 */
export function buttonHtml({
  text,
  href,
  variant = 'primary',
}: {
  text: string
  href: string
  variant?: 'primary' | 'danger'
}): string {
  const bg = variant === 'danger' ? '#dc2626' : '#111111'
  const color = '#ffffff'
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top: 24px;">
  <tr>
    <td style="background-color: ${bg}; border-radius: 6px;">
      <a href="${href}" style="display: inline-block; padding: 12px 32px; color: ${color}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; text-decoration: none;">
        ${text} &rarr;
      </a>
    </td>
  </tr>
</table>`
}

/**
 * Render an info box (grey background) for key details.
 *
 *   infoBoxHtml('<strong>Status:</strong> Deployed')
 */
export function infoBoxHtml(innerHtml: string): string {
  return `<div style="background-color: #f8fafb; padding: 16px 20px; border-radius: 6px; border: 1px solid #e5e7eb; margin: 20px 0; border-left: 3px solid #00e5cc;">
  ${innerHtml}
</div>`
}

/**
 * Render a warning/note box (yellow background).
 *
 *   noteBoxHtml('This link expires in 1 hour.')
 */
export function noteBoxHtml(text: string): string {
  return `<div style="background-color: #fffbeb; padding: 14px 18px; border-radius: 6px; border: 1px solid #fde68a; margin: 20px 0; font-size: 13px; color: #92400e; border-left: 3px solid #f59e0b;">
  ${text}
</div>`
}
