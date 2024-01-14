import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "nxth-z-50 nxth-overflow-hidden nxth-rounded-md nxth-border nxth-border-slate-200 nxth-bg-white nxth-px-3 nxth-py-1.5 nxth-text-sm nxth-text-slate-950 nxth-shadow-md nxth-animate-in nxth-fade-in-0 nxth-zoom-in-95 data-[state=closed]:nxth-animate-out data-[state=closed]:nxth-fade-out-0 data-[state=closed]:nxth-zoom-out-95 data-[side=bottom]:nxth-slide-in-from-top-2 data-[side=left]:nxth-slide-in-from-right-2 data-[side=right]:nxth-slide-in-from-left-2 data-[side=top]:nxth-slide-in-from-bottom-2 dark:nxth-border-slate-800 dark:nxth-bg-slate-950 dark:nxth-text-slate-50",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
