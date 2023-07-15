import * as React from "react";
import { createRoot } from "react-dom/client";
import Router from "./components/router";
import "./index.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  // Le mode strict de React est activé pour des vérifications de développement supplémentaires.
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
