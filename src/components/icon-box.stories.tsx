import type { Meta, StoryObj } from '@storybook/react'
import { Brain, Files, Robot, ChartBar, CheckCircle } from '@phosphor-icons/react'
import { IconBox } from './icon-box'

const meta: Meta<typeof IconBox> = {
  title: 'Components/IconBox',
  component: IconBox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'outline', 'ghost', 'gradient'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
    },
    rounded: {
      control: 'select',
      options: ['sm', 'default', 'full'],
    },
  },
}

export default meta
type Story = StoryObj<typeof IconBox>

export const Default: Story = {
  args: {
    children: <Brain size={20} weight="fill" />,
    variant: 'default',
  },
}

export const Primary: Story = {
  args: {
    children: <Brain size={20} weight="fill" />,
    variant: 'primary',
  },
}

export const Outline: Story = {
  args: {
    children: <Brain size={20} weight="fill" />,
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: <Brain size={20} weight="fill" />,
    variant: 'ghost',
  },
}

export const Gradient: Story = {
  args: {
    children: <Brain size={20} weight="fill" />,
    variant: 'gradient',
  },
}

export const Rounded: Story = {
  args: {
    children: <Brain size={20} weight="fill" />,
    variant: 'default',
    rounded: 'full',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <IconBox size="sm"><Brain size={16} weight="fill" /></IconBox>
      <IconBox size="default"><Brain size={20} weight="fill" /></IconBox>
      <IconBox size="lg"><Brain size={24} weight="fill" /></IconBox>
      <IconBox size="xl"><Brain size={28} weight="fill" /></IconBox>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <IconBox variant="default"><Brain size={20} weight="fill" /></IconBox>
        <IconBox variant="primary"><Files size={20} weight="fill" /></IconBox>
        <IconBox variant="outline"><Robot size={20} weight="fill" /></IconBox>
        <IconBox variant="ghost"><ChartBar size={20} weight="fill" /></IconBox>
        <IconBox variant="gradient"><CheckCircle size={20} weight="fill" /></IconBox>
      </div>
      <div className="flex gap-4 items-center">
        <IconBox variant="default" rounded="full"><Brain size={20} weight="fill" /></IconBox>
        <IconBox variant="primary" rounded="full"><Files size={20} weight="fill" /></IconBox>
        <IconBox variant="outline" rounded="full"><Robot size={20} weight="fill" /></IconBox>
      </div>
    </div>
  ),
}
