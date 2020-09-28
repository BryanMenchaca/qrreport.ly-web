import React, { useState, useEffect } from "react";

import { InputField, TextArea } from "../../../../../../components/Inputs";

const ModalSuspension = () => {
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
      id="suspensionModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="suspensionModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="suspensionModalLabel">
              Nuevo reporte de suspensión
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
            <form id="formSuspension" noValidate>
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
                  type="text"
                  name="motivo"
                  label="Motivo"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <InputField
                  type="date"
                  name="desde"
                  label="Desde"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <InputField
                  type="date"
                  name="hasta"
                  label="Hasta"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <TextArea
                  name="observaciones"
                  label="Observaciones"
                  defaultValue="Sin observaciones."
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

export default ModalSuspension;
