import React, { useState, useEffect, useContext } from "react";
import { StudentContext } from "../../common/context";

/* Modals Forms */
import ModalReporte from "./components/Modals/Reporte";
import ModalCitatorio from "./components/Modals/Citatorio";
import ModalSuspension from "./components/Modals/Suspension";

import RenderHistorial from "./components/RenderHistorial"

const Historial = () => {
  const [loading, setLoading] = useState(true);
  const [historialArray, setHistorialArray] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  var {
    state: {
      studentData: { reportes, citatorios, suspensiones },
    },
  } = useContext(StudentContext);

  useEffect(() => {
    var sanciones = [...reportes, ...citatorios, ...suspensiones];
    if (sanciones.length !== 0) {
      sanciones.sort((a, b) => new Date(a.fecha) > new Date(b.fecha));
      setHistorialArray(sanciones);
      setIsEmpty(false);
      setLoading(false);
    } else {
      setIsEmpty(true);
      setLoading(false)
    }
  }, [reportes, citatorios, suspensiones]);

  return (
    <div>
      <ModalReporte />
      <ModalCitatorio />
      <ModalSuspension />
      <div className="d-flex justify-content-end ignorePrint mb-3">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-danger btn-sm dropdown-toggle ignorePrint"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Nueva sanción
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#reporteModal"
            >
              Reporte
            </a>
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#citatorioModal"
            >
              Citatorio
            </a>
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#suspensionModal"
            >
              Suspensión
            </a>
          </div>
        </div>
      </div>
        {loading ? (
          <div className="box text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <RenderHistorial historialArray={historialArray} isEmpty={isEmpty} />
        )}
    </div>
  );
};

export default Historial;
