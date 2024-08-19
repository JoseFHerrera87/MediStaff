import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StaffPage } from "./StaffModule/exportModule";
import "../normalize.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StaffPage />
  </StrictMode>
);
