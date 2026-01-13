'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface UsageChartDataPoint {
  /** Label for the data point (e.g., month name) */
  label: string
  /** Primary value */
  value: number
  /** Secondary value (optional, for stacked bars) */
  secondaryValue?: number
}

export interface UsageChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Chart data points */
  data: UsageChartDataPoint[]
  /** Height of the chart area in pixels */
  height?: number
  /** Primary bar color */
  primaryColor?: string
  /** Secondary bar color (for stacked bars) */
  secondaryColor?: string
  /** Show value labels on hover */
  showTooltip?: boolean
  /** Format function for values */
  formatValue?: (value: number) => string
}

const UsageChart = React.forwardRef<HTMLDivElement, UsageChartProps>(
  (
    {
      className,
      data,
      height = 200,
      primaryColor = 'var(--cyan)',
      secondaryColor = '#a855f7',
      showTooltip = true,
      formatValue = (v) => v.toLocaleString(),
      ...props
    },
    ref
  ) => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

    // Calculate max value for scaling
    const maxValue = React.useMemo(() => {
      return Math.max(
        ...data.map((d) => d.value + (d.secondaryValue || 0)),
        1
      )
    }, [data])

    // Add padding to max value for visual breathing room
    const scaledMax = maxValue * 1.1

    const barWidth = 100 / Math.max(data.length, 1)
    const barGap = barWidth * 0.3
    const actualBarWidth = barWidth - barGap

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div className="relative" style={{ height }}>
          {/* Y-axis grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center w-full">
                <div className="w-full border-t border-gray-100" />
              </div>
            ))}
          </div>

          {/* Bars */}
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            {data.map((point, index) => {
              const primaryHeight = (point.value / scaledMax) * 100
              const secondaryHeight = point.secondaryValue
                ? (point.secondaryValue / scaledMax) * 100
                : 0
              const totalHeight = primaryHeight + secondaryHeight
              const x = index * barWidth + barGap / 2
              const isHovered = hoveredIndex === index

              return (
                <g
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="cursor-pointer"
                >
                  {/* Hover background */}
                  <rect
                    x={`${x}%`}
                    y="0"
                    width={`${actualBarWidth}%`}
                    height="100%"
                    fill={isHovered ? 'rgba(0,0,0,0.02)' : 'transparent'}
                    rx="4"
                  />
                  {/* Secondary bar (stacked on top) */}
                  {point.secondaryValue !== undefined && point.secondaryValue > 0 && (
                    <rect
                      x={`${x}%`}
                      y={`${100 - totalHeight}%`}
                      width={`${actualBarWidth}%`}
                      height={`${secondaryHeight}%`}
                      fill={secondaryColor}
                      rx="4"
                      className="transition-all duration-200"
                      style={{
                        opacity: isHovered ? 1 : 0.85,
                      }}
                    />
                  )}
                  {/* Primary bar */}
                  <rect
                    x={`${x}%`}
                    y={`${100 - primaryHeight - (point.secondaryValue ? 0 : 0)}%`}
                    width={`${actualBarWidth}%`}
                    height={`${primaryHeight}%`}
                    fill={primaryColor}
                    rx={point.secondaryValue ? '0' : '4'}
                    style={{
                      borderTopLeftRadius: point.secondaryValue ? 0 : 4,
                      borderTopRightRadius: point.secondaryValue ? 0 : 4,
                    }}
                    className="transition-all duration-200"
                  />
                </g>
              )
            })}
          </svg>

          {/* Tooltip */}
          {showTooltip && hoveredIndex !== null && data[hoveredIndex] && (
            <div
              className="absolute z-10 px-3 py-2 text-sm bg-[var(--black)] text-white rounded-lg shadow-lg pointer-events-none transform -translate-x-1/2"
              style={{
                left: `${(hoveredIndex + 0.5) * barWidth}%`,
                top: -8,
              }}
            >
              <div className="font-medium">{data[hoveredIndex].label}</div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />
                <span>{formatValue(data[hoveredIndex].value)}</span>
              </div>
              {data[hoveredIndex].secondaryValue !== undefined && (
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: secondaryColor }}
                  />
                  <span>{formatValue(data[hoveredIndex].secondaryValue)}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* X-axis labels */}
        <div className="flex mt-3">
          {data.map((point, index) => (
            <div
              key={index}
              className="text-center text-xs text-gray-500 truncate"
              style={{ width: `${barWidth}%` }}
            >
              {point.label}
            </div>
          ))}
        </div>
      </div>
    )
  }
)
UsageChart.displayName = 'UsageChart'

export { UsageChart }
