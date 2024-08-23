import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import index from "./index.css";

import Home from "./Routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Home/>
  },
  {
    path: "/Designs",
    element:
      <Home/>
  },
  {
    path: "/Contact",
    element:
      <Home/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);