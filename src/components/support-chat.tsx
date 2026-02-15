'use client'

import { useState, useEffect, useRef, useCallback, ReactNode } from 'react'
import { Button } from './button'
import { Textarea } from './textarea'
import {
  CircleNotch,
  PaperPlaneTilt,
} from '@phosphor-icons/react'

// ============================================
// Types
// ============================================

export interface SupportChatMessage {
  id: string
  role: 'customer' | 'admin' | 'system'
  content: string
  type: 'message' | 'event' | 'suggestion'
  created_at: string
  metadata?: Record<string, unknown>
}

export interface SupportChatProps {
  /** Fetch messages from this endpoint */
  messagesEndpoint: string
  /** POST new messages to this endpoint */
  sendEndpoint: string
  /** Role of the current user */
  currentRole: 'customer' | 'admin'
  /** Poll interval in ms (0 to disable). Default: 5000 */
  pollInterval?: number
  /** Placeholder for the input */
  placeholder?: string
  /** Custom empty state */
  emptyMessage?: string | ReactNode
  /** Additional CSS class */
  className?: string
}

// ============================================
// Helpers
// ============================================

function formatMessageTime(dateStr: string): string {
  const d = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)

  if (diffMins < 1) return 'just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`

  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
}

// ============================================
// Component
// ============================================

export function SupportChat({
  messagesEndpoint,
  sendEndpoint,
  currentRole,
  pollInterval = 5000,
  placeholder = 'Type a message...',
  emptyMessage = 'No messages yet. Start the conversation!',
  className = '',
}: SupportChatProps) {
  const [messages, setMessages] = useState<SupportChatMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const prevMessageCountRef = useRef(0)

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch(messagesEndpoint)
      if (!res.ok) return
      const data = await res.json()
      setMessages(data.messages || [])
    } catch {
      // Silently fail
    } finally {
      setLoading(false)
    }
  }, [messagesEndpoint])

  // Initial fetch + polling
  useEffect(() => {
    fetchMessages()
    if (pollInterval > 0) {
      const interval = setInterval(fetchMessages, pollInterval)
      return () => clearInterval(interval)
    }
  }, [fetchMessages, pollInterval])

  // Auto-scroll when new messages arrive
  useEffect(() => {
    if (messages.length > prevMessageCountRef.current) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    }
    prevMessageCountRef.current = messages.length
  }, [messages.length])

  const handleSend = async () => {
    const content = inputValue.trim()
    if (!content || sending) return

    setSending(true)
    setInputValue('')

    // Optimistic update
    const optimisticMsg: SupportChatMessage = {
      id: `temp-${Date.now()}`,
      role: currentRole,
      content,
      type: 'message',
      created_at: new Date().toISOString(),
    }
    setMessages((prev) => [...prev, optimisticMsg])

    try {
      const res = await fetch(sendEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })

      if (res.ok) {
        // Replace optimistic message with real one
        await fetchMessages()
      } else {
        // Remove optimistic message on failure
        setMessages((prev) => prev.filter((m) => m.id !== optimisticMsg.id))
      }
    } catch {
      setMessages((prev) => prev.filter((m) => m.id !== optimisticMsg.id))
    } finally {
      setSending(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (loading) {
    return (
      <div className={`flex items-center justify-center py-8 ${className}`}>
        <CircleNotch className="w-5 h-5 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-[400px] min-h-[200px] px-1">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-sm text-muted-foreground py-8">
            {typeof emptyMessage === 'string' ? <p>{emptyMessage}</p> : emptyMessage}
          </div>
        ) : (
          messages.map((msg) => {
            // System events — centered, subtle
            if (msg.type === 'event' || msg.role === 'system') {
              return (
                <div key={msg.id} className="flex justify-center">
                  <div className="bg-gray-50 border border-gray-100 rounded-full px-3 py-1 text-xs text-muted-foreground max-w-[90%] text-center">
                    {msg.content}
                    <span className="ml-2 opacity-60">{formatMessageTime(msg.created_at)}</span>
                  </div>
                </div>
              )
            }

            // Regular messages
            const isCurrentUser = msg.role === currentRole
            return (
              <div key={msg.id} className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg px-3 py-2 ${
                  isCurrentUser
                    ? 'bg-[var(--cyan)] text-white'
                    : 'bg-gray-100 text-[var(--black)]'
                }`}>
                  {!isCurrentUser && (
                    <p className="text-xs font-medium mb-0.5 opacity-70">
                      {msg.role === 'admin' ? 'Dilipod Team' : 'You'}
                    </p>
                  )}
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  <p className={`text-[10px] mt-1 ${isCurrentUser ? 'text-white/60' : 'text-muted-foreground'}`}>
                    {formatMessageTime(msg.created_at)}
                  </p>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Input area */}
      <div className="flex gap-2 border-t border-gray-100 pt-3">
        <Textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={1}
          className="resize-none min-h-[36px] py-2 flex-1"
        />
        <Button
          onClick={handleSend}
          disabled={sending || !inputValue.trim()}
          size="sm"
          className="flex-shrink-0 h-9"
        >
          {sending ? (
            <CircleNotch className="w-4 h-4 animate-spin" />
          ) : (
            <PaperPlaneTilt className="w-4 h-4" weight="bold" />
          )}
        </Button>
      </div>
    </div>
  )
}

export default SupportChat
