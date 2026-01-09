import type { Meta, StoryObj } from '@storybook/react'
import { Buildings, Briefcase, FirstAid, ShoppingCart } from '@phosphor-icons/react'
import { Tag } from './tag'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'outline', 'dark'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    children: 'Tag Label',
    variant: 'default',
  },
}

export const Primary: Story = {
  args: {
    children: 'Active',
    variant: 'primary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Real Estate',
    variant: 'outline',
    icon: <Buildings size={14} weight="fill" />,
  },
}

export const Dark: Story = {
  args: {
    children: 'Premium',
    variant: 'dark',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Healthcare',
    variant: 'outline',
    icon: <FirstAid size={14} weight="fill" />,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Tag size="sm">Small</Tag>
      <Tag size="default">Default</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
}

export const Industries: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="outline" icon={<Buildings size={14} weight="fill" />}>Real Estate</Tag>
      <Tag variant="outline" icon={<Briefcase size={14} weight="fill" />}>Professional Services</Tag>
      <Tag variant="outline" icon={<FirstAid size={14} weight="fill" />}>Healthcare</Tag>
      <Tag variant="outline" icon={<ShoppingCart size={14} weight="fill" />}>E-commerce</Tag>
    </div>
  ),
}

export const FeatureTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>Walk through your workflow</Tag>
      <Tag>Show us your tools</Tag>
      <Tag>Describe edge cases</Tag>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center flex-wrap">
        <Tag variant="default">Default</Tag>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="outline">Outline</Tag>
        <Tag variant="dark">Dark</Tag>
      </div>
      <div className="flex gap-2 items-center flex-wrap">
        <Tag variant="outline" icon={<Buildings size={14} weight="fill" />}>With Icon</Tag>
        <Tag variant="primary" icon={<Briefcase size={14} weight="fill" />}>Primary Icon</Tag>
      </div>
    </div>
  ),
}
