import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";
import { VariantProps } from "class-variance-authority";
declare const checkBoxVariants: (props?: ({
    variant?: "default" | "small" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface CheckBoxProps extends VariantProps<typeof checkBoxVariants>, React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckBoxProps & React.RefAttributes<HTMLButtonElement>>;
export { Checkbox };
