import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button, buttonVariants } from '../components/button'

describe('Button', () => {
  describe('Rendering', () => {
    it('should render button with text', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('should support custom HTML attributes', () => {
      render(<Button data-testid="custom-button">Custom</Button>)
      expect(screen.getByTestId('custom-button')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('should apply default variant styles', () => {
      render(<Button>Default</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('bg-')
    })

    it('should apply outline variant styles', () => {
      render(<Button variant="outline">Outline</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('border')
    })

    it('should apply ghost variant styles', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('hover:bg-')
    })

    it('should apply destructive variant styles', () => {
      render(<Button variant="destructive">Delete</Button>)
      const button = screen.getByRole('button')
      // Destructive uses red colors
      expect(button.className).toContain('red')
    })

    it('should apply link variant styles', () => {
      render(<Button variant="link">Link</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('underline')
    })
  })

  describe('Sizes', () => {
    it('should apply default size', () => {
      render(<Button>Default Size</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('h-')
    })

    it('should apply small size', () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('h-')
    })

    it('should apply large size', () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('h-')
    })

    it('should apply icon size', () => {
      render(<Button size="icon">🔍</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('w-')
    })
  })

  describe('States', () => {
    it('should be disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('should show loading state', () => {
      render(<Button loading>Loading</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      // Should have loading spinner
      expect(button.querySelector('.animate-spin')).toBeInTheDocument()
    })

    it('should not be clickable when loading', () => {
      const onClick = vi.fn()
      render(<Button loading onClick={onClick}>Loading</Button>)
      
      fireEvent.click(screen.getByRole('button'))
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('Events', () => {
    it('should call onClick when clicked', () => {
      const onClick = vi.fn()
      render(<Button onClick={onClick}>Click</Button>)
      
      fireEvent.click(screen.getByRole('button'))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('should not call onClick when disabled', () => {
      const onClick = vi.fn()
      render(<Button disabled onClick={onClick}>Disabled</Button>)
      
      fireEvent.click(screen.getByRole('button'))
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default styles', () => {
      render(<Button className="custom-class">Custom</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain('custom-class')
    })
  })

  describe('Button type', () => {
    it('should support type="submit"', () => {
      render(<Button type="submit">Submit</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })

    it('should support type="button" explicitly', () => {
      render(<Button type="button">Button</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })
  })

  describe('buttonVariants helper', () => {
    it('should generate correct class names', () => {
      const classes = buttonVariants({ variant: 'default', size: 'default' })
      expect(typeof classes).toBe('string')
      expect(classes.length).toBeGreaterThan(0)
    })

    it('should handle different combinations', () => {
      const combinations = [
        { variant: 'default' as const, size: 'sm' as const },
        { variant: 'outline' as const, size: 'lg' as const },
        { variant: 'ghost' as const, size: 'icon' as const },
      ]

      combinations.forEach(combo => {
        const classes = buttonVariants(combo)
        expect(typeof classes).toBe('string')
      })
    })
  })

  describe('Accessibility', () => {
    it('should support aria-label', () => {
      render(<Button aria-label="Close dialog">×</Button>)
      expect(screen.getByRole('button', { name: 'Close dialog' })).toBeInTheDocument()
    })

    it('should support aria-disabled when disabled', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('disabled')
    })
  })
})
