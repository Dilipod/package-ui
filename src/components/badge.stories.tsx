import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    pulse: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
}

export const Primary: Story = {
  args: {
    children: 'Active',
    variant: 'primary',
  },
}

export const Success: Story = {
  args: {
    children: 'Completed',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    children: 'Pending',
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    children: 'Failed',
    variant: 'error',
  },
}

export const Outline: Story = {
  args: {
    children: 'Draft',
    variant: 'outline',
  },
}

export const WithPulse: Story = {
  args: {
    children: 'Active',
    variant: 'primary',
    pulse: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center flex-wrap">
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex gap-2 items-center">
        <Badge variant="primary" pulse>Active</Badge>
        <Badge variant="success" pulse>Running</Badge>
        <Badge variant="error" pulse>Error</Badge>
      </div>
      <div className="flex gap-2 items-center">
        <Badge size="sm">Small</Badge>
        <Badge size="default">Default</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    </div>
  ),
}
