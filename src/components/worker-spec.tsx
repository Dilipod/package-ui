'use client'

import * as React from 'react'
import { useState } from 'react'
import {
  Target,
  Crosshair,
  ListNumbers,
  TreeStructure,
  Lightning,
  Wrench,
  Plugs,
  ShieldCheck,
  CaretDown,
  CaretRight,
  Clock,
  TrendUp,
  CurrencyEur,
  Sparkle,
  Lightbulb,
  Robot,
} from '@phosphor-icons/react'
import { FlowchartDiagram } from './flowchart-diagram'
import { Badge } from './badge'

// ============================================
// Types
// ============================================

export interface WorkerSpecDocumentation {
  scope: string | null
  goal: string | null
  steps: Array<{
    step: number
    title: string
    description: string
    tools_used?: string[]
  }> | null
  diagram: string | null
  expected_impact: {
    time_saved_per_occurrence_minutes: number
    frequency: string
    yearly_hours_saved: number
    yearly_cost_savings_euros: number
    qualitative_benefits: string[]
  } | null
  technical_requirements: string[] | null
  integration_points: string[] | null
  edge_cases_handled: Array<{
    scenario: string
    handling: string
  }> | null
  version: number
  model_used: string | null
  updated_at: string
}

export interface WorkerSpecProps {
  /** The Knowledge Builder final documentation */
  documentation: WorkerSpecDocumentation | null
  /** Optional className for the container */
  className?: string
}

// ============================================
// Frequency labels for impact display
// ============================================

const frequencyLabels: Record<string, string> = {
  multiple_daily: 'occurrence',
  daily: 'day',
  weekly: 'week',
  monthly: 'month',
  quarterly: 'quarter',
  yearly: 'year',
}

// ============================================
// Section Header Component
// ============================================

function SectionHeader({
  icon,
  title,
  count,
  expanded,
  onToggle,
  iconColor = 'text-[var(--cyan)]',
}: {
  icon: React.ReactNode
  title: string
  count?: number
  expanded: boolean
  onToggle: () => void
  iconColor?: string
}) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hover:text-[var(--black)] transition-colors w-full"
    >
      {expanded ? <CaretDown size={12} /> : <CaretRight size={12} />}
      <span className={iconColor}>{icon}</span>
      {title}
      {count !== undefined && (
        <span className="text-muted-foreground font-normal">({count})</span>
      )}
    </button>
  )
}

// ============================================
// Main Component
// ============================================

