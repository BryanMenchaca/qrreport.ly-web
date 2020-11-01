import React from "react";
import moment from "moment";
import { MoreVert, Done, Clear } from "@material-ui/icons";

const Citatorio = (props) => {
  const {
    fecha,
    motivo,
    observaciones,
    fechaCita,
    horaCita,
    folio,
    asistencia,
  } = props;
  return (
    <div className="box mt-3">
      <div className="d-flex">
        <p className="text-secondary mr-auto">
          <small>{moment(fecha).format("ll")} - Citatorio</small>
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
          <a className="dropdown-item" href="/logout">
            Eliminar
          </a>
        </div>
      </div>
      <h5>{motivo}</h5>
      <p>{observaciones}</p>
      <div className="d-flex">
        <p className="text-secondary mr-auto">
          <small>Fecha y hora de cita:</small>
          <br />
          <small className="text-dark">
            {moment(fechaCita).format("ll")} a las {horaCita} hrs.
          </small>
        </p>
        <p className="text-secondary mr-2">
          <small>{folio >= 10 ? `F0${folio}` : `F00${folio}`}</small>
        </p>
      </div>
      <p className="text-secondary">
        <small className="mr-2">Asistió:</small>
        <small className="text-dark">{asistencia ? <Done /> : <Clear />}</small>
      </p>
    </div>
  );
};

export default Citatorio;
