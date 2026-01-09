import type { Meta, StoryObj } from '@storybook/react'
import { Stat } from './stat'

const meta: Meta<typeof Stat> = {
  title: 'Components/Stat',
  component: Stat,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'card'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    valueSize: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
    },
    valueColor: {
      control: 'select',
      options: ['default', 'primary', 'white', 'gradient'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Stat>

export const Default: Story = {
  args: {
    value: '1,247',
    label: 'Docs Reviewed',
  },
}

export const WithSuffix: Story = {
  args: {
    value: '80%',
    suffix: 'cheaper',
    label: '€6-12K/year vs €40-60K for an employee',
  },
}

export const Primary: Story = {
  args: {
    value: '99.8%',
    label: 'Accuracy',
    valueColor: 'primary',
  },
}

export const Large: Story = {
  args: {
    value: '24h',
    suffix: 'to deploy',
    label: 'From call to working agent in one day',
    valueSize: 'lg',
  },
}

export const Card: Story = {
  args: {
    value: '1,247',
    label: 'Docs Reviewed',
    variant: 'card',
    align: 'center',
  },
}

export const Centered: Story = {
  args: {
    value: '24/7',
    label: 'Available',
    align: 'center',
    valueColor: 'primary',
    valueSize: 'lg',
  },
}

export const StatsGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-80">
      <Stat value="1,247" label="Docs Reviewed" variant="card" align="center" />
      <Stat value="99.8%" label="Accuracy" variant="card" align="center" valueColor="primary" />
    </div>
  ),
}

export const SolutionStats: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8">
      <Stat value="80%" suffix="cheaper" label="€6-12K/year vs €40-60K" valueSize="lg" />
      <Stat value="24h" suffix="to deploy" label="From call to working agent" valueSize="lg" />
      <Stat value="Zero" suffix="maintenance" label="We handle everything" valueSize="lg" />
      <Stat value="Instant" suffix="capacity" label="Add more agents on demand" valueSize="lg" />
    </div>
  ),
}

export const UseCaseStats: Story = {
  render: () => (
    <div className="flex gap-8">
      <Stat value="40hrs" label="saved/week" valueColor="primary" />
      <Stat value="99.8%" label="accuracy" valueColor="primary" />
      <Stat value="10x" label="faster" valueColor="primary" />
      <Stat value="24/7" label="available" valueColor="primary" />
    </div>
  ),
}

export const OnDarkBackground: Story = {
  render: () => (
    <div className="bg-[var(--black)] p-8 rounded-lg">
      <div className="grid grid-cols-4 gap-8">
        <Stat value="80%" suffix="cheaper" valueSize="lg" valueColor="white" />
        <Stat value="24h" suffix="to deploy" valueSize="lg" valueColor="white" />
        <Stat value="Zero" suffix="maintenance" valueSize="lg" valueColor="white" />
        <Stat value="Instant" suffix="capacity" valueSize="lg" valueColor="white" />
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
