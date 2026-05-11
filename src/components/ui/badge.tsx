import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-violet-600/20 text-violet-300 hover:bg-violet-600/30",
        secondary:
          "border-transparent bg-background-tertiary text-text-secondary hover:bg-background-secondary",
        destructive:
          "border-transparent bg-red-500/20 text-red-300 hover:bg-red-500/30",
        outline: "border-violet-500/30 text-violet-300",
        cyan: "border-transparent bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30",
        blue: "border-transparent bg-blue-500/20 text-blue-300 hover:bg-blue-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
