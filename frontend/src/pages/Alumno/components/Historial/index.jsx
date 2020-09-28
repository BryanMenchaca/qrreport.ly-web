import React from "react";

/* Cards Items */
import Reporte from "./components/SancionesItems/Reporte";
import Citatorio from "./components/SancionesItems/Citatorio";
import Suspension from "./components/SancionesItems/Suspension";

/* Modals Forms */
import ModalReporte from "./components/Modals/Reporte";
import ModalCitatorio from "./components/Modals/Citatorio";
import ModalSuspension from "./components/Modals/Suspension";

const Historial = () => {
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
        <Reporte
          fecha="12 de abr. de 2019"
          motivo="Falta de respeto a maestra"
          observaciones="Le faltó al respeto a la maestra Brenda Zavala"
          docente="Ing. Maxim Jimenez"
          folio="F001"
        />
        <div className="dropdown-divider my-4"></div>
        <Citatorio
          fecha="23 de nov. de 2019"
          motivo="Demostración de afecto en conferencia"
          observaciones="Demostración de afecto y falta de respeto a expositores en conferencia"
          fechaCita="24 de nov. de 2019"
          horaCita="16:10"
          folio="F006"
          asistencia={true}
        />
        <div className="dropdown-divider my-4"></div>
        <Suspension
          fecha="26 de nov. de 2019"
          motivo="Romper una ventana"
          observaciones="Al estar arrojando piedras rompió una ventana del salón"
          desde="27 de nov. de 2019"
          hasta="30 de nov. de 2019"
          folio="F002"
        />
      </div>
    </div>
  );
};

export default Historial;
