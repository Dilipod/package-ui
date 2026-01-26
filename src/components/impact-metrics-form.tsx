'use client'

import { useState } from 'react'
import { Card, CardContent } from './card'
import { Button } from './button'
import { toast } from './use-toast'
import { cn } from '../lib/utils'

// Working hours per FTE per year
// 40 hrs/week × 47 weeks (52 - 4 vacation - 1 holidays) = 1,880 hours
const HOURS_PER_FTE_YEAR = 1880

// Price per worker by tier (euros/month)
const TIER_PRICING: Record<string, number> = {
  starter: 29,
  growth: 25,
  scale: 21,
  enterprise: 21,
}

export interface ImpactMetrics {
  time_saved_minutes_per_run: number
  hourly_rate_euros: number
  fte_equivalent: number
  estimated_annual_savings_euros: number
}

export interface ImpactMetricsFormProps {
  /** The worker/agent ID */
  workerId: string
  /** Initial metrics values */
  initialMetrics: ImpactMetrics
  /** Total executions for this worker */
  totalExecutions?: number
  /** Customer's pricing plan */
  customerPlan?: string
  /** API endpoint to save metrics (e.g., "/api/workers" or "/api/agents") */
  apiBasePath?: string
  /** Optional custom save handler - if provided, will be called instead of default API */
  onSave?: (workerId: string, metrics: ImpactMetrics) => Promise<boolean>
  /** Whether to show toast notifications */
  showToasts?: boolean
  /** Custom class name */
  className?: string
}

