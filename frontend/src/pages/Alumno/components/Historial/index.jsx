import React, { useState, useEffect, useContext, useCallback } from "react";
import { StudentContext } from "../../common/context";
import { Replay } from "@material-ui/icons";
import api from "../../../../services/students";

/* Modals Forms */
import ModalReporte from "./components/Modals/Reporte";
import ModalCitatorio from "./components/Modals/Citatorio";
import ModalSuspension from "./components/Modals/Suspension";

import RenderHistorial from "./components/RenderHistorial";

const Historial = () => {
  const { state } = useContext(StudentContext);
  const [loading, setLoading] = useState(true);
  const [historialArray, setHistorialArray] = useState([]);

  const fetchData = useCallback(() => {
    setLoading(true);
    if (state.noControl.length !== 0) {
      api
        .getStudentInfo(state.noControl)
        .then(({ studentData }) => {
          setHistorialArray([
            ...studentData.reportes,
            ...studentData.citatorios,
            ...studentData.suspensiones,
          ]);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [state.noControl]);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <>
      <ModalReporte />
      <ModalCitatorio />
      <ModalSuspension />
      <div className="d-flex justify-content-between align-middle ignorePrint mb-3">
        <button className="btn btn-light btn-sm" onClick={fetchData}>
          <Replay className="text-muted" />
        </button>
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
        <RenderHistorial historialArray={historialArray} />
      )}
    </>
  );
};

export default Historial;
