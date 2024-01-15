import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Spinner } from "@/components";
import { cn } from "@/lib";

const buttonVariants = cva(
  "nxth-inline-flex nxth-items-center nxth-justify-center nxth-whitespace-nowrap nxth-transition-all nxth-rounded-md nxth-select-none hover:nxth-scale-[1.01] disabled:nxth-pointer-events-none disabled:nxth-cursor-not-allowed disabled:nxth-text-dark-3 disabled:nxth-bg-dark-5 dark:disabled:nxth-bg-transparent disabled:nxth-border-dark-3",
  {
    variants: {
      variant: {
        clean: "nxth-transition-all",
        default:
          "nxth-bg-primary nxth-font-bold dark:nxth-bg-transparent nxth-text-white nxth-text-[18px] dark:nxth-text-primary-dark nxth-shadow-sm nxth-border nxth-border-primary-border dark:nxth-border-primary-dark hover:nxth-bg-primary-hover dark:hover:nxth-bg-primary-dark hover:nxth-text-primary-border dark:hover:nxth-text-fix-darker dark:hover:nxth-border-fix-darker",
        destructive:
          "nxth-bg-red-500 nxth-text-slate-50 hover:nxth-bg-red-500/90 dark:nxth-bg-red-900 dark:nxth-text-slate-50 dark:hover:nxth-bg-red-900/90",
        outline:
          "nxth-border nxth-border-slate-200 nxth-bg-white hover:nxth-bg-slate-100 hover:nxth-text-slate-900 dark:nxth-border-slate-800 dark:nxth-bg-slate-950 dark:hover:nxth-bg-slate-800 dark:hover:nxth-text-slate-50",
        secondary:
          "nxth-border nxth-border-dark-4 nxth-text-dark-2 nxth-bg-white nxth-font-bold dark:nxth-bg-transparent dark:nxth-border-dark-2 dark:nxth-text-white hover:nxth-scale-[1.03] nxth-transition-all",
        ghost:
          "hover:nxth-bg-slate-100 hover:nxth-text-slate-900 dark:hover:nxth-bg-slate-800 dark:hover:nxth-text-slate-50",
        link: "nxth-text-slate-900 nxth-underline-offset-4 hover:nxth-underline dark:nxth-text-slate-50",
      },
      size: {
        clean: "",
        default: "nxth-min-h-[3.5rem] nxth-h-[3.5rem] nxth-w-full",
        sm: "nxth-h-9 nxth-rounded-md nxth-px-3",
        lg: "nxth-h-11 nxth-rounded-md nxth-px-8",
        icon: "nxth-h-9 nxth-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading ? <Spinner /> : props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
