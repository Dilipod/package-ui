"use client";
import * as React50 from 'react';
import { useState, useRef } from 'react';
import { Slot, Slottable, createSlot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import * as react_star from '@phosphor-icons/react';
import { X, CaretDown, Circle, CaretLeft, DotsThree, CaretRight, Check, House, Info, WarningCircle, Play, Download, Folder, ArrowSquareOut, CircleNotch, File, FileVideo, Lightning, Plus, CheckCircle, FileImage, FilePdf, FileDoc, Question, Warning, PencilSimple, Trash } from '@phosphor-icons/react';
import 'react-dom';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as ToastPrimitives from '@radix-ui/react-toast';

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Alert: () => Alert,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogFooter: () => AlertDialogFooter,
  AlertDialogHeader: () => AlertDialogHeader,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  Badge: () => Badge,
  BreadcrumbLink: () => BreadcrumbLink,
  Breadcrumbs: () => Breadcrumbs,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  CodeBlock: () => CodeBlock,
  ConfirmDialog: () => ConfirmDialog,
  DateRangePicker: () => DateRangePicker,
  DateRangeSelect: () => DateRangeSelect,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  Divider: () => Divider,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  EmptyState: () => EmptyState,
  ErrorState: () => ErrorState,
  FilePreview: () => FilePreview,
  FormField: () => FormField,
  IconBox: () => IconBox,
  Input: () => Input,
  Label: () => Label2,
  LabeledSwitch: () => LabeledSwitch,
  Logo: () => Logo,
  Metric: () => Metric,
  MetricCard: () => MetricCard,
  MetricLabel: () => MetricLabel,
  MetricSubtext: () => MetricSubtext,
  MetricValue: () => MetricValue,
  NavigationMenu: () => NavigationMenu,
  NavigationMenuContent: () => NavigationMenuContent,
  NavigationMenuIndicator: () => NavigationMenuIndicator,
  NavigationMenuItem: () => NavigationMenuItem,
  NavigationMenuLink: () => NavigationMenuLink,
  NavigationMenuList: () => NavigationMenuList,
  NavigationMenuTrigger: () => NavigationMenuTrigger,
  NavigationMenuViewport: () => NavigationMenuViewport,
  Pagination: () => Pagination,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverArrow: () => PopoverArrow,
  PopoverClose: () => PopoverClose,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  Progress: () => Progress,
  RadioGroup: () => RadioGroup,
  RadioGroupCard: () => RadioGroupCard,
  RadioGroupItem: () => RadioGroupItem,
  RadioGroupOption: () => RadioGroupOption,
  ScenariosManager: () => ScenariosManager,
  Select: () => Select,
  Separator: () => Separator2,
  SettingsNav: () => SettingsNav,
  SettingsNavLink: () => SettingsNavLink,
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetContent: () => SheetContent,
  SheetDescription: () => SheetDescription,
  SheetFooter: () => SheetFooter,
  SheetHeader: () => SheetHeader,
  SheetOverlay: () => SheetOverlay,
  SheetPortal: () => SheetPortal,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger,
  Sidebar: () => Sidebar,
  SimplePagination: () => SimplePagination,
  SimpleTooltip: () => SimpleTooltip,
  Skeleton: () => Skeleton,
  SkeletonCard: () => SkeletonCard,
  SkeletonText: () => SkeletonText,
  Stat: () => Stat,
  StepDots: () => StepDots,
  StepProgress: () => StepProgress,
  Switch: () => Switch,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsListUnderline: () => TabsListUnderline,
  TabsTrigger: () => TabsTrigger,
  TabsTriggerUnderline: () => TabsTriggerUnderline,
  Tag: () => Tag,
  Textarea: () => Textarea,
  Toast: () => Toast,
  ToastAction: () => ToastAction,
  ToastClose: () => ToastClose,
  ToastDescription: () => ToastDescription,
  ToastIcon: () => ToastIcon,
  ToastProvider: () => ToastProvider,
  ToastTitle: () => ToastTitle,
  ToastViewport: () => ToastViewport,
  Toaster: () => Toaster,
  Tooltip: () => Tooltip,
  TooltipArrow: () => TooltipArrow,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  UsageBar: () => UsageBar,
  UsageChart: () => UsageChart,
  alertVariants: () => alertVariants,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  getDateRangeFromPreset: () => getDateRangeFromPreset,
  iconBoxVariants: () => iconBoxVariants,
  metricCardVariants: () => metricCardVariants,
  navigationMenuTriggerStyle: () => navigationMenuTriggerStyle,
  progressVariants: () => progressVariants,
  statVariants: () => statVariants,
  tagVariants: () => tagVariants,
  toast: () => toast,
  usageBarVariants: () => usageBarVariants,
  useToast: () => useToast,
  valueVariants: () => valueVariants
});
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[var(--black)] text-white border-2 border-[var(--black)] hover:bg-gray-800 hover:border-gray-800 active:scale-95",
        primary: "bg-[var(--cyan)] text-white border-2 border-[var(--cyan)] hover:bg-[var(--cyan-dark)] hover:border-[var(--cyan-dark)] active:scale-95",
        destructive: "bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 hover:border-red-700 active:scale-95",
        outline: "border-2 border-gray-300 bg-transparent hover:bg-gray-100 active:scale-95",
        secondary: "bg-gray-100 text-[var(--black)] border-2 border-gray-100 hover:bg-gray-200 hover:border-gray-200 active:scale-95",
        ghost: "hover:bg-gray-100 border-2 border-transparent",
        link: "text-[var(--cyan)] underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React50.forwardRef(
  ({ className, variant, size, asChild = false, loading, loadingText, icon, iconAfter, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;
    const LoadingSpinner = /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "animate-spin h-4 w-4",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
          /* @__PURE__ */ jsx(
            "circle",
            {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }
          )
        ]
      }
    );
    if (asChild && (icon || iconAfter || loading)) {
      return /* @__PURE__ */ jsxs(
        Slot,
        {
          className: cn(buttonVariants({ variant, size, className })),
          ref,
          ...props,
          children: [
            loading && LoadingSpinner,
            !loading && icon,
            /* @__PURE__ */ jsx(Slottable, { children }),
            !loading && iconAfter
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxs(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        disabled: isDisabled,
        ...props,
        children: [
          loading && LoadingSpinner,
          !loading && icon,
          loading ? loadingText || children : children,
          !loading && iconAfter
        ]
      }
    );
  }
);
Button.displayName = "Button";
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetClose = SheetPrimitive.Close;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React50.forwardRef(({ className, ...props }, ref) => (
  // @ts-ignore - Radix Dialog Overlay accepts className at runtime
  /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      className: cn(
        "fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-150",
        className
      ),
      ...props,
      ref
    }
  )
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out duration-150",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React50.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React50.forwardRef(({ className, ...props }, ref) => (
  // @ts-ignore - Radix Dialog Title accepts className at runtime
  /* @__PURE__ */ jsx(
    SheetPrimitive.Title,
    {
      ref,
      className: cn("text-lg font-semibold text-[var(--black)]", className),
      ...props
    }
  )
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React50.forwardRef(({ className, ...props }, ref) => (
  // @ts-ignore - Radix Dialog Description accepts className at runtime
  /* @__PURE__ */ jsx(
    SheetPrimitive.Description,
    {
      ref,
      className: cn("text-sm text-gray-500", className),
      ...props
    }
  )
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
var sizes = {
  sm: { width: 100, height: 30 },
  md: { width: 130, height: 40 },
  lg: { width: 160, height: 50 }
};
function Logo({
  variant = "dark",
  size = "md",
  href = "/",
  className
}) {
  const s = sizes[size];
  const textColor = variant === "light" ? "white" : "#0A0A0A";
  const iconTextColor = variant === "light" ? "white" : "#0A0A0A";
  const svgContent = /* @__PURE__ */ jsxs(
    "svg",
    {
      width: s.width,
      height: s.height,
      viewBox: "0 0 130 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: `gradient-${variant}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#007A70" }),
          /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#00B8A9" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#00E5D4" })
        ] }) }),
        /* @__PURE__ */ jsx("rect", { width: "40", height: "40", rx: "4", fill: `url(#gradient-${variant})` }),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "20",
            y: "29",
            textAnchor: "middle",
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "24",
            fontWeight: "700",
            fill: iconTextColor,
            children: "D"
          }
        ),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "52",
            y: "28",
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "20",
            fontWeight: "700",
            letterSpacing: "1",
            fill: textColor,
            children: "Dilipod"
          }
        )
      ]
    }
  );
  if (href !== null) {
    return /* @__PURE__ */ jsx("a", { href, "aria-label": "Go to homepage", className: "inline-flex items-center group", children: svgContent });
  }
  return /* @__PURE__ */ jsx("div", { className: "inline-flex items-center", children: svgContent });
}
var badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-sm font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-gray-700",
        primary: "bg-[var(--cyan)]/10 text-[var(--cyan)]",
        success: "bg-green-100 text-green-700",
        warning: "bg-amber-100 text-amber-700",
        error: "bg-red-100 text-red-700",
        outline: "border border-gray-200 text-gray-600 bg-white"
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        default: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Badge = React50.forwardRef(
  ({ className, variant, size, pulse, pulseColor: pulseColorProp, children, ...props }, ref) => {
    const getPulseColorClass = () => {
      const color = pulseColorProp || variant || "default";
      switch (color) {
        case "success":
          return "bg-green-500";
        case "warning":
          return "bg-amber-500";
        case "error":
          return "bg-red-500";
        case "primary":
          return "bg-[var(--cyan)]";
        case "outline":
          return "bg-gray-400";
        default:
          return "bg-gray-500";
      }
    };
    const pulseColorClass = getPulseColorClass();
    return /* @__PURE__ */ jsxs(
      "span",
      {
        ref,
        className: cn(badgeVariants({ variant, size }), className),
        ...props,
        children: [
          pulse && /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                  pulseColorClass
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  "relative inline-flex h-1.5 w-1.5 rounded-full",
                  pulseColorClass
                )
              }
            )
          ] }),
          children
        ]
      }
    );
  }
);
Badge.displayName = "Badge";
var Card = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-sm border border-gray-200 bg-white",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-lg font-bold leading-none tracking-tight text-[var(--black)]",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-gray-500", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var progressVariants = cva("h-full rounded-full transition-all duration-300", {
  variants: {
    variant: {
      default: "bg-[var(--cyan)]",
      success: "bg-green-500",
      warning: "bg-amber-500",
      error: "bg-red-500",
      gradient: "bg-gradient-to-r from-[var(--cyan-dark)] to-[var(--cyan)]"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Progress = React50.forwardRef(
  ({ className, value, variant, showLabel, label = "Progress", size = "default", ...props }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value));
    const heightClass = {
      sm: "h-1",
      default: "h-1.5",
      lg: "h-2.5"
    }[size];
    return /* @__PURE__ */ jsxs("div", { className: cn("w-full", className), ref, ...props, children: [
      showLabel && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs mb-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: label }),
        /* @__PURE__ */ jsxs("span", { className: "font-semibold text-[var(--black)]", children: [
          clampedValue,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "w-full bg-gray-200 rounded-full overflow-hidden",
            heightClass
          ),
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(progressVariants({ variant })),
              style: { width: `${clampedValue}%` }
            }
          )
        }
      )
    ] });
  }
);
Progress.displayName = "Progress";
var iconBoxVariants = cva(
  "inline-flex items-center justify-center shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[var(--black)] text-white",
        primary: "bg-[var(--cyan)] text-[var(--black)]",
        outline: "border-2 border-gray-200 bg-white text-[var(--black)]",
        ghost: "bg-gray-100 text-gray-600",
        gradient: "bg-gradient-to-br from-[var(--black)] to-[var(--cyan-dark)] text-white"
      },
      size: {
        sm: "w-8 h-8",
        default: "w-10 h-10",
        lg: "w-12 h-12",
        xl: "w-14 h-14"
      },
      rounded: {
        sm: "rounded-sm",
        default: "rounded-sm",
        md: "rounded-sm",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "sm"
    }
  }
);
var IconBox = React50.forwardRef(
  ({ className, variant, size, rounded, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(iconBoxVariants({ variant, size, rounded }), className),
        ...props,
        children
      }
    );
  }
);
IconBox.displayName = "IconBox";
var tagVariants = cva(
  "inline-flex items-center gap-2 font-medium transition-colors cursor-pointer rounded-sm",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-[var(--black)]",
        primary: "bg-[var(--cyan)]/10 text-[var(--cyan)]",
        outline: "border border-gray-200 bg-white text-gray-700 hover:border-[var(--black)] hover:text-[var(--black)]",
        dark: "bg-[var(--black)] text-white"
      },
      size: {
        sm: "px-2 py-1 text-[10px]",
        default: "px-3 py-1.5 text-xs",
        lg: "px-4 py-2 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Tag = React50.forwardRef(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "span",
      {
        ref,
        className: cn(tagVariants({ variant, size }), className),
        ...props,
        children: [
          icon && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: icon }),
          children
        ]
      }
    );
  }
);
Tag.displayName = "Tag";
var statVariants = cva("", {
  variants: {
    variant: {
      default: "",
      card: "p-3 rounded-sm bg-gray-50 text-center"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    variant: "default",
    align: "left"
  }
});
var valueVariants = cva("font-bold", {
  variants: {
    size: {
      sm: "text-lg",
      default: "text-2xl",
      lg: "text-4xl md:text-5xl",
      xl: "text-5xl md:text-6xl"
    },
    color: {
      default: "text-[var(--black)]",
      primary: "text-[var(--cyan)]",
      white: "text-white",
      gradient: "text-gradient"
    }
  },
  defaultVariants: {
    size: "default",
    color: "default"
  }
});
var Stat = React50.forwardRef(
  ({
    className,
    variant,
    align,
    value,
    label,
    suffix,
    valueSize = "default",
    valueColor = "default",
    ...props
  }, ref) => {
    const justifyClass = {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end"
    }[align || "left"];
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(statVariants({ variant, align }), className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { className: cn("flex flex-wrap lg:flex-nowrap items-baseline gap-x-2", justifyClass), children: [
            /* @__PURE__ */ jsx("span", { className: cn(valueVariants({ size: valueSize, color: valueColor })), children: value }),
            suffix && /* @__PURE__ */ jsx("span", { className: cn(
              "font-medium text-[var(--cyan)] shrink-0",
              valueSize === "lg" || valueSize === "xl" ? "text-lg md:text-xl" : "text-base md:text-lg"
            ), children: suffix })
          ] }),
          label && /* @__PURE__ */ jsx("div", { className: cn(
            "font-medium mt-1",
            valueColor === "white" ? "text-white/70 text-sm md:text-base" : "text-gray-500 text-xs md:text-sm"
          ), children: label })
        ]
      }
    );
  }
);
Stat.displayName = "Stat";
var metricCardVariants = cva("p-5", {
  variants: {
    variant: {
      default: "",
      outlined: "border-l-4"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var iconContainerVariants = cva("p-2 rounded-lg shrink-0", {
  variants: {
    color: {
      cyan: "bg-[var(--cyan)]/10",
      purple: "bg-purple-50",
      green: "bg-green-50",
      amber: "bg-amber-50",
      red: "bg-red-50",
      gray: "bg-gray-100"
    }
  },
  defaultVariants: {
    color: "cyan"
  }
});
var iconVariants = cva("h-5 w-5", {
  variants: {
    color: {
      cyan: "text-[var(--cyan)]",
      purple: "text-purple-500",
      green: "text-green-500",
      amber: "text-amber-500",
      red: "text-red-500",
      gray: "text-gray-500"
    }
  },
  defaultVariants: {
    color: "cyan"
  }
});
var MetricCard = React50.forwardRef(
  ({
    className,
    variant,
    value,
    label,
    icon: Icon,
    iconColor = "cyan",
    borderColor,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      Card,
      {
        ref,
        className: cn(
          metricCardVariants({ variant }),
          variant === "outlined" && borderColor,
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          Icon && /* @__PURE__ */ jsx("div", { className: cn(iconContainerVariants({ color: iconColor })), children: /* @__PURE__ */ jsx(Icon, { className: cn(iconVariants({ color: iconColor })) }) }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-[var(--black)] truncate", children: value }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 truncate", children: label })
          ] })
        ] })
      }
    );
  }
);
MetricCard.displayName = "MetricCard";
var MetricLabel = React50.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "p",
      {
        ref,
        className: cn(
          "text-xs text-muted-foreground uppercase tracking-wide",
          className
        ),
        ...props,
        children
      }
    );
  }
);
MetricLabel.displayName = "MetricLabel";
var MetricValue = React50.forwardRef(
  ({ className, children, size = "default", highlight = false, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "p",
      {
        ref,
        className: cn(
          "font-bold mt-1",
          size === "lg" && "text-3xl",
          size === "default" && "text-2xl",
          size === "sm" && "text-xl",
          highlight && "text-[#00e5cc]",
          className
        ),
        ...props,
        children
      }
    );
  }
);
MetricValue.displayName = "MetricValue";
var MetricSubtext = React50.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "p",
      {
        ref,
        className: cn(
          "text-xs text-muted-foreground mt-1",
          className
        ),
        ...props,
        children
      }
    );
  }
);
MetricSubtext.displayName = "MetricSubtext";
var Metric = React50.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(className),
        ...props,
        children
      }
    );
  }
);
Metric.displayName = "Metric";
var usageBarVariants = cva("space-y-3", {
  variants: {
    size: {
      sm: "",
      default: "",
      lg: ""
    }
  },
  defaultVariants: {
    size: "default"
  }
});
var progressColorVariants = cva("", {
  variants: {
    color: {
      cyan: "[&>div]:bg-[var(--cyan)]",
      purple: "[&>div]:bg-purple-500",
      green: "[&>div]:bg-green-500",
      amber: "[&>div]:bg-amber-500",
      red: "[&>div]:bg-red-500"
    }
  },
  defaultVariants: {
    color: "cyan"
  }
});
var UsageBar = React50.forwardRef(
  ({
    className,
    size,
    label,
    used,
    included,
    icon: Icon,
    color = "cyan",
    showOverLimit = true,
    ...props
  }, ref) => {
    const percentage = included > 0 ? Math.min(used / included * 100, 100) : 0;
    const isOverLimit = used > included;
    const progressHeight = {
      sm: "h-1.5",
      default: "h-2.5",
      lg: "h-3"
    }[size || "default"];
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(usageBarVariants({ size }), className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              Icon && /* @__PURE__ */ jsx(Icon, { className: cn(
                "h-5 w-5",
                isOverLimit ? "text-red-500" : "text-gray-500"
              ) }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-[var(--black)]", children: label })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "text-lg font-semibold",
                    isOverLimit ? "text-red-500" : "text-[var(--black)]"
                  ),
                  children: used.toLocaleString()
                }
              ),
              /* @__PURE__ */ jsxs("span", { className: "text-gray-500", children: [
                " / ",
                included.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Progress,
            {
              value: percentage,
              className: cn(
                progressHeight,
                isOverLimit ? "[&>div]:bg-red-500" : progressColorVariants({ color })
              )
            }
          ),
          isOverLimit && showOverLimit && /* @__PURE__ */ jsxs("p", { className: "text-sm text-red-500", children: [
            "Over limit by ",
            (used - included).toLocaleString(),
            " actions"
          ] })
        ]
      }
    );
  }
);
UsageBar.displayName = "UsageBar";
var UsageChart = React50.forwardRef(
  ({
    className,
    data,
    height = 200,
    primaryColor = "var(--cyan)",
    secondaryColor = "#a855f7",
    showTooltip = true,
    formatValue = (v) => v.toLocaleString(),
    ...props
  }, ref) => {
    const [hoveredIndex, setHoveredIndex] = React50.useState(null);
    const maxValue = React50.useMemo(() => {
      return Math.max(
        ...data.map((d) => d.value + (d.secondaryValue || 0)),
        1
      );
    }, [data]);
    const scaledMax = maxValue * 1.1;
    const barWidth = 100 / Math.max(data.length, 1);
    const barGap = barWidth * 0.3;
    const actualBarWidth = barWidth - barGap;
    return /* @__PURE__ */ jsxs("div", { ref, className: cn("w-full", className), ...props, children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", style: { height }, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex flex-col justify-between pointer-events-none", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx("div", { className: "flex items-center w-full", children: /* @__PURE__ */ jsx("div", { className: "w-full border-t border-gray-100" }) }, i)) }),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "absolute inset-0 w-full h-full",
            preserveAspectRatio: "none",
            children: data.map((point, index) => {
              const primaryHeight = point.value / scaledMax * 100;
              const secondaryHeight = point.secondaryValue ? point.secondaryValue / scaledMax * 100 : 0;
              const totalHeight = primaryHeight + secondaryHeight;
              const x = index * barWidth + barGap / 2;
              const isHovered = hoveredIndex === index;
              return /* @__PURE__ */ jsxs(
                "g",
                {
                  onMouseEnter: () => setHoveredIndex(index),
                  onMouseLeave: () => setHoveredIndex(null),
                  className: "cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx(
                      "rect",
                      {
                        x: `${x}%`,
                        y: "0",
                        width: `${actualBarWidth}%`,
                        height: "100%",
                        fill: isHovered ? "rgba(0,0,0,0.02)" : "transparent",
                        rx: "4"
                      }
                    ),
                    point.secondaryValue !== void 0 && point.secondaryValue > 0 && /* @__PURE__ */ jsx(
                      "rect",
                      {
                        x: `${x}%`,
                        y: `${100 - totalHeight}%`,
                        width: `${actualBarWidth}%`,
                        height: `${secondaryHeight}%`,
                        fill: secondaryColor,
                        rx: "4",
                        className: "transition-all duration-200",
                        style: {
                          opacity: isHovered ? 1 : 0.85
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "rect",
                      {
                        x: `${x}%`,
                        y: `${100 - primaryHeight - (point.secondaryValue ? 0 : 0)}%`,
                        width: `${actualBarWidth}%`,
                        height: `${primaryHeight}%`,
                        fill: primaryColor,
                        rx: point.secondaryValue ? "0" : "4",
                        style: {
                          borderTopLeftRadius: point.secondaryValue ? 0 : 4,
                          borderTopRightRadius: point.secondaryValue ? 0 : 4
                        },
                        className: "transition-all duration-200"
                      }
                    )
                  ]
                },
                index
              );
            })
          }
        ),
        showTooltip && hoveredIndex !== null && data[hoveredIndex] && /* @__PURE__ */ jsxs(
          "div",
          {
            className: "absolute z-10 px-3 py-2 text-sm bg-[var(--black)] text-white rounded-lg shadow-lg pointer-events-none transform -translate-x-1/2",
            style: {
              left: `${(hoveredIndex + 0.5) * barWidth}%`,
              top: -8
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: data[hoveredIndex].label }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full",
                    style: { backgroundColor: primaryColor }
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: formatValue(data[hoveredIndex].value) })
              ] }),
              data[hoveredIndex].secondaryValue !== void 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full",
                    style: { backgroundColor: secondaryColor }
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: formatValue(data[hoveredIndex].secondaryValue) })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex mt-3", children: data.map((point, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "text-center text-xs text-gray-500 truncate",
          style: { width: `${barWidth}%` },
          children: point.label
        },
        index
      )) })
    ] });
  }
);
UsageChart.displayName = "UsageChart";
var Input = React50.forwardRef(
  ({ className, type, error, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-sm border bg-white px-3 py-2 text-base text-[var(--black)] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--black)] placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors",
          error ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300 focus-visible:ring-[var(--cyan)]",
          className
        ),
        ref,
        "aria-invalid": error ? "true" : void 0,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot2 = createSlot(`Primitive.${node}`);
  const Node = React50.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label = React50.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        props.onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label.displayName = NAME;
