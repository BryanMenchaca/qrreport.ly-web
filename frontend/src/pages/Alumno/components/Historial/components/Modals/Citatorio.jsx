import React, { useState, useEffect, useContext, useCallback } from "react";
import api from "../../../../../../services/students";
import { StudentContext } from "../../../../common/context";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

import { InputField, TextArea } from "../../../../../../components/Inputs";

const initialState = {
  folio: "",
  fecha: "",
  fechaCita: "",
  horaCita: "",
  motivo: "",
  observaciones: "Sin observaciones.",
  docente: "",
};

const MoldalCitatorio = () => {
  const { state } = useContext(StudentContext);
  const [data, setData] = useState(initialState);

  const getFolio = useCallback(() => {
    api
      .getFolio("citatorio")
      .then((res) => {
        if (!res.error) {
          setData((prevState) => ({
            ...prevState,
            folio: res.folio,
          }));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => getFolio(), [getFolio]);

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
      .createDocument("citatorio", { noControl: state.noControl, ...data })
      .then((res) => {
        const notyf = new Notyf({
          duration: 3000,
          position: { x: "center", y: "top" },
          ripple: true,
          dismissible: true,
        });

        if (res.error) {
          notyf.error(res.message);
        } else {
          notyf.success(res.message);
          document.querySelector("#formCitatorio").reset();
          setData(initialState);
          getFolio();
        }
      })
      .catch((err) => console.log(err));
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
            <form id="formCitatorio" onSubmit={onSubmit} noValidate>
              <div className="form-group">
                <InputField
                  type="text"
                  name="folio"
                  label="Folio"
                  defaultValue={data.folio}
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
                <TextArea
                  name="observaciones"
                  label="Observaciones"
                  defaultValue="Sin observaciones."
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <InputField
                  type="text"
                  name="docente"
                  label="Docente que cita"
                  onChange={onChange}
                  autoComplete="on"
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
