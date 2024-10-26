import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("react-root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