var Root2 = Label;
var labelVariants = cva(
  "text-sm font-medium leading-none text-[var(--black)] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label2 = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Root2,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label2.displayName = Root2.displayName;
var Textarea = React50.forwardRef(
  ({ className, error, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-sm border bg-white px-3 py-2 text-base text-[var(--black)] ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors resize-none",
          error ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300 focus-visible:ring-[var(--cyan)]",
          className
        ),
        ref,
        "aria-invalid": error ? "true" : void 0,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
var Select = React50.forwardRef(
  ({ className, error, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "select",
        {
          ref,
          className: cn(
            "h-10 w-full rounded-sm border bg-white px-3 py-2 text-base text-[var(--black)] ring-offset-background",
            "placeholder:text-gray-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors",
            "appearance-none pr-10",
            error ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300 focus-visible:ring-[var(--cyan)]",
            className
          ),
          "aria-invalid": error ? "true" : void 0,
          ...props,
          children
        }
      ),
      /* @__PURE__ */ jsx(
        CaretDown,
        {
          size: 16,
          className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        }
      )
    ] });
  }
);
Select.displayName = "Select";

// src/icons.ts
var icons_exports = {};
__reExport(icons_exports, react_star);
var Checkbox = React50.forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          className: "sr-only peer",
          checked,
          onChange: (e) => onCheckedChange?.(e.target.checked),
          ref,
          ...props
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "w-5 h-5 border border-gray-300 rounded-[2px] flex items-center justify-center transition-colors",
            "peer-checked:bg-[var(--black)] peer-checked:border-[var(--black)]",
            "peer-focus-visible:outline-none",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            className
          ),
          children: checked && /* @__PURE__ */ jsx(icons_exports.Check, { className: "h-3.5 w-3.5 text-white", weight: "bold" })
        }
      )
    ] });
  }
);
Checkbox.displayName = "Checkbox";
var Switch = React50.forwardRef(({ className, size = "default", ...props }, ref) => {
  const sizeStyles = {
    sm: {
      root: "h-4 w-7",
      thumb: "h-3 w-3 data-[state=checked]:translate-x-3"
    },
    default: {
      root: "h-5 w-9",
      thumb: "h-4 w-4 data-[state=checked]:translate-x-4"
    },
    lg: {
      root: "h-6 w-11",
      thumb: "h-5 w-5 data-[state=checked]:translate-x-5"
    }
  };
  return /* @__PURE__ */ jsx(
    SwitchPrimitive.Root,
    {
      className: cn(
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--cyan)] data-[state=unchecked]:bg-input",
        sizeStyles[size].root,
        className
      ),
      ...props,
      ref,
      children: /* @__PURE__ */ jsx(
        SwitchPrimitive.Thumb,
        {
          className: cn(
            "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
            sizeStyles[size].thumb
          )
        }
      )
    }
  );
});
Switch.displayName = SwitchPrimitive.Root.displayName;
var LabeledSwitch = React50.forwardRef(({ label, description, labelPosition = "right", className, id, ...props }, ref) => {
  const switchId = id || React50.useId();
  const labelContent = /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: switchId,
        className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
        children: label
      }
    ),
    description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: description })
  ] });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-3",
        labelPosition === "left" && "flex-row-reverse justify-end",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(Switch, { ref, id: switchId, ...props }),
        labelContent
      ]
    }
  );
});
LabeledSwitch.displayName = "LabeledSwitch";
var RadioGroup = React50.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React50.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { weight: "fill", className: "h-2.5 w-2.5 fill-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
var RadioGroupOption = React50.forwardRef(({ label, description, className, id, ...props }, ref) => {
  const optionId = id || React50.useId();
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-start gap-3", className), children: [
    /* @__PURE__ */ jsx(RadioGroupItem, { ref, id: optionId, ...props }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: optionId,
          className: "text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          children: label
        }
      ),
      description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: description })
    ] })
  ] });
});
RadioGroupOption.displayName = "RadioGroupOption";
var RadioGroupCard = React50.forwardRef(({ label, description, children, className, id, ...props }, ref) => {
  const cardId = id || React50.useId();
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      id: cardId,
      className: cn(
        "relative flex cursor-pointer rounded-lg border bg-background p-4 transition-all hover:border-[var(--cyan)]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=checked]:border-[var(--cyan)] data-[state=checked]:ring-1 data-[state=checked]:ring-[var(--cyan)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-start gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ jsx("div", { className: "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow", children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsx(Circle, { weight: "fill", className: "h-2.5 w-2.5 fill-[var(--cyan)]" }) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: cardId,
              className: "text-sm font-medium leading-none cursor-pointer",
              children: label
            }
          ),
          description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: description }),
          children
        ] })
      ] })
    }
  );
});
RadioGroupCard.displayName = "RadioGroupCard";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b border-gray-200", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React50.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium text-[var(--black)] transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(icons_exports.CaretDown, { className: "h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React50.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
var NODES2 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive2 = NODES2.reduce((primitive, node) => {
  const Slot2 = createSlot(`Primitive.${node}`);
  const Node = React50.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME2 = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator = React50.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsx(
    Primitive2.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator.displayName = NAME2;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root6 = Separator;
var Separator2 = React50.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    Root6,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-gray-200",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator2.displayName = Root6.displayName;
var NavigationMenu = React50.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[var(--black)] transition-colors hover:bg-gray-100 hover:text-[var(--black)] focus:bg-gray-100 focus:text-[var(--black)] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-[var(--black)] data-[state=open]:bg-gray-100/50 data-[state=open]:hover:bg-gray-100 data-[state=open]:focus:bg-gray-100"
);
var NavigationMenuTrigger = React50.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx(
        icons_exports.CaretDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-gray-200 bg-white text-[var(--black)] shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-gray-200 shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
var Avatar = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React50.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(icons_exports.CaretRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-sm border bg-popover p-1 text-popover-foreground shadow-lg",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React50.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-sm border bg-popover p-1.5 text-popover-foreground shadow-md",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React50.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-3 py-2 text-sm outline-none transition-colors focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React50.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(icons_exports.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React50.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(icons_exports.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React50.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-3 py-2 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var SidebarNavItem = React50.forwardRef(
  ({ item, isActive, className, LinkComponent, ...props }, ref) => {
    const Icon = item.icon;
    const baseClassName = cn(
      "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors focus-visible:outline-none",
      isActive ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
      className
    );
    if (LinkComponent) {
      const Comp = LinkComponent;
      return /* @__PURE__ */ jsxs(
        Comp,
        {
          ref,
          href: item.href,
          className: baseClassName,
          ...props,
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 shrink-0", weight: isActive ? "fill" : "regular" }),
            /* @__PURE__ */ jsx("span", { children: item.name })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxs(
      "a",
      {
        ref,
        href: item.href,
        className: baseClassName,
        ...props,
        children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 shrink-0", weight: isActive ? "fill" : "regular" }),
          /* @__PURE__ */ jsx("span", { children: item.name })
        ]
      }
    );
  }
);
SidebarNavItem.displayName = "SidebarNavItem";
var Sidebar = React50.forwardRef(
  ({
    mainNav = [],
    bottomNav = [],
    pathname,
    searchButton,
    helpLink,
    assistantButton,
    header,
    LinkComponent,
    className,
    children,
    ...props
  }, ref) => {
    const isActive = (href) => {
      if (!pathname) return false;
      if (href === "/dashboard" || href === "/") {
        return pathname === "/dashboard" || pathname === "/";
      }
      return pathname.startsWith(href);
    };
    return /* @__PURE__ */ jsxs(
      "aside",
      {
        ref,
        className: cn(
          "relative flex h-full w-60 flex-col border-r bg-background/50",
          className
        ),
        ...props,
        children: [
          header && /* @__PURE__ */ jsx("div", { className: "flex h-14 items-center px-4 border-b", children: header }),
          searchButton && /* @__PURE__ */ jsx("div", { className: "px-3 py-3", children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: searchButton.onClick,
              className: "flex w-full items-center gap-2 rounded-sm border bg-background px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 transition-colors",
              children: [
                searchButton.label && /* @__PURE__ */ jsx("span", { children: searchButton.label }),
                searchButton.shortcut && /* @__PURE__ */ jsx("kbd", { className: "ml-auto text-xs bg-muted px-1.5 py-0.5 rounded-sm", children: searchButton.shortcut })
              ]
            }
          ) }),
          mainNav.length > 0 && /* @__PURE__ */ jsx("nav", { className: "flex-1 px-3 pt-4 space-y-1", children: mainNav.map((item) => /* @__PURE__ */ jsx(
            SidebarNavItem,
            {
              item,
              isActive: isActive(item.href),
              LinkComponent
            },
            item.name
          )) }),
          children,
          bottomNav.length > 0 && /* @__PURE__ */ jsx("div", { className: "px-3 pb-3 space-y-1 border-t pt-3", children: bottomNav.map((item) => /* @__PURE__ */ jsx(
            SidebarNavItem,
            {
              item,
              isActive: isActive(item.href),
              LinkComponent
            },
            item.name
          )) }),
          (helpLink || assistantButton) && /* @__PURE__ */ jsxs("div", { className: "px-3 pb-4 pt-3 border-t", children: [
            assistantButton && /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: assistantButton.onClick,
                className: "flex w-full items-center gap-3 rounded-lg bg-[var(--cyan)]/10 px-3 py-2.5 text-sm font-medium text-[var(--cyan)] hover:bg-[var(--cyan)]/20 transition-colors mb-2",
                children: [
                  assistantButton.icon && /* @__PURE__ */ jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-[var(--cyan)] text-white", children: /* @__PURE__ */ jsx(assistantButton.icon, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsx("span", { children: assistantButton.label || "Ask Assistant" })
                ]
              }
            ),
            helpLink && /* @__PURE__ */ jsxs(
              "a",
              {
                href: helpLink.href,
                className: "flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors",
                children: [
                  helpLink.icon && /* @__PURE__ */ jsx(helpLink.icon, { className: "h-4 w-4" }),
                  helpLink.label
                ]
              }
            )
          ] })
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var alertVariants = cva(
  "rounded-sm border p-3 text-sm",
  {
    variants: {
      variant: {
        default: "bg-background border-border text-foreground",
        success: "bg-green-50 border-green-200 text-green-900",
        error: "bg-red-50 border-red-200 text-red-900",
        warning: "bg-amber-50 border-amber-200 text-amber-900",
        info: "bg-blue-50 border-blue-200 text-blue-900",
        primary: "bg-[var(--cyan)]/10 border-[var(--cyan)]/20 text-[var(--cyan)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React50.forwardRef(
  ({ className, variant, icon, title, action, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(alertVariants({ variant }), className),
        ...props,
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 flex-1", children: [
            icon && /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-0.5", children: icon }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              title && /* @__PURE__ */ jsx("p", { className: "font-semibold mb-1", children: title }),
              /* @__PURE__ */ jsx("div", { className: title ? "text-sm" : "", children })
            ] })
          ] }),
          action && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: action })
        ] })
      }
    );
  }
);
Alert.displayName = "Alert";
var EmptyState = React50.forwardRef(
  ({ className, icon, title, description, action, size = "default", ...props }, ref) => {
    const paddingClass = {
      sm: "p-8",
      default: "p-12",
      lg: "p-16"
    }[size];
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "rounded-sm border border-dashed text-center",
          paddingClass,
          className
        ),
        ...props,
        children: [
          icon && /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: icon }),
          title && /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-foreground mb-1", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: description }),
          action && /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: action })
        ]
      }
    );
  }
);
EmptyState.displayName = "EmptyState";
var ErrorState = React50.forwardRef(
  ({
    title = "Something went wrong",
    description = "We encountered an error loading this page. Please try again.",
    showRetry = true,
    showHomeLink = true,
    retryText = "Try again",
    homeLinkText = "Go to dashboard",
    onRetry,
    onHomeClick,
    icon,
    actions,
    className,
    ...props
  }, ref) => {
    const defaultIcon = /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "currentColor",
        viewBox: "0 0 256 256",
        className: "text-red-500",
        children: /* @__PURE__ */ jsx("path", { d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" })
      }
    );
    const refreshIcon = /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        viewBox: "0 0 256 256",
        className: "mr-2",
        children: /* @__PURE__ */ jsx("path", { d: "M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64A80,80,0,1,0,207.6,176.16a8,8,0,1,1,13.54,8.49A96,96,0,1,1,227.59,64l.3-.31L208,44.31V56a8,8,0,0,0,8,8h16A8,8,0,0,0,240,56Z" })
      }
    );
    const hasDefaultActions = showRetry && onRetry || showHomeLink && onHomeClick;
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("flex items-center justify-center min-h-[60vh]", className),
        ...props,
        children: /* @__PURE__ */ jsx(Card, { className: "max-w-md w-full", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8 text-center", children: [
          /* @__PURE__ */ jsx(IconBox, { size: "lg", className: "mx-auto mb-4 bg-red-50", children: icon || defaultIcon }),
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-[var(--black)] mb-2", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: description }),
          actions ? /* @__PURE__ */ jsx("div", { className: "flex gap-3 justify-center", children: actions }) : hasDefaultActions ? /* @__PURE__ */ jsxs("div", { className: "flex gap-3 justify-center", children: [
            showRetry && onRetry && /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: onRetry, children: [
              refreshIcon,
              retryText
            ] }),
            showHomeLink && onHomeClick && /* @__PURE__ */ jsx(Button, { onClick: onHomeClick, children: homeLinkText })
          ] }) : null
        ] }) })
      }
    );
  }
);
ErrorState.displayName = "ErrorState";
var CodeBlock = React50.forwardRef(
  ({ className, children, language, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "pre",
      {
        ref,
        className: cn(
          "rounded-sm bg-muted p-4 text-sm overflow-auto font-mono",
          className
        ),
        ...language && { "data-language": language },
        ...props,
        children: /* @__PURE__ */ jsx("code", { children })
      }
    );
  }
);
CodeBlock.displayName = "CodeBlock";
var FormField = React50.forwardRef(
  ({ label, error, helperText, hint, required, id, className, children, ...props }, ref) => {
    const fieldId = id || React50.useId();
    const errorId = `${fieldId}-error`;
    const helperId = `${fieldId}-helper`;
    const enhancedChildren = React50.Children.map(children, (child) => {
      if (React50.isValidElement(child)) {
        const childProps = child.props;
        return React50.cloneElement(child, {
          id: fieldId,
          "aria-invalid": error ? "true" : void 0,
          "aria-describedby": error ? errorId : helperText ? helperId : void 0,
          className: cn(
            childProps.className,
            error && "border-red-500 focus-visible:ring-red-500"
          )
        });
      }
      return child;
    });
    return /* @__PURE__ */ jsxs("div", { ref, className: cn("space-y-2", className), ...props, children: [
      (label || hint) && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        label && /* @__PURE__ */ jsx(Label2, { htmlFor: fieldId, className: required ? 'after:content-["*"] after:ml-0.5 after:text-red-500' : "", children: label }),
        hint && /* @__PURE__ */ jsx("div", { children: hint })
      ] }),
      enhancedChildren,
      error && /* @__PURE__ */ jsx("p", { id: errorId, className: "text-sm text-red-600", role: "alert", children: error }),
      helperText && !error && /* @__PURE__ */ jsx("p", { id: helperId, className: "text-xs text-muted-foreground", children: helperText })
    ] });
  }
);
FormField.displayName = "FormField";
var Table = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full border-collapse", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("tbody", { ref, className: cn("", className), ...props }));
TableBody.displayName = "TableBody";
var TableFooter = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-semibold text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
var TableCell = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
var Divider = React50.forwardRef(
  ({ className, text, orientation = "horizontal", ...props }, ref) => {
    if (orientation === "vertical") {
      return /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          className: cn("w-px h-full bg-border", className),
          ...props
        }
      );
    }
    if (text) {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          ref,
          className: cn("relative flex items-center", className),
          ...props,
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1 border-t" }),
            /* @__PURE__ */ jsx("span", { className: "px-2 text-xs uppercase text-muted-foreground bg-background", children: text }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 border-t" })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("border-t", className),
        ...props
      }
    );
  }
);
Divider.displayName = "Divider";
var Tabs = TabsPrimitive.Root;
var TabsList = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-sm bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
var TabsListUnderline = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-start border-b border-border",
      className
    ),
    ...props
  }
));
TabsListUnderline.displayName = "TabsListUnderline";
var TabsTriggerUnderline = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:text-foreground border-b-2 border-transparent -mb-px",
      "data-[state=active]:text-[var(--cyan)] data-[state=active]:border-[var(--cyan)] data-[state=active]:font-semibold",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
