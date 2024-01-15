import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { useTheme } from "@/context";
import { CheckMarkerBlue, CheckMarkerDark, CheckMarkerGreen } from "@/icons";
import { cn } from "@/lib";
import { VariantProps, cva } from "class-variance-authority";

const checkBoxVariants = cva(
  "nxth-peer nxth-shrink-0 nxth-rounded-sm data-[state=unchecked]:nxth-border data-[state=unchecked]:nxth-border-dark nxth-ring-offset-dark focus-visible:nxth-outline-none focus-visible:nxth-ring-2 focus-visible:nxth-ring-ring focus-visible:nxth-ring-offset-2 disabled:nxth-cursor-not-allowed disabled:nxth-opacity-50",
  {
    variants: {
      variant: {
        default: "nxth-h-6 nxth-w-6",
        small: "nxth-h-5 nxth-w-5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const CheckMarker = {
  "nextmed-app": <CheckMarkerGreen />,
  "nextmed-institutions": <CheckMarkerBlue />,
  "nextmed-admin": <CheckMarkerGreen />,
};

interface CheckBoxProps
  extends VariantProps<typeof checkBoxVariants>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckBoxProps
>(({ className, variant, ...props }, ref) => {
  const { theme = "light", app } = useTheme();
  return (
    <label className="nxth-flex nxth-items-center nxth-gap-1">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(checkBoxVariants({ variant }), className)}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn(
            "nxth-flex nxth-items-center nxth-justify-center nxth-text-current"
          )}
        >
          {theme === "light" ? CheckMarker[app] : <CheckMarkerDark />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <p className="nxth-text-sm nxth-text-dark-1 nxth-select-none">
        {props.children}
      </p>
    </label>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
