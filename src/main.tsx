import { ThemeProvider } from "nextmed-theme2/context";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "nextmed-theme2/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider app="nextmed-admin">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
