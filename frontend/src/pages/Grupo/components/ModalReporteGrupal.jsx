import React, { useState, useEffect } from "react";
import api from "../../../services/groups";

import { InputField, TextArea } from "../../../components/Inputs";

const ModalReporteGrupal = ({ grupo, generacion }) => {
  const initialState = {
    semestre: grupo.split("")[0],
    grupo: grupo.split("")[1],
    generacion,
    folio: "",
    fecha: "",
    motivo: "",
    observaciones: "Sin observaciones.",
  };

  const [data, setData] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    api
      .createDocument(data)
      .then((res) => {
        if (res.error) {
          alert(res.message);
        } else {
          alert(res.message);
          document.querySelector("#formReporteGrupal").reset();
          setData(initialState);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="modal fade"
      id="reporteGrupalModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="reporteGrupalModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="reporteGrupalModalLabel">
              Nuevo reporte grupal
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
            <form id="formReporteGrupal" onSubmit={onSubmit} noValidate>
              <div className="form-group">
                <InputField
                  type="text"
                  name="folio"
                  label="Folio"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <InputField
                  type="date"
                  name="fecha"
                  label="Fecha"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <InputField
                  type="text"
                  name="motivo"
                  label="Motivo"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <TextArea
                  name="observaciones"
                  label="Observaciones"
                  defaultValue="Sin observaciones."
                  autoComplete="off"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group mt-2 float-right">
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

export default ModalReporteGrupal;
