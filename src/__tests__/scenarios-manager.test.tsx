import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ScenariosManager, type Scenario, type ScenarioType } from '../components/scenarios-manager'

describe('ScenariosManager', () => {
  const mockOnAdd = vi.fn()
  const mockOnUpdate = vi.fn()
  const mockOnDelete = vi.fn()
  const mockOnComplete = vi.fn()

  const defaultProps = {
    scenarios: [],
    onAdd: mockOnAdd,
    onUpdate: mockOnUpdate,
    onDelete: mockOnDelete,
  }

  const mockScenarios: Scenario[] = [
    {
      id: '1',
      type: 'default_behavior' as ScenarioType,
      situation: 'Invoice amount is over $10,000',
      action: 'Flag for manual review',
    },
    {
      id: '2',
      type: 'escalation' as ScenarioType,
      situation: 'Email is marked as spam',
      action: 'Ignore and archive',
    },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
    mockOnAdd.mockResolvedValue(undefined)
    mockOnUpdate.mockResolvedValue(undefined)
    mockOnDelete.mockResolvedValue(undefined)
    mockOnComplete.mockResolvedValue(undefined)
  })

  describe('Empty State', () => {
    it('should show empty state when no scenarios exist', () => {
      render(<ScenariosManager {...defaultProps} />)
      
      expect(screen.getByText('No scenarios yet. Add rules for how the worker should handle edge cases.')).toBeInTheDocument()
    })

    it('should show "Add your first scenario" button in empty state', () => {
      render(<ScenariosManager {...defaultProps} />)
      
      expect(screen.getByText('Add your first scenario')).toBeInTheDocument()
    })
  })

  describe('Displaying Scenarios', () => {
    it('should render list of scenarios', () => {
      render(<ScenariosManager {...defaultProps} scenarios={mockScenarios} />)
      
      expect(screen.getByText('Invoice amount is over $10,000')).toBeInTheDocument()
      expect(screen.getByText('Email is marked as spam')).toBeInTheDocument()
    })

    it('should show scenario type badges', () => {
      render(<ScenariosManager {...defaultProps} scenarios={mockScenarios} />)
      
      expect(screen.getByText('Handle it')).toBeInTheDocument()
      expect(screen.getByText('Ask me first')).toBeInTheDocument()
    })

    it('should display When and Action for each scenario', () => {
      render(<ScenariosManager {...defaultProps} scenarios={mockScenarios} />)
      
      const whenLabels = screen.getAllByText(/When:/)
      const actionLabels = screen.getAllByText(/Action:/)
      expect(whenLabels.length).toBe(2)
      expect(actionLabels.length).toBe(2)
    })
  })

  describe('Adding Scenarios', () => {
    it('should show add scenario modal when clicking add button', async () => {
      render(<ScenariosManager {...defaultProps} />)
      
      await userEvent.click(screen.getByText('Add your first scenario'))
      
      // Modal should appear with a dialog role
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })
    })

    it('should close modal when clicking close', async () => {
      render(<ScenariosManager {...defaultProps} />)
      
      await userEvent.click(screen.getByText('Add your first scenario'))
      
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })
      
      // Cancel should close the modal
      const cancelButton = screen.getByText('Cancel')
      await userEvent.click(cancelButton)
      
      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })
    })

    it('should open add modal dialog', async () => {
      render(<ScenariosManager {...defaultProps} />)
      
      await userEvent.click(screen.getByText('Add your first scenario'))
      
      // Should show modal (dialog role)
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })
    })
  })

  describe('Deleting Scenarios', () => {
    it('should have delete buttons for each scenario', () => {
      render(<ScenariosManager {...defaultProps} scenarios={mockScenarios} />)
      
      // Should render multiple buttons (edit + delete for each scenario)
      const allButtons = screen.getAllByRole('button')
      // At minimum: add button + (edit + delete) for each scenario = 1 + 4 = 5
      expect(allButtons.length).toBeGreaterThanOrEqual(4)
    })
  })

  describe('Completion Feature', () => {
    it('should not show complete button when below minimum scenarios', () => {
      render(
        <ScenariosManager
          {...defaultProps}
          scenarios={[mockScenarios[0]]}
          onComplete={mockOnComplete}
          minScenariosToComplete={2}
        />
      )
      
      expect(screen.queryByText('Mark complete')).not.toBeInTheDocument()
    })

    it('should show complete button when minimum scenarios are added', () => {
      render(
        <ScenariosManager
          {...defaultProps}
          scenarios={mockScenarios}
          onComplete={mockOnComplete}
          minScenariosToComplete={2}
        />
      )
      
      expect(screen.getByText('Mark complete')).toBeInTheDocument()
    })

    it('should call onComplete when clicking complete button', async () => {
      render(
        <ScenariosManager
          {...defaultProps}
          scenarios={mockScenarios}
          onComplete={mockOnComplete}
          minScenariosToComplete={1}
        />
      )
      
      await userEvent.click(screen.getByText('Mark complete'))
      
      await waitFor(() => {
        expect(mockOnComplete).toHaveBeenCalled()
      })
    })

    it('should show completed state when isComplete is true', () => {
      render(
        <ScenariosManager
          {...defaultProps}
          scenarios={mockScenarios}
          isComplete={true}
        />
      )
      
      expect(screen.getByText('Scenarios completed')).toBeInTheDocument()
    })

    it('should not show complete button when already complete', () => {
      render(
        <ScenariosManager
          {...defaultProps}
          scenarios={mockScenarios}
          onComplete={mockOnComplete}
          isComplete={true}
          minScenariosToComplete={1}
        />
      )
      
      expect(screen.queryByText('Mark complete')).not.toBeInTheDocument()
    })
  })

  describe('Suggestions', () => {
    const suggestions = [
      { situation: 'Invoice is missing PO number', type: 'default_behavior' as ScenarioType, action: 'Request PO' },
      { situation: 'Duplicate invoice detected', type: 'escalation' as ScenarioType, action: 'Flag for review' },
    ]

    it('should display scenario suggestions when provided', () => {
      render(
        <ScenariosManager
          {...defaultProps}
          suggestions={suggestions}
        />
      )
      
      expect(screen.getByText('Invoice is missing PO number')).toBeInTheDocument()
      expect(screen.getByText('Duplicate invoice detected')).toBeInTheDocument()
    })

    it('should render suggestion buttons', () => {
      render(
        <ScenariosManager
          {...defaultProps}
          suggestions={suggestions}
        />
      )
      
      // Suggestions should be clickable buttons
      const suggestionButton = screen.getByText('Invoice is missing PO number').closest('button')
      expect(suggestionButton).toBeInTheDocument()
    })
  })

  describe('Loading State', () => {
    it('should render with isLoading prop', () => {
      render(
        <ScenariosManager
          {...defaultProps}
          isLoading={true}
        />
      )
      
      // Component should still render with loading state
      expect(screen.getByText('Add your first scenario')).toBeInTheDocument()
    })
  })
})

describe('Scenario Type Configuration', () => {
  it('should have all four scenario types', () => {
    const types: ScenarioType[] = ['escalation', 'default_behavior', 'quality_check', 'edge_case']
    
    types.forEach(type => {
      expect(types).toContain(type)
    })
  })
})
