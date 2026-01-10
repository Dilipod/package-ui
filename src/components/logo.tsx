'use client'

import * as React from 'react'

interface LogoProps {
  variant?: 'dark' | 'light' // dark = black text, light = white text
  size?: 'sm' | 'md' | 'lg'
  href?: string | null // defaults to '/', pass null to disable link
  className?: string
}

const sizes = {
  sm: { width: 100, height: 30 },
  md: { width: 130, height: 40 },
  lg: { width: 160, height: 50 },
}

/**
 * Logo component that renders the Dilipod logo as inline SVG
 * 
 * @param variant - 'dark' for light backgrounds (black text), 'light' for dark backgrounds (white text)
 * @param size - 'sm' | 'md' | 'lg'
 * @param href - Optional link href (wraps logo in anchor tag)
 * @param className - Additional CSS classes
 */
export function Logo({
  variant = 'dark',
  size = 'md',
  href = '/',
  className,
}: LogoProps) {
  const s = sizes[size]
  const textColor = variant === 'light' ? 'white' : '#0A0A0A'
  const iconTextColor = variant === 'light' ? 'white' : '#0A0A0A'

  const svgContent = (
    <svg
      width={s.width}
      height={s.height}
      viewBox="0 0 130 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#007A70" />
          <stop offset="50%" stopColor="#00B8A9" />
          <stop offset="100%" stopColor="#00E5D4" />
        </linearGradient>
      </defs>
      {/* Icon */}
      <rect width="40" height="40" rx="4" fill={`url(#gradient-${variant})`} />
      <text
        x="20"
        y="29"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill={iconTextColor}
      >
        D
      </text>
      {/* Text */}
      <text
        x="52"
        y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="1"
        fill={textColor}
      >
        Dilipod
      </text>
    </svg>
  )

  if (href !== null) {
    return (
      <a href={href} aria-label="Go to homepage" className="inline-flex items-center group">
        {svgContent}
      </a>
    )
  }

  return <div className="inline-flex items-center">{svgContent}</div>
}

export type { LogoProps }
