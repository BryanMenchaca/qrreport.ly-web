import React, { useState, useEffect, useContext } from "react";
import api from "../../../../../../services/students";
import { StudentContext } from "../../../../common/context";

import { InputField, TextArea } from "../../../../../../components/Inputs";

const ModalReporte = () => {
  const {
    state: {
      studentData: { noControl },
    },
  } = useContext(StudentContext);

  const initialState = {
    noControl,
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
    console.log(data);
    api
      .createDocument("reporte", data)
      .then((res) => {
        if (res.error) {
          alert(res.message);
        } else {
          alert(res.message);
          document.querySelector("#formReporte").reset();
          setData(initialState);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="modal fade"
      id="reporteModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="reporteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="reporteModalLabel">
              Nuevo reporte
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
            <form id="formReporte" onSubmit={onSubmit} noValidate>
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
                <label htmlFor="">Fecha</label>
                <input
                  type="date"
                  name="fecha"
                  className="form-control custom-form-control"
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
              <div className="form-group">
                <InputField
                  type="text"
                  name="docente"
                  label="Docente que reporta"
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

export default ModalReporte;
