import React, { useState, useEffect, useContext } from "react";
import { StudentContext } from "../../common/context";

/* Cards Items */
import Reporte from "./components/SancionesItems/Reporte";
import Citatorio from "./components/SancionesItems/Citatorio";
import Suspension from "./components/SancionesItems/Suspension";

/* Modals Forms */
import ModalReporte from "./components/Modals/Reporte";
import ModalCitatorio from "./components/Modals/Citatorio";
import ModalSuspension from "./components/Modals/Suspension";

const Historial = () => {
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
    } else {
      setIsEmpty(true);
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
      <div className="box">
        {isEmpty ? (
          <p>No hay sanciones.</p>
        ) : (
          historialArray.map((item, index) => {
            if (item.type === "Reporte") {
              return (
                <Reporte
                  fecha={item.fecha}
                  motivo={item.motivo}
                  observaciones={item.observaciones}
                  docente={item.docente}
                  folio={item.folio}
                  key={index}
                />
              );
            } else if (item.type === "Citatorio") {
              return (
                <Citatorio
                  fecha={item.fecha}
                  motivo={item.motivo}
                  observaciones={item.observaciones}
                  fechaCita={item.fechaCita}
                  horaCita={item.horaCita}
                  folio={item.folio}
                  asistencia={item.asistencia}
                  key={index}
                />
              );
            } else if (item.type === "Suspension") {
              return (
                <Suspension
                  fecha={item.fecha}
                  motivo={item.motivo}
                  observaciones={item.observaciones}
                  desde={item.desde}
                  hasta={item.hasta}
                  folio={item.folio}
                  key={index}
                />
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default Historial;
