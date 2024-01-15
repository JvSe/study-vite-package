import { Input } from "@/components";

import { ElementType, forwardRef, ForwardRefRenderFunction } from "react";
import { twMerge } from "tailwind-merge";

type IInputWithIcon = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: ElementType;
};

const InputRef: ForwardRefRenderFunction<HTMLInputElement, IInputWithIcon> = (
  { icon: Icon, ...rest },
  ref
) => {
  return (
    <div
      aria-invalid={rest["aria-invalid"]}
      className={twMerge(
        "nxth-group/general nxth-flex nxth-overflow-hidden nxth-relative nxth-h-[3.2rem] nxth-rounded-md aria-[invalid=false]:focus-within:nxth-shadow-input aria-[invalid=true]:nxth-border aria-[invalid=true]:nxth-border-alert",
        rest.className
      )}
    >
      <div
        //@ts-expect-error o rest["data-complete"]
        data-complete={rest["data-complete"]}
        className="nxth-group/icon nxth-flex nxth-w-[3rem] nxth-items-center nxth-justify-center nxth-bg-[#ECECEC] data-[complete=true]:nxth-bg-primary group-aria-[invalid=true]/general:nxth-bg-alert group-aria-[invalid=true]/general:nxth-border-alert"
      >
        {Icon && (
          <Icon className="group-data-[complete=true]/icon:nxth-text-white group-aria-[invalid=true]/general:nxth-text-white " />
        )}
      </div>
      <Input {...rest} variant="with-icons" ref={ref} />
    </div>
  );
};

export const InputWithIcon = forwardRef(InputRef);
