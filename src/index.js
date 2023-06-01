import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/settings/colors.css"
import "../src/styles/settings/spacing.css"
import "./styles/generic/reset.css"
import "../src/styles/elements/base.css"
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
