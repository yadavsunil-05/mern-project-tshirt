import React from "react";
import { createRoot } from "react-dom/client";
import MyRoutes from "./MyRoutes";
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);
