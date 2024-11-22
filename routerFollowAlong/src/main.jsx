import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Example from "./Example.jsx";
import StyledComp from "./StyledComp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Example />
  </StrictMode>
);
