import React, { useState, useEffect, useContext, useCallback } from "react";
import { StudentContext } from "../../../../common/context";
import { InputField, TextArea } from "../../../../../../components/Inputs";
import api from "../../../../../../services/students";

const initialState = {
  folio: "",
  fecha: "",
  motivo: "",
  observaciones: "Sin observaciones.",
  docente: "",
};

const ModalReporte = () => {
  const { state } = useContext(StudentContext);
  const [data, setData] = useState(initialState);

  const getFolio = useCallback(() => {
    api
      .getFolio("reporte")
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
      .createDocument("reporte", { noControl: state.noControl, ...data })
      .then((res) => {
        if (res.error) {
          alert(res.message);
        } else {
          alert(res.message);
          document.querySelector("#formReporte").reset();
          setData(initialState);
          getFolio();
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
                  defaultValue={data.folio}
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
                  autoComplete="on"
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
