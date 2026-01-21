'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Button } from './button'
import { IconBox } from './icon-box'
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
  
  // Calculate labor savings (before worker cost)
  const laborSavingsPerYear = metrics.fte_equivalent * HOURS_PER_FTE_YEAR * metrics.hourly_rate_euros
  
  // Net annual savings
  const netAnnualSavings = laborSavingsPerYear - workerCostPerYear

  return (
    <Card className={cn("border-[var(--cyan)]/20 bg-gradient-to-br from-white to-[var(--cyan)]/5", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <IconBox size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-88a16,16,0,1,1-16-16A16,16,0,0,1,144,128Zm-56,0a16,16,0,1,1-16-16A16,16,0,0,1,88,128Zm112,0a16,16,0,1,1-16-16A16,16,0,0,1,200,128Z"/>
              </svg>
            </IconBox>
            Impact Metrics (ROI)
          </CardTitle>
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
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Time per task */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-sm bg-[var(--cyan)]/10 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="text-[var(--cyan)]">
                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <label className="text-sm text-muted-foreground block mb-1">Time per Task</label>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={metrics.time_saved_minutes_per_run}
                    onChange={(e) => setMetrics(prev => ({ 
                      ...prev, 
                      time_saved_minutes_per_run: parseInt(e.target.value) || 0 
                    }))}
                    className="w-16 px-2 py-1 text-lg font-bold border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] bg-background"
                    min="0"
                  />
                  <span className="text-muted-foreground">min</span>
                </div>
              ) : (
                <p className="text-2xl font-bold">
                  {metrics.time_saved_minutes_per_run} <span className="text-base font-normal text-muted-foreground">min</span>
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-1">How long manually</p>
            </div>
          </div>

          {/* Manual cost */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-sm bg-[var(--cyan)]/10 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="text-[var(--cyan)]">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144a8,8,0,0,1,8,8v4.4c14.25,3.14,24,14.43,24,30.6,0,4.42-3.58,8-8,8s-8-3.58-8-8c0-8.64-7.18-13-16-13s-16,4.36-16,13,7.18,13,16,13c17.64,0,32,11.35,32,29,0,16.17-9.75,27.46-24,30.6V192a8,8,0,0,1-16,0v-4.4c-14.25-3.14-24-14.43-24-30.6a8,8,0,0,1,16,0c0,8.64,7.18,13,16,13s16-4.36,16-13-7.18-13-16-13c-17.64,0-32-11.35-32-29,0-16.17,9.75-27.46,24-30.6V80A8,8,0,0,1,128,72Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <label className="text-sm text-muted-foreground block mb-1">Manual Cost</label>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">€</span>
                  <input
                    type="number"
                    value={metrics.hourly_rate_euros}
                    onChange={(e) => setMetrics(prev => ({ 
                      ...prev, 
                      hourly_rate_euros: parseFloat(e.target.value) || 0 
                    }))}
                    className="w-16 px-2 py-1 text-lg font-bold border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] bg-background"
                    min="0"
                    step="0.5"
                  />
                  <span className="text-muted-foreground">/hr</span>
                </div>
              ) : (
                <p className="text-2xl font-bold">
                  €{metrics.hourly_rate_euros} <span className="text-base font-normal text-muted-foreground">/hr</span>
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-1">Employee hourly cost</p>
            </div>
          </div>

          {/* Job portion */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-sm bg-[var(--cyan)]/10 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="text-[var(--cyan)]">
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <label className="text-sm text-muted-foreground block mb-1">Job Portion</label>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={Math.round(metrics.fte_equivalent * 100)}
                    onChange={(e) => setMetrics(prev => ({ 
                      ...prev, 
                      fte_equivalent: (parseFloat(e.target.value) || 0) / 100
                    }))}
                    className="w-16 px-2 py-1 text-lg font-bold border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] bg-background"
                    min="0"
                    max="1000"
                    step="5"
                  />
                  <span className="text-muted-foreground">%</span>
                </div>
              ) : (
                <p className="text-2xl font-bold">
                  {Math.round(metrics.fte_equivalent * 100)} <span className="text-base font-normal text-muted-foreground">%</span>
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-1">% of FTE ({hoursSavedPerYear}h/year)</p>
            </div>
          </div>

          {/* Net Annual Savings */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-sm bg-[var(--cyan)]/10 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="text-[var(--cyan)]">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144a8,8,0,0,1,8,8v4.4c14.25,3.14,24,14.43,24,30.6,0,4.42-3.58,8-8,8s-8-3.58-8-8c0-8.64-7.18-13-16-13s-16,4.36-16,13,7.18,13,16,13c17.64,0,32,11.35,32,29,0,16.17-9.75,27.46-24,30.6V192a8,8,0,0,1-16,0v-4.4c-14.25-3.14-24-14.43-24-30.6a8,8,0,0,1,16,0c0,8.64,7.18,13,16,13s16-4.36,16-13-7.18-13-16-13c-17.64,0-32-11.35-32-29,0-16.17,9.75-27.46,24-30.6V80A8,8,0,0,1,128,72Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <label className="text-sm text-muted-foreground block mb-1">Net Annual Savings</label>
              <p className={cn("text-2xl font-bold", netAnnualSavings >= 0 ? "text-[var(--cyan)]" : "text-red-500")}>
                €{netAnnualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                €{laborSavingsPerYear.toLocaleString(undefined, { maximumFractionDigits: 0 })} labor − €{workerCostPerYear} worker
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
