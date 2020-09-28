import React, { useState, useEffect } from "react";

import { InputField } from "../../../../../../components/Inputs";

const MoldalCitatorio = () => {
  const [data, setData] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className="modal fade"
      id="citatorioModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="citatorioModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="citatorioModalLabel">
              Nuevo citatorio
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form id="formCitatorio" noValidate>
              <div className="form-group">
                <InputField
                  type="text"
                  name="folio"
                  label="Folio"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <InputField
                  type="date"
                  name="fecha"
                  label="Fecha actual"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <InputField
                  type="date"
                  name="fechaCita"
                  label="Fecha de cita"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <InputField
                  type="time"
                  name="horaCita"
                  label="Hora de cita"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <InputField
                  type="text"
                  name="motivo"
                  label="Motivo"
                  autoComplete="off"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <InputField
                  type="text"
                  name="Docente"
                  label="Docente que cita"
                  onChange={onChange}
                />
              </div>
              <div className="form-group float-right">
                <button
                  type="button"
                  className="btn btn-light mr-1"
                  data-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Listo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoldalCitatorio;
