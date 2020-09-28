import React from "react";
import { Link } from "react-router-dom";

const CardGrupo = ({ semestre, grupo, especialidad, reportes, generacion }) => {
  return (
    <div className="col-md-3 mt-4">
      <Link
        to={`/dashboard/grupo/${semestre}${grupo}/${generacion}`}
        className="text-decoration-none"
      >
        <div className="box text-center">
          <h4 className="text-body">
            {semestre} ° {grupo}
          </h4>
          <h6 className={setClass(semestre)}>{especialidad}</h6>
          <small className="text-secondary font-weight-light">
            {reportes.length === 1
              ? `${reportes.length} reporte grupal`
              : `${reportes.length} reportes grupales`}
          </small>
        </div>
      </Link>
    </div>
  );
};

const setClass = (semestre) => {
  semestre = parseInt(semestre);
  if (semestre === 1 || semestre === 2) {
    return "text-danger font-weight-light mt-3";
  } else if (semestre === 3 || semestre === 4) {
    return "text-success font-weight-light mt-3";
  } else if (semestre === 5 || semestre === 6) {
    return "text-primary font-weight-light mt-3";
  }
};

export default CardGrupo;
