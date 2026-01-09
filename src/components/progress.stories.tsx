import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './progress'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'gradient'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    showLabel: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    value: 60,
  },
}

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
}

export const Gradient: Story = {
  args: {
    value: 84,
    variant: 'gradient',
  },
}

export const Success: Story = {
  args: {
    value: 100,
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    value: 45,
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    value: 25,
    variant: 'error',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div>
        <p className="text-xs text-gray-500 mb-1">Small</p>
        <Progress value={60} size="sm" />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">Default</p>
        <Progress value={60} size="default" />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">Large</p>
        <Progress value={60} size="lg" />
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Progress value={84} variant="default" showLabel />
      <Progress value={100} variant="success" />
      <Progress value={45} variant="warning" />
      <Progress value={25} variant="error" />
      <Progress value={70} variant="gradient" />
    </div>
  ),
}
