import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyInput from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyInput />
  </StrictMode>
);
