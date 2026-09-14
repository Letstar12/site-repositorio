import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Activities from "./Activities.jsx";
import Tcc from "./Tcc.jsx";

import "./styles.css";

const currentPage = window.location.pathname;

/* ========================================
   TEMA
   ======================================== */

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark" || savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else {
  document.documentElement.setAttribute("data-theme", "light");
}


/* ========================================
   IDENTIFICAÇÃO DAS PÁGINAS
   ======================================== */

const isActivitiesPage =
  currentPage.endsWith("/atividades.html") ||
  currentPage.endsWith("atividades.html");

const isTccPage =
  currentPage.endsWith("/tcc.html") ||
  currentPage.endsWith("tcc.html");


/* ========================================
   RENDERIZAÇÃO
   ======================================== */

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    {isTccPage ? (
      <Tcc />
    ) : isActivitiesPage ? (
      <Activities />
    ) : (
      <App />
    )}
  </React.StrictMode>
);