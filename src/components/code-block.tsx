'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  /** Code content */
  children?: React.ReactNode
  /** Language for syntax highlighting (optional) */
  language?: string
}

const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ className, children, language, ...props }, ref) => {
    return (
      <pre
        ref={ref}
        className={cn(
          'rounded-sm bg-muted p-4 text-sm overflow-auto font-mono',
          className
        )}
        {...(language && { 'data-language': language })}
        {...props}
      >
        <code>{children}</code>
      </pre>
    )
  }
)
CodeBlock.displayName = 'CodeBlock'

export { CodeBlock }
