import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import routes from "./routes";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
