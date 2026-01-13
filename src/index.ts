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

export { MetricCard, metricCardVariants } from './components/metric-card'
export type { MetricCardProps } from './components/metric-card'

export { UsageBar, usageBarVariants } from './components/usage-bar'
export type { UsageBarProps } from './components/usage-bar'

export { UsageChart } from './components/usage-chart'
export type { UsageChartProps, UsageChartDataPoint } from './components/usage-chart'

// Form Components
export { Input } from './components/input'
export type { InputProps } from './components/input'

export { Label } from './components/label'
export type { LabelProps } from '@radix-ui/react-label'

export { Textarea } from './components/textarea'
export type { TextareaProps } from './components/textarea'

export { Checkbox } from './components/checkbox'
export type { CheckboxProps } from './components/checkbox'

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

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from './components/avatar'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './components/dropdown-menu'

export {
  Sidebar,
  SidebarNavItem,
} from './components/sidebar'
export type {
  SidebarProps,
  SidebarNavItem as SidebarNavItemType,
  SidebarNavItemProps,
} from './components/sidebar'

export { Alert, alertVariants } from './components/alert'
export type { AlertProps } from './components/alert'

export { EmptyState } from './components/empty-state'
export type { EmptyStateProps } from './components/empty-state'

export { CodeBlock } from './components/code-block'
export type { CodeBlockProps } from './components/code-block'

export { FormField } from './components/form-field'
export type { FormFieldProps } from './components/form-field'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './components/table'

export { Divider } from './components/divider'
export type { DividerProps } from './components/divider'

// Dialog Components
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './components/dialog'

// Toast Components
export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastIcon,
} from './components/toast'
export type { ToastProps, ToastActionElement } from './components/toast'

export { Toaster } from './components/toaster'
export { useToast, toast } from './components/use-toast'

// Utilities
export { cn } from './lib/utils'

// Icons - Re-exported from @phosphor-icons/react
export * from './icons'
