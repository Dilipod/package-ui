import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
}

export const WithRows: Story = {
  args: {
    placeholder: 'Enter your message...',
    rows: 6,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
  },
}

export const WithValue: Story = {
  args: {
    value: 'This is a sample textarea with some content.',
    readOnly: true,
  },
}
