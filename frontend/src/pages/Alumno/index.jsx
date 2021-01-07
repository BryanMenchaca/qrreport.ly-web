import React from "react";
import { StudentProvider } from "./common/context";
import "./alumno.css";

import Cabecera from "./components/Cabecera";
import Menu from "./components/Menu";
import FichaMedica from "./components/FichaMedica";
import Historial from "./components/Historial";
import Info from "./components/Info";
import Opciones from "./components/Opciones";

const Alumno = ({ match }) => {
  const { noControl } = match.params;

  return (
    <StudentProvider>
      <div className="row mt-4">
        {/* Header */}
        <div className="col-md-12">
          <Cabecera noControl={noControl} />
        </div>
      </div>
      <div className="row">
        {/* Navbar Menu */}
        <div className="col-md-12">
          <Menu />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          {/* Left content section */}
          <Info />
          <Opciones />
        </div>
        <div className="col-md-8">
          {/* Right content section */}
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-historial"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <Historial />
            </div>
            <div
              className="tab-pane fade"
              id="pills-ficha"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <FichaMedica />
            </div>
            <div
              className="tab-pane fade"
              id="pills-info"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </StudentProvider>
  );
};

export default Alumno;
