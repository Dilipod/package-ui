import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Label',
  },
}

export const WithHtmlFor: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
  },
}

export const Required: Story = {
  args: {
    children: (
      <>
        Name <span className="text-red-500">*</span>
      </>
    ),
  },
}
