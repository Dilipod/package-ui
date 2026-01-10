// Core Components
export { Button, buttonVariants } from './components/button'
export type { ButtonProps } from './components/button'

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './components/sheet'

export { Logo } from './components/logo'
export type { LogoProps } from './components/logo'

// New Design System Components
export { Badge, badgeVariants } from './components/badge'
export type { BadgeProps } from './components/badge'

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './components/card'

export { Progress, progressVariants } from './components/progress'
export type { ProgressProps } from './components/progress'

export { IconBox, iconBoxVariants } from './components/icon-box'
export type { IconBoxProps } from './components/icon-box'

export { Tag, tagVariants } from './components/tag'
export type { TagProps } from './components/tag'

export { Stat, statVariants, valueVariants } from './components/stat'
export type { StatProps } from './components/stat'

// Form Components
export { Input } from './components/input'
export type { InputProps } from './components/input'

export { Label } from './components/label'
export type { LabelProps } from '@radix-ui/react-label'

export { Textarea } from './components/textarea'
export type { TextareaProps } from './components/textarea'

// Navigation & Layout Components
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './components/accordion'

export { Separator } from './components/separator'
export type { SeparatorProps } from '@radix-ui/react-separator'

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from './components/navigation-menu'

// Utilities
export { cn } from './lib/utils'

// Icons - Re-exported from @phosphor-icons/react
export * from './icons'
