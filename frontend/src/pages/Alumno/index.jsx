import React from "react";
import { StudentProvider } from "./common/context";
import "./alumno.css";

import Info from "./components/Info";
import FichaMedica from "./components/FichaMedica";
import Historial from "./components/Historial";
import Opciones from "./components/Opciones";

const Index = ({ match }) => {
  const { noControl } = match.params;

  return (
    <StudentProvider>
      <div className="row mt-4">
        <div className="col-md-4 col-lg-3">
          {/* Left content section */}
          <Info noControl={noControl} />
          <Opciones />
        </div>
        <div className="col-md-8 col-lg-9">
          {" "}
          {/* Right content section */}
          {/* Start blue top menu */}
          <ul className="nav nav-pills mb-3 ignorePrint" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-historial"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Historial
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-ficha"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Ficha médica
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-info"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Más información
              </a>
            </li>
          </ul>
          {/* End blue top menu */}
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

export default Index;
