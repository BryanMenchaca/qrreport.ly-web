import React, { useState, useEffect, useContext, useCallback } from "react";
import { StudentContext } from "../../common/context";
import api from "../../../../services/students";

/* Modals Forms */
import ModalReporte from "./components/Modals/Reporte";
import ModalCitatorio from "./components/Modals/Citatorio";
import ModalSuspension from "./components/Modals/Suspension";

/* Sub - Components of this components */
import RenderHistorial from "./components/RenderHistorial";
import Controls from "./components/Controls";

const Historial = () => {
  const { state } = useContext(StudentContext);
  const [loading, setLoading] = useState(true);
  const [historialArray, setHistorialArray] = useState([]);

  const fetchData = useCallback(() => {
    setLoading(true);
    if (state.noControl.length !== 0) {
      api
        .getHistory(state.noControl)
        .then((res) => {
          setHistorialArray([
            ...res.reportes,
            ...res.citatorios,
            ...res.suspensiones,
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
      <Controls reload={fetchData} />
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