export function WorkerSpec({ documentation, className }: WorkerSpecProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['goal', 'scope', 'steps', 'diagram', 'impact', 'requirements', 'edge_cases'])
  )

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev)
      if (next.has(section)) {
        next.delete(section)
      } else {
        next.add(section)
      }
      return next
    })
  }

  // Empty state
  if (!documentation) {
    return (
      <div className={className}>
        <div className="flex items-center gap-3 p-6 rounded-sm border border-dashed border-gray-300 bg-gray-50/50">
          <div className="w-10 h-10 rounded-sm bg-gray-100 flex items-center justify-center">
            <Robot size={20} className="text-gray-400" />
          </div>
          <div>
            <h3 className="font-semibold text-[var(--black)]">Worker Spec Pending</h3>
            <p className="text-sm text-muted-foreground">
              The final specification will be generated automatically after the documentation is approved.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const freqLabel = documentation.expected_impact?.frequency
    ? frequencyLabels[documentation.expected_impact.frequency] || documentation.expected_impact.frequency
    : 'occurrence'

  return (
    <div className={className}>
      <div className="space-y-5">
        {/* Goal */}
        {documentation.goal && (
          <div>
            <SectionHeader
              icon={<Target size={12} weight="fill" />}
              title="Goal"
              expanded={expandedSections.has('goal')}
              onToggle={() => toggleSection('goal')}
            />
            {expandedSections.has('goal') && (
              <p className="text-sm text-muted-foreground leading-relaxed pl-5 mt-2">
                {documentation.goal}
              </p>
            )}
          </div>
        )}

        {/* Scope */}
        {documentation.scope && (
          <div>
            <SectionHeader
              icon={<Crosshair size={12} weight="fill" />}
              title="Scope"
              expanded={expandedSections.has('scope')}
              onToggle={() => toggleSection('scope')}
            />
            {expandedSections.has('scope') && (
              <p className="text-sm text-muted-foreground leading-relaxed pl-5 mt-2">
                {documentation.scope}
              </p>
            )}
          </div>
        )}

        {/* Detailed Steps */}
        {documentation.steps && documentation.steps.length > 0 && (
          <div>
            <SectionHeader
              icon={<ListNumbers size={12} weight="fill" />}
              title="Steps"
              count={documentation.steps.length}
              expanded={expandedSections.has('steps')}
              onToggle={() => toggleSection('steps')}
            />
            {expandedSections.has('steps') && (
              <div className="space-y-3 pl-5 mt-2">
                {documentation.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-sm bg-[var(--cyan)]/10 flex items-center justify-center text-xs font-bold text-[var(--cyan)] shrink-0 mt-0.5">
                      {step.step || i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[var(--black)]">{step.title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{step.description}</p>
                      {step.tools_used && step.tools_used.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {step.tools_used.map((tool, j) => (
                            <span key={j} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-gray-100 text-[10px] font-medium text-gray-600">
                              <Wrench size={10} />
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Workflow Diagram */}
        {documentation.diagram && (
          <div>
            <SectionHeader
              icon={<TreeStructure size={12} weight="fill" />}
              title="Workflow Diagram"
              expanded={expandedSections.has('diagram')}
              onToggle={() => toggleSection('diagram')}
              iconColor="text-purple-500"
            />
            {expandedSections.has('diagram') && (
              <div className="pl-5 mt-2">
                <div className="bg-white border border-gray-100 rounded-sm p-4 overflow-x-auto">
                  <FlowchartDiagram mermaid={documentation.diagram} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Expected Impact */}
        {documentation.expected_impact && (
          <div>
            <SectionHeader
              icon={<Lightning size={12} weight="fill" />}
              title="Expected Impact"
              expanded={expandedSections.has('impact')}
              onToggle={() => toggleSection('impact')}
              iconColor="text-purple-500"
            />
            {expandedSections.has('impact') && (
              <div className="pl-5 mt-2">
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-sm p-4">
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="bg-white rounded-sm p-3 border border-emerald-100 text-center">
                      <Clock size={18} className="text-emerald-600 mx-auto mb-1" />
                      <p className="text-lg font-bold text-[var(--black)]">
                        {documentation.expected_impact.time_saved_per_occurrence_minutes} min
                      </p>
                      <p className="text-[10px] text-muted-foreground">saved per {freqLabel}</p>
                    </div>
                    <div className="bg-white rounded-sm p-3 border border-emerald-100 text-center">
                      <TrendUp size={18} className="text-emerald-600 mx-auto mb-1" />
                      <p className="text-lg font-bold text-[var(--black)]">
                        {documentation.expected_impact.yearly_hours_saved}h
                      </p>
                      <p className="text-[10px] text-muted-foreground">saved per year</p>
                    </div>
                    <div className="bg-white rounded-sm p-3 border border-emerald-100 text-center">
                      <CurrencyEur size={18} className="text-emerald-600 mx-auto mb-1" />
                      <p className="text-lg font-bold text-[var(--black)]">
                        €{documentation.expected_impact.yearly_cost_savings_euros.toLocaleString()}
                      </p>
                      <p className="text-[10px] text-muted-foreground">estimated yearly savings</p>
                    </div>
                  </div>
                  {documentation.expected_impact.qualitative_benefits && documentation.expected_impact.qualitative_benefits.length > 0 && (
                    <div className="space-y-1">
                      {documentation.expected_impact.qualitative_benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-emerald-700">
                          <Sparkle size={14} className="text-emerald-500 shrink-0 mt-0.5" weight="fill" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Technical Requirements & Integration Points */}
        {((documentation.technical_requirements && documentation.technical_requirements.length > 0) ||
          (documentation.integration_points && documentation.integration_points.length > 0)) && (
          <div>
            <SectionHeader
              icon={<Plugs size={12} weight="fill" />}
              title="Requirements & Integrations"
              expanded={expandedSections.has('requirements')}
              onToggle={() => toggleSection('requirements')}
            />
            {expandedSections.has('requirements') && (
              <div className="grid md:grid-cols-2 gap-4 pl-5 mt-2">
                {documentation.technical_requirements && documentation.technical_requirements.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Technical Requirements
                    </p>
                    <ul className="space-y-1.5">
                      {documentation.technical_requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Wrench size={12} className="text-gray-400 shrink-0 mt-1" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {documentation.integration_points && documentation.integration_points.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Integration Points
                    </p>
                    <ul className="space-y-1.5">
                      {documentation.integration_points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Plugs size={12} className="text-gray-400 shrink-0 mt-1" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Edge Cases Handled */}
        {documentation.edge_cases_handled && documentation.edge_cases_handled.length > 0 && (
          <div>
            <SectionHeader
              icon={<ShieldCheck size={12} weight="fill" />}
              title="Edge Cases Handled"
              count={documentation.edge_cases_handled.length}
              expanded={expandedSections.has('edge_cases')}
              onToggle={() => toggleSection('edge_cases')}
              iconColor="text-amber-500"
            />
            {expandedSections.has('edge_cases') && (
              <div className="space-y-2 pl-5 mt-2">
                {documentation.edge_cases_handled.map((ec, i) => (
                  <div key={i} className="text-sm p-3 bg-gray-50 rounded-sm border border-gray-100">
                    <p className="font-medium text-[var(--black)]">{ec.scenario}</p>
                    <p className="text-muted-foreground mt-1">→ {ec.handling}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Version footer */}
        <div className="pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="outline" size="sm">v{documentation.version}</Badge>
          {documentation.model_used && (
            <>
              <span>•</span>
              <span>{documentation.model_used}</span>
            </>
          )}
          <span>•</span>
          <span>Updated {new Date(documentation.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </div>
    </div>
  )
}
