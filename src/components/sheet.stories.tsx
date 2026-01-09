import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from './sheet'

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a sheet description. It can contain any content you want.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-gray-600">
            Sheet content goes here. You can add forms, lists, or any other content.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2 py-4">
          <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-sm">Home</a>
          <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-sm">About</a>
          <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-sm">Services</a>
          <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-sm">Contact</a>
        </nav>
      </SheetContent>
    </Sheet>
  ),
}

export const TopSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-auto">
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          <SheetDescription>
            You have new updates available.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const BottomSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-auto">
        <SheetHeader>
          <SheetTitle>Actions</SheetTitle>
        </SheetHeader>
        <div className="flex gap-2 py-4">
          <Button variant="outline" className="flex-1">Share</Button>
          <Button variant="outline" className="flex-1">Download</Button>
          <Button variant="destructive" className="flex-1">Delete</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}
