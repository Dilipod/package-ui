# @dilipod/ui

Dilipod Design System - Shared UI components and styles for Dilipod applications.

## Features

- 🎨 **Black + Cyan** color system
- 📦 **Tree-shakeable** components
- 🎯 **TypeScript** first
- 📚 **Storybook** documentation
- ⚡ **Tailwind CSS v4** powered

## Installation

```bash
# From the monorepo root
npm install
```

## Usage

### Import Components

```tsx
import { 
  Button, 
  Logo, 
  Sheet,
  Badge,
  Card,
  Progress,
  IconBox,
  Tag,
  Stat
} from '@dilipod/ui'

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agent Status</CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="primary" pulse>Active</Badge>
        <Progress value={84} showLabel />
        <Stat value="1,247" label="Docs Processed" valueColor="primary" />
      </CardContent>
    </Card>
  )
}
```

### Import Styles

In your app's global CSS file:

```css
@import '@dilipod/ui/styles.css';
```

## Components

### Core Components

| Component | Description |
|-----------|-------------|
| **Button** | Versatile button with 7 variants and 4 sizes |
| **Logo** | Dilipod logo with dark/light variants |
| **Sheet** | Slide-out panel for mobile menus, sidebars |

### Data Display

| Component | Description |
|-----------|-------------|
| **Badge** | Status indicators with pulse animation |
| **Card** | Content container with header/content/footer |
| **Progress** | Progress bar with label support |
| **Stat** | Big number + label for metrics |

### Layout

| Component | Description |
|-----------|-------------|
| **IconBox** | Icon container with variants and sizes |
| **Tag** | Inline pills/chips for labels |

## Component API

### Badge

```tsx
<Badge variant="primary" pulse>Active</Badge>
<Badge variant="success">Completed</Badge>
<Badge variant="error">Failed</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="outline" size="sm">Draft</Badge>
```

### Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Progress

```tsx
<Progress value={75} />
<Progress value={84} showLabel />
<Progress value={100} variant="success" size="lg" />
<Progress value={50} variant="gradient" />
```

### IconBox

```tsx
<IconBox><BrainIcon /></IconBox>
<IconBox variant="primary" size="lg"><FileIcon /></IconBox>
<IconBox variant="gradient" rounded="full"><AIIcon /></IconBox>
```

### Tag

```tsx
<Tag>Label</Tag>
<Tag variant="primary">Active</Tag>
<Tag variant="outline" icon={<IndustryIcon />}>Real Estate</Tag>
```

### Stat

```tsx
<Stat value="1,247" label="Docs Reviewed" />
<Stat value="80%" suffix="cheaper" valueSize="lg" />
<Stat value="99.8%" label="Accuracy" valueColor="primary" />
<Stat value="24h" label="Deploy Time" variant="card" align="center" />
```

## Color System

| Variable | Value | Usage |
|----------|-------|-------|
| `--black` | `#0A0A0A` | Primary text, backgrounds |
| `--cyan` | `#00B8A9` | Primary accent |
| `--cyan-dark` | `#007A70` | Gradients, hover states |
| `--cyan-light` | `#00E5D4` | Highlights |

### Status Colors

| Status | Color |
|--------|-------|
| Success | Cyan (`--cyan`) |
| Error | Red |
| Warning | Amber |

### Gradient Utilities

```css
.bg-gradient-light  /* Light hero background */
.bg-gradient-dark   /* Dark section background */
.bg-gradient-full   /* Full black-to-cyan gradient */
.text-gradient      /* Gradient text */
```

### Glass Effects

```css
.glass       /* Light glassmorphism */
.glass-dark  /* Dark glassmorphism */
```

## Development

```bash
# Start Storybook
npm run storybook

# Build the package
npm run build

# Watch mode
npm run dev
```

## Storybook

View all components with interactive examples:

```bash
cd packages/ui
npm run storybook
```

Opens at http://localhost:6006

## Icons

All icons are re-exported from `@phosphor-icons/react`. Import them from `@dilipod/ui`:

```tsx
import { 
  ArrowRight, Brain, CheckCircle, Robot, 
  Database, Receipt, Calendar, Gear 
} from '@dilipod/ui'
```

### Available Icon Categories

- **Navigation**: `ArrowRight`, `ArrowUpRight`, `ArrowLeft`, `CaretRight`, `CaretDown`, `List`, `X`
- **Actions**: `Plus`, `Minus`, `Check`, `Play`, `Pause`, `Stop`
- **Business**: `Brain`, `Robot`, `Gear`, `Files`, `Database`, `Receipt`, `Wallet`, `Clock`, `Calendar`
- **Industries**: `Buildings`, `Briefcase`, `FirstAid`, `ShoppingCart`, `AddressBook`
- **Status**: `CheckCircle`, `CheckSquare`, `WarningCircle`, `Warning`, `Info`
- **Social**: `LinkedinLogo`, `XLogo`, `EnvelopeSimple`, `Envelope`, `Phone`, `Globe`
- **UI**: `House`, `MagnifyingGlass`, `Trash`, `PencilSimple`, `Eye`, `Download`, `Upload`

## License

Private - Dilipod
