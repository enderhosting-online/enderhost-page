import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const glassVariants = cva("rounded-lg backdrop-blur-lg", {
  variants: {
    variant: {
      default: "bg-[#111928]/75",
      light: "bg-white/10",
      dark: "bg-black/50",
      custom: "",
    },
    padding: {
      none: "",
      sm: "p-4",
      default: "p-6",
      lg: "p-8",
    },
    paddingBottom: {
      none: "",
      sm: "pb-4",
      default: "pb-6",
      lg: "pb-8",
      xl: "pb-10",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
    paddingBottom: "none",
  },
});

interface GlassProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassVariants> {
  asChild?: boolean;
}

const Glass = React.forwardRef<HTMLDivElement, GlassProps>(
  (
    { className, variant, padding, paddingBottom, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(
          glassVariants({ variant, padding, paddingBottom, className }),
        )}
        {...props}
      />
    );
  },
);

Glass.displayName = "Glass";

export { Glass, glassVariants };