TabsTriggerUnderline.displayName = "TabsTriggerUnderline";
var Dialog = SheetPrimitive.Root;
var DialogTrigger = SheetPrimitive.Trigger;
var DialogPortal = SheetPrimitive.Portal;
var DialogClose = SheetPrimitive.Close;
var DialogOverlay = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/60",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = SheetPrimitive.Overlay.displayName;
var DialogContent = React50.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg gap-4 border border-border bg-white p-6 shadow-lg rounded-sm -translate-x-1/2 -translate-y-1/2",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = SheetPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight text-[var(--black)]",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = SheetPrimitive.Title.displayName;
var DialogDescription = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = SheetPrimitive.Description.displayName;
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-sm",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-[var(--black)]", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  variant = "default",
  loading = false
}) {
  return /* @__PURE__ */ jsx(AlertDialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
      /* @__PURE__ */ jsx(AlertDialogTitle, { children: title }),
      description && /* @__PURE__ */ jsx(AlertDialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsx(
        AlertDialogCancel,
        {
          onClick: () => {
            onCancel?.();
            onOpenChange(false);
          },
          children: cancelText
        }
      ),
      /* @__PURE__ */ jsx(
        AlertDialogAction,
        {
          onClick: () => {
            onConfirm();
          },
          className: cn(
            variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90"
          ),
          disabled: loading,
          children: loading ? "Loading..." : confirmText
        }
      )
    ] })
  ] }) });
}
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverClose = PopoverPrimitive.Close;
var PopoverContent = React50.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-sm border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
var PopoverArrow = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  PopoverPrimitive.Arrow,
  {
    ref,
    className: cn("fill-popover", className),
    ...props
  }
));
PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName;
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React50.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-sm bg-[var(--black)] px-3 py-1.5 text-xs text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
var TooltipArrow = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Arrow,
  {
    ref,
    className: cn("fill-[var(--black)]", className),
    ...props
  }
));
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;
function SimpleTooltip({
  content,
  children,
  side = "top",
  align = "center",
  delayDuration = 200
}) {
  return /* @__PURE__ */ jsx(TooltipProvider, { delayDuration, children: /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children }),
    /* @__PURE__ */ jsx(TooltipContent, { side, align, children: content })
  ] }) });
}
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-sm border-none p-4 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-[0.98] data-[state=open]:zoom-in-[0.98] duration-150",
  {
    variants: {
      variant: {
        default: "bg-[var(--black)] text-white",
        success: "bg-[var(--black)] text-white",
        error: "bg-[var(--black)] text-white",
        warning: "bg-[var(--black)] text-white",
        info: "bg-[var(--black)] text-white"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React50.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-sm border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-3 top-3 rounded-sm p-1 text-white/60 transition-colors hover:text-white focus:outline-none",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { size: 16 })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm text-white/70", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
var ToastIcon = ({ variant }) => {
  switch (variant) {
    case "success":
      return /* @__PURE__ */ jsx(Check, { size: 18, weight: "bold", className: "text-[var(--cyan)]" });
    case "error":
      return /* @__PURE__ */ jsx(WarningCircle, { size: 18, weight: "fill", className: "text-red-400" });
    case "warning":
      return /* @__PURE__ */ jsx(WarningCircle, { size: 18, weight: "fill", className: "text-amber-400" });
    case "info":
      return /* @__PURE__ */ jsx(Info, { size: 18, weight: "fill", className: "text-[var(--cyan)]" });
    default:
      return /* @__PURE__ */ jsx(Info, { size: 18, weight: "fill", className: "text-white/70" });
  }
};
var TOAST_LIMIT = 5;
var TOAST_REMOVE_DELAY = 1e3;
var TOAST_AUTO_DISMISS_DELAY = 4e3;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var autoDismissTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var scheduleAutoDismiss = (toastId) => {
  if (autoDismissTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    autoDismissTimeouts.delete(toastId);
    dispatch({
      type: "DISMISS_TOAST",
      toastId
    });
  }, TOAST_AUTO_DISMISS_DELAY);
  autoDismissTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      scheduleAutoDismiss(action.toast.id);
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React50.useState(memoryState);
  React50.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, variant, ...props }) {
      const safeVariant = variant ?? void 0;
      return /* @__PURE__ */ jsxs(Toast, { variant: safeVariant, ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(ToastIcon, { variant: safeVariant }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
            title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
            description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
          ] })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
var Skeleton = React50.forwardRef(
  ({ className, variant = "default", width, height, animate = true, style, ...props }, ref) => {
    const variantStyles = {
      default: "rounded-sm",
      circular: "rounded-full",
      rounded: "rounded-md"
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "bg-muted",
          animate && "animate-pulse",
          variantStyles[variant],
          className
        ),
        style: {
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          ...style
        },
        ...props
      }
    );
  }
);
Skeleton.displayName = "Skeleton";
var SkeletonText = React50.forwardRef(
  ({ lines = 3, gap = 8, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx("div", { ref, className: cn("space-y-2", className), style: { gap }, children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx(
      Skeleton,
      {
        height: 16,
        width: i === lines - 1 ? "70%" : "100%",
        ...props
      },
      i
    )) });
  }
);
SkeletonText.displayName = "SkeletonText";
var SkeletonCard = React50.forwardRef(
  ({ hasHeader = true, hasAvatar = false, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("rounded-lg border p-6 space-y-4", className),
        ...props,
        children: [
          hasHeader && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            hasAvatar && /* @__PURE__ */ jsx(Skeleton, { variant: "circular", width: 40, height: 40 }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 flex-1", children: [
              /* @__PURE__ */ jsx(Skeleton, { height: 20, width: "50%" }),
              /* @__PURE__ */ jsx(Skeleton, { height: 14, width: "30%" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(SkeletonText, { lines: 3 })
        ]
      }
    );
  }
);
SkeletonCard.displayName = "SkeletonCard";
function generatePagination(currentPage, totalPages, siblingCount) {
  const totalPageNumbers = siblingCount * 2 + 5;
  if (totalPageNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < totalPages - 1;
  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => i + 1
    );
    return [...leftRange, "ellipsis", totalPages];
  }
  if (showLeftDots && !showRightDots) {
    const rightRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => totalPages - (3 + siblingCount * 2) + i + 1
    );
    return [1, "ellipsis", ...rightRange];
  }
  const middleRange = Array.from(
    { length: siblingCount * 2 + 1 },
    (_, i) => leftSiblingIndex + i
  );
  return [1, "ellipsis", ...middleRange, "ellipsis", totalPages];
}
var Pagination = React50.forwardRef(
  ({
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
    showBoundaryPages = true,
    size = "default",
    className
  }, ref) => {
    const pages = generatePagination(currentPage, totalPages, siblingCount);
    const buttonSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "default";
    const iconSize = size === "sm" ? 14 : size === "lg" ? 20 : 16;
    if (totalPages <= 1) {
      return null;
    }
    return /* @__PURE__ */ jsxs(
      "nav",
      {
        ref,
        role: "navigation",
        "aria-label": "Pagination",
        className: cn("flex items-center gap-1", className),
        children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: buttonSize,
              onClick: () => onPageChange(currentPage - 1),
              disabled: currentPage <= 1,
              "aria-label": "Go to previous page",
              children: /* @__PURE__ */ jsx(CaretLeft, { size: iconSize })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: pages.map((page, index) => {
            if (page === "ellipsis") {
              return /* @__PURE__ */ jsx(
                "span",
                {
                  className: "flex h-9 w-9 items-center justify-center text-muted-foreground",
                  children: /* @__PURE__ */ jsx(DotsThree, { size: iconSize })
                },
                `ellipsis-${index}`
              );
            }
            const isCurrentPage = page === currentPage;
            return /* @__PURE__ */ jsx(
              Button,
              {
                variant: isCurrentPage ? "default" : "outline",
                size: buttonSize,
                onClick: () => onPageChange(page),
                "aria-label": `Go to page ${page}`,
                "aria-current": isCurrentPage ? "page" : void 0,
                children: page
              },
              page
            );
          }) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: buttonSize,
              onClick: () => onPageChange(currentPage + 1),
              disabled: currentPage >= totalPages,
              "aria-label": "Go to next page",
              children: /* @__PURE__ */ jsx(CaretRight, { size: iconSize })
            }
          )
        ]
      }
    );
  }
);
Pagination.displayName = "Pagination";
var SimplePagination = React50.forwardRef(
  ({
    currentPage,
    totalPages,
    onPageChange,
    size = "default",
    className,
    showPageInfo = true
  }, ref) => {
    const buttonSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "default";
    const iconSize = size === "sm" ? 14 : size === "lg" ? 20 : 16;
    if (totalPages <= 1) {
      return null;
    }
    return /* @__PURE__ */ jsxs(
      "nav",
      {
        ref,
        role: "navigation",
        "aria-label": "Pagination",
        className: cn("flex items-center gap-2", className),
        children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: buttonSize,
              onClick: () => onPageChange(currentPage - 1),
              disabled: currentPage <= 1,
              "aria-label": "Go to previous page",
              children: [
                /* @__PURE__ */ jsx(CaretLeft, { size: iconSize }),
                /* @__PURE__ */ jsx("span", { className: "ml-1", children: "Previous" })
              ]
            }
          ),
          showPageInfo && /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground px-2", children: [
            "Page ",
            currentPage,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: buttonSize,
              onClick: () => onPageChange(currentPage + 1),
              disabled: currentPage >= totalPages,
              "aria-label": "Go to next page",
              children: [
                /* @__PURE__ */ jsx("span", { className: "mr-1", children: "Next" }),
                /* @__PURE__ */ jsx(CaretRight, { size: iconSize })
              ]
            }
          )
        ]
      }
    );
  }
);
SimplePagination.displayName = "SimplePagination";
var StepProgress = React50.forwardRef(
  ({
    steps,
    currentStep,
    onStepClick,
    orientation = "horizontal",
    size = "default",
    showLabels = true,
    className
  }, ref) => {
    const sizeStyles = {
      sm: {
        indicator: "w-6 h-6 text-xs",
        icon: 12,
        label: "text-xs",
        connector: orientation === "horizontal" ? "h-0.5" : "w-0.5",
        connectorLength: orientation === "horizontal" ? "w-4 sm:w-8" : "h-6"
      },
      default: {
        indicator: "w-7 h-7 text-xs",
        icon: 14,
        label: "text-sm",
        connector: orientation === "horizontal" ? "h-0.5" : "w-0.5",
        connectorLength: orientation === "horizontal" ? "w-6 sm:w-10 md:w-14" : "h-8"
      },
      lg: {
        indicator: "w-8 h-8 text-sm",
        icon: 16,
        label: "text-sm",
        connector: orientation === "horizontal" ? "h-0.5" : "w-0.5",
        connectorLength: orientation === "horizontal" ? "w-8 sm:w-12 md:w-16" : "h-10"
      }
    };
    const styles = sizeStyles[size];
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "flex-row items-center" : "flex-col",
          className
        ),
        children: steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          const isClickable = onStepClick && step.id < currentStep;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "flex",
                orientation === "horizontal" ? "flex-row items-center" : "flex-col items-start"
              ),
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => isClickable && onStepClick(step.id),
                    disabled: !isClickable,
                    className: cn(
                      "flex items-center gap-2 px-2 py-1.5 rounded-sm transition-colors",
                      isClickable ? "cursor-pointer hover:bg-gray-50" : "cursor-default",
                      orientation === "vertical" && "flex-row"
                    ),
                    children: [
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: cn(
                            "rounded-sm flex items-center justify-center font-bold transition-colors",
                            styles.indicator,
                            isCompleted ? "bg-[var(--cyan)] text-white" : isCurrent ? "bg-[var(--black)] text-white" : "bg-gray-100 text-gray-400"
                          ),
                          children: isCompleted ? /* @__PURE__ */ jsx(Check, { size: styles.icon, weight: "bold" }) : step.id
                        }
                      ),
                      showLabels && /* @__PURE__ */ jsxs("div", { className: cn(
                        orientation === "horizontal" && "hidden sm:block",
                        "text-left"
                      ), children: [
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: cn(
                              "font-medium transition-colors whitespace-nowrap",
                              styles.label,
                              isCompleted ? "text-[var(--cyan)]" : isCurrent ? "text-[var(--black)]" : "text-gray-400"
                            ),
                            children: step.label
                          }
                        ),
                        step.description && orientation === "vertical" && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: step.description })
                      ] })
                    ]
                  }
                ),
                index < steps.length - 1 && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "transition-colors",
                      styles.connector,
                      styles.connectorLength,
                      isCompleted ? "bg-[var(--cyan)]" : "bg-gray-200",
                      orientation === "vertical" && "ml-[13px] my-1"
                    )
                  }
                )
              ]
            },
            step.id
          );
        })
      }
    );
  }
);
StepProgress.displayName = "StepProgress";
var StepDots = React50.forwardRef(
  ({ totalSteps, currentStep, onStepClick, className }, ref) => {
    return /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center gap-2", className), children: Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
      const isCompleted = step < currentStep;
      const isCurrent = step === currentStep;
      const isClickable = onStepClick && step < currentStep;
      return /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => isClickable && onStepClick(step),
          disabled: !isClickable,
          className: cn(
            "w-2 h-2 rounded-full transition-colors",
            isClickable && "cursor-pointer",
            !isClickable && "cursor-default",
            isCompleted || isCurrent ? "bg-[var(--cyan)]" : "bg-gray-200"
          ),
          "aria-label": `Step ${step}`
        },
        step
      );
    }) });
  }
);
StepDots.displayName = "StepDots";
var Breadcrumbs = React50.forwardRef(
  ({
    items,
    LinkComponent,
    separator,
    showHomeIcon = false,
    maxItems,
    size = "default",
    className,
    ...props
  }, ref) => {
    const sizeStyles = {
      sm: "text-xs gap-1",
      default: "text-sm gap-1.5"
    };
    const iconSize = size === "sm" ? 10 : 12;
    let displayItems = items;
    if (maxItems && items.length > maxItems) {
      displayItems = [
        items[0],
        { label: "...", href: void 0 },
        ...items.slice(-(maxItems - 2))
      ];
    }
    const defaultSeparator = /* @__PURE__ */ jsx(CaretRight, { size: iconSize, className: "text-gray-400" });
    return /* @__PURE__ */ jsx(
      "nav",
      {
        ref,
        "aria-label": "Breadcrumb",
        className: cn("flex items-center text-gray-500", sizeStyles[size], className),
        ...props,
        children: /* @__PURE__ */ jsx("ol", { className: cn("flex items-center", sizeStyles[size]), children: displayItems.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === displayItems.length - 1;
          const isEllipsis = item.label === "...";
          return /* @__PURE__ */ jsxs("li", { className: cn("flex items-center", sizeStyles[size]), children: [
            index > 0 && /* @__PURE__ */ jsx("span", { className: "mx-1 text-gray-400", children: separator || defaultSeparator }),
            isEllipsis ? /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: item.label }) : item.href && !isLast ? LinkComponent ? /* @__PURE__ */ jsxs(
              LinkComponent,
              {
                href: item.href,
                className: "flex items-center gap-1 hover:text-[var(--black)] transition-colors",
                children: [
                  isFirst && showHomeIcon && /* @__PURE__ */ jsx(House, { size: iconSize + 2, weight: "fill" }),
                  item.icon,
                  /* @__PURE__ */ jsx("span", { children: item.label })
                ]
              }
            ) : /* @__PURE__ */ jsxs(
              "a",
              {
                href: item.href,
                className: "flex items-center gap-1 hover:text-[var(--black)] transition-colors",
                children: [
                  isFirst && showHomeIcon && /* @__PURE__ */ jsx(House, { size: iconSize + 2, weight: "fill" }),
                  item.icon,
                  /* @__PURE__ */ jsx("span", { children: item.label })
                ]
              }
            ) : /* @__PURE__ */ jsxs(
              "span",
              {
                className: cn(
                  "flex items-center gap-1",
                  isLast && "text-[var(--black)] font-medium"
                ),
                "aria-current": isLast ? "page" : void 0,
                children: [
                  isFirst && showHomeIcon && /* @__PURE__ */ jsx(House, { size: iconSize + 2, weight: "fill" }),
                  item.icon,
                  /* @__PURE__ */ jsx("span", { children: item.label })
                ]
              }
            )
          ] }, index);
        }) })
      }
    );
  }
);
Breadcrumbs.displayName = "Breadcrumbs";
var BreadcrumbLink = React50.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "a",
    {
      ref,
      className: cn(
        "hover:text-[var(--black)] transition-colors",
        className
      ),
      ...props
    }
  )
);
BreadcrumbLink.displayName = "BreadcrumbLink";
var presetLabels = {
  "today": "Today",
  "yesterday": "Yesterday",
  "7d": "Last 7 days",
  "30d": "Last 30 days",
  "90d": "Last 90 days",
  "this-week": "This week",
  "this-month": "This month",
  "this-year": "This year",
  "custom": "Custom"
};
var DateRangePicker = React50.forwardRef(
  ({
    value,
    onChange,
    customStart = "",
    customEnd = "",
    onCustomChange,
    presets = ["7d", "30d", "90d", "custom"],
    size = "default",
    className,
    inlineCustom = true
  }, ref) => {
    const buttonSize = size === "sm" ? "sm" : "default";
    return /* @__PURE__ */ jsxs("div", { ref, className: cn("flex flex-wrap items-center gap-2", className), children: [
      presets.map((preset) => /* @__PURE__ */ jsx(
        Button,
        {
          variant: value === preset ? "default" : "outline",
          size: buttonSize,
          onClick: () => onChange(preset),
          children: presetLabels[preset]
        },
        preset
      )),
      value === "custom" && inlineCustom && onCustomChange && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx(Label2, { htmlFor: "start-date", className: "text-xs sr-only", children: "Start" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "start-date",
              type: "date",
              value: customStart,
              onChange: (e) => onCustomChange(e.target.value, customEnd),
              className: cn(size === "sm" ? "h-8 text-xs" : "h-9"),
              "aria-label": "Start date"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "to" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx(Label2, { htmlFor: "end-date", className: "text-xs sr-only", children: "End" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "end-date",
              type: "date",
              value: customEnd,
              onChange: (e) => onCustomChange(customStart, e.target.value),
              className: cn(size === "sm" ? "h-8 text-xs" : "h-9"),
              "aria-label": "End date"
            }
          )
        ] })
      ] })
    ] });
  }
);
DateRangePicker.displayName = "DateRangePicker";
var DateRangeSelect = React50.forwardRef(
  ({ value, onChange, presets = ["7d", "30d", "90d"], className }, ref) => {
    return /* @__PURE__ */ jsx(
      "select",
      {
        ref,
        value,
        onChange: (e) => onChange(e.target.value),
        className: cn(
          "h-9 rounded-sm border border-input bg-background px-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        children: presets.map((preset) => /* @__PURE__ */ jsx("option", { value: preset, children: presetLabels[preset] }, preset))
      }
    );
  }
);
DateRangeSelect.displayName = "DateRangeSelect";
function getDateRangeFromPreset(preset) {
  const now = /* @__PURE__ */ new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  let start = new Date(now);
  start.setHours(0, 0, 0, 0);
  switch (preset) {
    case "today":
      break;
    case "yesterday":
      start.setDate(start.getDate() - 1);
      end.setDate(end.getDate() - 1);
      break;
    case "7d":
      start.setDate(start.getDate() - 7);
      break;
    case "30d":
      start.setDate(start.getDate() - 30);
      break;
    case "90d":
      start.setDate(start.getDate() - 90);
      break;
    case "this-week":
      start.setDate(start.getDate() - start.getDay());
      break;
    case "this-month":
      start.setDate(1);
      break;
    case "this-year":
      start.setMonth(0, 1);
      break;
  }
  return { start, end };
}
function getFileIcon(type) {
  if (type.startsWith("video/") || type === "screen_recording") return FileVideo;
  if (type.startsWith("image/") || type === "image") return FileImage;
  if (type === "application/pdf" || type === "pdf") return FilePdf;
  if (type.includes("document") || type === "document") return FileDoc;
  return File;
}
function getTypeLabel(type) {
  if (type.startsWith("video/") || type === "screen_recording") return "Video";
  if (type.startsWith("audio/")) return "Audio";
  if (type.startsWith("image/") || type === "image") return "Image";
  if (type === "application/pdf" || type === "pdf") return "PDF";
  if (type.includes("document") || type === "document") return "Document";
  return "File";
}
function formatSize(size) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}
function canPreview(file) {
  const ext = file.filename.toLowerCase().split(".").pop() || "";
  if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext)) return true;
  if (["mp4", "webm", "mov", "avi", "mkv"].includes(ext)) return true;
  if (ext === "pdf") return true;
  if (file.type.startsWith("image/") || file.type === "image") return true;
  if (file.type.startsWith("video/") || file.type === "screen_recording") return true;
  if (file.type === "application/pdf" || file.type === "pdf") return true;
  return false;
}
function getPreviewType(file) {
  const ext = file.filename.toLowerCase().split(".").pop() || "";
  if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext) || file.type.startsWith("image/") || file.type === "image") return "image";
  if (["mp4", "webm", "mov", "avi", "mkv"].includes(ext) || file.type.startsWith("video/") || file.type === "screen_recording") return "video";
  if (ext === "pdf" || file.type === "application/pdf" || file.type === "pdf") return "pdf";
  return "none";
}
function FilePreview({
  files,
  title = "Uploaded Files",
  getSignedUrl,
  showCard = true,
  emptyMessage = "No files uploaded"
}) {
  const [previewFile, setPreviewFile] = useState(null);
  const [videoError, setVideoError] = useState(false);
  const [signedUrl, setSignedUrl] = useState(null);
  const [loadingUrl, setLoadingUrl] = useState(false);
  const [urlError, setUrlError] = useState(null);
  const videoRef = useRef(null);
  const handleOpenPreview = async (file) => {
    setVideoError(false);
    setPreviewFile(file);
    setUrlError(null);
    if (file.url) {
      setSignedUrl(file.url);
    } else if (getSignedUrl) {
      setLoadingUrl(true);
      try {
        const url = await getSignedUrl(file.path);
        if (url) {
          setSignedUrl(url);
        } else {
          setUrlError("Failed to load file URL");
        }
      } catch (error) {
        setUrlError(error instanceof Error ? error.message : "Failed to load file");
      } finally {
        setLoadingUrl(false);
      }
    } else {
      setUrlError("No URL available for this file");
    }
  };
  const handleClosePreview = () => {
    setPreviewFile(null);
    setSignedUrl(null);
    setUrlError(null);
    setLoadingUrl(false);
    setVideoError(false);
  };
  const handleDownload = async (e, file) => {
    e.stopPropagation();
    let url = file.url;
    if (!url && getSignedUrl) {
      url = await getSignedUrl(file.path) || void 0;
    }
    if (url) {
      window.open(url, "_blank");
    }
  };
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    files.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-2", children: files.map((file, i) => {
      const FileIcon = getFileIcon(file.type);
      const typeLabel = getTypeLabel(file.type);
      const sizeLabel = formatSize(file.size);
      const isPreviewable = canPreview(file);
      const previewType = getPreviewType(file);
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex items-center justify-between p-3 rounded-md bg-gray-50 transition-colors ${isPreviewable ? "hover:bg-gray-100 cursor-pointer" : ""}`,
          onClick: () => isPreviewable && handleOpenPreview(file),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative shrink-0", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-sm bg-white border border-gray-200 flex items-center justify-center", children: /* @__PURE__ */ jsx(FileIcon, { className: "w-5 h-5 text-[var(--cyan)]", weight: "fill" }) }),
                previewType === "video" && /* @__PURE__ */ jsx(Play, { className: "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 text-[var(--cyan)] bg-white rounded-full", weight: "fill" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[var(--black)] truncate", children: file.filename }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  typeLabel,
                  " \xB7 ",
                  sizeLabel,
                  isPreviewable && /* @__PURE__ */ jsx("span", { className: "text-[var(--cyan)] ml-1", children: "\xB7 Click to preview" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: (e) => handleDownload(e, file),
                className: "p-2 rounded-sm hover:bg-gray-200 transition-colors shrink-0",
                title: "Download",
                children: /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 text-muted-foreground" })
              }
            )
          ]
        },
        i
      );
    }) }) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-32 border border-dashed border-gray-200 rounded-md", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx(Folder, { size: 24, className: "text-gray-300 mx-auto mb-2" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: emptyMessage })
    ] }) }),
    previewFile && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4",
        onClick: handleClosePreview,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-white rounded-lg max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  (() => {
                    const FileIcon = getFileIcon(previewFile.type);
                    return /* @__PURE__ */ jsx(FileIcon, { className: "w-5 h-5 text-[var(--cyan)] flex-shrink-0", weight: "fill" });
                  })(),
                  /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-medium text-[var(--black)] truncate", children: previewFile.filename }),
                    /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      getTypeLabel(previewFile.type),
                      " \xB7 ",
                      formatSize(previewFile.size)
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  signedUrl && /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: signedUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "p-2 rounded-md hover:bg-gray-100 transition-colors",
                        title: "Open in new tab",
                        children: /* @__PURE__ */ jsx(ArrowSquareOut, { className: "w-5 h-5 text-muted-foreground" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: signedUrl,
                        download: previewFile.filename,
                        className: "p-2 rounded-md hover:bg-gray-100 transition-colors",
                        title: "Download",
                        children: /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-muted-foreground" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: handleClosePreview,
                      className: "p-2 rounded-md hover:bg-gray-100 transition-colors ml-2",
                      children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-auto p-4 bg-gray-900 flex items-center justify-center min-h-[400px]", children: [
                loadingUrl && /* @__PURE__ */ jsxs("div", { className: "text-center text-white", children: [
                  /* @__PURE__ */ jsx(CircleNotch, { className: "w-8 h-8 mx-auto mb-2 animate-spin text-[var(--cyan)]" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Loading file..." })
                ] }),
                urlError && /* @__PURE__ */ jsxs("div", { className: "text-center text-white max-w-md", children: [
                  /* @__PURE__ */ jsx(File, { className: "w-16 h-16 mx-auto mb-4 text-gray-500" }),
                  /* @__PURE__ */ jsx("p", { className: "text-lg font-medium mb-2", children: "Failed to Load File" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: urlError })
                ] }),
                signedUrl && !loadingUrl && !urlError && /* @__PURE__ */ jsxs(Fragment, { children: [
                  getPreviewType(previewFile) === "image" && /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: signedUrl,
                      alt: previewFile.filename,
                      className: "max-w-full max-h-[70vh] object-contain rounded-md"
                    }
                  ),
                  getPreviewType(previewFile) === "video" && !videoError && /* @__PURE__ */ jsx(
                    "video",
                    {
                      ref: videoRef,
                      src: signedUrl,
                      controls: true,
                      autoPlay: true,
                      className: "w-full max-h-[70vh] rounded-md bg-black",
                      onError: () => setVideoError(true),
                      children: "Your browser does not support the video tag."
                    }
                  ),
                  getPreviewType(previewFile) === "video" && videoError && /* @__PURE__ */ jsxs("div", { className: "text-center text-white max-w-md", children: [
                    /* @__PURE__ */ jsx(FileVideo, { className: "w-16 h-16 mx-auto mb-4 text-gray-500" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-medium mb-2", children: "Video Preview Not Available" }),
                    /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-400 mb-6", children: [
                      "This video format (.",
                      previewFile.filename.split(".").pop(),
                      ") cannot be played directly in the browser."
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 justify-center", children: [
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: signedUrl,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors",
                          children: [
                            /* @__PURE__ */ jsx(ArrowSquareOut, { className: "w-4 h-4" }),
                            "Open in New Tab"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: signedUrl,
                          download: previewFile.filename,
                          className: "inline-flex items-center gap-2 px-4 py-2 bg-[var(--cyan)] text-gray-900 rounded-full text-sm font-medium hover:bg-[var(--cyan)]/90 transition-colors",
                          children: [
                            /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                            "Download"
                          ]
                        }
                      )
                    ] })
                  ] }),
                  getPreviewType(previewFile) === "pdf" && /* @__PURE__ */ jsx(
                    "iframe",
                    {
                      src: signedUrl,
                      className: "w-full h-[70vh] rounded-md border-0 bg-white",
                      title: previewFile.filename
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] });
  if (!showCard) {
    return content;
  }
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", children: title }) }),
    /* @__PURE__ */ jsx(CardContent, { children: content })
  ] });
}
var SettingsNav = React50.forwardRef(
  ({ groups, LinkComponent, className, ...props }, ref) => {
    const Link2 = LinkComponent || "a";
    return /* @__PURE__ */ jsx("div", { ref, className: cn("space-y-8", className), ...props, children: groups.map((group) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3 px-1", children: group.title }),
      /* @__PURE__ */ jsx("div", { className: "space-y-1", children: group.items.map((item) => /* @__PURE__ */ jsxs(
        Link2,
        {
          href: item.href,
          className: "group flex items-center gap-4 p-4 rounded-sm transition-all hover:bg-gray-50 border border-transparent hover:border-gray-200",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-sm bg-gray-100 group-hover:bg-[var(--cyan)]/10 transition-colors", children: /* @__PURE__ */ jsx("span", { className: "text-gray-600 group-hover:text-[var(--cyan)] transition-colors [&>svg]:w-5 [&>svg]:h-5", children: item.icon }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-medium text-[var(--black)] group-hover:text-[var(--cyan)] transition-colors", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
            ] }),
            /* @__PURE__ */ jsx(
              CaretRight,
              {
                size: 18,
                className: "text-gray-300 group-hover:text-[var(--cyan)] group-hover:translate-x-0.5 transition-all shrink-0"
              }
            )
          ]
        },
        item.href
      )) })
    ] }, group.title)) });
  }
);
SettingsNav.displayName = "SettingsNav";
var SettingsNavLink = React50.forwardRef(
  ({ title, description, icon, href, LinkComponent, className, ...props }, ref) => {
    const content = /* @__PURE__ */ jsxs(Fragment, { children: [
      icon && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-sm bg-gray-100 group-hover:bg-[var(--cyan)]/10 transition-colors", children: /* @__PURE__ */ jsx("span", { className: "text-gray-600 group-hover:text-[var(--cyan)] transition-colors [&>svg]:w-5 [&>svg]:h-5", children: icon }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-medium text-[var(--black)] group-hover:text-[var(--cyan)] transition-colors", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description })
      ] }),
      /* @__PURE__ */ jsx(
        CaretRight,
        {
          size: 18,
          className: "text-gray-300 group-hover:text-[var(--cyan)] group-hover:translate-x-0.5 transition-all shrink-0"
        }
      )
    ] });
    const linkClassName = cn(
      "group flex items-center gap-4 p-4 rounded-sm transition-all hover:bg-gray-50 border border-transparent hover:border-gray-200",
      className
    );
    if (LinkComponent && href) {
      return /* @__PURE__ */ jsx(LinkComponent, { href, className: linkClassName, children: content });
    }
    return /* @__PURE__ */ jsx("a", { ref, href, className: linkClassName, ...props, children: content });
  }
);
SettingsNavLink.displayName = "SettingsNavLink";
var typeConfig = {
  escalation: {
    label: "Ask me first",
    icon: Warning,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    description: "Stop and check with me before proceeding"
  },
  default_behavior: {
    label: "Handle it",
    icon: CheckCircle,
    color: "text-[var(--cyan)]",
    bgColor: "bg-[var(--cyan)]/10",
    description: "Proceed automatically using this rule"
  },
  quality_check: {
    label: "Must be correct",
    icon: CheckCircle,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    description: 'This is what "done right" looks like'
  },
  edge_case: {
    label: "Watch out",
    icon: Question,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    description: "Common mistakes or tricky situations"
  }
};
function ScenarioCard({
  scenario,
  onEdit,
  onDelete
}) {
  const config = typeConfig[scenario.type];
  const Icon = config.icon;
  return /* @__PURE__ */ jsx("div", { className: "group relative border border-border rounded-sm p-4 hover:border-[var(--cyan)]/30 hover:bg-[var(--cyan)]/[0.02] transition-all", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx("div", { className: cn("w-9 h-9 rounded-sm flex items-center justify-center shrink-0", config.bgColor), children: /* @__PURE__ */ jsx(Icon, { size: 18, weight: "fill", className: config.color }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mb-1.5", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", size: "sm", className: "font-medium", children: config.label }) }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-[var(--black)]", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "When:" }),
          " ",
          scenario.situation
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[var(--black)] font-medium", children: "Action:" }),
          " ",
          scenario.action
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "h-8 w-8 text-muted-foreground hover:text-[var(--black)]",
          onClick: onEdit,
          children: /* @__PURE__ */ jsx(PencilSimple, { size: 16 })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "h-8 w-8 text-muted-foreground hover:text-red-600 hover:bg-red-50",
          onClick: onDelete,
          children: /* @__PURE__ */ jsx(Trash, { size: 16 })
        }
      )
    ] })
  ] }) });
}
function SuggestionChip({
  suggestion,
  onAdd,
  disabled
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: onAdd,
      disabled,
      className: cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-dashed border-border",
        "text-sm text-muted-foreground hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:bg-[var(--cyan)]/5",
        "transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ jsx(Plus, { size: 14, weight: "bold" }),
        suggestion.situation
      ]
    }
  );
}
function ScenarioDialog({
  open,
  onOpenChange,
  scenario,
  onSave,
  isLoading
}) {
  const [type, setType] = React50.useState(scenario?.type || "escalation");
  const [situation, setSituation] = React50.useState(scenario?.situation || "");
  const [action, setAction] = React50.useState(scenario?.action || "");
  const [isSaving, setIsSaving] = React50.useState(false);
  React50.useEffect(() => {
    if (open) {
      setType(scenario?.type || "escalation");
      setSituation(scenario?.situation || "");
      setAction(scenario?.action || "");
    }
  }, [open, scenario]);
  const handleSave = async () => {
    if (!situation.trim() || !action.trim()) return;
    setIsSaving(true);
    try {
      await onSave({ type, situation: situation.trim(), action: action.trim() });
      onOpenChange(false);
    } finally {
      setIsSaving(false);
    }
  };
  const isValid = situation.trim() && action.trim();
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: scenario ? "Edit scenario" : "Add scenario" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "Define when something happens and what action to take." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 py-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-[var(--black)]", children: "Type" }),
        /* @__PURE__ */ jsx(
          Select,
          {
            value: type,
            onChange: (e) => setType(e.target.value),
            children: Object.entries(typeConfig).map(([key, config]) => /* @__PURE__ */ jsxs("option", { value: key, children: [
              config.label,
              " \u2014 ",
              config.description
            ] }, key))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-[var(--black)]", children: "When..." }),
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "e.g., Invoice amount doesn't match PO",
            value: situation,
            onChange: (e) => setSituation(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Describe the situation or trigger" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-[var(--black)]", children: "Then..." }),
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "e.g., Flag for review, don't process",
            value: action,
            onChange: (e) => setAction(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "What should happen in this situation" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), children: "Cancel" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: handleSave,
          disabled: !isValid || isSaving,
          loading: isSaving,
          children: scenario ? "Save changes" : "Add scenario"
        }
      )
    ] })
  ] }) });
}
function ScenariosManager({
  scenarios,
  onAdd,
  onUpdate,
  onDelete,
  onComplete,
  suggestions = [],
  isLoading,
  isComplete = false,
  minScenariosToComplete = 1,
  className
}) {
  const [dialogOpen, setDialogOpen] = React50.useState(false);
  const [editingScenario, setEditingScenario] = React50.useState(null);
  const [deletingId, setDeletingId] = React50.useState(null);
  const [isCompleting, setIsCompleting] = React50.useState(false);
  const canComplete = scenarios.length >= minScenariosToComplete && !isComplete && onComplete;
  const handleAddClick = () => {
    setEditingScenario(null);
    setDialogOpen(true);
  };
  const handleEditClick = (scenario) => {
    setEditingScenario(scenario);
    setDialogOpen(true);
  };
  const handleSave = async (data) => {
    if (editingScenario) {
      await onUpdate(editingScenario.id, data);
    } else {
      await onAdd(data);
    }
  };
  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      await onDelete(id);
    } finally {
      setDeletingId(null);
    }
  };
  const handleSuggestionAdd = async (suggestion) => {
    await onAdd(suggestion);
  };
  const handleComplete = async () => {
    if (!onComplete) return;
    setIsCompleting(true);
    try {
      await onComplete();
    } finally {
      setIsCompleting(false);
    }
  };
  const filteredSuggestions = suggestions.filter(
    (s) => !scenarios.some(
      (existing) => existing.situation.toLowerCase() === s.situation.toLowerCase()
    )
  );
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-sm bg-[var(--cyan)]/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Lightning, { size: 20, weight: "fill", className: "text-[var(--cyan)]" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-[var(--black)]", children: "Scenarios" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: scenarios.length === 0 ? "Define rules for edge cases and escalations" : `${scenarios.length} scenario${scenarios.length === 1 ? "" : "s"} defined` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: handleAddClick, children: [
        /* @__PURE__ */ jsx(Plus, { size: 16, className: "mr-1" }),
        "Add scenario"
      ] })
    ] }),
    scenarios.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: scenarios.map((scenario) => /* @__PURE__ */ jsx(
      ScenarioCard,
      {
        scenario,
        onEdit: () => handleEditClick(scenario),
        onDelete: () => handleDelete(scenario.id)
      },
      scenario.id
    )) }),
    scenarios.length === 0 && /* @__PURE__ */ jsxs("div", { className: "border border-dashed border-border rounded-sm p-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-sm bg-muted flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Lightning, { size: 24, className: "text-muted-foreground" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "No scenarios yet. Add rules for how the worker should handle edge cases." }),
      /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: handleAddClick, children: [
        /* @__PURE__ */ jsx(Plus, { size: 16, className: "mr-1.5" }),
        "Add your first scenario"
      ] })
    ] }),
    filteredSuggestions.length > 0 && !isComplete && /* @__PURE__ */ jsxs("div", { className: "pt-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Suggested scenarios:" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: filteredSuggestions.map((suggestion, index) => /* @__PURE__ */ jsx(
        SuggestionChip,
        {
          suggestion,
          onAdd: () => handleSuggestionAdd(suggestion),
          disabled: isLoading
        },
        index
      )) })
    ] }),
    canComplete && /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 bg-[var(--cyan)]/5 rounded-sm p-4 -mx-1", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[var(--black)]", children: "Ready to proceed?" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Mark your scenarios as complete to continue with the onboarding." })
      ] }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: handleComplete,
          disabled: isCompleting,
          loading: isCompleting,
          size: "sm",
          className: "shrink-0",
          children: [
            /* @__PURE__ */ jsx(Check, { size: 16, className: "mr-1.5" }),
            "Mark complete"
          ]
        }
      )
    ] }) }),
    isComplete && /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-border", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[var(--cyan)]", children: [
        /* @__PURE__ */ jsx(CheckCircle, { size: 16, weight: "fill" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Scenarios completed" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "You can still add or edit scenarios while we build your worker." })
    ] }),
    /* @__PURE__ */ jsx(
      ScenarioDialog,
      {
        open: dialogOpen,
        onOpenChange: setDialogOpen,
        scenario: editingScenario,
        onSave: handleSave,
        isLoading
      }
    )
  ] });
}

// src/index.ts
__reExport(index_exports, icons_exports);

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, Avatar, AvatarFallback, AvatarImage, Badge, BreadcrumbLink, Breadcrumbs, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, CodeBlock, ConfirmDialog, DateRangePicker, DateRangeSelect, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Divider, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmptyState, ErrorState, FilePreview, FormField, IconBox, Input, Label2 as Label, LabeledSwitch, Logo, Metric, MetricCard, MetricLabel, MetricSubtext, MetricValue, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Pagination, Popover, PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupCard, RadioGroupItem, RadioGroupOption, ScenariosManager, Select, Separator2 as Separator, SettingsNav, SettingsNavLink, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SimplePagination, SimpleTooltip, Skeleton, SkeletonCard, SkeletonText, Stat, StepDots, StepProgress, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsListUnderline, TabsTrigger, TabsTriggerUnderline, Tag, Textarea, Toast, ToastAction, ToastClose, ToastDescription, ToastIcon, ToastProvider, ToastTitle, ToastViewport, Toaster, Tooltip, TooltipArrow, TooltipContent, TooltipProvider, TooltipTrigger, UsageBar, UsageChart, alertVariants, badgeVariants, buttonVariants, cn, getDateRangeFromPreset, iconBoxVariants, metricCardVariants, navigationMenuTriggerStyle, progressVariants, statVariants, tagVariants, toast, usageBarVariants, useToast, valueVariants };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map