import * as React from "react";
import { createRoot } from "react-dom/client";
import Router from "./components/router";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
