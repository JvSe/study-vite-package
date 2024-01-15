import * as React from "react";

import { cn } from "@/lib";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "nxth-w-full nxth-h-full nxth-border nxth-bg-[#F9F9F9] nxth-rounded-md nxth-outline-0 nxth-px-2 dark:nxth-bg-transparent dark:nxth-border dark:nxth-border-dark-2 focus-visible:nxth-ring-0 focus-visible:nxth-border-none focus-within:nxth-border-none focus:nxth-border-none",
  {
    variants: {
      variant: {
        default: "",
        "with-icons":
          "nxth-h-full nxth-rounded-tl-none nxth-rounded-bl-none nxth-border-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        {...props}
        type={type}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
