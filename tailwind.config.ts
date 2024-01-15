/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx}", "./lib/**/*.{js,jsx,ts,tsx}"],
  prefix: "nxth-",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        primary1: "var(--primary1)",
        primary2: "var(--primary2)",
        "primary-1": "var(--primary-1)",
        "primary-2": "var(--primary-2)",
        "primary-dark": "var(--primary-dark)",
        "primary-border": "var(--primary-border)",
        "primary-hover": "var(--primary-hover)",
        "primary-alpha": "var(--primary-alpha)",
        secondary: "var(--secondary)",
        secondary1: "var(--secondary1)",
        "secondary-1": "var(--secondary-1)",
        "secondary-2": "var(--secondary-2)",
        dark: "var(--dark)",
        "dark-1": "var(--dark-1)",
        "dark-2": "var(--dark-2)",
        "dark-3": "var(--dark-3)",
        "dark-4": "var(--dark-4)",
        "dark-5": "var(--dark-5)",
        alert: "#E26D6D",
        warning: "#EDB13E",
        success: "#0ABE93",
        "fix-darker": "#212936",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      boxShadow: {
        input: `0px 0px 6px 1px var(--primary-alpha)`,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

module.exports = config;