export function ImpactMetricsForm({ 
  workerId, 
  initialMetrics, 
  totalExecutions = 0, 
  customerPlan = 'starter',
  apiBasePath = '/api/workers',
  onSave,
  showToasts = true,
  className,
}: ImpactMetricsFormProps) {
  const [metrics, setMetrics] = useState(initialMetrics)
  const [savedMetrics, setSavedMetrics] = useState(initialMetrics)
  const [isSaving, setIsSaving] = useState(false)
  
  // Check if metrics have been saved before (non-default values in DB)
  const isInitiallySaved = 
    initialMetrics.time_saved_minutes_per_run !== 30 ||
    initialMetrics.hourly_rate_euros !== 20 ||
    initialMetrics.fte_equivalent !== 0.1
  
  const [isEditing, setIsEditing] = useState(!isInitiallySaved)

  // Worker cost based on customer's plan
  const workerCostPerMonth = TIER_PRICING[customerPlan] || TIER_PRICING.starter
  const workerCostPerYear = workerCostPerMonth * 12

  // Calculate estimated annual savings based on FTE equivalent minus worker cost
  const calculateAnnualSavings = (fteEquivalent: number, hourlyRate: number) => {
    const laborSavings = fteEquivalent * HOURS_PER_FTE_YEAR * hourlyRate
    return laborSavings - workerCostPerYear
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const annualSavings = calculateAnnualSavings(
        metrics.fte_equivalent,
        metrics.hourly_rate_euros
      )

      const updatedMetrics = { ...metrics, estimated_annual_savings_euros: annualSavings }
      
      let success = false
      
      if (onSave) {
        // Use custom save handler
        success = await onSave(workerId, updatedMetrics)
      } else {
        // Use default API
        const response = await fetch(`${apiBasePath}/${workerId}/impact-metrics`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedMetrics),
        })
        success = response.ok
      }

      if (success) {
        setMetrics(updatedMetrics)
        setSavedMetrics(updatedMetrics)
        setIsEditing(false)
        if (showToasts) {
          toast({
            title: 'Metrics saved',
            description: 'Impact metrics have been updated.',
            variant: 'success',
          })
        }
      } else {
        throw new Error('Failed to save')
      }
    } catch (error) {
      console.error('Failed to save metrics:', error)
      if (showToasts) {
        toast({
          title: 'Failed to save',
          description: 'Could not save metrics. Please try again.',
          variant: 'error',
        })
      }
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    setMetrics(savedMetrics)
    setIsEditing(false)
  }

  // Calculate hours saved per year based on FTE
  const hoursSavedPerYear = Math.round(metrics.fte_equivalent * HOURS_PER_FTE_YEAR)
  
  // Calculate implied frequency based on time per task and FTE%
  const timePerTaskHours = metrics.time_saved_minutes_per_run / 60
  const impliedFrequencyPerYear = timePerTaskHours > 0 
    ? Math.round(hoursSavedPerYear / timePerTaskHours) 
    : 0
  const impliedFrequencyPerMonth = Math.round(impliedFrequencyPerYear / 12)
  
  // Calculate labor savings (before worker cost)
  const laborSavingsPerYear = metrics.fte_equivalent * HOURS_PER_FTE_YEAR * metrics.hourly_rate_euros
  
  // Net annual savings
  const netAnnualSavings = laborSavingsPerYear - workerCostPerYear

  return (
    <Card className={cn("border-[var(--cyan)]/20 bg-gradient-to-br from-white to-[var(--cyan)]/5", className)}>
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Impact Metrics (ROI)</p>
          <div className="flex items-center gap-2">
            {isEditing ? (
              <>
                {isInitiallySaved && (
                  <Button 
                    onClick={handleCancel} 
                    size="sm"
                    variant="ghost"
                  >
                    Cancel
                  </Button>
                )}
                <Button 
                  onClick={handleSave} 
                  disabled={isSaving} 
                  size="sm"
                >
                  {isSaving ? 'Saving...' : 'Save'}
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => setIsEditing(true)} 
                size="sm"
                variant="outline"
              >
                Edit
              </Button>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Time per task */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Time per Task</p>
            {isEditing ? (
              <div className="flex items-baseline gap-1">
                <input
                  type="number"
                  value={metrics.time_saved_minutes_per_run}
                  onChange={(e) => setMetrics(prev => ({ 
                    ...prev, 
                    time_saved_minutes_per_run: parseInt(e.target.value) || 0 
                  }))}
                  className="w-16 px-2 py-1 text-2xl font-bold border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] bg-background"
                  min="0"
                />
                <span className="text-sm text-muted-foreground">min</span>
              </div>
            ) : (
              <p className="text-2xl font-bold">
                {metrics.time_saved_minutes_per_run}<span className="text-sm font-normal text-muted-foreground ml-1">min</span>
              </p>
            )}
          </div>

          {/* Manual cost */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Manual Cost</p>
            {isEditing ? (
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">€</span>
                <input
                  type="number"
                  value={metrics.hourly_rate_euros}
                  onChange={(e) => setMetrics(prev => ({ 
                    ...prev, 
                    hourly_rate_euros: parseFloat(e.target.value) || 0 
                  }))}
                  className="w-16 px-2 py-1 text-2xl font-bold border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] bg-background"
                  min="0"
                  step="0.5"
                />
                <span className="text-sm text-muted-foreground">/hr</span>
              </div>
            ) : (
              <p className="text-2xl font-bold">
                €{metrics.hourly_rate_euros}<span className="text-sm font-normal text-muted-foreground ml-1">/hr</span>
              </p>
            )}
          </div>

          {/* Job portion */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Job Portion</p>
            {isEditing ? (
              <div className="flex items-baseline gap-1">
                <input
                  type="number"
                  value={Math.round(metrics.fte_equivalent * 100)}
                  onChange={(e) => setMetrics(prev => ({ 
                    ...prev, 
                    fte_equivalent: (parseFloat(e.target.value) || 0) / 100
                  }))}
                  className="w-16 px-2 py-1 text-2xl font-bold border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] bg-background"
                  min="0"
                  max="1000"
                  step="5"
                />
                <span className="text-sm text-muted-foreground">%</span>
              </div>
            ) : (
              <p className="text-2xl font-bold">
                {Math.round(metrics.fte_equivalent * 100)}<span className="text-sm font-normal text-muted-foreground ml-1">%</span>
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-0.5">{hoursSavedPerYear}h/year</p>
          </div>

          {/* Net Annual Savings */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Net Annual Savings</p>
            <p className={cn("text-2xl font-bold", netAnnualSavings >= 0 ? "text-[var(--cyan)]" : "text-red-500")}>
              €{netAnnualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              €{laborSavingsPerYear.toLocaleString(undefined, { maximumFractionDigits: 0 })} − €{workerCostPerYear}
            </p>
          </div>
        </div>

        {/* Implied frequency indicator */}
        {impliedFrequencyPerYear > 0 && (
          <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50">
            Implied: ~{impliedFrequencyPerMonth}×/month ({impliedFrequencyPerYear}×/year)
          </p>
        )}
      </CardContent>
    </Card>
  )
}
