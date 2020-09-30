import React from "react";
import moment from "moment";
import { MoreVert } from "@material-ui/icons";

const Reporte = (props) => {
  const { fecha, motivo, observaciones, docente, folio } = props;

  return (
    <div className="box mt-2">
      <div className="d-flex">
        <p className="text-secondary mr-auto">
          <small>{moment(fecha).format("ll")} - Reporte</small>
        </p>
        <a
          className="text-secondary"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
        >
          <MoreVert />
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <a className="dropdown-item" href="#">
            Eliminar
          </a>
        </div>
      </div>
      <h5>{motivo}</h5>
      <p>{observaciones}</p>
      <div className="d-flex">
        <p className="text-secondary mr-auto">
          <small>Docente que reporta:</small>
          <br />
          <small className="text-dark">{docente}</small>
        </p>
        <p className="text-secondary mr-2">
          <small>{folio >= 10 ? `F0${folio}` : `F00${folio}`}</small>
        </p>
      </div>
    </div>
  );
};

export default Reporte;
