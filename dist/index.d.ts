import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as SheetPrimitive from '@radix-ui/react-dialog';
export { LabelProps } from '@radix-ui/react-label';
export { SeparatorProps } from '@radix-ui/react-separator';
import { ClassValue } from 'clsx';
export { AddressBook, ArrowLeft, ArrowRight, ArrowSquareOut, ArrowUpRight, Brain, Briefcase, Buildings, Calendar, CaretDown, CaretRight, CaretUp, ChartBar, ChartLineUp, ChatCircle, Check, CheckCircle, CheckSquare, Circle, Clock, Copy, Database, DotsThree, DotsThreeVertical, Download, Envelope, EnvelopeSimple, Eye, EyeSlash, File, FileText, Files, FirstAid, Funnel, Gear, GearSix, Globe, Handshake, House, Icon, IconProps, Info, Link, LinkedinLogo, List, MagnifyingGlass, Minus, Pause, PencilSimple, Phone, Play, Plus, Question, Receipt, Robot, ShoppingCart, SignIn, SignOut, SortAscending, SortDescending, Stop, Trash, Upload, User, UserPlus, Users, UsersThree, VideoCamera, Wallet, Warning, WarningCircle, X, XLogo } from '@phosphor-icons/react';

declare const buttonVariants: (props?: ({
    variant?: "default" | "primary" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const Sheet: React.FC<SheetPrimitive.DialogProps>;
declare const SheetTrigger: React.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React.FC<SheetPrimitive.DialogPortalProps>;
declare const SheetOverlay: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "top" | "bottom" | "left" | "right" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React.ForwardRefExoticComponent<Omit<SheetContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

interface LogoProps {
    variant?: 'dark' | 'light';
    size?: 'sm' | 'md' | 'lg';
    href?: string | null;
    className?: string;
}
/**
 * Logo component that renders the Dilipod logo as inline SVG
 *
 * @param variant - 'dark' for light backgrounds (black text), 'light' for dark backgrounds (white text)
 * @param size - 'sm' | 'md' | 'lg'
 * @param href - Optional link href (wraps logo in anchor tag)
 * @param className - Additional CSS classes
 */
declare function Logo({ variant, size, href, className, }: LogoProps): react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "primary" | "outline" | "success" | "warning" | "error" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
    /** Show animated pulse dot */
    pulse?: boolean;
    /** Custom pulse color (overrides variant-based color) */
    pulseColor?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;

declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const progressVariants: (props?: ({
    variant?: "default" | "success" | "warning" | "error" | "gradient" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ProgressProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressVariants> {
    /** Progress value (0-100) */
    value: number;
    /** Show percentage label */
    showLabel?: boolean;
    /** Custom label text (defaults to "Progress") */
    label?: string;
    /** Size of the progress bar */
    size?: 'sm' | 'default' | 'lg';
}
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;

declare const iconBoxVariants: (props?: ({
    variant?: "default" | "primary" | "outline" | "ghost" | "gradient" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | null | undefined;
    rounded?: "default" | "sm" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof iconBoxVariants> {
}
declare const IconBox: React.ForwardRefExoticComponent<IconBoxProps & React.RefAttributes<HTMLDivElement>>;

declare const tagVariants: (props?: ({
    variant?: "default" | "primary" | "outline" | "dark" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {
    /** Optional icon to display before text */
    icon?: React.ReactNode;
}
declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLSpanElement>>;

declare const statVariants: (props?: ({
    variant?: "default" | "card" | null | undefined;
    align?: "center" | "left" | "right" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const valueVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "xl" | null | undefined;
    color?: "default" | "primary" | "white" | "gradient" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface StatProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof statVariants> {
    /** The main value to display */
    value: string | number;
    /** Label below the value */
    label?: string;
    /** Optional suffix after value (e.g., "faster", "cheaper") */
    suffix?: string;
    /** Size of the value text */
    valueSize?: 'sm' | 'default' | 'lg' | 'xl';
    /** Color of the value */
    valueColor?: 'default' | 'primary' | 'white' | 'gradient';
}
declare const Stat: React.ForwardRefExoticComponent<StatProps & React.RefAttributes<HTMLDivElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const Label: React.ForwardRefExoticComponent<any>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const Accordion: React.ForwardRefExoticComponent<any>;
declare const AccordionItem: React.ForwardRefExoticComponent<any>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<any>;
declare const AccordionContent: React.ForwardRefExoticComponent<any>;

declare const Separator: React.ForwardRefExoticComponent<any>;

declare const NavigationMenu: React.ForwardRefExoticComponent<any>;
declare const NavigationMenuList: React.ForwardRefExoticComponent<any>;
declare const NavigationMenuItem: React.ForwardRefExoticComponent<any>;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
declare const NavigationMenuTrigger: React.ForwardRefExoticComponent<any>;
declare const NavigationMenuContent: React.ForwardRefExoticComponent<any>;
declare const NavigationMenuLink: React.ForwardRefExoticComponent<any>;
declare const NavigationMenuViewport: React.ForwardRefExoticComponent<any>;
declare const NavigationMenuIndicator: React.ForwardRefExoticComponent<any>;

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, type BadgeProps, Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, IconBox, type IconBoxProps, Input, type InputProps, Label, Logo, type LogoProps, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Progress, type ProgressProps, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Stat, type StatProps, Tag, type TagProps, Textarea, type TextareaProps, badgeVariants, buttonVariants, cn, iconBoxVariants, navigationMenuTriggerStyle, progressVariants, statVariants, tagVariants, valueVariants };
