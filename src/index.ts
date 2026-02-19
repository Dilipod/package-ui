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

export { MetricLabel, MetricValue, MetricSubtext, Metric } from './components/metric-label'
export type { MetricLabelProps, MetricValueProps, MetricSubtextProps } from './components/metric-label'

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

export { Select } from './components/select'
export type { SelectProps } from './components/select'

export { Checkbox } from './components/checkbox'
export type { CheckboxProps } from './components/checkbox'

export { Switch, LabeledSwitch } from './components/switch'
export type { SwitchProps, LabeledSwitchProps } from './components/switch'

export { Slider, LabeledSlider } from './components/slider'
export type { SliderProps, LabeledSliderProps } from './components/slider'

export { RadioGroup, RadioGroupItem, RadioGroupOption, RadioGroupCard } from './components/radio-group'
export type { RadioGroupOptionProps, RadioGroupCardProps } from './components/radio-group'

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

export { Sidebar } from './components/sidebar'
export type {
  SidebarProps,
  SidebarNavItem,
  SidebarNavItemProps,
} from './components/sidebar'

export { Alert, alertVariants } from './components/alert'
export type { AlertProps } from './components/alert'

export { EmptyState } from './components/empty-state'
export type { EmptyStateProps } from './components/empty-state'

export { ErrorState } from './components/error-state'
export type { ErrorStateProps } from './components/error-state'

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

// Tabs Components
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsListUnderline,
  TabsTriggerUnderline,
} from './components/tabs'

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

// Alert Dialog Components
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  ConfirmDialog,
} from './components/alert-dialog'
export type { ConfirmDialogProps } from './components/alert-dialog'

// Popover Components
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverClose,
  PopoverArrow,
} from './components/popover'

// Tooltip Components
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow,
  SimpleTooltip,
} from './components/tooltip'
export type { SimpleTooltipProps } from './components/tooltip'

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

// Skeleton/Loading Components
export { Skeleton, SkeletonText, SkeletonCard } from './components/skeleton'
export type { SkeletonProps, SkeletonTextProps, SkeletonCardProps } from './components/skeleton'

// Pagination Components
export { Pagination, SimplePagination } from './components/pagination'
export type { PaginationProps, SimplePaginationProps } from './components/pagination'

// Step Progress Components
export { StepProgress, StepDots } from './components/step-progress'
export type { Step, StepProgressProps, StepDotsProps } from './components/step-progress'

// Breadcrumb Components
export { Breadcrumbs, BreadcrumbLink } from './components/breadcrumbs'
export type { BreadcrumbItem, BreadcrumbsProps, BreadcrumbLinkProps } from './components/breadcrumbs'

// Date Range Picker Components
export { DateRangePicker, DateRangeSelect, getDateRangeFromPreset } from './components/date-range-picker'
export type { DateRangePreset, DateRangePickerProps, DateRangeSelectProps } from './components/date-range-picker'

// File Preview Components
export { FilePreview } from './components/file-preview'
export type { FilePreviewProps, UploadedFile } from './components/file-preview'

// Settings Navigation Components
export { SettingsNav, SettingsNavLink } from './components/settings-nav'
export type { SettingsNavItem, SettingsNavGroup, SettingsNavProps, SettingsNavLinkProps } from './components/settings-nav'

// Scenarios Manager Components
export { ScenariosManager } from './components/scenarios-manager'
export type { Scenario, ScenarioType, ScenarioSuggestion, ScenariosManagerProps } from './components/scenarios-manager'

// Impact Metrics Components
export { ImpactMetricsForm } from './components/impact-metrics-form'
export type { ImpactMetrics, ImpactMetricsFormProps } from './components/impact-metrics-form'

// Activity Timeline Components
export { ActivityTimeline } from './components/activity-timeline'
export type { Activity, ActivityTimelineProps } from './components/activity-timeline'

// Support Chat Components
export { SupportChat } from './components/support-chat'
export type { SupportChatMessage, SupportChatProps } from './components/support-chat'

// Workflow Components
export { WorkflowFlow } from './components/workflow-flow'
export type { WorkflowFlowProps, N8nWorkflow as WorkflowFlowN8nWorkflow, N8nNode } from './components/workflow-flow'

export { WorkflowViewer } from './components/workflow-viewer'
export type { 
  WorkflowViewerProps, 
  N8nWorkflow, 
  SimWorkflow, 
  WorkflowTemplate 
} from './components/workflow-viewer'

// Worker Spec Components
export { WorkerSpec } from './components/worker-spec'
export type { WorkerSpecProps, WorkerSpecDocumentation, AnalysisSource, AnalysisSummary } from './components/worker-spec'

// Flowchart Diagram Components
export { FlowchartDiagram } from './components/flowchart-diagram'
export type { FlowchartDiagramProps } from './components/flowchart-diagram'

// Expandable Section
export { ExpandableSection, useExpandedSections } from './components/expandable-section'
export type { ExpandableSectionProps } from './components/expandable-section'

// Hooks
export { useServiceWorker } from './hooks/use-service-worker'

// Formatting Utilities
export { formatCentsToEuros, formatEuros, formatDuration, formatRelativeTime } from './lib/formatting'

// Email Template Helpers
export { emailTemplate, buttonHtml, infoBoxHtml, noteBoxHtml } from './lib/email'

// Utilities
export { cn } from './lib/utils'

// Icons - Re-exported from @phosphor-icons/react
export * from './icons'
