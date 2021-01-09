import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Sidebar = () => {
  return (
    <div id="sidebar" className="sidebar ignorePrint">
      <ul className="list-unstyled">
        <li>
          <NavLink to="/dashboard" exact activeStyle={styles.active}>
            <b>Inicio</b>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/busqueda" activeStyle={styles.active}>
            <b>Busqueda</b>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/grupos" activeStyle={styles.active}>
            <b>Grupos</b>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/registrar" activeStyle={styles.active}>
            <b>Registrar alumno</b>
          </NavLink>
        </li>
        <li>
          <NavLink to="/config" activeStyle={styles.active}>
            <b>Configuración</b>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

const styles = {
  active: {
    color: "#1e86ff",
  },
};
