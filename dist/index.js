'use strict';

var React21 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var SheetPrimitive = require('@radix-ui/react-dialog');
var react = require('@phosphor-icons/react');
require('react-dom');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var NavigationMenuPrimitive = require('@radix-ui/react-navigation-menu');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var ToastPrimitives = require('@radix-ui/react-toast');

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

var React21__namespace = /*#__PURE__*/_interopNamespace(React21);
var SheetPrimitive__namespace = /*#__PURE__*/_interopNamespace(SheetPrimitive);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var NavigationMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(NavigationMenuPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var ToastPrimitives__namespace = /*#__PURE__*/_interopNamespace(ToastPrimitives);

// src/components/button.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[var(--black)] text-white border-2 border-[var(--black)] hover:bg-gray-800 hover:border-gray-800 active:scale-95",
        primary: "bg-[var(--cyan)] text-[var(--black)] border-2 border-[var(--cyan)] hover:bg-[var(--cyan-dark)] hover:border-[var(--cyan-dark)] active:scale-95",
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
var Button = React21__namespace.forwardRef(
  ({ className, variant, size, asChild = false, loading, loadingText, children, disabled, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        disabled: isDisabled,
        ...props,
        children: [
          loading && /* @__PURE__ */ jsxRuntime.jsxs(
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
          ),
          loading ? loadingText || children : children
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
var SheetOverlay = React21__namespace.forwardRef(({ className, ...props }, ref) => (
  // @ts-ignore - Radix Dialog Overlay accepts className at runtime
  /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Overlay,
    {
      className: cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      ),
      ...props,
      ref
    }
  )
));
SheetOverlay.displayName = SheetPrimitive__namespace.Overlay.displayName;
var sheetVariants = classVarianceAuthority.cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
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
var SheetContent = React21__namespace.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    SheetPrimitive__namespace.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(SheetPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
          /* @__PURE__ */ jsxRuntime.jsx(react.X, { className: "h-4 w-4" }),
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
var SheetTitle = React21__namespace.forwardRef(({ className, ...props }, ref) => (
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
var SheetDescription = React21__namespace.forwardRef(({ className, ...props }, ref) => (
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
var Badge = React21__namespace.forwardRef(
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
var Card = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-sm border border-gray-200 bg-white shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardDescription = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-gray-500", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var Progress = React21__namespace.forwardRef(
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
var IconBox = React21__namespace.forwardRef(
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
var Tag = React21__namespace.forwardRef(
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
var Stat = React21__namespace.forwardRef(
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
var Input = React21__namespace.forwardRef(
  ({ className, type, error, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
  const Slot2 = reactSlot.createSlot(`Primitive.${node}`);
  const Node = React21__namespace.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label = React21__namespace.forwardRef((props, forwardedRef) => {
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
var Label2 = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Root2,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label2.displayName = Root2.displayName;
var Textarea = React21__namespace.forwardRef(
  ({ className, error, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var Checkbox = React21__namespace.forwardRef(
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
            "w-4 h-4 border-2 border-input rounded-sm flex items-center justify-center transition-colors",
            "peer-checked:bg-primary peer-checked:border-primary",
            "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          ),
          children: checked && /* @__PURE__ */ jsxRuntime.jsx(react.Check, { className: "h-3 w-3 text-white", weight: "bold" })
        }
      )
    ] });
  }
);
Checkbox.displayName = "Checkbox";
var Accordion = AccordionPrimitive__namespace.Root;
var AccordionItem = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Item,
  {
    ref,
    className: cn("border-b border-gray-200", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React21__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
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
      /* @__PURE__ */ jsxRuntime.jsx(react.CaretDown, { className: "h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive__namespace.Trigger.displayName;
var AccordionContent = React21__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
  const Node = React21__namespace.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME2 = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator = React21__namespace.forwardRef((props, forwardedRef) => {
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
var Root4 = Separator;
var Separator2 = React21__namespace.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    Root4,
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
Separator2.displayName = Root4.displayName;
var NavigationMenu = React21__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
var NavigationMenuList = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var NavigationMenuTrigger = React21__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  NavigationMenuPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsxRuntime.jsx(
        react.CaretDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive__namespace.Trigger.displayName;
var NavigationMenuContent = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var NavigationMenuViewport = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsxRuntime.jsx(
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
var NavigationMenuIndicator = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var Avatar = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var AvatarImage = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive__namespace.Image.displayName;
var AvatarFallback = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DropdownMenuSubTrigger = React21__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
      /* @__PURE__ */ jsxRuntime.jsx(react.CaretRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-sm border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React21__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-sm border bg-popover p-1.5 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React21__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DropdownMenuCheckboxItem = React21__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(react.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React21__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(react.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React21__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DropdownMenuSeparator = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var SidebarNavItem = React21__namespace.forwardRef(
  ({ item, isActive, className, LinkComponent, ...props }, ref) => {
    const Icon = item.icon;
    const baseClassName = cn(
      "flex items-center gap-3 rounded-sm px-3 py-2 text-sm transition-colors",
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
            /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: "h-4 w-4", weight: isActive ? "fill" : "regular" }),
            item.name
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
          /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: "h-4 w-4", weight: isActive ? "fill" : "regular" }),
          item.name
        ]
      }
    );
  }
);
SidebarNavItem.displayName = "SidebarNavItem";
var Sidebar = React21__namespace.forwardRef(
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
          "flex h-full w-60 flex-col border-r bg-background/50",
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
          mainNav.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "flex-1 px-3 space-y-1", children: mainNav.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
            SidebarNavItem,
            {
              item,
              isActive: isActive(item.href),
              LinkComponent
            },
            item.name
          )) }),
          children,
          (bottomNav.length > 0 || helpLink || assistantButton) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "px-3 pb-3 space-y-1 border-t pt-3", children: [
            bottomNav.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
              SidebarNavItem,
              {
                item,
                isActive: isActive(item.href),
                LinkComponent
              },
              item.name
            )),
            assistantButton && /* @__PURE__ */ jsxRuntime.jsxs(
              "button",
              {
                onClick: assistantButton.onClick,
                className: "flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm bg-[var(--cyan)]/10 text-[var(--black)] hover:bg-[var(--cyan)]/20 transition-colors font-medium",
                children: [
                  assistantButton.icon && /* @__PURE__ */ jsxRuntime.jsx(assistantButton.icon, { className: "h-4 w-4 text-[var(--cyan)]" }),
                  assistantButton.label
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
var Alert = React21__namespace.forwardRef(
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
var EmptyState = React21__namespace.forwardRef(
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
var CodeBlock = React21__namespace.forwardRef(
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
var FormField = React21__namespace.forwardRef(
  ({ label, error, helperText, hint, required, id, className, children, ...props }, ref) => {
    const fieldId = id || React21__namespace.useId();
    const errorId = `${fieldId}-error`;
    const helperId = `${fieldId}-helper`;
    const enhancedChildren = React21__namespace.Children.map(children, (child) => {
      if (React21__namespace.isValidElement(child)) {
        const childProps = child.props;
        return React21__namespace.cloneElement(child, {
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
var Table = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntime.jsx(
  "table",
  {
    ref,
    className: cn("w-full border-collapse", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("thead", { ref, className: cn("", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("tbody", { ref, className: cn("", className), ...props }));
TableBody.displayName = "TableBody";
var TableFooter = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tr",
  {
    ref,
    className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var TableCell = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
var Divider = React21__namespace.forwardRef(
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
var ToastProvider = ToastPrimitives__namespace.Provider;
var ToastViewport = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-sm border p-4 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border-gray-200 bg-white text-[var(--black)]",
        success: "border-emerald-200 bg-emerald-50 text-emerald-900",
        error: "border-red-200 bg-red-50 text-red-900",
        warning: "border-amber-200 bg-amber-50 text-amber-900"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React21__namespace.forwardRef(({ className, variant, ...props }, ref) => {
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
var ToastAction = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-sm border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives__namespace.Action.displayName;
var ToastClose = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-sm p-1 text-gray-500 opacity-0 transition-opacity hover:text-gray-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(react.X, { size: 16 })
  }
));
ToastClose.displayName = ToastPrimitives__namespace.Close.displayName;
var ToastTitle = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives__namespace.Title.displayName;
var ToastDescription = React21__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives__namespace.Description.displayName;
var ToastIcon = ({ variant }) => {
  switch (variant) {
    case "success":
      return /* @__PURE__ */ jsxRuntime.jsx(react.CheckCircle, { size: 20, weight: "fill", className: "text-emerald-600" });
    case "error":
      return /* @__PURE__ */ jsxRuntime.jsx(react.WarningCircle, { size: 20, weight: "fill", className: "text-red-600" });
    case "warning":
      return /* @__PURE__ */ jsxRuntime.jsx(react.WarningCircle, { size: 20, weight: "fill", className: "text-amber-600" });
    default:
      return /* @__PURE__ */ jsxRuntime.jsx(react.Info, { size: 20, weight: "fill", className: "text-gray-600" });
  }
};
var TOAST_LIMIT = 5;
var TOAST_REMOVE_DELAY = 5e3;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
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
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
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
  const [state, setState] = React21__namespace.useState(memoryState);
  React21__namespace.useEffect(() => {
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

Object.defineProperty(exports, "AddressBook", {
  enumerable: true,
  get: function () { return react.AddressBook; }
});
Object.defineProperty(exports, "ArrowLeft", {
  enumerable: true,
  get: function () { return react.ArrowLeft; }
});
Object.defineProperty(exports, "ArrowRight", {
  enumerable: true,
  get: function () { return react.ArrowRight; }
});
Object.defineProperty(exports, "ArrowSquareOut", {
  enumerable: true,
  get: function () { return react.ArrowSquareOut; }
});
Object.defineProperty(exports, "ArrowUpRight", {
  enumerable: true,
  get: function () { return react.ArrowUpRight; }
});
Object.defineProperty(exports, "Brain", {
  enumerable: true,
  get: function () { return react.Brain; }
});
Object.defineProperty(exports, "Briefcase", {
  enumerable: true,
  get: function () { return react.Briefcase; }
});
Object.defineProperty(exports, "Buildings", {
  enumerable: true,
  get: function () { return react.Buildings; }
});
Object.defineProperty(exports, "Calendar", {
  enumerable: true,
  get: function () { return react.Calendar; }
});
Object.defineProperty(exports, "CaretDown", {
  enumerable: true,
  get: function () { return react.CaretDown; }
});
Object.defineProperty(exports, "CaretRight", {
  enumerable: true,
  get: function () { return react.CaretRight; }
});
Object.defineProperty(exports, "CaretUp", {
  enumerable: true,
  get: function () { return react.CaretUp; }
});
Object.defineProperty(exports, "ChartBar", {
  enumerable: true,
  get: function () { return react.ChartBar; }
});
Object.defineProperty(exports, "ChartLineUp", {
  enumerable: true,
  get: function () { return react.ChartLineUp; }
});
Object.defineProperty(exports, "ChatCircle", {
  enumerable: true,
  get: function () { return react.ChatCircle; }
});
Object.defineProperty(exports, "Check", {
  enumerable: true,
  get: function () { return react.Check; }
});
Object.defineProperty(exports, "CheckCircle", {
  enumerable: true,
  get: function () { return react.CheckCircle; }
});
Object.defineProperty(exports, "CheckSquare", {
  enumerable: true,
  get: function () { return react.CheckSquare; }
});
Object.defineProperty(exports, "Circle", {
  enumerable: true,
  get: function () { return react.Circle; }
});
Object.defineProperty(exports, "Clock", {
  enumerable: true,
  get: function () { return react.Clock; }
});
Object.defineProperty(exports, "Copy", {
  enumerable: true,
  get: function () { return react.Copy; }
});
Object.defineProperty(exports, "Crosshair", {
  enumerable: true,
  get: function () { return react.Crosshair; }
});
Object.defineProperty(exports, "Database", {
  enumerable: true,
  get: function () { return react.Database; }
});
Object.defineProperty(exports, "DotsThree", {
  enumerable: true,
  get: function () { return react.DotsThree; }
});
Object.defineProperty(exports, "DotsThreeVertical", {
  enumerable: true,
  get: function () { return react.DotsThreeVertical; }
});
Object.defineProperty(exports, "Download", {
  enumerable: true,
  get: function () { return react.Download; }
});
Object.defineProperty(exports, "Envelope", {
  enumerable: true,
  get: function () { return react.Envelope; }
});
Object.defineProperty(exports, "EnvelopeSimple", {
  enumerable: true,
  get: function () { return react.EnvelopeSimple; }
});
Object.defineProperty(exports, "Eye", {
  enumerable: true,
  get: function () { return react.Eye; }
});
Object.defineProperty(exports, "EyeSlash", {
  enumerable: true,
  get: function () { return react.EyeSlash; }
});
Object.defineProperty(exports, "File", {
  enumerable: true,
  get: function () { return react.File; }
});
Object.defineProperty(exports, "FileText", {
  enumerable: true,
  get: function () { return react.FileText; }
});
Object.defineProperty(exports, "Files", {
  enumerable: true,
  get: function () { return react.Files; }
});
Object.defineProperty(exports, "FirstAid", {
  enumerable: true,
  get: function () { return react.FirstAid; }
});
Object.defineProperty(exports, "Funnel", {
  enumerable: true,
  get: function () { return react.Funnel; }
});
Object.defineProperty(exports, "Gear", {
  enumerable: true,
  get: function () { return react.Gear; }
});
Object.defineProperty(exports, "GearSix", {
  enumerable: true,
  get: function () { return react.GearSix; }
});
Object.defineProperty(exports, "Globe", {
  enumerable: true,
  get: function () { return react.Globe; }
});
Object.defineProperty(exports, "Handshake", {
  enumerable: true,
  get: function () { return react.Handshake; }
});
Object.defineProperty(exports, "House", {
  enumerable: true,
  get: function () { return react.House; }
});
Object.defineProperty(exports, "Info", {
  enumerable: true,
  get: function () { return react.Info; }
});
Object.defineProperty(exports, "Lightning", {
  enumerable: true,
  get: function () { return react.Lightning; }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function () { return react.Link; }
});
Object.defineProperty(exports, "LinkedinLogo", {
  enumerable: true,
  get: function () { return react.LinkedinLogo; }
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function () { return react.List; }
});
Object.defineProperty(exports, "MagnifyingGlass", {
  enumerable: true,
  get: function () { return react.MagnifyingGlass; }
});
Object.defineProperty(exports, "Minus", {
  enumerable: true,
  get: function () { return react.Minus; }
});
Object.defineProperty(exports, "Pause", {
  enumerable: true,
  get: function () { return react.Pause; }
});
Object.defineProperty(exports, "PencilSimple", {
  enumerable: true,
  get: function () { return react.PencilSimple; }
});
Object.defineProperty(exports, "Phone", {
  enumerable: true,
  get: function () { return react.Phone; }
});
Object.defineProperty(exports, "Play", {
  enumerable: true,
  get: function () { return react.Play; }
});
Object.defineProperty(exports, "Plus", {
  enumerable: true,
  get: function () { return react.Plus; }
});
Object.defineProperty(exports, "Question", {
  enumerable: true,
  get: function () { return react.Question; }
});
Object.defineProperty(exports, "Quotes", {
  enumerable: true,
  get: function () { return react.Quotes; }
});
Object.defineProperty(exports, "Receipt", {
  enumerable: true,
  get: function () { return react.Receipt; }
});
Object.defineProperty(exports, "Robot", {
  enumerable: true,
  get: function () { return react.Robot; }
});
Object.defineProperty(exports, "Rocket", {
  enumerable: true,
  get: function () { return react.Rocket; }
});
Object.defineProperty(exports, "ShieldCheck", {
  enumerable: true,
  get: function () { return react.ShieldCheck; }
});
Object.defineProperty(exports, "ShoppingCart", {
  enumerable: true,
  get: function () { return react.ShoppingCart; }
});
Object.defineProperty(exports, "SignIn", {
  enumerable: true,
  get: function () { return react.SignIn; }
});
Object.defineProperty(exports, "SignOut", {
  enumerable: true,
  get: function () { return react.SignOut; }
});
Object.defineProperty(exports, "SortAscending", {
  enumerable: true,
  get: function () { return react.SortAscending; }
});
Object.defineProperty(exports, "SortDescending", {
  enumerable: true,
  get: function () { return react.SortDescending; }
});
Object.defineProperty(exports, "Stop", {
  enumerable: true,
  get: function () { return react.Stop; }
});
Object.defineProperty(exports, "Target", {
  enumerable: true,
  get: function () { return react.Target; }
});
Object.defineProperty(exports, "Trash", {
  enumerable: true,
  get: function () { return react.Trash; }
});
Object.defineProperty(exports, "TrendUp", {
  enumerable: true,
  get: function () { return react.TrendUp; }
});
Object.defineProperty(exports, "Upload", {
  enumerable: true,
  get: function () { return react.Upload; }
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function () { return react.User; }
});
Object.defineProperty(exports, "UserCircleCheck", {
  enumerable: true,
  get: function () { return react.UserCircleCheck; }
});
Object.defineProperty(exports, "UserPlus", {
  enumerable: true,
  get: function () { return react.UserPlus; }
});
Object.defineProperty(exports, "Users", {
  enumerable: true,
  get: function () { return react.Users; }
});
Object.defineProperty(exports, "UsersThree", {
  enumerable: true,
  get: function () { return react.UsersThree; }
});
Object.defineProperty(exports, "VideoCamera", {
  enumerable: true,
  get: function () { return react.VideoCamera; }
});
Object.defineProperty(exports, "Wallet", {
  enumerable: true,
  get: function () { return react.Wallet; }
});
Object.defineProperty(exports, "Warning", {
  enumerable: true,
  get: function () { return react.Warning; }
});
Object.defineProperty(exports, "WarningCircle", {
  enumerable: true,
  get: function () { return react.WarningCircle; }
});
Object.defineProperty(exports, "X", {
  enumerable: true,
  get: function () { return react.X; }
});
Object.defineProperty(exports, "XLogo", {
  enumerable: true,
  get: function () { return react.XLogo; }
});
exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.CodeBlock = CodeBlock;
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
exports.FormField = FormField;
exports.IconBox = IconBox;
exports.Input = Input;
exports.Label = Label2;
exports.Logo = Logo;
exports.NavigationMenu = NavigationMenu;
exports.NavigationMenuContent = NavigationMenuContent;
exports.NavigationMenuIndicator = NavigationMenuIndicator;
exports.NavigationMenuItem = NavigationMenuItem;
exports.NavigationMenuLink = NavigationMenuLink;
exports.NavigationMenuList = NavigationMenuList;
exports.NavigationMenuTrigger = NavigationMenuTrigger;
exports.NavigationMenuViewport = NavigationMenuViewport;
exports.Progress = Progress;
exports.Separator = Separator2;
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
exports.SidebarNavItem = SidebarNavItem;
exports.Stat = Stat;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
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
exports.alertVariants = alertVariants;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
exports.iconBoxVariants = iconBoxVariants;
exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle;
exports.progressVariants = progressVariants;
exports.statVariants = statVariants;
exports.tagVariants = tagVariants;
exports.toast = toast;
exports.useToast = useToast;
exports.valueVariants = valueVariants;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map