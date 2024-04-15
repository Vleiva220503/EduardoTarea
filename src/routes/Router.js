import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Repetidores = lazy(() => import("../views/Repetidores.js"));
const Briges = lazy(() => import("../views/ui/Briges.js"));
const Route = lazy(() => import("../views/ui/Route.js"));
const Gateways = lazy(() => import("../views/ui/Gateways.js"));
const Brouter = lazy(() => import("../views/ui/Brouter.js"));
const Concetrador = lazy(() => import("../views/ui/Concetrador.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/Repetidores" /> },
      { path: "/Repetidores", exact: true, element: <Repetidores /> },
      { path: "/Briges", exact: true, element: <Briges /> },
      { path: "/Route", exact: true, element: <Route /> },
      { path: "/Gateways", exact: true, element: <Gateways /> },
      { path: "/Brouter", exact: true, element: <Brouter /> },
      { path: "/Concetrador", exact: true, element: <Concetrador /> }
    ],
  },
];

export default ThemeRoutes;
