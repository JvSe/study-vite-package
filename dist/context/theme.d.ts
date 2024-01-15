import { NextMedAppName, PalleteColors } from '../lib';
import { PropsWithChildren } from "react";
type Theme = "light" | "dark";
type ThemeType = PropsWithChildren & {
    app: NextMedAppName;
};
type ThemeContextType = {
    app: NextMedAppName;
    pallete: PalleteColors;
    theme?: string;
    setTheme: (string: Theme) => void;
};
declare const ThemeProvider: ({ children, app }: ThemeType) => import("react/jsx-runtime").JSX.Element;
declare const useTheme: () => ThemeContextType;
export { ThemeProvider, useTheme };
