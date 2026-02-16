"use client";
'use strict';

var React51 = require('react');
var react = require('@xyflow/react');
require('@xyflow/react/dist/style.css');
var jsxRuntime = require('react/jsx-runtime');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var SheetPrimitive = require('@radix-ui/react-dialog');
var react_star = require('@phosphor-icons/react');
require('react-dom');
var SwitchPrimitive = require('@radix-ui/react-switch');
var SliderPrimitive = require('@radix-ui/react-slider');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var NavigationMenuPrimitive = require('@radix-ui/react-navigation-menu');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var TabsPrimitive = require('@radix-ui/react-tabs');
var AlertDialogPrimitive = require('@radix-ui/react-alert-dialog');
var PopoverPrimitive = require('@radix-ui/react-popover');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var ToastPrimitives = require('@radix-ui/react-toast');
var dateFns = require('date-fns');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React51__namespace = /*#__PURE__*/_interopNamespace(React51);
var SheetPrimitive__namespace = /*#__PURE__*/_interopNamespace(SheetPrimitive);
var react_star__namespace = /*#__PURE__*/_interopNamespace(react_star);
var SwitchPrimitive__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitive);
var SliderPrimitive__namespace = /*#__PURE__*/_interopNamespace(SliderPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var NavigationMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(NavigationMenuPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var AlertDialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(AlertDialogPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var ToastPrimitives__namespace = /*#__PURE__*/_interopNamespace(ToastPrimitives);

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
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

// src/components/workflow-flow.tsx
var workflow_flow_exports = {};
__export(workflow_flow_exports, {
  WorkflowFlow: () => WorkflowFlow,
  default: () => workflow_flow_default
});
function getNodeTypeLabel(type) {
  const labels = {
    // n8n types
    "n8n-nodes-base.webhook": "Webhook",
    "n8n-nodes-base.scheduleTrigger": "Schedule",
    "n8n-nodes-base.if": "Condition",
    "n8n-nodes-base.httpRequest": "HTTP Request",
    "n8n-nodes-base.set": "Set Data",
    "n8n-nodes-base.code": "Code",
    "n8n-nodes-base.respondToWebhook": "Response",
    "@n8n/n8n-nodes-langchain.agent": "AI Agent",
    "@n8n/n8n-nodes-langchain.lmChatOpenAi": "OpenAI",
    "@n8n/n8n-nodes-langchain.lmChatAnthropic": "Anthropic",
    // Sim Studio types
    "starter": "Webhook",
    "webhook": "Webhook",
    "agent": "AI Agent",
    "llm": "LLM",
    "openai": "OpenAI",
    "anthropic": "Anthropic",
    "api": "API Request",
    "http_request": "HTTP Request",
    "condition": "Condition",
    "code": "Code",
    "response": "Response",
    "function": "Function",
    "evaluator": "Evaluator",
    "router": "Router"
  };
  return labels[type] || type.split(".").pop()?.replace(/([A-Z])/g, " $1").trim() || type;
}
function CustomNode({ data }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "px-3 py-2 rounded bg-white border border-slate-200 shadow-sm min-w-[110px] text-center", children: [
    /* @__PURE__ */ jsxRuntime.jsx(react.Handle, { type: "target", position: react.Position.Left, className: "!bg-slate-300 !w-1.5 !h-1.5 !border-0" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-xs font-medium text-slate-700 truncate max-w-[130px]", children: data.label }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[10px] text-slate-400 truncate max-w-[130px]", children: getNodeTypeLabel(data.type) }),
    /* @__PURE__ */ jsxRuntime.jsx(react.Handle, { type: "source", position: react.Position.Right, className: "!bg-slate-300 !w-1.5 !h-1.5 !border-0" })
  ] });
}
function WorkflowFlow({ workflow, height = 350, className = "", platform = "n8n" }) {
  const { initialNodes, initialEdges } = React51.useMemo(() => {
    if (platform === "sim") {
      const simWorkflow = workflow;
      const blocks = simWorkflow.blocks || {};
      const simEdges = simWorkflow.edges || [];
      const blockList = Object.values(blocks);
      if (blockList.length === 0) {
        return { initialNodes: [], initialEdges: [] };
      }
      const forwardEdges2 = /* @__PURE__ */ new Map();
      const backwardEdges2 = /* @__PURE__ */ new Map();
      simEdges.forEach((edge) => {
        const from = edge.source;
        const to = edge.target;
        if (from && to) {
          if (!forwardEdges2.has(from)) forwardEdges2.set(from, []);
          forwardEdges2.get(from).push(to);
          if (!backwardEdges2.has(to)) backwardEdges2.set(to, []);
          backwardEdges2.get(to).push(from);
        }
      });
      const triggerBlocks = blockList.filter(
        (b) => b.type === "starter" || b.type === "webhook" || b.type === "api"
      );
      const roots2 = triggerBlocks.length > 0 ? triggerBlocks : blockList.filter((b) => !backwardEdges2.has(b.id) || backwardEdges2.get(b.id).length === 0);
      const levels2 = /* @__PURE__ */ new Map();
      const queue2 = [];
      roots2.forEach((r) => {
        levels2.set(r.id, 0);
        queue2.push(r.id);
      });
      const visited2 = /* @__PURE__ */ new Set();
      while (queue2.length > 0) {
        const id = queue2.shift();
        if (visited2.has(id)) continue;
        visited2.add(id);
        const children = forwardEdges2.get(id) || [];
        const myLevel = levels2.get(id) || 0;
        children.forEach((child) => {
          const childLevel = levels2.get(child);
          if (childLevel === void 0 || myLevel + 1 > childLevel) {
            levels2.set(child, myLevel + 1);
          }
          if (!visited2.has(child)) {
            queue2.push(child);
          }
        });
      }
      blockList.forEach((block) => {
        if (!levels2.has(block.id)) {
          const maxLevel = Math.max(0, ...Array.from(levels2.values()));
          levels2.set(block.id, maxLevel + 1);
        }
      });
      const nodesByLevel2 = /* @__PURE__ */ new Map();
      levels2.forEach((level, id) => {
        if (!nodesByLevel2.has(level)) nodesByLevel2.set(level, []);
        nodesByLevel2.get(level).push(id);
      });
      const xGap2 = 170;
      const yGap2 = 70;
      const positions2 = /* @__PURE__ */ new Map();
      const sortedLevels2 = Array.from(nodesByLevel2.keys()).sort((a, b) => a - b);
      sortedLevels2.forEach((level) => {
        const nodesInLevel = nodesByLevel2.get(level);
        const totalHeight = (nodesInLevel.length - 1) * yGap2;
        const startY = -totalHeight / 2;
        nodesInLevel.forEach((id, i) => {
          positions2.set(id, { x: level * xGap2, y: startY + i * yGap2 });
        });
      });
      const nodes3 = blockList.map((block) => ({
        id: block.id,
        type: "custom",
        position: positions2.get(block.id) || { x: 0, y: 0 },
        data: { label: block.name || block.type, type: block.type }
      }));
      const edges3 = simEdges.map((edge, idx) => ({
        id: edge.id || `edge-${idx}`,
        source: edge.source || "",
        target: edge.target || "",
        type: "smoothstep",
        pathOptions: { borderRadius: 20 },
        style: { stroke: "#94a3b8", strokeWidth: 1.5 },
        markerEnd: { type: react.MarkerType.ArrowClosed, color: "#94a3b8", width: 14, height: 14 }
      })).filter((e) => e.source && e.target);
      return { initialNodes: nodes3, initialEdges: edges3 };
    }
    const n8nWorkflow = workflow;
    const n8nNodes = n8nWorkflow.nodes || [];
    const connections = n8nWorkflow.connections || {};
    const nodeIdMap = new Map(n8nNodes.map((n) => [n.name, n.id || n.name]));
    const forwardEdges = /* @__PURE__ */ new Map();
    const backwardEdges = /* @__PURE__ */ new Map();
    const allEdgeData = [];
    Object.entries(connections).forEach(([fromNodeName, outputTypes]) => {
      Object.entries(outputTypes).forEach(([outputType, outputs]) => {
        if (!Array.isArray(outputs)) return;
        outputs.forEach((outputArray, oi) => {
          if (!Array.isArray(outputArray)) return;
          outputArray.forEach((conn, ci) => {
            if (!forwardEdges.has(fromNodeName)) forwardEdges.set(fromNodeName, []);
            forwardEdges.get(fromNodeName).push(conn.node);
            if (!backwardEdges.has(conn.node)) backwardEdges.set(conn.node, []);
            backwardEdges.get(conn.node).push(fromNodeName);
            allEdgeData.push({ from: fromNodeName, to: conn.node, outputType, oi, ci });
          });
        });
      });
    });
    const triggerNodes = n8nNodes.filter(
      (n) => n.type.includes("webhook") || n.type.includes("Trigger") || n.type.includes("schedule")
    );
    const roots = triggerNodes.length > 0 ? triggerNodes : n8nNodes.filter((n) => !backwardEdges.has(n.name) || backwardEdges.get(n.name).length === 0);
    const levels = /* @__PURE__ */ new Map();
    const queue = [];
    roots.forEach((r) => {
      levels.set(r.name, 0);
      queue.push(r.name);
    });
    const visited = /* @__PURE__ */ new Set();
    while (queue.length > 0) {
      const name = queue.shift();
      if (visited.has(name)) continue;
      visited.add(name);
      const children = forwardEdges.get(name) || [];
      const myLevel = levels.get(name) || 0;
      children.forEach((child) => {
        const childLevel = levels.get(child);
        if (childLevel === void 0 || myLevel + 1 > childLevel) {
          levels.set(child, myLevel + 1);
        }
        if (!visited.has(child)) {
          queue.push(child);
        }
      });
    }
    n8nNodes.forEach((node) => {
      if (!levels.has(node.name)) {
        const targets = forwardEdges.get(node.name) || [];
        if (targets.length > 0) {
          const targetLevels = targets.map((t) => levels.get(t) ?? 0);
          const targetLevel = Math.min(...targetLevels);
          levels.set(node.name, Math.max(0, targetLevel - 1));
        } else {
          const maxLevel = Math.max(0, ...Array.from(levels.values()));
          levels.set(node.name, maxLevel);
        }
      }
    });
    const nodesByLevel = /* @__PURE__ */ new Map();
    levels.forEach((level, name) => {
      if (!nodesByLevel.has(level)) nodesByLevel.set(level, []);
      nodesByLevel.get(level).push(name);
    });
    const sortedLevels = Array.from(nodesByLevel.keys()).sort((a, b) => a - b);
    sortedLevels.forEach((level, levelIdx) => {
      if (levelIdx === 0) return;
      const nodesInLevel = nodesByLevel.get(level);
      const prevLevel = sortedLevels[levelIdx - 1];
      const prevNodes = nodesByLevel.get(prevLevel) || [];
      const prevPositions = new Map(prevNodes.map((n, i) => [n, i]));
      nodesInLevel.sort((a, b) => {
        const parentsA = backwardEdges.get(a) || [];
        const parentsB = backwardEdges.get(b) || [];
        const avgA = parentsA.length > 0 ? parentsA.reduce((sum, p) => sum + (prevPositions.get(p) ?? 0), 0) / parentsA.length : 0;
        const avgB = parentsB.length > 0 ? parentsB.reduce((sum, p) => sum + (prevPositions.get(p) ?? 0), 0) / parentsB.length : 0;
        return avgA - avgB;
      });
    });
    const positions = /* @__PURE__ */ new Map();
    const xGap = 170;
    const yGap = 70;
    sortedLevels.forEach((level) => {
      const nodesInLevel = nodesByLevel.get(level);
      const totalHeight = (nodesInLevel.length - 1) * yGap;
      const startY = -totalHeight / 2;
      nodesInLevel.forEach((name, i) => {
        positions.set(name, { x: level * xGap, y: startY + i * yGap });
      });
    });
    const nodes2 = n8nNodes.map((node) => ({
      id: node.id || node.name,
      type: "custom",
      position: positions.get(node.name) || { x: 0, y: 0 },
      data: { label: node.name, type: node.type }
    }));
    const edges2 = allEdgeData.map(({ from, to, oi, ci }) => {
      const fromId = nodeIdMap.get(from);
      const toId = nodeIdMap.get(to);
      return {
        id: `${fromId}-${toId}-${oi}-${ci}`,
        source: fromId,
        target: toId,
        type: "smoothstep",
        pathOptions: { borderRadius: 20 },
        style: { stroke: "#94a3b8", strokeWidth: 1.5 },
        markerEnd: { type: react.MarkerType.ArrowClosed, color: "#94a3b8", width: 14, height: 14 }
      };
    });
    return { initialNodes: nodes2, initialEdges: edges2 };
  }, [workflow]);
  const [nodes, , onNodesChange] = react.useNodesState(initialNodes);
  const [edges, , onEdgesChange] = react.useEdgesState(initialEdges);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { style: { height }, className: `bg-slate-50 rounded-lg border border-slate-200 overflow-hidden ${className}`, children: /* @__PURE__ */ jsxRuntime.jsx(
    react.ReactFlow,
    {
      nodes,
      edges,
      onNodesChange,
      onEdgesChange,
      nodeTypes,
      fitView: true,
      fitViewOptions: { padding: 0.1, minZoom: 0.8 },
      minZoom: 0.5,
      maxZoom: 2,
      proOptions: { hideAttribution: true },
      defaultEdgeOptions: {
        type: "smoothstep"
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(react.Background, { color: "#e2e8f0", gap: 24, size: 1 })
    }
  ) });
}
var nodeTypes, workflow_flow_default;
var init_workflow_flow = __esm({
  "src/components/workflow-flow.tsx"() {
    "use client";
    nodeTypes = { custom: CustomNode };
    workflow_flow_default = WorkflowFlow;
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  ActivityTimeline: () => ActivityTimeline,
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
  ExpandableSection: () => ExpandableSection,
  FilePreview: () => FilePreview,
  FlowchartDiagram: () => FlowchartDiagram,
  FormField: () => FormField,
  IconBox: () => IconBox,
  ImpactMetricsForm: () => ImpactMetricsForm,
  Input: () => Input,
  Label: () => Label2,
  LabeledSlider: () => LabeledSlider,
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
  Slider: () => Slider,
  Stat: () => Stat,
  StepDots: () => StepDots,
  StepProgress: () => StepProgress,
  SupportChat: () => SupportChat,
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
  WorkerSpec: () => WorkerSpec,
  WorkflowFlow: () => WorkflowFlow,
  WorkflowViewer: () => WorkflowViewer,
  alertVariants: () => alertVariants,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  formatCentsToEuros: () => formatCentsToEuros,
  formatDuration: () => formatDuration,
  formatEuros: () => formatEuros,
  formatRelativeTime: () => formatRelativeTime,
  getDateRangeFromPreset: () => getDateRangeFromPreset,
  iconBoxVariants: () => iconBoxVariants,
  metricCardVariants: () => metricCardVariants,
  navigationMenuTriggerStyle: () => navigationMenuTriggerStyle,
  progressVariants: () => progressVariants,
  statVariants: () => statVariants,
  tagVariants: () => tagVariants,
  toast: () => toast,
  usageBarVariants: () => usageBarVariants,
  useExpandedSections: () => useExpandedSections,
  useServiceWorker: () => useServiceWorker,
  useToast: () => useToast,
  valueVariants: () => valueVariants
});
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
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
var Button = React51__namespace.forwardRef(
  ({ className, variant, size, asChild = false, loading, loadingText, icon, iconAfter, children, disabled, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    const isDisabled = disabled || loading;
    const LoadingSpinner = /* @__PURE__ */ jsxRuntime.jsxs(
      "svg",
      {
        className: "animate-spin h-4 w-4",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
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
          /* @__PURE__ */ jsxRuntime.jsx(
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
      return /* @__PURE__ */ jsxRuntime.jsxs(
        reactSlot.Slot,
        {
          className: cn(buttonVariants({ variant, size, className })),
          ref,
          ...props,
          children: [
            loading && LoadingSpinner,
            !loading && icon,
            /* @__PURE__ */ jsxRuntime.jsx(reactSlot.Slottable, { children }),
            !loading && iconAfter
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
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
var Sheet = SheetPrimitive__namespace.Root;
var SheetTrigger = SheetPrimitive__namespace.Trigger;
var SheetClose = SheetPrimitive__namespace.Close;
var SheetPortal = SheetPrimitive__namespace.Portal;
var SheetOverlay = React51__namespace.forwardRef(({ className, ...props }, ref) => (
  // @ts-ignore - Radix Dialog Overlay accepts className at runtime
  /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Overlay,
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
SheetOverlay.displayName = SheetPrimitive__namespace.Overlay.displayName;
var sheetVariants = classVarianceAuthority.cva(
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
var SheetContent = React51__namespace.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    SheetPrimitive__namespace.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(SheetPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive__namespace.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
var SheetTitle = React51__namespace.forwardRef(({ className, ...props }, ref) => (
  // @ts-ignore - Radix Dialog Title accepts className at runtime
  /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Title,
    {
      ref,
      className: cn("text-lg font-semibold text-[var(--black)]", className),
      ...props
    }
  )
));
SheetTitle.displayName = SheetPrimitive__namespace.Title.displayName;
var SheetDescription = React51__namespace.forwardRef(({ className, ...props }, ref) => (
  // @ts-ignore - Radix Dialog Description accepts className at runtime
  /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Description,
    {
      ref,
      className: cn("text-sm text-gray-500", className),
      ...props
    }
  )
));
SheetDescription.displayName = SheetPrimitive__namespace.Description.displayName;
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
  const svgContent = /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      width: s.width,
      height: s.height,
      viewBox: "0 0 130 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsxs("linearGradient", { id: `gradient-${variant}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
          /* @__PURE__ */ jsxRuntime.jsx("stop", { offset: "0%", stopColor: "#007A70" }),
          /* @__PURE__ */ jsxRuntime.jsx("stop", { offset: "50%", stopColor: "#00B8A9" }),
          /* @__PURE__ */ jsxRuntime.jsx("stop", { offset: "100%", stopColor: "#00E5D4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "40", height: "40", rx: "4", fill: `url(#gradient-${variant})` }),
        /* @__PURE__ */ jsxRuntime.jsx(
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
        /* @__PURE__ */ jsxRuntime.jsx(
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
    return /* @__PURE__ */ jsxRuntime.jsx("a", { href, "aria-label": "Go to homepage", className: "inline-flex items-center group", children: svgContent });
  }
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "inline-flex items-center", children: svgContent });
}
var badgeVariants = classVarianceAuthority.cva(
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
var Badge = React51__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "span",
      {
        ref,
        className: cn(badgeVariants({ variant, size }), className),
        ...props,
        children: [
          pulse && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                className: cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                  pulseColorClass
                )
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
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
var Card = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardHeader = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardDescription = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-gray-500", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var progressVariants = classVarianceAuthority.cva("h-full rounded-full transition-all duration-300", {
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
var Progress = React51__namespace.forwardRef(
  ({ className, value, variant, showLabel, label = "Progress", size = "default", ...props }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value));
    const heightClass = {
      sm: "h-1",
      default: "h-1.5",
      lg: "h-2.5"
    }[size];
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("w-full", className), ref, ...props, children: [
      showLabel && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-between text-xs mb-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-500", children: label }),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-semibold text-[var(--black)]", children: [
          clampedValue,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: cn(
            "w-full bg-gray-200 rounded-full overflow-hidden",
            heightClass
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx(
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
var iconBoxVariants = classVarianceAuthority.cva(
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
var IconBox = React51__namespace.forwardRef(
  ({ className, variant, size, rounded, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var tagVariants = classVarianceAuthority.cva(
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
var Tag = React51__namespace.forwardRef(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "span",
      {
        ref,
        className: cn(tagVariants({ variant, size }), className),
        ...props,
        children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: icon }),
          children
        ]
      }
    );
  }
);
Tag.displayName = "Tag";
var statVariants = classVarianceAuthority.cva("", {
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
var valueVariants = classVarianceAuthority.cva("font-bold", {
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
var Stat = React51__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(statVariants({ variant, align }), className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-wrap lg:flex-nowrap items-baseline gap-x-2", justifyClass), children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(valueVariants({ size: valueSize, color: valueColor })), children: value }),
            suffix && /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
              "font-medium text-[var(--cyan)] shrink-0",
              valueSize === "lg" || valueSize === "xl" ? "text-lg md:text-xl" : "text-base md:text-lg"
            ), children: suffix })
          ] }),
          label && /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(
            "font-medium mt-1",
            valueColor === "white" ? "text-white/70 text-sm md:text-base" : "text-gray-500 text-xs md:text-sm"
          ), children: label })
        ]
      }
    );
  }
);
Stat.displayName = "Stat";
var metricCardVariants = classVarianceAuthority.cva("p-5", {
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
var iconContainerVariants = classVarianceAuthority.cva("p-2 rounded-lg shrink-0", {
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
var iconVariants = classVarianceAuthority.cva("h-5 w-5", {
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
var MetricCard = React51__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      Card,
      {
        ref,
        className: cn(
          metricCardVariants({ variant }),
          variant === "outlined" && borderColor,
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
          Icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(iconContainerVariants({ color: iconColor })), children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: cn(iconVariants({ color: iconColor })) }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-2xl font-bold text-[var(--black)] truncate", children: value }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-500 truncate", children: label })
          ] })
        ] })
      }
    );
  }
);
MetricCard.displayName = "MetricCard";
var MetricLabel = React51__namespace.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var MetricValue = React51__namespace.forwardRef(
  ({ className, children, size = "default", highlight = false, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var MetricSubtext = React51__namespace.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var Metric = React51__namespace.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var usageBarVariants = classVarianceAuthority.cva("space-y-3", {
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
var progressColorVariants = classVarianceAuthority.cva("", {
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
var UsageBar = React51__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(usageBarVariants({ size }), className),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
              Icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: cn(
                "h-5 w-5",
                isOverLimit ? "text-red-500" : "text-gray-500"
              ) }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-[var(--black)]", children: label })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  className: cn(
                    "text-lg font-semibold",
                    isOverLimit ? "text-red-500" : "text-[var(--black)]"
                  ),
                  children: used.toLocaleString()
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-gray-500", children: [
                " / ",
                included.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Progress,
            {
              value: percentage,
              className: cn(
                progressHeight,
                isOverLimit ? "[&>div]:bg-red-500" : progressColorVariants({ color })
              )
            }
          ),
          isOverLimit && showOverLimit && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-red-500", children: [
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
var UsageChart = React51__namespace.forwardRef(
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
    const [hoveredIndex, setHoveredIndex] = React51__namespace.useState(null);
    const maxValue = React51__namespace.useMemo(() => {
      return Math.max(
        ...data.map((d) => d.value + (d.secondaryValue || 0)),
        1
      );
    }, [data]);
    const scaledMax = maxValue * 1.1;
    const barWidth = 100 / Math.max(data.length, 1);
    const barGap = barWidth * 0.3;
    const actualBarWidth = barWidth - barGap;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: cn("w-full", className), ...props, children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", style: { height }, children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 flex flex-col justify-between pointer-events-none", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center w-full", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full border-t border-gray-100" }) }, i)) }),
        /* @__PURE__ */ jsxRuntime.jsx(
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
              return /* @__PURE__ */ jsxRuntime.jsxs(
                "g",
                {
                  onMouseEnter: () => setHoveredIndex(index),
                  onMouseLeave: () => setHoveredIndex(null),
                  className: "cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
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
                    point.secondaryValue !== void 0 && point.secondaryValue > 0 && /* @__PURE__ */ jsxRuntime.jsx(
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
                    /* @__PURE__ */ jsxRuntime.jsx(
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
        showTooltip && hoveredIndex !== null && data[hoveredIndex] && /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: "absolute z-10 px-3 py-2 text-sm bg-[var(--black)] text-white rounded-lg shadow-lg pointer-events-none transform -translate-x-1/2",
            style: {
              left: `${(hoveredIndex + 0.5) * barWidth}%`,
              top: -8
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-medium", children: data[hoveredIndex].label }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full",
                    style: { backgroundColor: primaryColor }
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: formatValue(data[hoveredIndex].value) })
              ] }),
              data[hoveredIndex].secondaryValue !== void 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full",
                    style: { backgroundColor: secondaryColor }
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: formatValue(data[hoveredIndex].secondaryValue) })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex mt-3", children: data.map((point, index) => /* @__PURE__ */ jsxRuntime.jsx(
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
var Input = React51__namespace.forwardRef(
  ({ className, type, error, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-sm border bg-white px-3 py-2 text-base text-[var(--black)] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--black)] placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-gray-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors",
          error ? "border-red-500" : "border-gray-300",
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
  const Slot2 = reactSlot.createSlot(`Primitive.${node}`);
  const Node2 = React51__namespace.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
var NAME = "Label";
var Label = React51__namespace.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var labelVariants = classVarianceAuthority.cva(
  "text-sm font-medium leading-none text-[var(--black)] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label2 = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Root2,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label2.displayName = Root2.displayName;
var Textarea = React51__namespace.forwardRef(
  ({ className, error, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-sm border bg-white px-3 py-2 text-base text-[var(--black)] placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-gray-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors resize-none",
          error ? "border-red-500" : "border-gray-300",
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
var Select = React51__namespace.forwardRef(
  ({ className, error, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "select",
        {
          ref,
          className: cn(
            "h-10 w-full rounded-sm border bg-white px-3 py-2 text-base text-[var(--black)]",
            "placeholder:text-gray-500",
            "focus-visible:outline-none focus-visible:border-gray-500",
            "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors",
            "appearance-none pr-10",
            error ? "border-red-500" : "border-gray-300",
            className
          ),
          "aria-invalid": error ? "true" : void 0,
          ...props,
          children
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        react_star.CaretDown,
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
__reExport(icons_exports, react_star__namespace);
var Checkbox = React51__namespace.forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
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
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: cn(
            "w-5 h-5 border border-gray-300 rounded-[2px] flex items-center justify-center transition-colors",
            "peer-checked:bg-[var(--black)] peer-checked:border-[var(--black)]",
            "peer-focus-visible:outline-none",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            className
          ),
          children: checked && /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, { className: "h-3.5 w-3.5 text-white", weight: "bold" })
        }
      )
    ] });
  }
);
Checkbox.displayName = "Checkbox";
var Switch = React51__namespace.forwardRef(({ className, size = "default", ...props }, ref) => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    SwitchPrimitive__namespace.Root,
    {
      className: cn(
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--cyan)] data-[state=unchecked]:bg-input",
        sizeStyles[size].root,
        className
      ),
      ...props,
      ref,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        SwitchPrimitive__namespace.Thumb,
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
Switch.displayName = SwitchPrimitive__namespace.Root.displayName;
var LabeledSwitch = React51__namespace.forwardRef(({ label, description, labelPosition = "right", className, id, ...props }, ref) => {
  const switchId = id || React51__namespace.useId();
  const labelContent = /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-0.5", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "label",
      {
        htmlFor: switchId,
        className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
        children: label
      }
    ),
    description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: description })
  ] });
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-3",
        labelPosition === "left" && "flex-row-reverse justify-end",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Switch, { ref, id: switchId, ...props }),
        labelContent
      ]
    }
  );
});
LabeledSwitch.displayName = "LabeledSwitch";
var Slider = React51__namespace.forwardRef(({ className, showValue, formatValue, size = "default", ...props }, ref) => {
  const value = props.value ?? props.defaultValue ?? [0];
  const currentValue = Array.isArray(value) ? value[0] : value;
  const sizeStyles = {
    sm: {
      track: "h-1",
      thumb: "h-3.5 w-3.5"
    },
    default: {
      track: "h-1.5",
      thumb: "h-4 w-4"
    },
    lg: {
      track: "h-2",
      thumb: "h-5 w-5"
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex items-center gap-3", showValue && "pr-12 relative"), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      SliderPrimitive__namespace.Root,
      {
        ref,
        className: cn(
          "relative flex w-full touch-none select-none items-center",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            SliderPrimitive__namespace.Track,
            {
              className: cn(
                "relative w-full grow overflow-hidden rounded-full bg-gray-200",
                sizeStyles[size].track
              ),
              children: /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Range, { className: "absolute h-full bg-[var(--cyan)]" })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            SliderPrimitive__namespace.Thumb,
            {
              className: cn(
                "block rounded-full border-2 border-[var(--cyan)] bg-white shadow-md transition-colors",
                "focus-visible:outline-none",
                "disabled:pointer-events-none disabled:opacity-50",
                "hover:border-[var(--cyan-dark,#00bfaa)] cursor-pointer",
                sizeStyles[size].thumb
              )
            }
          )
        ]
      }
    ),
    showValue && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute right-0 text-sm font-mono text-[var(--black)] min-w-[3rem] text-right", children: formatValue ? formatValue(currentValue) : currentValue })
  ] });
});
Slider.displayName = SliderPrimitive__namespace.Root.displayName;
var LabeledSlider = React51__namespace.forwardRef(({ label, helperText, className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("space-y-2", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-medium leading-none text-[var(--black)]", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(Slider, { ref, ...props }),
    helperText && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: helperText })
  ] });
});
LabeledSlider.displayName = "LabeledSlider";
var RadioGroup = React51__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive__namespace.Root.displayName;
var RadioGroupItem = React51__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(react_star.Circle, { weight: "fill", className: "h-2.5 w-2.5 fill-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive__namespace.Item.displayName;
var RadioGroupOption = React51__namespace.forwardRef(({ label, description, className, id, ...props }, ref) => {
  const optionId = id || React51__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex items-start gap-3", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(RadioGroupItem, { ref, id: optionId, ...props }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-0.5", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "label",
        {
          htmlFor: optionId,
          className: "text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          children: label
        }
      ),
      description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: description })
    ] })
  ] });
});
RadioGroupOption.displayName = "RadioGroupOption";
var RadioGroupCard = React51__namespace.forwardRef(({ label, description, children, className, id, ...props }, ref) => {
  const cardId = id || React51__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Item,
    {
      ref,
      id: cardId,
      className: cn(
        "relative flex cursor-pointer rounded-lg border bg-background p-4 transition-all hover:border-[var(--cyan)]/50 focus:outline-none focus-visible:outline-none data-[state=checked]:border-[var(--cyan)] data-[state=checked]:ring-1 data-[state=checked]:ring-[var(--cyan)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex w-full items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow", children: /* @__PURE__ */ jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntime.jsx(react_star.Circle, { weight: "fill", className: "h-2.5 w-2.5 fill-[var(--cyan)]" }) }) }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 space-y-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "label",
            {
              htmlFor: cardId,
              className: "text-sm font-medium leading-none cursor-pointer",
              children: label
            }
          ),
          description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: description }),
          children
        ] })
      ] })
    }
  );
});
RadioGroupCard.displayName = "RadioGroupCard";
var Accordion = AccordionPrimitive__namespace.Root;
var AccordionItem = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Item,
  {
    ref,
    className: cn("border-b border-gray-200", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React51__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
  AccordionPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium text-[var(--black)] transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(icons_exports.CaretDown, { className: "h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive__namespace.Trigger.displayName;
var AccordionContent = React51__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive__namespace.Content.displayName;
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
  const Slot2 = reactSlot.createSlot(`Primitive.${node}`);
  const Node2 = React51__namespace.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
var NAME2 = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator = React51__namespace.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var Root7 = Separator;
var Separator2 = React51__namespace.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    Root7,
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
Separator2.displayName = Root7.displayName;
var NavigationMenu = React51__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  NavigationMenuPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive__namespace.Root.displayName;
var NavigationMenuList = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive__namespace.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive__namespace.Item;
var navigationMenuTriggerStyle = classVarianceAuthority.cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[var(--black)] transition-colors hover:bg-gray-100 hover:text-[var(--black)] focus:bg-gray-100 focus:text-[var(--black)] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-[var(--black)] data-[state=open]:bg-gray-100/50 data-[state=open]:hover:bg-gray-100 data-[state=open]:focus:bg-gray-100"
);
var NavigationMenuTrigger = React51__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  NavigationMenuPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsxRuntime.jsx(
        icons_exports.CaretDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive__namespace.Trigger.displayName;
var NavigationMenuContent = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive__namespace.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive__namespace.Link;
var NavigationMenuViewport = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-gray-200 bg-white text-[var(--black)] shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive__namespace.Viewport.displayName;
var NavigationMenuIndicator = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-gray-200 shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive__namespace.Indicator.displayName;
var Avatar = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive__namespace.Root.displayName;
var AvatarImage = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive__namespace.Image.displayName;
var AvatarFallback = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive__namespace.Fallback.displayName;
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuSubTrigger = React51__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.SubTrigger,
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
      /* @__PURE__ */ jsxRuntime.jsx(icons_exports.CaretRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-sm border bg-popover p-1 text-popover-foreground shadow-lg",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React51__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Content,
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
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React51__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Item,
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
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuCheckboxItem = React51__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React51__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React51__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Label,
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
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var SidebarNavItem = React51__namespace.forwardRef(
  ({ item, isActive, className, LinkComponent, ...props }, ref) => {
    const Icon = item.icon;
    const baseClassName = cn(
      "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors focus-visible:outline-none",
      isActive ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
      className
    );
    if (LinkComponent) {
      const Comp = LinkComponent;
      return /* @__PURE__ */ jsxRuntime.jsxs(
        Comp,
        {
          ref,
          href: item.href,
          className: baseClassName,
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: "h-5 w-5 shrink-0", weight: isActive ? "fill" : "regular" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: item.name })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "a",
      {
        ref,
        href: item.href,
        className: baseClassName,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: "h-5 w-5 shrink-0", weight: isActive ? "fill" : "regular" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: item.name })
        ]
      }
    );
  }
);
SidebarNavItem.displayName = "SidebarNavItem";
var Sidebar = React51__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "aside",
      {
        ref,
        className: cn(
          "relative flex h-full w-60 flex-col border-r border-border bg-background",
          className
        ),
        ...props,
        children: [
          header && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-14 items-center px-4 border-b", children: header }),
          searchButton && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              onClick: searchButton.onClick,
              className: "flex w-full items-center gap-2 rounded-sm border bg-background px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 transition-colors",
              children: [
                searchButton.label && /* @__PURE__ */ jsxRuntime.jsx("span", { children: searchButton.label }),
                searchButton.shortcut && /* @__PURE__ */ jsxRuntime.jsx("kbd", { className: "ml-auto text-xs bg-muted px-1.5 py-0.5 rounded-sm", children: searchButton.shortcut })
              ]
            }
          ) }),
          mainNav.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "flex-1 px-3 pt-4 space-y-1", children: mainNav.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
            SidebarNavItem,
            {
              item,
              isActive: isActive(item.href),
              LinkComponent
            },
            item.name
          )) }),
          children,
          bottomNav.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-3 pb-3 space-y-1 border-t pt-3", children: bottomNav.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
            SidebarNavItem,
            {
              item,
              isActive: isActive(item.href),
              LinkComponent
            },
            item.name
          )) }),
          (helpLink || assistantButton) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "px-3 pb-4 pt-3 border-t", children: [
            assistantButton && /* @__PURE__ */ jsxRuntime.jsxs(
              "button",
              {
                onClick: assistantButton.onClick,
                className: "flex w-full items-center gap-3 rounded-lg bg-[var(--cyan)]/10 px-3 py-2.5 text-sm font-medium text-[var(--cyan)] hover:bg-[var(--cyan)]/20 transition-colors mb-2",
                children: [
                  assistantButton.icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-[var(--cyan)] text-white", children: /* @__PURE__ */ jsxRuntime.jsx(assistantButton.icon, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { children: assistantButton.label || "Ask Assistant" })
                ]
              }
            ),
            helpLink && /* @__PURE__ */ jsxRuntime.jsxs(
              "a",
              {
                href: helpLink.href,
                className: "flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors",
                children: [
                  helpLink.icon && /* @__PURE__ */ jsxRuntime.jsx(helpLink.icon, { className: "h-4 w-4" }),
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
var alertVariants = classVarianceAuthority.cva(
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
var Alert = React51__namespace.forwardRef(
  ({ className, variant, icon, title, action, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(alertVariants({ variant }), className),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-3 flex-1", children: [
            icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "shrink-0 mt-0.5", children: icon }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
              title && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "font-semibold mb-1", children: title }),
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: title ? "text-sm" : "", children })
            ] })
          ] }),
          action && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "shrink-0", children: action })
        ] })
      }
    );
  }
);
Alert.displayName = "Alert";
var EmptyState = React51__namespace.forwardRef(
  ({ className, icon, title, description, action, size = "default", ...props }, ref) => {
    const paddingClass = {
      sm: "p-8",
      default: "p-12",
      lg: "p-16"
    }[size];
    return /* @__PURE__ */ jsxRuntime.jsxs(
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
          icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex justify-center mb-4", children: icon }),
          title && /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-sm font-semibold text-foreground mb-1", children: title }),
          description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: description }),
          action && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex justify-center", children: action })
        ]
      }
    );
  }
);
EmptyState.displayName = "EmptyState";
var ErrorState = React51__namespace.forwardRef(
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
    const defaultIcon = /* @__PURE__ */ jsxRuntime.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "currentColor",
        viewBox: "0 0 256 256",
        className: "text-red-500",
        children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" })
      }
    );
    const refreshIcon = /* @__PURE__ */ jsxRuntime.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        viewBox: "0 0 256 256",
        className: "mr-2",
        children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64A80,80,0,1,0,207.6,176.16a8,8,0,1,1,13.54,8.49A96,96,0,1,1,227.59,64l.3-.31L208,44.31V56a8,8,0,0,0,8,8h16A8,8,0,0,0,240,56Z" })
      }
    );
    const hasDefaultActions = showRetry && onRetry || showHomeLink && onHomeClick;
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn("flex items-center justify-center min-h-[60vh]", className),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(Card, { className: "max-w-md w-full", children: /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "p-8 text-center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(IconBox, { size: "lg", className: "mx-auto mb-4 bg-red-50", children: icon || defaultIcon }),
          /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-lg font-semibold text-[var(--black)] mb-2", children: title }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: description }),
          actions ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex gap-3 justify-center", children: actions }) : hasDefaultActions ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-3 justify-center", children: [
            showRetry && onRetry && /* @__PURE__ */ jsxRuntime.jsxs(Button, { variant: "outline", onClick: onRetry, children: [
              refreshIcon,
              retryText
            ] }),
            showHomeLink && onHomeClick && /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: onHomeClick, children: homeLinkText })
          ] }) : null
        ] }) })
      }
    );
  }
);
ErrorState.displayName = "ErrorState";
var CodeBlock = React51__namespace.forwardRef(
  ({ className, children, language, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "pre",
      {
        ref,
        className: cn(
          "rounded-sm bg-muted p-4 text-sm overflow-auto font-mono",
          className
        ),
        ...language && { "data-language": language },
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx("code", { children })
      }
    );
  }
);
CodeBlock.displayName = "CodeBlock";
var FormField = React51__namespace.forwardRef(
  ({ label, error, helperText, hint, required, id, className, children, ...props }, ref) => {
    const fieldId = id || React51__namespace.useId();
    const errorId = `${fieldId}-error`;
    const helperId = `${fieldId}-helper`;
    const enhancedChildren = React51__namespace.Children.map(children, (child) => {
      if (React51__namespace.isValidElement(child)) {
        const childProps = child.props;
        return React51__namespace.cloneElement(child, {
          id: fieldId,
          "aria-invalid": error ? "true" : void 0,
          "aria-describedby": error ? errorId : helperText ? helperId : void 0,
          className: cn(
            childProps.className,
            error && "border-red-500"
          )
        });
      }
      return child;
    });
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: cn("space-y-2", className), ...props, children: [
      (label || hint) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        label && /* @__PURE__ */ jsxRuntime.jsx(Label2, { htmlFor: fieldId, className: required ? 'after:content-["*"] after:ml-0.5 after:text-red-500' : "", children: label }),
        hint && /* @__PURE__ */ jsxRuntime.jsx("div", { children: hint })
      ] }),
      enhancedChildren,
      error && /* @__PURE__ */ jsxRuntime.jsx("p", { id: errorId, className: "text-sm text-red-600", role: "alert", children: error }),
      helperText && !error && /* @__PURE__ */ jsxRuntime.jsx("p", { id: helperId, className: "text-xs text-muted-foreground", children: helperText })
    ] });
  }
);
FormField.displayName = "FormField";
var Table = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntime.jsx(
  "table",
  {
    ref,
    className: cn("w-full border-collapse", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("thead", { ref, className: cn("", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("tbody", { ref, className: cn("", className), ...props }));
TableBody.displayName = "TableBody";
var TableFooter = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tr",
  {
    ref,
    className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var TableCell = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
var Divider = React51__namespace.forwardRef(
  ({ className, text, orientation = "horizontal", ...props }, ref) => {
    if (orientation === "vertical") {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          ref,
          className: cn("w-px h-full bg-border", className),
          ...props
        }
      );
    }
    if (text) {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          ref,
          className: cn("relative flex items-center", className),
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 border-t" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "px-2 text-xs uppercase text-muted-foreground bg-background", children: text }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 border-t" })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var Tabs = TabsPrimitive__namespace.Root;
var TabsList = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-sm bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
var TabsTrigger = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
var TabsContent = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "mt-2 focus-visible:outline-none",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;
var TabsListUnderline = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.List,
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
var TabsTriggerUnderline = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Trigger,
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
var Dialog = SheetPrimitive__namespace.Root;
var DialogTrigger = SheetPrimitive__namespace.Trigger;
var DialogPortal = SheetPrimitive__namespace.Portal;
var DialogClose = SheetPrimitive__namespace.Close;
var DialogOverlay = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/60",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = SheetPrimitive__namespace.Overlay.displayName;
var DialogContent = React51__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    SheetPrimitive__namespace.Content,
    {
      ref,
      className: cn(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg gap-4 border border-border bg-white p-6 shadow-lg rounded-sm -translate-x-1/2 -translate-y-1/2",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(SheetPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = SheetPrimitive__namespace.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DialogTitle = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight text-[var(--black)]",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = SheetPrimitive__namespace.Title.displayName;
var DialogDescription = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = SheetPrimitive__namespace.Description.displayName;
var AlertDialog = AlertDialogPrimitive__namespace.Root;
var AlertDialogTrigger = AlertDialogPrimitive__namespace.Trigger;
var AlertDialogPortal = AlertDialogPrimitive__namespace.Portal;
var AlertDialogOverlay = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive__namespace.Overlay.displayName;
var AlertDialogContent = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Content,
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
AlertDialogContent.displayName = AlertDialogPrimitive__namespace.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
var AlertDialogTitle = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-[var(--black)]", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive__namespace.Title.displayName;
var AlertDialogDescription = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive__namespace.Description.displayName;
var AlertDialogAction = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive__namespace.Action.displayName;
var AlertDialogCancel = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Cancel,
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
AlertDialogCancel.displayName = AlertDialogPrimitive__namespace.Cancel.displayName;
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
  return /* @__PURE__ */ jsxRuntime.jsx(AlertDialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogHeader, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(AlertDialogTitle, { children: title }),
      description && /* @__PURE__ */ jsxRuntime.jsx(AlertDialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        AlertDialogCancel,
        {
          onClick: () => {
            onCancel?.();
            onOpenChange(false);
          },
          children: cancelText
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
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
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverAnchor = PopoverPrimitive__namespace.Anchor;
var PopoverClose = PopoverPrimitive__namespace.Close;
var PopoverContent = React51__namespace.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  PopoverPrimitive__namespace.Content,
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
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
var PopoverArrow = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  PopoverPrimitive__namespace.Arrow,
  {
    ref,
    className: cn("fill-popover", className),
    ...props
  }
));
PopoverArrow.displayName = PopoverPrimitive__namespace.Arrow.displayName;
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var Tooltip = TooltipPrimitive__namespace.Root;
var TooltipTrigger = TooltipPrimitive__namespace.Trigger;
var TooltipContent = React51__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  TooltipPrimitive__namespace.Content,
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
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;
var TooltipArrow = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TooltipPrimitive__namespace.Arrow,
  {
    ref,
    className: cn("fill-[var(--black)]", className),
    ...props
  }
));
TooltipArrow.displayName = TooltipPrimitive__namespace.Arrow.displayName;
function SimpleTooltip({
  content,
  children,
  side = "top",
  align = "center",
  delayDuration = 200
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipProvider, { delayDuration, children: /* @__PURE__ */ jsxRuntime.jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(TooltipTrigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntime.jsx(TooltipContent, { side, align, children: content })
  ] }) });
}
var ToastProvider = ToastPrimitives__namespace.Provider;
var ToastViewport = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Viewport,
  {
    ref,
    className: cn(
      "fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives__namespace.Viewport.displayName;
var toastVariants = classVarianceAuthority.cva(
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
var Toast = React51__namespace.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToastPrimitives__namespace.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives__namespace.Root.displayName;
var ToastAction = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-sm border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives__namespace.Action.displayName;
var ToastClose = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Close,
  {
    ref,
    className: cn(
      "absolute right-3 top-3 rounded-sm p-1 text-white/60 transition-colors hover:text-white focus:outline-none",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(react_star.X, { size: 16 })
  }
));
ToastClose.displayName = ToastPrimitives__namespace.Close.displayName;
var ToastTitle = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives__namespace.Title.displayName;
var ToastDescription = React51__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Description,
  {
    ref,
    className: cn("text-sm text-white/70", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives__namespace.Description.displayName;
var ToastIcon = ({ variant }) => {
  switch (variant) {
    case "success":
      return /* @__PURE__ */ jsxRuntime.jsx(react_star.Check, { size: 18, weight: "bold", className: "text-[var(--cyan)]" });
    case "error":
      return /* @__PURE__ */ jsxRuntime.jsx(react_star.WarningCircle, { size: 18, weight: "fill", className: "text-red-400" });
    case "warning":
      return /* @__PURE__ */ jsxRuntime.jsx(react_star.WarningCircle, { size: 18, weight: "fill", className: "text-amber-400" });
    case "info":
      return /* @__PURE__ */ jsxRuntime.jsx(react_star.Info, { size: 18, weight: "fill", className: "text-[var(--cyan)]" });
    default:
      return /* @__PURE__ */ jsxRuntime.jsx(react_star.Info, { size: 18, weight: "fill", className: "text-white/70" });
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
  const [state, setState] = React51__namespace.useState(memoryState);
  React51__namespace.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, variant, ...props }) {
      const safeVariant = variant ?? void 0;
      return /* @__PURE__ */ jsxRuntime.jsxs(Toast, { variant: safeVariant, ...props, children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx(ToastIcon, { variant: safeVariant }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid gap-1", children: [
            title && /* @__PURE__ */ jsxRuntime.jsx(ToastTitle, { children: title }),
            description && /* @__PURE__ */ jsxRuntime.jsx(ToastDescription, { children: description })
          ] })
        ] }),
        action,
        /* @__PURE__ */ jsxRuntime.jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsxRuntime.jsx(ToastViewport, {})
  ] });
}
var Skeleton = React51__namespace.forwardRef(
  ({ className, variant = "default", width, height, animate = true, style, ...props }, ref) => {
    const variantStyles = {
      default: "rounded-sm",
      circular: "rounded-full",
      rounded: "rounded-md"
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var SkeletonText = React51__namespace.forwardRef(
  ({ lines = 3, gap = 8, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("space-y-2", className), style: { gap }, children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsxRuntime.jsx(
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
var SkeletonCard = React51__namespace.forwardRef(
  ({ hasHeader = true, hasAvatar = false, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("rounded-lg border p-6 space-y-4", className),
        ...props,
        children: [
          hasHeader && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-4", children: [
            hasAvatar && /* @__PURE__ */ jsxRuntime.jsx(Skeleton, { variant: "circular", width: 40, height: 40 }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2 flex-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx(Skeleton, { height: 20, width: "50%" }),
              /* @__PURE__ */ jsxRuntime.jsx(Skeleton, { height: 14, width: "30%" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(SkeletonText, { lines: 3 })
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
var Pagination = React51__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "nav",
      {
        ref,
        role: "navigation",
        "aria-label": "Pagination",
        className: cn("flex items-center gap-1", className),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "outline",
              size: buttonSize,
              onClick: () => onPageChange(currentPage - 1),
              disabled: currentPage <= 1,
              "aria-label": "Go to previous page",
              children: /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretLeft, { size: iconSize })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-1", children: pages.map((page, index) => {
            if (page === "ellipsis") {
              return /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  className: "flex h-9 w-9 items-center justify-center text-muted-foreground",
                  children: /* @__PURE__ */ jsxRuntime.jsx(react_star.DotsThree, { size: iconSize })
                },
                `ellipsis-${index}`
              );
            }
            const isCurrentPage = page === currentPage;
            return /* @__PURE__ */ jsxRuntime.jsx(
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
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "outline",
              size: buttonSize,
              onClick: () => onPageChange(currentPage + 1),
              disabled: currentPage >= totalPages,
              "aria-label": "Go to next page",
              children: /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretRight, { size: iconSize })
            }
          )
        ]
      }
    );
  }
);
Pagination.displayName = "Pagination";
var SimplePagination = React51__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "nav",
      {
        ref,
        role: "navigation",
        "aria-label": "Pagination",
        className: cn("flex items-center gap-2", className),
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            Button,
            {
              variant: "outline",
              size: buttonSize,
              onClick: () => onPageChange(currentPage - 1),
              disabled: currentPage <= 1,
              "aria-label": "Go to previous page",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretLeft, { size: iconSize }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-1", children: "Previous" })
              ]
            }
          ),
          showPageInfo && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm text-muted-foreground px-2", children: [
            "Page ",
            currentPage,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            Button,
            {
              variant: "outline",
              size: buttonSize,
              onClick: () => onPageChange(currentPage + 1),
              disabled: currentPage >= totalPages,
              "aria-label": "Go to next page",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mr-1", children: "Next" }),
                /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretRight, { size: iconSize })
              ]
            }
          )
        ]
      }
    );
  }
);
SimplePagination.displayName = "SimplePagination";
var StepProgress = React51__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
          return /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: cn(
                "flex",
                orientation === "horizontal" ? "flex-row items-center" : "flex-col items-start"
              ),
              children: [
                /* @__PURE__ */ jsxRuntime.jsxs(
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
                      /* @__PURE__ */ jsxRuntime.jsx(
                        "span",
                        {
                          className: cn(
                            "rounded-sm flex items-center justify-center font-bold transition-colors",
                            styles.indicator,
                            isCompleted ? "bg-[var(--cyan)] text-white" : isCurrent ? "bg-[var(--black)] text-white" : "bg-gray-100 text-gray-400"
                          ),
                          children: isCompleted ? /* @__PURE__ */ jsxRuntime.jsx(react_star.Check, { size: styles.icon, weight: "bold" }) : step.id
                        }
                      ),
                      showLabels && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
                        orientation === "horizontal" && "hidden sm:block",
                        "text-left"
                      ), children: [
                        /* @__PURE__ */ jsxRuntime.jsx(
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
                        step.description && orientation === "vertical" && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: step.description })
                      ] })
                    ]
                  }
                ),
                index < steps.length - 1 && /* @__PURE__ */ jsxRuntime.jsx(
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
var StepDots = React51__namespace.forwardRef(
  ({ totalSteps, currentStep, onStepClick, className }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("flex items-center gap-2", className), children: Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
      const isCompleted = step < currentStep;
      const isCurrent = step === currentStep;
      const isClickable = onStepClick && step < currentStep;
      return /* @__PURE__ */ jsxRuntime.jsx(
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
var Breadcrumbs = React51__namespace.forwardRef(
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
    const defaultSeparator = /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretRight, { size: iconSize, className: "text-gray-400" });
    return /* @__PURE__ */ jsxRuntime.jsx(
      "nav",
      {
        ref,
        "aria-label": "Breadcrumb",
        className: cn("flex items-center text-gray-500", sizeStyles[size], className),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx("ol", { className: cn("flex items-center", sizeStyles[size]), children: displayItems.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === displayItems.length - 1;
          const isEllipsis = item.label === "...";
          return /* @__PURE__ */ jsxRuntime.jsxs("li", { className: cn("flex items-center", sizeStyles[size]), children: [
            index > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mx-1 text-gray-400", children: separator || defaultSeparator }),
            isEllipsis ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-400", children: item.label }) : item.href && !isLast ? LinkComponent ? /* @__PURE__ */ jsxRuntime.jsxs(
              LinkComponent,
              {
                href: item.href,
                className: "flex items-center gap-1 hover:text-[var(--black)] transition-colors",
                children: [
                  isFirst && showHomeIcon && /* @__PURE__ */ jsxRuntime.jsx(react_star.House, { size: iconSize + 2, weight: "fill" }),
                  item.icon,
                  /* @__PURE__ */ jsxRuntime.jsx("span", { children: item.label })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntime.jsxs(
              "a",
              {
                href: item.href,
                className: "flex items-center gap-1 hover:text-[var(--black)] transition-colors",
                children: [
                  isFirst && showHomeIcon && /* @__PURE__ */ jsxRuntime.jsx(react_star.House, { size: iconSize + 2, weight: "fill" }),
                  item.icon,
                  /* @__PURE__ */ jsxRuntime.jsx("span", { children: item.label })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntime.jsxs(
              "span",
              {
                className: cn(
                  "flex items-center gap-1",
                  isLast && "text-[var(--black)] font-medium"
                ),
                "aria-current": isLast ? "page" : void 0,
                children: [
                  isFirst && showHomeIcon && /* @__PURE__ */ jsxRuntime.jsx(react_star.House, { size: iconSize + 2, weight: "fill" }),
                  item.icon,
                  /* @__PURE__ */ jsxRuntime.jsx("span", { children: item.label })
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
var BreadcrumbLink = React51__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DateRangePicker = React51__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: cn("flex flex-wrap items-center gap-2", className), children: [
      presets.map((preset) => /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          variant: value === preset ? "default" : "outline",
          size: buttonSize,
          onClick: () => onChange(preset),
          children: presetLabels[preset]
        },
        preset
      )),
      value === "custom" && inlineCustom && onCustomChange && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Label2, { htmlFor: "start-date", className: "text-xs sr-only", children: "Start" }),
          /* @__PURE__ */ jsxRuntime.jsx(
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
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: "to" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Label2, { htmlFor: "end-date", className: "text-xs sr-only", children: "End" }),
          /* @__PURE__ */ jsxRuntime.jsx(
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
var DateRangeSelect = React51__namespace.forwardRef(
  ({ value, onChange, presets = ["7d", "30d", "90d"], className }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "select",
      {
        ref,
        value,
        onChange: (e) => onChange(e.target.value),
        className: cn(
          "h-9 rounded-sm border border-input bg-background px-3 text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        children: presets.map((preset) => /* @__PURE__ */ jsxRuntime.jsx("option", { value: preset, children: presetLabels[preset] }, preset))
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
  if (type.startsWith("video/") || type === "screen_recording") return react_star.FileVideo;
  if (type.startsWith("image/") || type === "image") return react_star.FileImage;
  if (type === "application/pdf" || type === "pdf") return react_star.FilePdf;
  if (type.includes("document") || type === "document") return react_star.FileDoc;
  return react_star.File;
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
  const [previewFile, setPreviewFile] = React51.useState(null);
  const [videoError, setVideoError] = React51.useState(false);
  const [signedUrl, setSignedUrl] = React51.useState(null);
  const [loadingUrl, setLoadingUrl] = React51.useState(false);
  const [urlError, setUrlError] = React51.useState(null);
  const videoRef = React51.useRef(null);
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
  const content = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    files.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-2", children: files.map((file, i) => {
      const FileIcon = getFileIcon(file.type);
      const typeLabel = getTypeLabel(file.type);
      const sizeLabel = formatSize(file.size);
      const isPreviewable = canPreview(file);
      const previewType = getPreviewType(file);
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: `flex items-center justify-between p-3 rounded-md bg-gray-50 transition-colors ${isPreviewable ? "hover:bg-gray-100 cursor-pointer" : ""}`,
          onClick: () => isPreviewable && handleOpenPreview(file),
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative shrink-0", children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-10 h-10 rounded-sm bg-white border border-gray-200 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(FileIcon, { className: "w-5 h-5 text-[var(--cyan)]", weight: "fill" }) }),
                previewType === "video" && /* @__PURE__ */ jsxRuntime.jsx(react_star.Play, { className: "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 text-[var(--cyan)] bg-white rounded-full", weight: "fill" })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-[var(--black)] truncate", children: file.filename }),
                /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  typeLabel,
                  " \xB7 ",
                  sizeLabel,
                  isPreviewable && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[var(--cyan)] ml-1", children: "\xB7 Click to preview" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                onClick: (e) => handleDownload(e, file),
                className: "p-2 rounded-sm hover:bg-gray-200 transition-colors shrink-0",
                title: "Download",
                children: /* @__PURE__ */ jsxRuntime.jsx(react_star.Download, { className: "w-4 h-4 text-muted-foreground" })
              }
            )
          ]
        },
        i
      );
    }) }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center h-32 border border-dashed border-gray-200 rounded-md", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntime.jsx(react_star.Folder, { size: 24, className: "text-gray-300 mx-auto mb-2" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: emptyMessage })
    ] }) }),
    previewFile && /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4",
        onClick: handleClosePreview,
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: "bg-white rounded-lg max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  (() => {
                    const FileIcon = getFileIcon(previewFile.type);
                    return /* @__PURE__ */ jsxRuntime.jsx(FileIcon, { className: "w-5 h-5 text-[var(--cyan)] flex-shrink-0", weight: "fill" });
                  })(),
                  /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntime.jsx("p", { className: "font-medium text-[var(--black)] truncate", children: previewFile.filename }),
                    /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      getTypeLabel(previewFile.type),
                      " \xB7 ",
                      formatSize(previewFile.size)
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
                  signedUrl && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "a",
                      {
                        href: signedUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "p-2 rounded-md hover:bg-gray-100 transition-colors",
                        title: "Open in new tab",
                        children: /* @__PURE__ */ jsxRuntime.jsx(react_star.ArrowSquareOut, { className: "w-5 h-5 text-muted-foreground" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "a",
                      {
                        href: signedUrl,
                        download: previewFile.filename,
                        className: "p-2 rounded-md hover:bg-gray-100 transition-colors",
                        title: "Download",
                        children: /* @__PURE__ */ jsxRuntime.jsx(react_star.Download, { className: "w-5 h-5 text-muted-foreground" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "button",
                    {
                      onClick: handleClosePreview,
                      className: "p-2 rounded-md hover:bg-gray-100 transition-colors ml-2",
                      children: /* @__PURE__ */ jsxRuntime.jsx(react_star.X, { className: "w-5 h-5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 overflow-auto p-4 bg-gray-900 flex items-center justify-center min-h-[400px]", children: [
                loadingUrl && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center text-white", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(react_star.CircleNotch, { className: "w-8 h-8 mx-auto mb-2 animate-spin text-[var(--cyan)]" }),
                  /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-400", children: "Loading file..." })
                ] }),
                urlError && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center text-white max-w-md", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(react_star.File, { className: "w-16 h-16 mx-auto mb-4 text-gray-500" }),
                  /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-lg font-medium mb-2", children: "Failed to Load File" }),
                  /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-gray-400", children: urlError })
                ] }),
                signedUrl && !loadingUrl && !urlError && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                  getPreviewType(previewFile) === "image" && /* @__PURE__ */ jsxRuntime.jsx(
                    "img",
                    {
                      src: signedUrl,
                      alt: previewFile.filename,
                      className: "max-w-full max-h-[70vh] object-contain rounded-md"
                    }
                  ),
                  getPreviewType(previewFile) === "video" && !videoError && /* @__PURE__ */ jsxRuntime.jsx(
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
                  getPreviewType(previewFile) === "video" && videoError && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-center text-white max-w-md", children: [
                    /* @__PURE__ */ jsxRuntime.jsx(react_star.FileVideo, { className: "w-16 h-16 mx-auto mb-4 text-gray-500" }),
                    /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-lg font-medium mb-2", children: "Video Preview Not Available" }),
                    /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-gray-400 mb-6", children: [
                      "This video format (.",
                      previewFile.filename.split(".").pop(),
                      ") cannot be played directly in the browser."
                    ] }),
                    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-3 justify-center", children: [
                      /* @__PURE__ */ jsxRuntime.jsxs(
                        "a",
                        {
                          href: signedUrl,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors",
                          children: [
                            /* @__PURE__ */ jsxRuntime.jsx(react_star.ArrowSquareOut, { className: "w-4 h-4" }),
                            "Open in New Tab"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntime.jsxs(
                        "a",
                        {
                          href: signedUrl,
                          download: previewFile.filename,
                          className: "inline-flex items-center gap-2 px-4 py-2 bg-[var(--cyan)] text-gray-900 rounded-full text-sm font-medium hover:bg-[var(--cyan)]/90 transition-colors",
                          children: [
                            /* @__PURE__ */ jsxRuntime.jsx(react_star.Download, { className: "w-4 h-4" }),
                            "Download"
                          ]
                        }
                      )
                    ] })
                  ] }),
                  getPreviewType(previewFile) === "pdf" && /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { className: "text-base", children: title }) }),
    /* @__PURE__ */ jsxRuntime.jsx(CardContent, { children: content })
  ] });
}
var SettingsNav = React51__namespace.forwardRef(
  ({ groups, LinkComponent, className, ...props }, ref) => {
    const Link2 = LinkComponent || "a";
    return /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("space-y-8", className), ...props, children: groups.map((group) => /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3 px-1", children: group.title }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-1", children: group.items.map((item) => /* @__PURE__ */ jsxRuntime.jsxs(
        Link2,
        {
          href: item.href,
          className: "group flex items-center gap-4 p-4 rounded-sm transition-all hover:bg-gray-50 border border-transparent hover:border-gray-200",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-sm bg-gray-100 group-hover:bg-[var(--cyan)]/10 transition-colors", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600 group-hover:text-[var(--cyan)] transition-colors [&>svg]:w-5 [&>svg]:h-5", children: item.icon }) }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-medium text-[var(--black)] group-hover:text-[var(--cyan)] transition-colors", children: item.title }),
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              react_star.CaretRight,
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
var SettingsNavLink = React51__namespace.forwardRef(
  ({ title, description, icon, href, LinkComponent, className, ...props }, ref) => {
    const content = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-sm bg-gray-100 group-hover:bg-[var(--cyan)]/10 transition-colors", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-gray-600 group-hover:text-[var(--cyan)] transition-colors [&>svg]:w-5 [&>svg]:h-5", children: icon }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-medium text-[var(--black)] group-hover:text-[var(--cyan)] transition-colors", children: title }),
        description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: description })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        react_star.CaretRight,
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
      return /* @__PURE__ */ jsxRuntime.jsx(LinkComponent, { href, className: linkClassName, children: content });
    }
    return /* @__PURE__ */ jsxRuntime.jsx("a", { ref, href, className: linkClassName, ...props, children: content });
  }
);
SettingsNavLink.displayName = "SettingsNavLink";
var typeConfig = {
  escalation: {
    label: "Ask me first",
    icon: react_star.Warning,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    description: "Stop and check with me before proceeding"
  },
  default_behavior: {
    label: "Handle it",
    icon: react_star.CheckCircle,
    color: "text-[var(--cyan)]",
    bgColor: "bg-[var(--cyan)]/10",
    description: "Proceed automatically using this rule"
  },
  quality_check: {
    label: "Must be correct",
    icon: react_star.CheckCircle,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    description: 'This is what "done right" looks like'
  },
  edge_case: {
    label: "Watch out",
    icon: react_star.Question,
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "group relative flex items-start justify-between gap-3 py-3 border-b border-border/50 last:border-b-0", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-3 flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", config.bgColor), children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: 16, weight: "fill", className: config.color }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0 pt-0.5", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2 mb-1.5", children: /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "outline", size: "sm", className: "font-medium", children: config.label }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-[var(--black)]", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: "When:" }),
          " ",
          scenario.situation
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[var(--black)] font-medium", children: "Action:" }),
          " ",
          scenario.action
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 text-muted-foreground hover:text-[var(--black)]",
          onClick: onEdit,
          children: /* @__PURE__ */ jsxRuntime.jsx(react_star.PencilSimple, { size: 14 })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 text-muted-foreground hover:text-red-600 hover:bg-red-50",
          onClick: onDelete,
          children: /* @__PURE__ */ jsxRuntime.jsx(react_star.Trash, { size: 14 })
        }
      )
    ] })
  ] });
}
function SuggestionChip({
  suggestion,
  onAdd,
  disabled
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
        /* @__PURE__ */ jsxRuntime.jsx(react_star.Plus, { size: 14, weight: "bold" }),
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
  const [type, setType] = React51__namespace.useState(scenario?.type || "escalation");
  const [situation, setSituation] = React51__namespace.useState(scenario?.situation || "");
  const [action, setAction] = React51__namespace.useState(scenario?.action || "");
  const [isSaving, setIsSaving] = React51__namespace.useState(false);
  React51__namespace.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntime.jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { children: scenario ? "Edit scenario" : "Add scenario" }),
      /* @__PURE__ */ jsxRuntime.jsx(DialogDescription, { children: "Define when something happens and what action to take." })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid gap-4 py-4", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-medium text-[var(--black)]", children: "Type" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Select,
          {
            value: type,
            onChange: (e) => setType(e.target.value),
            children: Object.entries(typeConfig).map(([key, config]) => /* @__PURE__ */ jsxRuntime.jsxs("option", { value: key, children: [
              config.label,
              " \u2014 ",
              config.description
            ] }, key))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-medium text-[var(--black)]", children: "When..." }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Input,
          {
            placeholder: "e.g., Invoice amount doesn't match PO",
            value: situation,
            onChange: (e) => setSituation(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: "Describe the situation or trigger" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-medium text-[var(--black)]", children: "Then..." }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Input,
          {
            placeholder: "e.g., Flag for review, don't process",
            value: action,
            onChange: (e) => setAction(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: "What should happen in this situation" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntime.jsx(
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
  defaultExpanded = true,
  className
}) {
  const [dialogOpen, setDialogOpen] = React51__namespace.useState(false);
  const [editingScenario, setEditingScenario] = React51__namespace.useState(null);
  const [deletingId, setDeletingId] = React51__namespace.useState(null);
  const [isCompleting, setIsCompleting] = React51__namespace.useState(false);
  const [isExpanded, setIsExpanded] = React51__namespace.useState(defaultExpanded);
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsExpanded(!isExpanded),
        className: "w-full flex items-center justify-between border border-border/50 px-4 py-3 rounded-lg hover:bg-muted/30 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-10 h-10 rounded-lg bg-[var(--cyan)]/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(react_star.Lightning, { size: 20, weight: "fill", className: "text-[var(--cyan)]" }) }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-semibold text-[var(--black)]", children: "Scenarios" }),
                isComplete && /* @__PURE__ */ jsxRuntime.jsxs(Badge, { variant: "primary", size: "sm", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(react_star.CheckCircle, { size: 12, weight: "fill" }),
                  "Complete"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: scenarios.length === 0 ? "Define rules for edge cases" : `${scenarios.length} scenario${scenarios.length === 1 ? "" : "s"} defined` })
            ] })
          ] }),
          isExpanded ? /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretUp, { size: 20, className: "text-muted-foreground" }) : /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretDown, { size: 20, className: "text-muted-foreground" })
        ]
      }
    ),
    isExpanded && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      scenarios.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-4", children: scenarios.map((scenario) => /* @__PURE__ */ jsxRuntime.jsx(
        ScenarioCard,
        {
          scenario,
          onEdit: () => handleEditClick(scenario),
          onDelete: () => handleDelete(scenario.id)
        },
        scenario.id
      )) }),
      scenarios.length === 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "px-4 py-6 text-center", children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "No scenarios yet. Add rules for how the worker should handle edge cases." }),
        /* @__PURE__ */ jsxRuntime.jsxs(Button, { variant: "outline", size: "sm", onClick: handleAddClick, children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.Plus, { size: 16, className: "mr-1.5" }),
          "Add your first scenario"
        ] })
      ] }),
      scenarios.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-4 pt-2", children: /* @__PURE__ */ jsxRuntime.jsxs(Button, { variant: "ghost", size: "sm", onClick: handleAddClick, className: "text-muted-foreground hover:text-[var(--black)]", children: [
        /* @__PURE__ */ jsxRuntime.jsx(react_star.Plus, { size: 16, className: "mr-1.5" }),
        "Add scenario"
      ] }) }),
      filteredSuggestions.length > 0 && !isComplete && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "px-4 pt-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Suggested scenarios:" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-2", children: filteredSuggestions.map((suggestion, index) => /* @__PURE__ */ jsxRuntime.jsx(
          SuggestionChip,
          {
            suggestion,
            onAdd: () => handleSuggestionAdd(suggestion),
            disabled: isLoading
          },
          index
        )) })
      ] }),
      canComplete && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-4 pt-4 mt-2 border-t border-border/50", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: "Mark your scenarios as complete to continue." }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            onClick: handleComplete,
            disabled: isCompleting,
            loading: isCompleting,
            size: "sm",
            className: "shrink-0",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(react_star.Check, { size: 16, className: "mr-1.5" }),
              "Mark complete"
            ]
          }
        )
      ] }) }),
      isComplete && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-4 pt-3 mt-2 border-t border-border/50", children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: "You can still add or edit scenarios while we build your worker." }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
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
var HOURS_PER_FTE_YEAR = 1880;
var TIER_PRICING = {
  starter: 29,
  growth: 25,
  scale: 21,
  enterprise: 21
};
function ImpactMetricsForm({
  workerId,
  initialMetrics,
  totalExecutions = 0,
  customerPlan = "starter",
  apiBasePath = "/api/workers",
  onSave,
  showToasts = true,
  className
}) {
  const [metrics, setMetrics] = React51.useState(initialMetrics);
  const [savedMetrics, setSavedMetrics] = React51.useState(initialMetrics);
  const [isSaving, setIsSaving] = React51.useState(false);
  const isInitiallySaved = initialMetrics.time_saved_minutes_per_run !== 30 || initialMetrics.hourly_rate_euros !== 20 || initialMetrics.fte_equivalent !== 0.1;
  const [isEditing, setIsEditing] = React51.useState(!isInitiallySaved);
  const workerCostPerMonth = TIER_PRICING[customerPlan] || TIER_PRICING.starter;
  const workerCostPerYear = workerCostPerMonth * 12;
  const calculateAnnualSavings = (fteEquivalent, hourlyRate) => {
    const laborSavings = fteEquivalent * HOURS_PER_FTE_YEAR * hourlyRate;
    return laborSavings - workerCostPerYear;
  };
  const handleSave = async () => {
    setIsSaving(true);
    try {
      const annualSavings = calculateAnnualSavings(
        metrics.fte_equivalent,
        metrics.hourly_rate_euros
      );
      const updatedMetrics = { ...metrics, estimated_annual_savings_euros: annualSavings };
      let success = false;
      if (onSave) {
        success = await onSave(workerId, updatedMetrics);
      } else {
        const response = await fetch(`${apiBasePath}/${workerId}/impact-metrics`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedMetrics)
        });
        success = response.ok;
      }
      if (success) {
        setMetrics(updatedMetrics);
        setSavedMetrics(updatedMetrics);
        setIsEditing(false);
        if (showToasts) {
          toast({
            title: "Metrics saved",
            description: "Impact metrics have been updated.",
            variant: "success"
          });
        }
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      console.error("Failed to save metrics:", error);
      if (showToasts) {
        toast({
          title: "Failed to save",
          description: "Could not save metrics. Please try again.",
          variant: "error"
        });
      }
    } finally {
      setIsSaving(false);
    }
  };
  const handleCancel = () => {
    setMetrics(savedMetrics);
    setIsEditing(false);
  };
  const hoursSavedPerYear = Math.round(metrics.fte_equivalent * HOURS_PER_FTE_YEAR);
  const timePerTaskHours = metrics.time_saved_minutes_per_run / 60;
  const impliedFrequencyPerYear = timePerTaskHours > 0 ? Math.round(hoursSavedPerYear / timePerTaskHours) : 0;
  const impliedFrequencyPerMonth = Math.round(impliedFrequencyPerYear / 12);
  const laborSavingsPerYear = metrics.fte_equivalent * HOURS_PER_FTE_YEAR * metrics.hourly_rate_euros;
  const netAnnualSavings = laborSavingsPerYear - workerCostPerYear;
  const roiPercentage = workerCostPerYear > 0 ? netAnnualSavings / workerCostPerYear * 100 : 0;
  return /* @__PURE__ */ jsxRuntime.jsx(Card, { className: cn("border-[var(--cyan)]/20 bg-gradient-to-br from-white to-[var(--cyan)]/5", className), children: /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "p-5", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Impact Metrics (ROI)" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2", children: isEditing ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        isInitiallySaved && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            onClick: handleCancel,
            size: "sm",
            variant: "ghost",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            onClick: handleSave,
            disabled: isSaving,
            size: "sm",
            children: isSaving ? "Saving..." : "Save"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          onClick: () => setIsEditing(true),
          size: "sm",
          variant: "outline",
          children: "Edit"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "Time per Task" }),
        isEditing ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "number",
              value: metrics.time_saved_minutes_per_run,
              onChange: (e) => setMetrics((prev) => ({
                ...prev,
                time_saved_minutes_per_run: parseInt(e.target.value) || 0
              })),
              className: "w-16 px-2 py-1 text-2xl font-bold border border-border rounded-sm focus:outline-none bg-background",
              min: "0"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground", children: "min" })
        ] }) : /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold", children: [
          metrics.time_saved_minutes_per_run,
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-normal text-muted-foreground ml-1", children: "min" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "Manual Cost" }),
        isEditing ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground", children: "\u20AC" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "number",
              value: metrics.hourly_rate_euros,
              onChange: (e) => setMetrics((prev) => ({
                ...prev,
                hourly_rate_euros: parseFloat(e.target.value) || 0
              })),
              className: "w-16 px-2 py-1 text-2xl font-bold border border-border rounded-sm focus:outline-none bg-background",
              min: "0",
              step: "0.5"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground", children: "/hr" })
        ] }) : /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold", children: [
          "\u20AC",
          metrics.hourly_rate_euros,
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-normal text-muted-foreground ml-1", children: "/hr" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "Job Portion" }),
        isEditing ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "number",
              value: Math.round(metrics.fte_equivalent * 100),
              onChange: (e) => setMetrics((prev) => ({
                ...prev,
                fte_equivalent: (parseFloat(e.target.value) || 0) / 100
              })),
              className: "w-16 px-2 py-1 text-2xl font-bold border border-border rounded-sm focus:outline-none bg-background",
              min: "0",
              max: "1000",
              step: "5"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground", children: "%" })
        ] }) : /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-2xl font-bold", children: [
          Math.round(metrics.fte_equivalent * 100),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-normal text-muted-foreground ml-1", children: "%" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          hoursSavedPerYear,
          "h/year"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "Net Annual Savings" }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: cn("text-2xl font-bold", netAnnualSavings >= 0 ? "text-[var(--cyan)]" : "text-red-500"), children: [
          "\u20AC",
          netAnnualSavings.toLocaleString(void 0, { maximumFractionDigits: 0 })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          "\u20AC",
          laborSavingsPerYear.toLocaleString(void 0, { maximumFractionDigits: 0 }),
          " ",
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "opacity-60", children: "labor saved" }),
          " \u2212 \u20AC",
          workerCostPerYear,
          " ",
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "opacity-60", children: "worker cost" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-4 pt-3 border-t border-border/50 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("p", { className: cn(
        "text-sm",
        roiPercentage > 0 ? "font-bold text-[var(--cyan)]" : "text-muted-foreground"
      ), children: [
        "ROI: ",
        roiPercentage >= 0 ? "+" : "",
        roiPercentage.toLocaleString(void 0, { maximumFractionDigits: 0 }),
        "%"
      ] }),
      impliedFrequencyPerYear > 0 && /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "Implied: ~",
        impliedFrequencyPerMonth,
        "\xD7/month (",
        impliedFrequencyPerYear,
        "\xD7/year)"
      ] })
    ] })
  ] }) });
}
function defaultFormatDate(date) {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = /* @__PURE__ */ new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 6e4);
  const diffHours = Math.floor(diffMs / 36e5);
  const diffDays = Math.floor(diffMs / 864e5);
  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return d.toLocaleDateString();
}
function ActivityTimeline({
  activities,
  loading = false,
  activityLabels = {},
  collapsedCount = 3,
  showNoteInput = true,
  notePlaceholder = "Add a note...",
  onAddNote,
  submitting = false,
  formatDate = defaultFormatDate,
  loadingComponent,
  emptyMessage = "No activity yet",
  className = ""
}) {
  const [newNote, setNewNote] = React51.useState("");
  const [expanded, setExpanded] = React51.useState(false);
  const [isSubmitting, setIsSubmitting] = React51.useState(false);
  const handleAddNote = async () => {
    if (!newNote.trim() || !onAddNote) return;
    setIsSubmitting(true);
    try {
      await onAddNote(newNote.trim());
      setNewNote("");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleAddNote();
    }
  };
  const visibleActivities = expanded ? activities : activities.slice(0, collapsedCount);
  const hasMore = activities.length > collapsedCount;
  const isCurrentlySubmitting = submitting || isSubmitting;
  const DefaultLoading = /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsxRuntime.jsx(react_star.CircleNotch, { className: "w-5 h-5 animate-spin text-muted-foreground" }) });
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `space-y-3 ${className}`, children: [
    showNoteInput && onAddNote && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Textarea,
        {
          value: newNote,
          onChange: (e) => setNewNote(e.target.value),
          onKeyDown: handleKeyDown,
          placeholder: notePlaceholder,
          rows: 1,
          className: "resize-none min-h-[36px] py-2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          onClick: handleAddNote,
          disabled: isCurrentlySubmitting || !newNote.trim(),
          size: "sm",
          className: "flex-shrink-0 h-9",
          children: isCurrentlySubmitting ? /* @__PURE__ */ jsxRuntime.jsx(react_star.CircleNotch, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntime.jsx(react_star.PaperPlaneTilt, { className: "w-4 h-4", weight: "bold" })
        }
      )
    ] }),
    loading ? loadingComponent || DefaultLoading : activities.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground text-center py-2", children: emptyMessage }) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
      visibleActivities.map((activity) => {
        const label = activityLabels[activity.activity_type] || "";
        return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm border-l-2 border-gray-200 pl-3 py-1", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-gray-700", children: [
            label && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-muted-foreground", children: [
              label,
              " "
            ] }),
            activity.content
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
            activity.user,
            " \xB7 ",
            formatDate(activity.created_at)
          ] })
        ] }, activity.id);
      }),
      hasMore && /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: () => setExpanded(!expanded),
          className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
          children: expanded ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretUp, { className: "w-3 h-3" }),
            "Show less"
          ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretDown, { className: "w-3 h-3" }),
            "Show ",
            activities.length - collapsedCount,
            " more"
          ] })
        }
      )
    ] })
  ] });
}
function formatMessageTime(dateStr) {
  const d = new Date(dateStr);
  const now = /* @__PURE__ */ new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 6e4);
  const diffHours = Math.floor(diffMs / 36e5);
  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return d.toLocaleDateString(void 0, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
function SupportChat({
  messagesEndpoint,
  sendEndpoint,
  currentRole,
  pollInterval = 5e3,
  placeholder = "Type a message...",
  emptyMessage = "No messages yet. Start the conversation!",
  className = ""
}) {
  const [messages, setMessages] = React51.useState([]);
  const [loading, setLoading] = React51.useState(true);
  const [sending, setSending] = React51.useState(false);
  const [inputValue, setInputValue] = React51.useState("");
  const scrollRef = React51.useRef(null);
  const prevMessageCountRef = React51.useRef(0);
  const fetchMessages = React51.useCallback(async () => {
    try {
      const res = await fetch(messagesEndpoint);
      if (!res.ok) return;
      const data = await res.json();
      setMessages(data.messages || []);
    } catch {
    } finally {
      setLoading(false);
    }
  }, [messagesEndpoint]);
  React51.useEffect(() => {
    fetchMessages();
    if (pollInterval > 0) {
      const interval = setInterval(fetchMessages, pollInterval);
      return () => clearInterval(interval);
    }
  }, [fetchMessages, pollInterval]);
  React51.useEffect(() => {
    if (messages.length > prevMessageCountRef.current) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
    prevMessageCountRef.current = messages.length;
  }, [messages.length]);
  const handleSend = async () => {
    const content = inputValue.trim();
    if (!content || sending) return;
    setSending(true);
    setInputValue("");
    const optimisticMsg = {
      id: `temp-${Date.now()}`,
      role: currentRole,
      content,
      type: "message",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    setMessages((prev) => [...prev, optimisticMsg]);
    try {
      const res = await fetch(sendEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content })
      });
      if (res.ok) {
        await fetchMessages();
      } else {
        setMessages((prev) => prev.filter((m) => m.id !== optimisticMsg.id));
      }
    } catch {
      setMessages((prev) => prev.filter((m) => m.id !== optimisticMsg.id));
    } finally {
      setSending(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `flex items-center justify-center py-8 ${className}`, children: /* @__PURE__ */ jsxRuntime.jsx(react_star.CircleNotch, { className: "w-5 h-5 animate-spin text-muted-foreground" }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `flex flex-col ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { ref: scrollRef, className: "flex-1 overflow-y-auto space-y-3 mb-4 max-h-[400px] min-h-[200px] px-1", children: messages.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center h-full text-sm text-muted-foreground py-8", children: typeof emptyMessage === "string" ? /* @__PURE__ */ jsxRuntime.jsx("p", { children: emptyMessage }) : emptyMessage }) : messages.map((msg) => {
      if (msg.type === "event" || msg.role === "system") {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-gray-50 border border-gray-100 rounded-full px-3 py-1 text-xs text-muted-foreground max-w-[90%] text-center", children: [
          msg.content,
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-2 opacity-60", children: formatMessageTime(msg.created_at) })
        ] }) }, msg.id);
      }
      const isCurrentUser = msg.role === currentRole;
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `flex ${isCurrentUser ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `max-w-[80%] rounded-lg px-3 py-2 ${isCurrentUser ? "bg-[var(--cyan)] text-white" : "bg-gray-100 text-[var(--black)]"}`, children: [
        !isCurrentUser && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs font-medium mb-0.5 opacity-70", children: msg.role === "admin" ? "Dilipod Team" : "You" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm whitespace-pre-wrap", children: msg.content }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-[10px] mt-1 ${isCurrentUser ? "text-white/60" : "text-muted-foreground"}`, children: formatMessageTime(msg.created_at) })
      ] }) }, msg.id);
    }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-2 border-t border-gray-100 pt-3", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Textarea,
        {
          value: inputValue,
          onChange: (e) => setInputValue(e.target.value),
          onKeyDown: handleKeyDown,
          placeholder,
          rows: 1,
          className: "resize-none min-h-[36px] py-2 flex-1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          onClick: handleSend,
          disabled: sending || !inputValue.trim(),
          size: "sm",
          className: "flex-shrink-0 h-9",
          children: sending ? /* @__PURE__ */ jsxRuntime.jsx(react_star.CircleNotch, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntime.jsx(react_star.PaperPlaneTilt, { className: "w-4 h-4", weight: "bold" })
        }
      )
    ] })
  ] });
}

// src/index.ts
init_workflow_flow();
var WorkflowFlow2 = React51.lazy(() => Promise.resolve().then(() => (init_workflow_flow(), workflow_flow_exports)).then((m) => ({ default: m.WorkflowFlow })));
var BLANK_N8N_WORKFLOW = {
  name: "New Workflow",
  nodes: [
    {
      id: "webhook-trigger",
      name: "Webhook",
      type: "n8n-nodes-base.webhook",
      parameters: {
        httpMethod: "POST",
        path: "my-webhook"
      }
    }
  ],
  connections: {},
  settings: { executionOrder: "v1" }
};
var BLANK_SIM_WORKFLOW = {
  name: "New Workflow",
  description: "A new Sim workflow",
  trigger: { type: "webhook_input" },
  nodes: [
    { id: "input", type: "webhook_input" },
    { id: "output", type: "output" }
  ],
  edges: [{ from: "input", to: "output" }]
};
function getNodeIcon(type) {
  if (type.includes("webhook")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.WebhooksLogo, { size: 16, weight: "fill" });
  if (type.includes("Trigger") || type.includes("schedule")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.Timer, { size: 16, weight: "fill" });
  if (type.includes("if") || type.includes("switch")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.GitBranch, { size: 16, weight: "fill" });
  if (type.includes("httpRequest")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.Globe, { size: 16, weight: "fill" });
  if (type.includes("langchain") || type.includes("openai") || type.includes("anthropic")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.Robot, { size: 16, weight: "fill" });
  if (type.includes("code")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.Code, { size: 16, weight: "fill" });
  if (type.includes("respondToWebhook")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.CheckCircle, { size: 16, weight: "fill" });
  if (type.includes("set")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.Package, { size: 16, weight: "fill" });
  return /* @__PURE__ */ jsxRuntime.jsx(react_star.Package, { size: 16 });
}
function getNodeTypeLabel2(type) {
  const typeMap = {
    "n8n-nodes-base.webhook": "Webhook Trigger",
    "n8n-nodes-base.scheduleTrigger": "Schedule Trigger",
    "n8n-nodes-base.if": "Condition",
    "n8n-nodes-base.httpRequest": "HTTP Request",
    "n8n-nodes-base.set": "Set Data",
    "n8n-nodes-base.code": "Code",
    "n8n-nodes-base.respondToWebhook": "Webhook Response",
    "@n8n/n8n-nodes-langchain.agent": "AI Agent",
    "@n8n/n8n-nodes-langchain.lmChatOpenAi": "OpenAI Model",
    "@n8n/n8n-nodes-langchain.lmChatAnthropic": "Anthropic Model"
  };
  return typeMap[type] || type.split(".").pop() || type;
}
function getSimNodeTypeLabel(type) {
  const typeMap = {
    "webhook_input": "Webhook Input",
    "llm": "AI/LLM",
    "code": "Code",
    "http_request": "HTTP Request",
    "condition": "Condition",
    "output": "Output"
  };
  return typeMap[type] || type;
}
function defaultFormatDistance(date, options) {
  const now = /* @__PURE__ */ new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 6e4);
  const diffHours = Math.floor(diffMs / 36e5);
  const diffDays = Math.floor(diffMs / 864e5);
  let result = "";
  if (diffMins < 1) result = "less than a minute";
  else if (diffMins < 60) result = `${diffMins} minute${diffMins > 1 ? "s" : ""}`;
  else if (diffHours < 24) result = `${diffHours} hour${diffHours > 1 ? "s" : ""}`;
  else result = `${diffDays} day${diffDays > 1 ? "s" : ""}`;
  return options?.addSuffix ? `${result} ago` : result;
}
function computeWorkflowDiff(stateA, stateB) {
  if (!stateA || !stateB) {
    return {
      blocksAdded: [],
      blocksRemoved: [],
      blocksModified: [],
      edgesAdded: 0,
      edgesRemoved: 0,
      summary: "Unable to compare - missing workflow data"
    };
  }
  const blocksA = stateA.blocks || {};
  const blocksB = stateB.blocks || {};
  const edgesA = stateA.edges || [];
  const edgesB = stateB.edges || [];
  const blockIdsA = new Set(Object.keys(blocksA));
  const blockIdsB = new Set(Object.keys(blocksB));
  const blocksAdded = [...blockIdsB].filter((id) => !blockIdsA.has(id));
  const blocksRemoved = [...blockIdsA].filter((id) => !blockIdsB.has(id));
  const blocksModified = [];
  for (const id of blockIdsA) {
    if (blockIdsB.has(id)) {
      const blockA = blocksA[id];
      const blockB = blocksB[id];
      if (JSON.stringify(blockA) !== JSON.stringify(blockB)) {
        blocksModified.push(id);
      }
    }
  }
  const edgeSignature = (e) => `${e.source || e.from}->${e.target || e.to}`;
  const edgeSigsA = new Set(edgesA.map(edgeSignature));
  const edgeSigsB = new Set(edgesB.map(edgeSignature));
  const edgesAdded = [...edgeSigsB].filter((sig) => !edgeSigsA.has(sig)).length;
  const edgesRemoved = [...edgeSigsA].filter((sig) => !edgeSigsB.has(sig)).length;
  const changes = [];
  if (blocksAdded.length > 0) changes.push(`+${blocksAdded.length} block${blocksAdded.length > 1 ? "s" : ""}`);
  if (blocksRemoved.length > 0) changes.push(`-${blocksRemoved.length} block${blocksRemoved.length > 1 ? "s" : ""}`);
  if (blocksModified.length > 0) changes.push(`~${blocksModified.length} modified`);
  if (edgesAdded > 0) changes.push(`+${edgesAdded} edge${edgesAdded > 1 ? "s" : ""}`);
  if (edgesRemoved > 0) changes.push(`-${edgesRemoved} edge${edgesRemoved > 1 ? "s" : ""}`);
  return {
    blocksAdded,
    blocksRemoved,
    blocksModified,
    edgesAdded,
    edgesRemoved,
    summary: changes.length > 0 ? changes.join(", ") : "No changes detected"
  };
}
function N8nWorkflowSummary({ workflow, showFlow = false }) {
  const nodes = workflow.nodes || [];
  const triggerNode = nodes.find(
    (n) => n.type.includes("webhook") || n.type.includes("Trigger")
  );
  const aiNodes = nodes.filter(
    (n) => n.type.includes("langchain") || n.type.includes("openai") || n.type.includes("anthropic")
  );
  const httpNodes = nodes.filter(
    (n) => n.type === "n8n-nodes-base.httpRequest"
  );
  const conditionNodes = nodes.filter(
    (n) => n.type === "n8n-nodes-base.if"
  );
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-muted/50 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground mb-1", children: [
          triggerNode && getNodeIcon(triggerNode.type),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium", children: "Trigger" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-semibold truncate", children: triggerNode ? getNodeTypeLabel2(triggerNode.type) : "None" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-muted/50 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.TreeStructure, { size: 16 }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium", children: "Steps" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm font-semibold", children: [
          nodes.length,
          " nodes"
        ] })
      ] }),
      aiNodes.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-purple-50 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-purple-600 mb-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.Robot, { size: 16, weight: "fill" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium", children: "AI" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm font-semibold text-purple-700", children: [
          aiNodes.length,
          " ",
          aiNodes.length === 1 ? "node" : "nodes"
        ] })
      ] }),
      httpNodes.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-blue-50 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-blue-600 mb-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.Globe, { size: 16, weight: "fill" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium", children: "APIs" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm font-semibold text-blue-700", children: [
          httpNodes.length,
          " ",
          httpNodes.length === 1 ? "request" : "requests"
        ] })
      ] }),
      conditionNodes.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-yellow-50 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-yellow-600 mb-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.GitBranch, { size: 16, weight: "fill" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium", children: "Logic" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm font-semibold text-yellow-700", children: [
          conditionNodes.length,
          " ",
          conditionNodes.length === 1 ? "condition" : "conditions"
        ] })
      ] })
    ] }),
    showFlow && /* @__PURE__ */ jsxRuntime.jsx(React51.Suspense, { fallback: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-[320px] bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-slate-400 text-sm", children: "Loading..." }) }), children: /* @__PURE__ */ jsxRuntime.jsx(WorkflowFlow2, { workflow, height: 320 }) }),
    !showFlow && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Workflow Nodes" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-1.5", children: nodes.map((node) => /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          className: "px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs",
          children: node.name
        },
        node.id
      )) })
    ] })
  ] });
}
function SimWorkflowSummary({ workflow }) {
  const blocks = workflow.blocks || {};
  const blockList = Object.values(blocks);
  const edges = workflow.edges || [];
  const legacyNodes = workflow.nodes || [];
  const hasBlocks = blockList.length > 0;
  const displayNodes = hasBlocks ? blockList : legacyNodes;
  const triggerBlock = blockList.find((b) => b.type === "starter" || b.type === "webhook" || b.type === "api");
  const triggerType = triggerBlock?.type || workflow.trigger?.type;
  const aiBlocks = blockList.filter((b) => b.type === "agent" || b.type === "llm" || b.type === "openai" || b.type === "anthropic");
  const httpBlocks = blockList.filter((b) => b.type === "api" || b.type === "http_request");
  const isEmpty = displayNodes.length === 0;
  if (isEmpty) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "py-8 text-center", children: [
      /* @__PURE__ */ jsxRuntime.jsx(react_star.TreeStructure, { size: 32, className: "mx-auto mb-3 text-muted-foreground/50" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "No workflow blocks yet" }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: 'Open the workflow in Sim Studio to build it, then click "Pull from Sim" to sync changes.' })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-muted/50 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.WebhooksLogo, { size: 16, weight: "fill" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium", children: "Trigger" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-semibold", children: triggerType ? getSimNodeTypeLabel(triggerType) : "Manual" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-muted/50 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.TreeStructure, { size: 16 }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium", children: "Blocks" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm font-semibold", children: [
          displayNodes.length,
          " blocks"
        ] })
      ] }),
      edges.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-muted/50 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.GitBranch, { size: 16 }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium", children: "Edges" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm font-semibold", children: [
          edges.length,
          " connections"
        ] })
      ] }),
      aiBlocks.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-purple-50 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-purple-600 mb-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.Robot, { size: 16, weight: "fill" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium", children: "AI" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm font-semibold text-purple-700", children: [
          aiBlocks.length,
          " ",
          aiBlocks.length === 1 ? "block" : "blocks"
        ] })
      ] }),
      httpBlocks.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-blue-50 rounded-lg p-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-blue-600 mb-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.Globe, { size: 16, weight: "fill" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium", children: "APIs" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm font-semibold text-blue-700", children: [
          httpBlocks.length,
          " ",
          httpBlocks.length === 1 ? "request" : "requests"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Workflow Blocks" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-2", children: hasBlocks ? blockList.map((block) => /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs bg-gray-100 text-gray-700 border-gray-300",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(react_star.Package, { size: 14 }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: block.name || getSimNodeTypeLabel(block.type) })
          ]
        },
        block.id
      )) : legacyNodes.map((node) => /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs bg-gray-100 text-gray-700 border-gray-300",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(react_star.Package, { size: 14 }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium", children: getSimNodeTypeLabel(node.type) })
          ]
        },
        node.id
      )) })
    ] })
  ] });
}
function WorkflowViewer({
  workflow,
  platform,
  title = "Workflow",
  webhookUrl,
  workflowId,
  workflowDefinitionId,
  workerId,
  workerName,
  internalWorkerType,
  lastSynced,
  isActive,
  syncError,
  className = "",
  editable = false,
  allowCreate = false,
  allowPlatformChange = false,
  allowStatusChange = false,
  onWorkflowUpdate,
  onWorkflowCreated,
  onPlatformChange,
  onStatusChange,
  apiHandlers,
  loadingComponent,
  formatDistance = defaultFormatDistance,
  simWorkflowId,
  simStudioUrl
}) {
  const [viewMode, setViewMode] = React51.useState("summary");
  const [editedJson, setEditedJson] = React51.useState("");
  const [jsonError, setJsonError] = React51.useState(null);
  const [message, setMessage] = React51.useState(null);
  const [saving, setSaving] = React51.useState(false);
  const [syncing, setSyncing] = React51.useState(false);
  const [pulling, setPulling] = React51.useState(false);
  const [creating, setCreating] = React51.useState(false);
  const [selectedTemplate, setSelectedTemplate] = React51.useState("blank");
  const [exporting, setExporting] = React51.useState(false);
  const [backups, setBackups] = React51.useState([]);
  const [loadingBackups, setLoadingBackups] = React51.useState(false);
  const [pushingToSim, setPushingToSim] = React51.useState(false);
  const [pullingFromSim, setPullingFromSim] = React51.useState(false);
  const [switchingPlatform, setSwitchingPlatform] = React51.useState(false);
  const [diffMode, setDiffMode] = React51.useState(false);
  const [selectedBackupA, setSelectedBackupA] = React51.useState(null);
  const [selectedBackupB, setSelectedBackupB] = React51.useState(null);
  const [backupStateA, setBackupStateA] = React51.useState(null);
  const [backupStateB, setBackupStateB] = React51.useState(null);
  const [loadingDiff, setLoadingDiff] = React51.useState(false);
  const [localPlatform, setLocalPlatform] = React51.useState(platform);
  const [localIsActive, setLocalIsActive] = React51.useState(isActive ?? true);
  const hasUnsavedChanges = localPlatform !== platform || localIsActive !== (isActive ?? true);
  function copyToClipboard(text, label = "Copied") {
    navigator.clipboard.writeText(text);
    setMessage({ type: "success", text: label });
    setTimeout(() => setMessage(null), 2e3);
  }
  function handleLocalPlatformChange(newPlatform) {
    setLocalPlatform(newPlatform);
  }
  function handleLocalStatusChange(newStatus) {
    setLocalIsActive(newStatus);
  }
  function cancelChanges() {
    setLocalPlatform(platform);
    setLocalIsActive(isActive ?? true);
    setMessage(null);
  }
  async function saveSettings() {
    if (!workflowDefinitionId || !apiHandlers?.saveSettings) {
      setMessage({ type: "error", text: "Cannot save - no workflow definition or API handler." });
      return;
    }
    setSaving(true);
    setMessage(null);
    try {
      const updateData = {};
      if (localPlatform !== platform) {
        updateData.platform = localPlatform;
      }
      if (localIsActive !== (isActive ?? true)) {
        updateData.is_active = localIsActive;
      }
      if (Object.keys(updateData).length === 0) {
        setMessage({ type: "success", text: "No changes to save" });
        setSaving(false);
        return;
      }
      const result = await apiHandlers.saveSettings(workflowDefinitionId, updateData);
      if (result.success) {
        setMessage({ type: "success", text: "Settings saved successfully" });
        onPlatformChange?.(localPlatform);
        onStatusChange?.(localIsActive);
      } else {
        setMessage({ type: "error", text: result.error || "Failed to save settings" });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to save settings" });
    } finally {
      setSaving(false);
    }
  }
  function startEditing() {
    setEditedJson(JSON.stringify(workflow, null, 2));
    setJsonError(null);
    setViewMode("edit");
  }
  function cancelEditing() {
    setEditedJson("");
    setJsonError(null);
    setViewMode("summary");
  }
  function validateJson(json) {
    try {
      const parsed = JSON.parse(json);
      if (platform === "n8n") {
        if (!parsed.nodes || !Array.isArray(parsed.nodes)) {
          throw new Error("n8n workflow must have a nodes array");
        }
      } else {
        if (!parsed.blocks || typeof parsed.blocks !== "object") {
          throw new Error("Sim workflow must have a blocks object");
        }
      }
      return parsed;
    } catch {
      return null;
    }
  }
  async function saveWorkflow() {
    const parsed = validateJson(editedJson);
    if (!parsed) {
      setJsonError("Invalid JSON. Please check the syntax.");
      return;
    }
    if (!workflowDefinitionId || !apiHandlers?.saveWorkflow) {
      setJsonError("Cannot save - no workflow definition or API handler.");
      return;
    }
    setSaving(true);
    setJsonError(null);
    try {
      const result = await apiHandlers.saveWorkflow(workflowDefinitionId, parsed, platform);
      if (result.success) {
        setMessage({ type: "success", text: "Workflow saved to database" });
        setViewMode("summary");
        onWorkflowUpdate?.(parsed);
      } else {
        setJsonError(result.error || "Failed to save workflow");
      }
    } catch {
      setJsonError("Failed to save workflow");
    } finally {
      setSaving(false);
    }
  }
  async function pushToN8n() {
    if (!workerId || !apiHandlers?.pushToN8n) {
      setMessage({ type: "error", text: "Cannot sync - no worker ID or API handler" });
      return;
    }
    setSyncing(true);
    setMessage(null);
    try {
      const result = await apiHandlers.pushToN8n(workerId);
      if (result.success) {
        setMessage({ type: "success", text: "Pushed to n8n successfully" });
      } else {
        setMessage({ type: "error", text: result.error || "Failed to push to n8n" });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to push to n8n" });
    } finally {
      setSyncing(false);
    }
  }
  async function pullFromN8n() {
    if (!workflowId || !workflowDefinitionId || !apiHandlers?.pullFromN8n) {
      setMessage({ type: "error", text: "Cannot pull - no n8n workflow ID or API handler" });
      return;
    }
    setPulling(true);
    setMessage(null);
    try {
      const result = await apiHandlers.pullFromN8n(workflowDefinitionId);
      if (result.success) {
        if (result.descriptionSync?.needsUpdate) {
          setMessage({
            type: "success",
            text: `Pulled from n8n. Note: ${result.descriptionSync.reason || "Worker description may need updating."}`
          });
        } else {
          setMessage({ type: "success", text: "Pulled from n8n successfully" });
        }
      } else {
        setMessage({ type: "error", text: result.error || "Failed to pull from n8n" });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to pull from n8n" });
    } finally {
      setPulling(false);
    }
  }
  async function exportFromSim() {
    if (!workflowDefinitionId || !simWorkflowId || !apiHandlers?.exportFromSim) {
      setMessage({ type: "error", text: "Cannot export - no Sim workflow ID or API handler" });
      return;
    }
    setExporting(true);
    setMessage(null);
    try {
      const result = await apiHandlers.exportFromSim(workflowDefinitionId);
      if (result.success) {
        const blocksCount = result.workflow?.blocksCount || 0;
        const edgesCount = result.workflow?.edgesCount || 0;
        setMessage({
          type: "success",
          text: `Exported from Sim Studio (v${result.backup?.version || 1}, ${blocksCount} blocks, ${edgesCount} edges)`
        });
        if (viewMode === "backups") {
          loadBackups();
        }
      } else {
        setMessage({ type: "error", text: result.error || "Failed to export from Sim Studio" });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to export from Sim Studio" });
    } finally {
      setExporting(false);
    }
  }
  async function loadBackups() {
    if (!workflowDefinitionId || !apiHandlers?.getSimBackups) {
      return;
    }
    setLoadingBackups(true);
    try {
      const result = await apiHandlers.getSimBackups(workflowDefinitionId);
      if (result.success && result.backups) {
        setBackups(result.backups);
      }
    } catch {
      console.error("Failed to load backups");
    } finally {
      setLoadingBackups(false);
    }
  }
  function showBackups() {
    setViewMode("backups");
    loadBackups();
  }
  async function loadBackupForDiff(backupId, slot) {
    if (!workflowDefinitionId || !apiHandlers?.getBackupState) {
      return;
    }
    setLoadingDiff(true);
    try {
      const result = await apiHandlers.getBackupState(workflowDefinitionId, backupId);
      if (result.success && result.backup) {
        if (slot === "A") {
          setBackupStateA(result.backup.state);
          setSelectedBackupA(backupId);
        } else {
          setBackupStateB(result.backup.state);
          setSelectedBackupB(backupId);
        }
      }
    } catch {
      console.error("Failed to load backup for diff");
    } finally {
      setLoadingDiff(false);
    }
  }
  function startDiffMode() {
    setDiffMode(true);
    setSelectedBackupA(null);
    setSelectedBackupB(null);
    setBackupStateA(null);
    setBackupStateB(null);
  }
  function exitDiffMode() {
    setDiffMode(false);
    setSelectedBackupA(null);
    setSelectedBackupB(null);
    setBackupStateA(null);
    setBackupStateB(null);
  }
  function openInSimStudio() {
    if (simStudioUrl && simWorkflowId) {
      window.open(`${simStudioUrl}/w/${simWorkflowId}`, "_blank");
    }
  }
  async function pushToSim() {
    if (!workflowDefinitionId || !apiHandlers?.pushToSim) {
      setMessage({ type: "error", text: "Cannot push - no workflow definition ID or API handler" });
      return;
    }
    setPushingToSim(true);
    setMessage(null);
    try {
      const result = await apiHandlers.pushToSim(workflowDefinitionId);
      if (result.success) {
        setMessage({
          type: "success",
          text: result.workflowId ? `Pushed to Sim Studio (workflow: ${result.workflowId})` : "Pushed to Sim Studio successfully"
        });
        setTimeout(() => window.location.reload(), 1500);
      } else {
        setMessage({ type: "error", text: result.error || "Failed to push to Sim Studio" });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to push to Sim Studio" });
    } finally {
      setPushingToSim(false);
    }
  }
  async function pullFromSim() {
    if (!workflowDefinitionId || !simWorkflowId || !apiHandlers?.pullFromSim) {
      setMessage({ type: "error", text: "Cannot pull - no Sim workflow ID or API handler" });
      return;
    }
    setPullingFromSim(true);
    setMessage(null);
    try {
      const result = await apiHandlers.pullFromSim(workflowDefinitionId);
      if (result.success) {
        if (result.descriptionSync?.needsUpdate) {
          setMessage({
            type: "success",
            text: `Pulled from Sim Studio. Note: ${result.descriptionSync.reason || "Worker description may need updating."}`
          });
        } else {
          setMessage({ type: "success", text: "Pulled from Sim Studio successfully" });
        }
        setTimeout(() => window.location.reload(), 1500);
      } else {
        setMessage({ type: "error", text: result.error || "Failed to pull from Sim Studio" });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to pull from Sim Studio" });
    } finally {
      setPullingFromSim(false);
    }
  }
  function startCreating() {
    if (internalWorkerType) {
      setSelectedTemplate(internalWorkerType);
    } else {
      setSelectedTemplate("blank");
    }
    const blank = platform === "n8n" ? BLANK_N8N_WORKFLOW : BLANK_SIM_WORKFLOW;
    setEditedJson(JSON.stringify(blank, null, 2));
    setViewMode("create");
  }
  async function createWorkflow() {
    const parsed = validateJson(editedJson);
    if (!parsed) {
      setJsonError("Invalid JSON. Please check the syntax.");
      return;
    }
    if (!workerId || !apiHandlers?.createWorkflow) {
      setJsonError("Cannot create - no worker ID or API handler.");
      return;
    }
    setCreating(true);
    setJsonError(null);
    try {
      const workflowName = parsed.name || `${workerName || "Worker"} Workflow`;
      const result = await apiHandlers.createWorkflow({
        agent_id: workerId,
        name: workflowName,
        platform,
        n8n_workflow: platform === "n8n" ? parsed : null,
        sim_workflow: platform === "sim" ? parsed : null,
        is_active: true,
        is_global: false
      });
      if (result.success && result.workflow) {
        setMessage({ type: "success", text: "Workflow created successfully" });
        onWorkflowCreated?.(result.workflow.id);
      } else {
        setJsonError(result.error || "Failed to create workflow");
      }
    } catch {
      setJsonError("Failed to create workflow");
    } finally {
      setCreating(false);
    }
  }
  async function switchPlatform(targetPlatform) {
    if (!workflowDefinitionId || !apiHandlers?.switchPlatform) {
      setMessage({ type: "error", text: "Cannot switch platform - no workflow definition ID or API handler" });
      return;
    }
    setSwitchingPlatform(true);
    setMessage(null);
    try {
      const result = await apiHandlers.switchPlatform(workflowDefinitionId, targetPlatform);
      if (result.success) {
        setMessage({
          type: "success",
          text: targetPlatform === "sim" ? `Switched to Sim Studio${result.simWorkflowId ? ` (workflow: ${result.simWorkflowId})` : ""}` : "Switched to n8n"
        });
        setTimeout(() => window.location.reload(), 1500);
      } else {
        setMessage({ type: "error", text: result.error || "Failed to switch platform" });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to switch platform" });
    } finally {
      setSwitchingPlatform(false);
    }
  }
  async function loadTemplate() {
    if (!workerId || !workerName || !apiHandlers?.loadTemplate) {
      setJsonError("Worker information or API handler required to generate template.");
      return;
    }
    if (selectedTemplate === "blank" || selectedTemplate === "custom") {
      return;
    }
    setCreating(true);
    setJsonError(null);
    try {
      const result = await apiHandlers.loadTemplate(selectedTemplate, workerId);
      if (result.success && result.workflow) {
        setEditedJson(JSON.stringify(result.workflow, null, 2));
        setMessage({ type: "success", text: "Template loaded" });
      } else {
        setJsonError(result.error || "Failed to load template");
      }
    } catch {
      setJsonError("Failed to load template");
    } finally {
      setCreating(false);
    }
  }
  const DefaultLoading = /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-[320px] bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-slate-400 text-sm", children: "Loading..." }) });
  if (!workflow) {
    return /* @__PURE__ */ jsxRuntime.jsxs(Card, { className, children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { className: "text-base", children: title }),
        allowCreate && viewMode !== "create" && /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: startCreating, variant: "primary", size: "sm", children: "Create Workflow" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(CardContent, { children: viewMode === "create" ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-4", children: [
        message && /* @__PURE__ */ jsxRuntime.jsx(Alert, { variant: message.type === "success" ? "success" : "error", children: message.text }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-medium", children: "Start from template:" }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                onClick: () => {
                  setSelectedTemplate("blank");
                  const blank = platform === "n8n" ? BLANK_N8N_WORKFLOW : BLANK_SIM_WORKFLOW;
                  setEditedJson(JSON.stringify(blank, null, 2));
                },
                variant: selectedTemplate === "blank" ? "primary" : "outline",
                size: "sm",
                children: "Blank"
              }
            ),
            internalWorkerType && apiHandlers?.loadTemplate && /* @__PURE__ */ jsxRuntime.jsxs(
              Button,
              {
                onClick: () => {
                  setSelectedTemplate(internalWorkerType);
                  loadTemplate();
                },
                variant: selectedTemplate === internalWorkerType ? "primary" : "outline",
                size: "sm",
                children: [
                  internalWorkerType.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
                  " Template"
                ]
              }
            )
          ] })
        ] }),
        jsonError && /* @__PURE__ */ jsxRuntime.jsx(Alert, { variant: "error", children: jsonError }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Textarea,
          {
            value: editedJson,
            onChange: (e) => {
              setEditedJson(e.target.value);
              setJsonError(null);
            },
            className: "h-72 font-mono text-xs",
            placeholder: "Paste or edit workflow JSON here..."
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: () => setViewMode("summary"), variant: "outline", size: "sm", children: "Cancel" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              onClick: createWorkflow,
              disabled: creating || !editedJson.trim(),
              variant: "primary",
              size: "sm",
              children: creating ? "Creating..." : "Create Workflow"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: 'Create a workflow definition. After creating, use "Push to n8n" to deploy it.' })
      ] }) : /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "No workflow defined yet.",
        allowCreate && ' Click "Create Workflow" to add one.'
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Card, { className, children: [
    /* @__PURE__ */ jsxRuntime.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { className: "text-base", children: title }),
        allowStatusChange && workflowDefinitionId ? /* @__PURE__ */ jsxRuntime.jsx(
          Badge,
          {
            variant: localIsActive ? "success" : "default",
            size: "sm",
            children: localIsActive ? "Active" : "Inactive"
          }
        ) : isActive !== void 0 && /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: isActive ? "success" : "default", size: "sm", children: isActive ? "Active" : "Inactive" }),
        hasUnsavedChanges && /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "warning", size: "sm", children: "Unsaved" }),
        syncError && /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "error", size: "sm", children: "Sync Error" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex gap-1", children: viewMode === "edit" ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: cancelEditing, variant: "outline", size: "sm", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: saveWorkflow, disabled: saving, variant: "primary", size: "sm", children: saving ? "Saving..." : "Save JSON" })
      ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex border border-border rounded-md overflow-hidden mr-2", children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              onClick: () => setViewMode("summary"),
              className: `px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-colors ${viewMode === "summary" ? "bg-primary text-white" : "bg-background hover:bg-muted text-muted-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(react_star.Eye, { size: 14 }),
                "Summary"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              onClick: () => setViewMode("flow"),
              className: `px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-colors border-l border-border ${viewMode === "flow" ? "bg-primary text-white" : "bg-background hover:bg-muted text-muted-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(react_star.TreeStructure, { size: 14 }),
                "Diagram"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              onClick: () => setViewMode("json"),
              className: `px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-colors border-l border-border ${viewMode === "json" ? "bg-primary text-white" : "bg-background hover:bg-muted text-muted-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(react_star.Code, { size: 14 }),
                "JSON"
              ]
            }
          )
        ] }),
        editable && apiHandlers?.saveWorkflow && /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: startEditing, variant: "outline", size: "sm", icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.PencilSimple, { size: 14 }), children: "Edit" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(CardContent, { className: "space-y-4", children: [
      message && /* @__PURE__ */ jsxRuntime.jsx(Alert, { variant: message.type === "success" ? "success" : "error", children: message.text }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-xs text-muted-foreground", children: [
        workflowId && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono bg-muted px-2 py-1 rounded", children: workflowId }),
        lastSynced && /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
          "Synced ",
          formatDistance(new Date(lastSynced), { addSuffix: true })
        ] })
      ] }),
      webhookUrl && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 p-2 bg-muted/50 rounded border border-border", children: [
        /* @__PURE__ */ jsxRuntime.jsx(react_star.WebhooksLogo, { size: 14, className: "text-muted-foreground flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntime.jsx("code", { className: "text-xs font-mono text-foreground truncate flex-1", children: webhookUrl }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            onClick: () => copyToClipboard(webhookUrl, "Webhook URL copied"),
            className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground flex-shrink-0",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(react_star.Copy, { size: 12 }),
              "Copy"
            ]
          }
        )
      ] }),
      (allowPlatformChange || allowStatusChange) && workflowDefinitionId && hasUnsavedChanges && apiHandlers?.saveSettings && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-3 bg-amber-50 border border-amber-200 rounded-lg space-y-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium text-amber-800", children: "Unsaved changes" }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: cancelChanges, variant: "outline", size: "sm", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: saveSettings, disabled: saving, variant: "primary", size: "sm", children: saving ? "Saving..." : "Save" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-4 text-sm", children: [
          allowPlatformChange && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: "Platform:" }),
            /* @__PURE__ */ jsxRuntime.jsxs(
              Select,
              {
                value: localPlatform,
                onChange: (e) => handleLocalPlatformChange(e.target.value),
                className: "h-8 text-sm w-28",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("option", { value: "n8n", children: "n8n" }),
                  /* @__PURE__ */ jsxRuntime.jsx("option", { value: "sim", children: "Sim Studio" })
                ]
              }
            )
          ] }),
          allowStatusChange && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: "Status:" }),
            /* @__PURE__ */ jsxRuntime.jsxs(
              Select,
              {
                value: localIsActive ? "active" : "inactive",
                onChange: (e) => handleLocalStatusChange(e.target.value === "active"),
                className: "h-8 text-sm w-28",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("option", { value: "active", children: "Active" }),
                  /* @__PURE__ */ jsxRuntime.jsx("option", { value: "inactive", children: "Inactive" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      syncError && /* @__PURE__ */ jsxRuntime.jsxs(Alert, { variant: "error", children: [
        /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "Sync Error:" }),
        " ",
        syncError
      ] }),
      editable && workerId && platform === "n8n" && viewMode !== "edit" && apiHandlers?.pushToN8n && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: pushToN8n, disabled: syncing, variant: "primary", size: "sm", icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.CloudArrowUp, { size: 16 }), children: syncing ? "Pushing..." : "Push to n8n" }),
        workflowId && apiHandlers?.pullFromN8n && /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: pullFromN8n, disabled: pulling, variant: "outline", size: "sm", icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.CloudArrowDown, { size: 16 }), children: pulling ? "Pulling..." : "Pull from n8n" }),
        workflowDefinitionId && apiHandlers?.switchPlatform && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            onClick: () => switchPlatform("sim"),
            disabled: switchingPlatform,
            variant: "outline",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.ArrowsClockwise, { size: 16 }),
            className: "border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400",
            children: switchingPlatform ? "Switching..." : "Switch to Sim Studio"
          }
        )
      ] }),
      platform === "sim" && viewMode !== "edit" && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        editable && workflowDefinitionId && apiHandlers?.pushToSim && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            onClick: pushToSim,
            disabled: pushingToSim,
            variant: "primary",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.CloudArrowUp, { size: 16 }),
            children: pushingToSim ? "Pushing..." : "Push to Sim"
          }
        ),
        apiHandlers?.pullFromSim && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            onClick: pullFromSim,
            disabled: pullingFromSim || !simWorkflowId,
            variant: "outline",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.CloudArrowDown, { size: 16 }),
            title: !simWorkflowId ? "No Sim workflow linked yet. Push to Sim first." : void 0,
            children: pullingFromSim ? "Pulling..." : "Pull from Sim"
          }
        ),
        simWorkflowId && apiHandlers?.exportFromSim && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            onClick: exportFromSim,
            disabled: exporting,
            variant: "outline",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.DownloadSimple, { size: 16 }),
            children: exporting ? "Exporting..." : "Export Backup"
          }
        ),
        simWorkflowId && apiHandlers?.getSimBackups && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            onClick: showBackups,
            variant: "outline",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.ClockCounterClockwise, { size: 16 }),
            children: "History"
          }
        ),
        simStudioUrl && simWorkflowId && /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            onClick: openInSimStudio,
            variant: "outline",
            size: "sm",
            icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.ArrowSquareOut, { size: 16 }),
            children: "Open in Sim"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pt-2", children: viewMode === "edit" ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-3", children: [
        jsonError && /* @__PURE__ */ jsxRuntime.jsx(Alert, { variant: "error", children: jsonError }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Textarea,
          {
            value: editedJson,
            onChange: (e) => {
              setEditedJson(e.target.value);
              setJsonError(null);
            },
            className: "h-[400px] font-mono text-xs"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground", children: 'Edit the workflow JSON above. Changes will be saved to the database. Use "Push to n8n" to sync.' })
      ] }) : viewMode === "json" ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative rounded-sm overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-[var(--black)] border-b border-gray-800", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-medium text-gray-400", children: "JSON" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              onClick: () => copyToClipboard(JSON.stringify(workflow, null, 2), "JSON copied"),
              variant: "outline",
              size: "sm",
              className: "h-7 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500",
              icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.Copy, { size: 12 }),
              children: "Copy"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("pre", { className: "p-4 bg-[var(--black)] text-gray-100 text-xs overflow-auto max-h-[500px] font-mono", children: JSON.stringify(workflow, null, 2) })
      ] }) : viewMode === "flow" ? /* @__PURE__ */ jsxRuntime.jsx(React51.Suspense, { fallback: loadingComponent || DefaultLoading, children: /* @__PURE__ */ jsxRuntime.jsx(WorkflowFlow2, { workflow, height: 380, platform }) }) : viewMode === "backups" ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-sm font-medium", children: diffMode ? "Compare Versions" : "Backup History" }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
            !diffMode && backups.length >= 2 && apiHandlers?.getBackupState && /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                onClick: startDiffMode,
                variant: "outline",
                size: "sm",
                icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.ArrowsLeftRight, { size: 14 }),
                children: "Compare"
              }
            ),
            diffMode && /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                onClick: exitDiffMode,
                variant: "outline",
                size: "sm",
                icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.X, { size: 14 }),
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                onClick: () => {
                  exitDiffMode();
                  setViewMode("summary");
                },
                variant: "outline",
                size: "sm",
                children: "Back to Summary"
              }
            )
          ] })
        ] }),
        diffMode && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-3 bg-muted/50 rounded border border-border", children: [
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs font-medium text-muted-foreground mb-2", children: "From (older)" }),
              /* @__PURE__ */ jsxRuntime.jsxs(
                Select,
                {
                  value: selectedBackupA || "",
                  onChange: (e) => loadBackupForDiff(e.target.value, "A"),
                  disabled: loadingDiff,
                  className: "w-full",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("option", { value: "", children: "Select version..." }),
                    backups.map((b) => /* @__PURE__ */ jsxRuntime.jsxs("option", { value: b.id, disabled: b.id === selectedBackupB, children: [
                      "v",
                      b.version,
                      " - ",
                      b.versionLabel || b.workflowName
                    ] }, b.id))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-3 bg-muted/50 rounded border border-border", children: [
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs font-medium text-muted-foreground mb-2", children: "To (newer)" }),
              /* @__PURE__ */ jsxRuntime.jsxs(
                Select,
                {
                  value: selectedBackupB || "",
                  onChange: (e) => loadBackupForDiff(e.target.value, "B"),
                  disabled: loadingDiff,
                  className: "w-full",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx("option", { value: "", children: "Select version..." }),
                    backups.map((b) => /* @__PURE__ */ jsxRuntime.jsxs("option", { value: b.id, disabled: b.id === selectedBackupA, children: [
                      "v",
                      b.version,
                      " - ",
                      b.versionLabel || b.workflowName
                    ] }, b.id))
                  ]
                }
              )
            ] })
          ] }),
          loadingDiff ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "py-4 text-center text-muted-foreground", children: "Loading versions..." }) : backupStateA && backupStateB ? (() => {
            const diff = computeWorkflowDiff(backupStateA, backupStateB);
            return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-3 bg-muted/30 rounded border border-border", children: [
                /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium mb-2", children: "Changes Summary" }),
                /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: diff.summary })
              ] }),
              diff.blocksAdded.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-3 bg-green-500/10 rounded border border-green-500/30", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-green-600 dark:text-green-400 mb-2", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(react_star.Plus, { size: 14 }),
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs font-medium", children: [
                    "Blocks Added (",
                    diff.blocksAdded.length,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-1", children: diff.blocksAdded.map((id) => {
                  const block = backupStateB?.blocks?.[id];
                  return /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "success", size: "sm", children: block?.name || id }, id);
                }) })
              ] }),
              diff.blocksRemoved.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-3 bg-red-500/10 rounded border border-red-500/30", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-red-600 dark:text-red-400 mb-2", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(react_star.Minus, { size: 14 }),
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs font-medium", children: [
                    "Blocks Removed (",
                    diff.blocksRemoved.length,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-1", children: diff.blocksRemoved.map((id) => {
                  const block = backupStateA?.blocks?.[id];
                  return /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "error", size: "sm", children: block?.name || id }, id);
                }) })
              ] }),
              diff.blocksModified.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-3 bg-amber-500/10 rounded border border-amber-500/30", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-2", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(react_star.Pencil, { size: 14 }),
                  /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs font-medium", children: [
                    "Blocks Modified (",
                    diff.blocksModified.length,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-1", children: diff.blocksModified.map((id) => {
                  const block = backupStateB?.blocks?.[id];
                  return /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "warning", size: "sm", children: block?.name || id }, id);
                }) })
              ] }),
              (diff.edgesAdded > 0 || diff.edgesRemoved > 0) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-3 bg-muted/30 rounded border border-border", children: [
                /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs font-medium text-muted-foreground mb-1", children: "Connection Changes" }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-3 text-sm", children: [
                  diff.edgesAdded > 0 && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-green-600 dark:text-green-400", children: [
                    "+",
                    diff.edgesAdded,
                    " added"
                  ] }),
                  diff.edgesRemoved > 0 && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-red-600 dark:text-red-400", children: [
                    "-",
                    diff.edgesRemoved,
                    " removed"
                  ] })
                ] })
              ] })
            ] });
          })() : selectedBackupA || selectedBackupB ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "py-4 text-center text-muted-foreground text-sm", children: "Select both versions to compare" }) : null
        ] }),
        !diffMode && /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: loadingBackups ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "py-8 text-center text-muted-foreground", children: "Loading backups..." }) : backups.length === 0 ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "py-8 text-center text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.ClockCounterClockwise, { size: 32, className: "mx-auto mb-2 opacity-50" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { children: "No backups yet" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs mt-1", children: 'Click "Export from Sim" to create a backup' })
        ] }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-2", children: backups.map((backup, index) => /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-3 bg-muted/50 rounded border border-border",
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary text-sm font-semibold", children: [
                  "v",
                  backup.version
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium", children: backup.versionLabel || backup.workflowName }),
                  /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    formatDistance(new Date(backup.exportedAt), { addSuffix: true }),
                    backup.isDeployed && /* @__PURE__ */ jsxRuntime.jsx(Badge, { variant: "success", size: "sm", className: "ml-2", children: "Deployed" })
                  ] })
                ] })
              ] }),
              index < backups.length - 1 && apiHandlers?.getBackupState && /* @__PURE__ */ jsxRuntime.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => {
                    startDiffMode();
                    loadBackupForDiff(backups[index + 1].id, "A");
                    loadBackupForDiff(backup.id, "B");
                  },
                  icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.ArrowsLeftRight, { size: 14 }),
                  children: "Diff"
                }
              )
            ]
          },
          backup.id
        )) }) })
      ] }) : platform === "n8n" ? /* @__PURE__ */ jsxRuntime.jsx(N8nWorkflowSummary, { workflow, showFlow: false }) : /* @__PURE__ */ jsxRuntime.jsx(SimWorkflowSummary, { workflow }) })
    ] })
  ] });
}
function parseMermaidFlowchart(mermaid) {
  const nodes = /* @__PURE__ */ new Map();
  const edges = [];
  const lines = mermaid.split(/\\n|\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith("flowchart") && !l.startsWith("graph"));
  function parseNodeDef(str) {
    const decisionMatch = str.match(/^([A-Za-z0-9_]+)\{(.+?)\}$/);
    if (decisionMatch) return { id: decisionMatch[1], label: decisionMatch[2], type: "decision" };
    const bracketMatch = str.match(/^([A-Za-z0-9_]+)\[?\(?\[?(.+?)\]?\)?\]?$/);
    if (bracketMatch) {
      const label = bracketMatch[2];
      const isTerminal = /^(start|end|begin|finish|done)$/i.test(label);
      return { id: bracketMatch[1], label, type: isTerminal ? "terminal" : "action" };
    }
    return { id: str.trim() };
  }
  for (const line of lines) {
    const edgeMatch = line.match(/^(.+?)\s*-->(?:\|(.+?)\|)?\s*(.+)$/);
    if (!edgeMatch) continue;
    const leftRaw = edgeMatch[1].trim();
    const edgeLabel = edgeMatch[2]?.trim();
    const rightRaw = edgeMatch[3].trim();
    const left = parseNodeDef(leftRaw);
    const right = parseNodeDef(rightRaw);
    if (left.label && !nodes.has(left.id)) {
      nodes.set(left.id, { id: left.id, label: left.label, type: left.type || "action" });
    }
    if (right.label && !nodes.has(right.id)) {
      nodes.set(right.id, { id: right.id, label: right.label, type: right.type || "action" });
    }
    if (!nodes.has(left.id)) {
      nodes.set(left.id, { id: left.id, label: left.id, type: "action" });
    }
    if (!nodes.has(right.id)) {
      nodes.set(right.id, { id: right.id, label: right.id, type: "action" });
    }
    edges.push({ from: left.id, to: right.id, label: edgeLabel });
  }
  return { nodes: Array.from(nodes.values()), edges };
}
function findMergePoint(branchStarts, outgoing) {
  const reachable = /* @__PURE__ */ new Map();
  for (const start of branchStarts) {
    const q2 = [start];
    const seen2 = /* @__PURE__ */ new Set();
    while (q2.length > 0) {
      const id = q2.shift();
      if (seen2.has(id)) continue;
      seen2.add(id);
      if (!reachable.has(id)) reachable.set(id, /* @__PURE__ */ new Set());
      reachable.get(id).add(start);
      const outs = outgoing.get(id) || [];
      for (const e of outs) q2.push(e.to);
    }
  }
  const allBranches = new Set(branchStarts);
  const q = [branchStarts[0]];
  const seen = /* @__PURE__ */ new Set();
  while (q.length > 0) {
    const id = q.shift();
    if (seen.has(id)) continue;
    seen.add(id);
    if (!allBranches.has(id) && reachable.get(id)?.size === branchStarts.length) {
      return id;
    }
    const outs = outgoing.get(id) || [];
    for (const e of outs) q.push(e.to);
  }
  return null;
}
function buildLayout(startId, outgoing, incoming, nodeMap, visited) {
  const items = [];
  let currentId = startId;
  while (currentId) {
    if (visited.has(currentId)) break;
    const node = nodeMap.get(currentId);
    if (!node) break;
    const outs = outgoing.get(currentId) || [];
    if (outs.length <= 1) {
      visited.add(currentId);
      items.push({ type: "node", nodeId: currentId });
      if (outs.length === 1) {
        const nextId = outs[0].to;
        if (visited.has(nextId)) break;
        items.push({ type: "arrow", label: outs[0].label });
        currentId = nextId;
      } else {
        currentId = null;
      }
    } else {
      visited.add(currentId);
      items.push({ type: "node", nodeId: currentId });
      const branchStarts = outs.map((e) => e.to);
      const mergeId = findMergePoint(branchStarts, outgoing);
      const branches = [];
      for (const edge of outs) {
        if (visited.has(edge.to) && edge.to !== mergeId) {
          branches.push({ label: edge.label, items: [] });
          continue;
        }
        const branchItems = buildLayout(edge.to, outgoing, incoming, nodeMap, visited);
        branches.push({ label: edge.label, items: branchItems });
      }
      items.push({ type: "branch", decision: currentId, branches, mergeId });
      if (mergeId && !visited.has(mergeId)) {
        items.push({ type: "arrow" });
        currentId = mergeId;
      } else {
        currentId = null;
      }
    }
  }
  return items;
}
function FlowArrow({ label }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center", children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[10px] font-medium text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded mb-0.5", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-px h-4 bg-gray-300" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-gray-300" })
  ] });
}
function FlowNodeBox({ node }) {
  if (node.type === "decision") {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "bg-amber-50 border-2 border-amber-300 rounded-lg px-4 py-2.5 text-xs font-medium text-amber-800 text-center my-1",
        style: { minWidth: "120px" },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-amber-400 mr-1", children: "\u25C7" }),
          node.label
        ]
      }
    );
  }
  if (node.type === "terminal") {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-gray-100 border border-gray-200 rounded-full px-5 py-1.5 text-xs font-medium text-gray-500 text-center my-1", children: node.label });
  }
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white border border-gray-200 rounded-sm px-4 py-2 text-xs font-medium text-[var(--black)] text-center shadow-sm my-1 max-w-[220px]", children: node.label });
}
function RenderLayoutItems({ items, nodeMap }) {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: items.map((item, i) => {
    if (item.type === "node") {
      const node = nodeMap.get(item.nodeId);
      if (!node) return null;
      return /* @__PURE__ */ jsxRuntime.jsx(FlowNodeBox, { node }, `node-${item.nodeId}`);
    }
    if (item.type === "arrow") {
      return /* @__PURE__ */ jsxRuntime.jsx(FlowArrow, { label: item.label }, `arrow-${i}`);
    }
    if (item.type === "branch") {
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center w-full", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-px h-3 bg-gray-300" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-start justify-center gap-6 w-full", children: item.branches.map((branch, j) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center min-w-[100px]", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center", children: [
            branch.label && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[10px] font-medium text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded mb-1", children: branch.label }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-gray-300" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsxRuntime.jsx(RenderLayoutItems, { items: branch.items, nodeMap }) })
        ] }, j)) }),
        item.mergeId && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-px h-3 bg-gray-300" })
      ] }, `branch-${item.decision}-${i}`);
    }
    return null;
  }) });
}
function FlowchartDiagram({ mermaid, className }) {
  const { nodes, edges } = parseMermaidFlowchart(mermaid);
  if (nodes.length === 0) {
    return /* @__PURE__ */ jsxRuntime.jsx("pre", { className: "text-xs bg-white border border-gray-100 rounded-sm p-3 overflow-x-auto whitespace-pre-wrap", children: mermaid });
  }
  const outgoing = /* @__PURE__ */ new Map();
  const incoming = /* @__PURE__ */ new Map();
  for (const edge of edges) {
    if (!outgoing.has(edge.from)) outgoing.set(edge.from, []);
    outgoing.get(edge.from).push(edge);
    if (!incoming.has(edge.to)) incoming.set(edge.to, []);
    incoming.get(edge.to).push(edge);
  }
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const roots = nodes.filter((n) => !incoming.has(n.id) || incoming.get(n.id).length === 0);
  const startId = roots.length > 0 ? roots[0].id : nodes[0].id;
  const visited = /* @__PURE__ */ new Set();
  const layout = buildLayout(startId, outgoing, incoming, nodeMap, visited);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col items-center py-2", children: /* @__PURE__ */ jsxRuntime.jsx(RenderLayoutItems, { items: layout, nodeMap }) }) });
}
var frequencyLabels = {
  multiple_daily: "occurrence",
  daily: "day",
  weekly: "week",
  monthly: "month",
  quarterly: "quarter",
  yearly: "year"
};
function SectionHeader({
  icon,
  title,
  count: count2,
  expanded,
  onToggle,
  iconColor = "text-[var(--cyan)]"
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      onClick: onToggle,
      className: "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hover:text-[var(--black)] transition-colors w-full",
      children: [
        expanded ? /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretDown, { size: 12 }) : /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretRight, { size: 12 }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: iconColor, children: icon }),
        title,
        count2 !== void 0 && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-muted-foreground font-normal", children: [
          "(",
          count2,
          ")"
        ] })
      ]
    }
  );
}
function AnalysisContextRenderer({ content }) {
  const sections = content.split(/^## /gm).filter(Boolean);
  const getIcon = (title) => {
    if (title.includes("Request")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.Target, { size: 14, className: "text-[var(--cyan)]" });
    if (title.includes("Video")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.VideoCamera, { size: 14, className: "text-[var(--cyan)]" });
    if (title.includes("Document")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.FileText, { size: 14, className: "text-[var(--cyan)]" });
    if (title.includes("Rules")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.Lightbulb, { size: 14, className: "text-amber-500" });
    if (title.includes("Context")) return /* @__PURE__ */ jsxRuntime.jsx(react_star.TextT, { size: 14, className: "text-[var(--cyan)]" });
    return null;
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-6", children: sections.map((section, index) => {
    const lines = section.split("\n");
    const title = lines[0]?.trim();
    const body = lines.slice(1).join("\n").trim();
    if (!body) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h4", { className: "text-sm font-medium text-[var(--black)] flex items-center gap-2 mb-3", children: [
        getIcon(title),
        title
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-muted-foreground pl-5 space-y-2 whitespace-pre-line", children: body })
    ] }, index);
  }) });
}
function WorkerSpec({ documentation, className }) {
  const [expandedSections, setExpandedSections] = React51.useState(
    /* @__PURE__ */ new Set(["goal", "scope", "steps", "diagram", "impact", "requirements", "edge_cases"])
  );
  const toggleSection = (section) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };
  if (!documentation) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3 p-6 rounded-sm border border-dashed border-gray-300 bg-gray-50/50", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-10 h-10 rounded-sm bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(react_star.Robot, { size: 20, className: "text-gray-400" }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "font-semibold text-[var(--black)]", children: "Worker Spec Pending" }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground", children: "The final specification will be generated automatically after the documentation is approved." })
      ] })
    ] }) });
  }
  const freqLabel = documentation.expected_impact?.frequency ? frequencyLabels[documentation.expected_impact.frequency] || documentation.expected_impact.frequency : "occurrence";
  const hasAnalysis = documentation.analysis_context || documentation.analysis_sources && documentation.analysis_sources.length > 0;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-5", children: [
    hasAnalysis && /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs("button", { className: "flex items-center gap-2 text-sm font-medium text-[var(--cyan)] hover:text-[var(--cyan)]/80 transition-colors", children: [
        /* @__PURE__ */ jsxRuntime.jsx(react_star.MagnifyingGlass, { size: 16 }),
        "What was analyzed",
        documentation.analysis_summary && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs text-muted-foreground font-normal", children: [
          "(",
          documentation.analysis_summary.total_sources,
          " source",
          documentation.analysis_summary.total_sources !== 1 ? "s" : "",
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(react_star.CaretRight, { size: 12 })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(DialogContent, { className: "max-w-xl max-h-[80vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(DialogTitle, { children: "What was analyzed" }),
          documentation.analysis_summary && /* @__PURE__ */ jsxRuntime.jsxs(DialogDescription, { className: "flex items-center gap-4 text-xs", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
              documentation.analysis_summary.total_sources,
              " source",
              documentation.analysis_summary.total_sources !== 1 ? "s" : ""
            ] }),
            documentation.analysis_summary.video_count > 0 && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx(react_star.FilmStrip, { size: 12 }),
              documentation.analysis_summary.video_count,
              " video",
              documentation.analysis_summary.video_count !== 1 ? "s" : ""
            ] }),
            documentation.analysis_summary.document_count > 0 && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntime.jsx(react_star.FileText, { size: 12 }),
              documentation.analysis_summary.document_count,
              " doc",
              documentation.analysis_summary.document_count !== 1 ? "s" : ""
            ] })
          ] })
        ] }),
        documentation.analysis_sources && documentation.analysis_sources.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Sources" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-1.5", children: documentation.analysis_sources.map((source, i) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-shrink-0 text-muted-foreground", children: [
              source.type === "video" && /* @__PURE__ */ jsxRuntime.jsx(react_star.FilmStrip, { size: 14 }),
              (source.type === "document" || source.type === "pdf") && /* @__PURE__ */ jsxRuntime.jsx(react_star.FileText, { size: 14 }),
              source.type === "spreadsheet" && /* @__PURE__ */ jsxRuntime.jsx(react_star.FileText, { size: 14 }),
              source.type === "image" && /* @__PURE__ */ jsxRuntime.jsx(react_star.ImageSquare, { size: 14 }),
              source.type === "description" && /* @__PURE__ */ jsxRuntime.jsx(react_star.TextT, { size: 14 })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "truncate text-[var(--black)]", children: source.name }),
            source.size > 0 && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-muted-foreground flex-shrink-0", children: source.size > 1024 * 1024 ? `${(source.size / 1024 / 1024).toFixed(1)}MB` : `${Math.round(source.size / 1024)}KB` })
          ] }, i)) })
        ] }),
        documentation.analysis_context && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "border-t border-gray-100 pt-4 space-y-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3", children: "Analysis Details" }),
          /* @__PURE__ */ jsxRuntime.jsx(AnalysisContextRenderer, { content: documentation.analysis_context })
        ] })
      ] })
    ] }) }),
    documentation.goal && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.Target, { size: 12, weight: "fill" }),
          title: "Goal",
          expanded: expandedSections.has("goal"),
          onToggle: () => toggleSection("goal")
        }
      ),
      expandedSections.has("goal") && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed pl-5 mt-2", children: documentation.goal })
    ] }),
    documentation.scope && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.Crosshair, { size: 12, weight: "fill" }),
          title: "Scope",
          expanded: expandedSections.has("scope"),
          onToggle: () => toggleSection("scope")
        }
      ),
      expandedSections.has("scope") && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed pl-5 mt-2", children: documentation.scope })
    ] }),
    documentation.steps && documentation.steps.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.ListNumbers, { size: 12, weight: "fill" }),
          title: "Steps",
          count: documentation.steps.length,
          expanded: expandedSections.has("steps"),
          onToggle: () => toggleSection("steps")
        }
      ),
      expandedSections.has("steps") && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-3 pl-5 mt-2", children: documentation.steps.map((step, i) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-6 h-6 rounded-sm bg-[var(--cyan)]/10 flex items-center justify-center text-xs font-bold text-[var(--cyan)] shrink-0 mt-0.5", children: step.step || i + 1 }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-[var(--black)]", children: step.title }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: step.description }),
          step.tools_used && step.tools_used.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: step.tools_used.map((tool, j) => /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-gray-100 text-[10px] font-medium text-gray-600", children: [
            /* @__PURE__ */ jsxRuntime.jsx(react_star.Wrench, { size: 10 }),
            tool
          ] }, j)) })
        ] })
      ] }, i)) })
    ] }),
    documentation.diagram && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.TreeStructure, { size: 12, weight: "fill" }),
          title: "Workflow Diagram",
          expanded: expandedSections.has("diagram"),
          onToggle: () => toggleSection("diagram"),
          iconColor: "text-purple-500"
        }
      ),
      expandedSections.has("diagram") && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pl-5 mt-2", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white border border-gray-100 rounded-sm p-4 overflow-x-auto", children: /* @__PURE__ */ jsxRuntime.jsx(FlowchartDiagram, { mermaid: documentation.diagram }) }) })
    ] }),
    documentation.expected_impact && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.Lightning, { size: 12, weight: "fill" }),
          title: "Expected Impact",
          expanded: expandedSections.has("impact"),
          onToggle: () => toggleSection("impact"),
          iconColor: "text-purple-500"
        }
      ),
      expandedSections.has("impact") && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pl-5 mt-2", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-emerald-50/50 border border-emerald-100 rounded-sm p-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-3 gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-sm p-3 border border-emerald-100 text-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx(react_star.Clock, { size: 18, className: "text-emerald-600 mx-auto mb-1" }),
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-lg font-bold text-[var(--black)]", children: [
              documentation.expected_impact.time_saved_per_occurrence_minutes,
              " min"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
              "saved per ",
              freqLabel
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-sm p-3 border border-emerald-100 text-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx(react_star.TrendUp, { size: 18, className: "text-emerald-600 mx-auto mb-1" }),
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-lg font-bold text-[var(--black)]", children: [
              documentation.expected_impact.yearly_hours_saved,
              "h"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[10px] text-muted-foreground", children: "saved per year" })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "bg-white rounded-sm p-3 border border-emerald-100 text-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx(react_star.CurrencyEur, { size: 18, className: "text-emerald-600 mx-auto mb-1" }),
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-lg font-bold text-[var(--black)]", children: [
              "\u20AC",
              documentation.expected_impact.yearly_cost_savings_euros.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[10px] text-muted-foreground", children: "estimated yearly savings" })
          ] })
        ] }),
        documentation.expected_impact.qualitative_benefits && documentation.expected_impact.qualitative_benefits.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-1", children: documentation.expected_impact.qualitative_benefits.map((benefit, i) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-2 text-sm text-emerald-700", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react_star.Sparkle, { size: 14, className: "text-emerald-500 shrink-0 mt-0.5", weight: "fill" }),
          benefit
        ] }, i)) })
      ] }) })
    ] }),
    (documentation.technical_requirements && documentation.technical_requirements.length > 0 || documentation.integration_points && documentation.integration_points.length > 0) && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.Plugs, { size: 12, weight: "fill" }),
          title: "Requirements & Integrations",
          expanded: expandedSections.has("requirements"),
          onToggle: () => toggleSection("requirements")
        }
      ),
      expandedSections.has("requirements") && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid md:grid-cols-2 gap-4 pl-5 mt-2", children: [
        documentation.technical_requirements && documentation.technical_requirements.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2", children: "Technical Requirements" }),
          /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "space-y-1.5", children: documentation.technical_requirements.map((req, i) => /* @__PURE__ */ jsxRuntime.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntime.jsx(react_star.Wrench, { size: 12, className: "text-gray-400 shrink-0 mt-1" }),
            req
          ] }, i)) })
        ] }),
        documentation.integration_points && documentation.integration_points.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2", children: "Integration Points" }),
          /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "space-y-1.5", children: documentation.integration_points.map((point, i) => /* @__PURE__ */ jsxRuntime.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntime.jsx(react_star.Plugs, { size: 12, className: "text-gray-400 shrink-0 mt-1" }),
            point
          ] }, i)) })
        ] })
      ] })
    ] }),
    documentation.edge_cases_handled && documentation.edge_cases_handled.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        SectionHeader,
        {
          icon: /* @__PURE__ */ jsxRuntime.jsx(react_star.ShieldCheck, { size: 12, weight: "fill" }),
          title: "Edge Cases Handled",
          count: documentation.edge_cases_handled.length,
          expanded: expandedSections.has("edge_cases"),
          onToggle: () => toggleSection("edge_cases"),
          iconColor: "text-amber-500"
        }
      ),
      expandedSections.has("edge_cases") && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-2 pl-5 mt-2", children: documentation.edge_cases_handled.map((ec, i) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-sm p-3 bg-gray-50 rounded-sm border border-gray-100", children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "font-medium text-[var(--black)]", children: ec.scenario }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-muted-foreground mt-1", children: [
          "\u2192 ",
          ec.handling
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Badge, { variant: "outline", size: "sm", children: [
        "v",
        documentation.version
      ] }),
      documentation.model_used && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "\u2022" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: documentation.model_used })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: "\u2022" }),
      /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
        "Updated ",
        new Date(documentation.updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      ] })
    ] })
  ] }) });
}
function ExpandableSection({
  sectionKey,
  label,
  icon,
  count: count2,
  expanded,
  onToggle,
  children,
  className,
  contentClassName,
  show = true
}) {
  if (!show) return null;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        onClick: () => onToggle(sectionKey),
        className: "flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors w-full text-left",
        type: "button",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "svg",
            {
              width: "12",
              height: "12",
              viewBox: "0 0 12 12",
              fill: "none",
              className: cn(
                "shrink-0 transition-transform",
                expanded ? "rotate-0" : "-rotate-90"
              ),
              children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2.5 4.5L6 8L9.5 4.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            }
          ),
          icon,
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: label }),
          count2 !== void 0 && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-muted-foreground/60", children: [
            "(",
            count2,
            ")"
          ] })
        ]
      }
    ),
    expanded && /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("mt-2 pl-4", contentClassName), children })
  ] });
}
function useExpandedSections(initialExpanded = []) {
  const [expanded, setExpanded] = React51__namespace.useState(
    () => new Set(initialExpanded)
  );
  const toggle = React51__namespace.useCallback((key) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }, []);
  const isExpanded = React51__namespace.useCallback(
    (key) => expanded.has(key),
    [expanded]
  );
  return { expanded, toggle, isExpanded };
}
ExpandableSection.displayName = "ExpandableSection";
function useServiceWorker() {
  React51.useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then((registration) => {
        console.log("Service Worker registered:", registration.scope);
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1e3);
      }).catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
    }
  }, []);
}
function formatCentsToEuros(cents) {
  return `\u20AC${(cents / 100).toLocaleString()}`;
}
function formatEuros(euros, decimals) {
  if (decimals !== void 0) {
    return `\u20AC${euros.toFixed(decimals)}`;
  }
  return `\u20AC${euros.toLocaleString()}`;
}
function formatDuration(ms) {
  return `${(ms / 1e3).toFixed(1)}s`;
}
function formatRelativeTime(date) {
  if (!date) return "\u2014";
  const d = typeof date === "string" ? new Date(date) : date;
  const hours = dateFns.differenceInHours(/* @__PURE__ */ new Date(), d);
  if (hours < 1) {
    const mins = dateFns.differenceInMinutes(/* @__PURE__ */ new Date(), d);
    return `${mins}m`;
  }
  if (hours < 48) return `${hours}h`;
  return dateFns.formatDistanceToNow(d, { addSuffix: false });
}

