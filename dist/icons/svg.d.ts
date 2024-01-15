import { ComponentProps } from "react";
type IconProps = ComponentProps<"svg"> & {
    size?: number | string;
};
declare const Moon: ({ size, ...rest }: IconProps) => import("react/jsx-runtime").JSX.Element;
declare const Sun: ({ size, ...rest }: IconProps) => import("react/jsx-runtime").JSX.Element;
declare const EyeClosed: ({ size, ...rest }: IconProps) => import("react/jsx-runtime").JSX.Element;
declare const EyeSlash: ({ size, ...rest }: IconProps) => import("react/jsx-runtime").JSX.Element;
declare const CheckMarkerBlue: ({ ...rest }: IconProps) => import("react/jsx-runtime").JSX.Element;
declare const CheckMarkerDark: ({ ...rest }: IconProps) => import("react/jsx-runtime").JSX.Element;
declare const CheckMarkerGreen: ({ ...rest }: IconProps) => import("react/jsx-runtime").JSX.Element;
declare const LogoHome: ({ size }: IconProps) => import("react/jsx-runtime").JSX.Element;
export { CheckMarkerBlue, CheckMarkerDark, CheckMarkerGreen, EyeClosed, EyeSlash, LogoHome, Moon, Sun, };
