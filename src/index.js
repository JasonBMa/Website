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
import Designs from "./Routes/Designs";
import Contact from "./Routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Home/>
  },
  {
    path: "/Designs",
    element:
      <Designs/>
  },
  {
    path: "/Contact",
    element:
      <Contact/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);