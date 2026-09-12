import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Activities from "./Activities.jsx";
import "./styles.css";

const isActivitiesPage =
  window.location.pathname.endsWith("/atividades.html") ||
  window.location.pathname.endsWith("atividades.html");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isActivitiesPage ? <Activities /> : <App />}
  </React.StrictMode>
);