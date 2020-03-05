import React from "react";

const Inicio = React.lazy(() => import("./views/Inicio"));
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const EntrevistaRH = React.lazy(() => import("./views/EntrevistaRH"));
const EntrevistaOP = React.lazy(() => import("./views/EntrevistaOP"));
const Confirmar = React.lazy(() => import("./views/Confirmar"));
const CalidadRecluta = React.lazy(() => import("./views/CalidadRecluta"));

var routes = [];

routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/Inicio", name: "Inicio", component: Inicio },
  { path: "/Dashboard", name: "Dashboard", component: Dashboard },
  { path: "/EntrevistaRH", name: "Entrevistas Pendientes", component: EntrevistaRH },
  { path: "/EntrevistaOP", name: "Entrevistas Pendientes", component: EntrevistaOP },
  { path: "/Confirmar", name: "Candidatos a Confirmar", component: Confirmar },
  { path: "/CalidadRecluta", name: "Calidad Recluta", component: CalidadRecluta },

];

export default routes;
