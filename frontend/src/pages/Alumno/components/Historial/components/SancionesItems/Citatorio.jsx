import React from "react";
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
    <div className="box mt-2">
      <div className="d-flex">
        <p className="text-secondary mr-auto">
          <small>{fecha} - Citatorio</small>
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
            {fechaCita} a las {horaCita} hrs.
          </small>
        </p>
        <p className="text-secondary mr-2">
          <small>{folio}</small>
        </p>
      </div>
      <p className="text-secondary">
        <small className="mr-2">Asistió:</small>
        <small className="text-dark">{asistencia ? <Done /> : <Clear />}</small>
      </p>
      <div className="dropdown-divider my-4"></div>
    </div>
  );
};

export default Citatorio;
