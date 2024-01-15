import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type FlatIconProps = ComponentProps<"i">;

const FiEnvelope = ({ ...rest }: FlatIconProps) => (
  <i
    {...rest}
    className={twMerge("fi fi-rr-envelope nxth-leading-3", rest.className)}
  />
);
const FiLock = ({ ...rest }: FlatIconProps) => (
  <i
    {...rest}
    className={twMerge("fi fi-rr-lock nxth-leading-3", rest.className)}
  />
);
const FiTriangleWarning = ({ ...rest }: FlatIconProps) => (
  <i
    {...rest}
    className={twMerge("fi fi-rr-triangle-warning", rest.className)}
  />
);

export { FiEnvelope, FiLock, FiTriangleWarning };
