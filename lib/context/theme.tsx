import { Toaster } from "@/components";
import { NextMedAppName, PalleteColors, themes } from "@/lib";
import {
  ThemeProvider as NextThemeProvider,
  useTheme as useNextTheme,
} from "next-themes";
import { PropsWithChildren, createContext, useContext, useEffect } from "react";

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

const ThemeContext = createContext({} as ThemeContextType);

const ThemeProviderCore = ({ children, app }: ThemeType) => {
  const { theme, setTheme } = useNextTheme();

  useEffect(() => {
    const root = document.documentElement;
    const pallete = themes[app as NextMedAppName];

    Object.keys(pallete).map((key: string) => {
      root.style.setProperty(`--${key}`, pallete[key as keyof typeof pallete]);
    });
  }, [app]);

  return (
    <ThemeContext.Provider
      value={{ app, pallete: themes[app], theme, setTheme }}
    >
      {children}
      <Toaster />
    </ThemeContext.Provider>
  );
};

const ThemeProvider = ({ children, app }: ThemeType) => {
  return (
    <NextThemeProvider defaultTheme="light">
      <ThemeProviderCore app={app}>{children}</ThemeProviderCore>
    </NextThemeProvider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