// src/index.ts
__reExport(index_exports, icons_exports);

exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.ActivityTimeline = ActivityTimeline;
exports.Alert = Alert;
exports.AlertDialog = AlertDialog;
exports.AlertDialogAction = AlertDialogAction;
exports.AlertDialogCancel = AlertDialogCancel;
exports.AlertDialogContent = AlertDialogContent;
exports.AlertDialogDescription = AlertDialogDescription;
exports.AlertDialogFooter = AlertDialogFooter;
exports.AlertDialogHeader = AlertDialogHeader;
exports.AlertDialogOverlay = AlertDialogOverlay;
exports.AlertDialogPortal = AlertDialogPortal;
exports.AlertDialogTitle = AlertDialogTitle;
exports.AlertDialogTrigger = AlertDialogTrigger;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.BreadcrumbLink = BreadcrumbLink;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.CodeBlock = CodeBlock;
exports.ConfirmDialog = ConfirmDialog;
exports.DateRangePicker = DateRangePicker;
exports.DateRangeSelect = DateRangeSelect;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.Divider = Divider;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.EmptyState = EmptyState;
exports.ErrorState = ErrorState;
exports.ExpandableSection = ExpandableSection;
exports.FilePreview = FilePreview;
exports.FlowchartDiagram = FlowchartDiagram;
exports.FormField = FormField;
exports.IconBox = IconBox;
exports.ImpactMetricsForm = ImpactMetricsForm;
exports.Input = Input;
exports.Label = Label2;
exports.LabeledSlider = LabeledSlider;
exports.LabeledSwitch = LabeledSwitch;
exports.Logo = Logo;
exports.Metric = Metric;
exports.MetricCard = MetricCard;
exports.MetricLabel = MetricLabel;
exports.MetricSubtext = MetricSubtext;
exports.MetricValue = MetricValue;
exports.NavigationMenu = NavigationMenu;
exports.NavigationMenuContent = NavigationMenuContent;
exports.NavigationMenuIndicator = NavigationMenuIndicator;
exports.NavigationMenuItem = NavigationMenuItem;
exports.NavigationMenuLink = NavigationMenuLink;
exports.NavigationMenuList = NavigationMenuList;
exports.NavigationMenuTrigger = NavigationMenuTrigger;
exports.NavigationMenuViewport = NavigationMenuViewport;
exports.Pagination = Pagination;
exports.Popover = Popover;
exports.PopoverAnchor = PopoverAnchor;
exports.PopoverArrow = PopoverArrow;
exports.PopoverClose = PopoverClose;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.Progress = Progress;
exports.RadioGroup = RadioGroup;
exports.RadioGroupCard = RadioGroupCard;
exports.RadioGroupItem = RadioGroupItem;
exports.RadioGroupOption = RadioGroupOption;
exports.ScenariosManager = ScenariosManager;
exports.Select = Select;
exports.Separator = Separator2;
exports.SettingsNav = SettingsNav;
exports.SettingsNavLink = SettingsNavLink;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetOverlay = SheetOverlay;
exports.SheetPortal = SheetPortal;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Sidebar = Sidebar;
exports.SimplePagination = SimplePagination;
exports.SimpleTooltip = SimpleTooltip;
exports.Skeleton = Skeleton;
exports.SkeletonCard = SkeletonCard;
exports.SkeletonText = SkeletonText;
exports.Slider = Slider;
exports.Stat = Stat;
exports.StepDots = StepDots;
exports.StepProgress = StepProgress;
exports.SupportChat = SupportChat;
exports.Switch = Switch;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsListUnderline = TabsListUnderline;
exports.TabsTrigger = TabsTrigger;
exports.TabsTriggerUnderline = TabsTriggerUnderline;
exports.Tag = Tag;
exports.Textarea = Textarea;
exports.Toast = Toast;
exports.ToastAction = ToastAction;
exports.ToastClose = ToastClose;
exports.ToastDescription = ToastDescription;
exports.ToastIcon = ToastIcon;
exports.ToastProvider = ToastProvider;
exports.ToastTitle = ToastTitle;
exports.ToastViewport = ToastViewport;
exports.Toaster = Toaster;
exports.Tooltip = Tooltip;
exports.TooltipArrow = TooltipArrow;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.UsageBar = UsageBar;
exports.UsageChart = UsageChart;
exports.WorkerSpec = WorkerSpec;
exports.WorkflowFlow = WorkflowFlow;
exports.WorkflowViewer = WorkflowViewer;
exports.alertVariants = alertVariants;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
exports.formatCentsToEuros = formatCentsToEuros;
exports.formatDuration = formatDuration;
exports.formatEuros = formatEuros;
exports.formatRelativeTime = formatRelativeTime;
exports.getDateRangeFromPreset = getDateRangeFromPreset;
exports.iconBoxVariants = iconBoxVariants;
exports.metricCardVariants = metricCardVariants;
exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle;
exports.progressVariants = progressVariants;
exports.statVariants = statVariants;
exports.tagVariants = tagVariants;
exports.toast = toast;
exports.usageBarVariants = usageBarVariants;
exports.useExpandedSections = useExpandedSections;
exports.useServiceWorker = useServiceWorker;
exports.useToast = useToast;
exports.valueVariants = valueVariants;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map