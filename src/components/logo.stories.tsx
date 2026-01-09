import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['dark', 'light'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    href: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const Dark: Story = {
  args: {
    variant: 'dark',
    size: 'md',
  },
}

export const Light: Story = {
  args: {
    variant: 'light',
    size: 'md',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Small: Story = {
  args: {
    variant: 'dark',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    variant: 'dark',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    variant: 'dark',
    size: 'lg',
  },
}

export const WithLink: Story = {
  args: {
    variant: 'dark',
    size: 'md',
    href: '/',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-gray-500 mb-2">Dark variant (for light backgrounds)</p>
        <div className="flex items-center gap-8">
          <Logo variant="dark" size="sm" />
          <Logo variant="dark" size="md" />
          <Logo variant="dark" size="lg" />
        </div>
      </div>
      <div className="bg-[var(--black)] p-6 rounded-lg">
        <p className="text-sm text-gray-400 mb-2">Light variant (for dark backgrounds)</p>
        <div className="flex items-center gap-8">
          <Logo variant="light" size="sm" />
          <Logo variant="light" size="md" />
          <Logo variant="light" size="lg" />
        </div>
      </div>
    </div>
  ),
}
