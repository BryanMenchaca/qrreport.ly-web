import React from "react";
import { Replay } from "@material-ui/icons";

const Controls = ({ reload }) => {
  return (
    <div className="box mb-4 p-3">
      <div className="d-flex justify-content-between align-middle ignorePrint">
        <button className="btn btn-light btn-sm" onClick={reload}>
          <Replay className="text-muted" />
        </button>
        <div>
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
      </div>
    </div>
  );
};

export default Controls;
