import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./lib"),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        components: resolve(__dirname, "lib/components"),
        "lib/form-validations": resolve(__dirname, "lib/lib/form-validations"),
        context: resolve(__dirname, "lib/context"),
        icons: resolve(__dirname, "lib/icons"),
        lib: resolve(__dirname, "lib/lib"),
      },
      formats: ["es"],
      name: "nextmed-theme2",
      fileName: (format, entryName) => {
        return `${entryName ? entryName + "/" : ""}index.${format}.js`;
      },
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
