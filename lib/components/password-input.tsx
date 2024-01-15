import { Input } from "@/components";
import { EyeClosed, EyeSlash, FiLock } from "@/icons";
import { ForwardRefRenderFunction, forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type IPasswordInput = React.InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: boolean;
};

const PasswordInputRef: ForwardRefRenderFunction<
  HTMLInputElement,
  IPasswordInput
> = ({ leftIcon = true, ...rest }, ref) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div
      aria-invalid={rest["aria-invalid"]}
      className={twMerge(
        "nxth-group/general nxth-flex nxth-overflow-hidden nxth-relative nxth-h-[3.2rem] nxth-rounded-md aria-[invalid=false]:focus-within:nxth-shadow-input aria-[invalid=true]:nxth-border aria-[invalid=true]:nxth-border-alert nxth-select-none",
        rest.className
      )}
    >
      {leftIcon && (
        <>
          <div
            //@ts-expect-error rest["data-complete"]
            data-complete={rest["data-complete"]}
            className="nxth-group/icon nxth-flex nxth-w-[3rem] nxth-items-center nxth-justify-center nxth-bg-[#ECECEC] data-[complete=true]:nxth-bg-primary group-aria-[invalid=true]/general:nxth-bg-alert group-aria-[invalid=true]/general:nxth-border-alert"
          >
            <FiLock className="group-data-[complete=true]/icon:nxth-text-white group-aria-[invalid=true]/general:nxth-text-white" />
          </div>
        </>
      )}

      <Input
        type={show ? "text" : "password"}
        variant="with-icons"
        ref={ref}
        {...rest}
      />
      <div className="nxth-absolute nxth-bottom-0 nxth-right-0 nxth-w-[3rem] nxth-h-full ">
        <div
          onClick={handleClick}
          className="nxth-flex nxth-h-full nxth-items-center nxth-justify-center"
        >
          {show ? <EyeClosed /> : <EyeSlash />}
        </div>
      </div>
    </div>
  );
};

export const PasswordInput = forwardRef(PasswordInputRef);
