import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'
import { Button } from './button'
import { Badge } from './badge'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          This is the card content area where you can add any content.
        </p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create AI Employee</CardTitle>
        <CardDescription>Deploy a new AI Employee for your workflow.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          Configure your AI Employee settings and connect it to your tools.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Create</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle>Compliance AI Employee</CardTitle>
            <CardDescription>KYC & Document Review</CardDescription>
          </div>
          <Badge variant="primary" pulse>Active</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-gray-600">
          <div>Last run: 5 minutes ago</div>
          <div>Items processed: 1,247</div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const Compact: Story = {
  render: () => (
    <Card className="w-[250px]">
      <CardContent className="p-4">
        <div className="text-2xl font-bold text-[var(--black)]">1,247</div>
        <div className="text-xs text-gray-500 uppercase font-medium">Docs Reviewed</div>
      </CardContent>
    </Card>
  ),
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-[var(--black)]">24</div>
          <div className="text-xs text-gray-500">Active Agents</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-[var(--cyan)]">99.8%</div>
          <div className="text-xs text-gray-500">Accuracy</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-[var(--black)]">12,847</div>
          <div className="text-xs text-gray-500">Tasks Completed</div>
        </CardContent>
      </Card>
    </div>
  ),
}
