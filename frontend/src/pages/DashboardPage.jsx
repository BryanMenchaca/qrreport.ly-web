import React from "react";
import { Switch, Route } from "react-router-dom";
import '../assets/css/loading-skeleton-animation.css'

//import RouteWithProps from "../components/RouteWithProps";
import routes from "../Routes/index";

import Inicio from "./Inicio";
import Busqueda from "./Busqueda"
import Grupos from "./Grupos"
import Grupo from "./Grupo"
import Registrar from "./Registrar"
import Alumno from "./Alumno"

const DashboardPage = () => {
  return (
    <Switch>
      <Route exact path={routes.inicio} component={Inicio} />
      <Route exact path={routes.busqueda} component={Busqueda} />
      <Route exact path={routes.grupos} component={Grupos} />
      <Route exact path={routes.grupo} component={Grupo} />
      <Route exact path={routes.registrar} component={Registrar} />
      <Route exact path={routes.alumno} component={Alumno} />
    </Switch>
  );
};

export default DashboardPage
