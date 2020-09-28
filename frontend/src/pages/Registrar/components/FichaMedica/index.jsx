import React, { useState, useContext } from "react";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import { RegisterContext } from "../../common/context";
import {
  InputField,
  SelectField,
  TextArea,
} from "../../../../components/Inputs/";

const FichaMedica = () => {
  const { state, dispatch } = useContext(RegisterContext);
  const { ficha_medica } = state;

  const [inputValues, setInputValues] = useState({ ...ficha_medica });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "NEXT_STEP", payload: inputValues });
  };

  return (
    <div className="box">
      <form id="ficha-medica-form" onSubmit={handleSubmit} noValidate>
        <h5 className="font-weight-regular text-danger">Ficha médica</h5>
        <div className="row mt-3">
          <div className="col-md-6">
            <TextArea
              label="Padecimientos médicos"
              name="padecimientos"
              cols="30"
              rows="2"
              defaultValue={inputValues.padecimientos}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <TextArea
              label="Notas médicas"
              name="notas_medicas"
              cols="30"
              rows="2"
              defaultValue={inputValues.notas_medicas}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <TextArea
              label="Alergias y sus reacciones"
              name="alergias_reacciones"
              cols="30"
              rows="2"
              defaultValue={inputValues.alergias_reacciones}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <TextArea
              label="Medicamentos"
              name="medicamentos"
              cols="30"
              rows="2"
              defaultValue={inputValues.medicamentos}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <SelectField
              label="Grupo sanguíneo"
              name="grupo_sanguineo"
              defaultValue={inputValues.grupo_sanguineo}
              onChange={handleChange}
              options={options.grupos_sanguineos}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="" className="mt-2">
              Estatura
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control custom-form-control"
                name="estatura"
                defaultValue={inputValues.estatura}
                onChange={handleChange}
              />
              <div className="input-group-append">
                <span className="input-group-text">cm</span>
              </div>
            </div>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="" className="mt-2">
              Peso
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control custom-form-control"
                name="peso"
                defaultValue={inputValues.peso}
                onChange={handleChange}
              />
              <div className="input-group-append">
                <span className="input-group-text">kg</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <p className="text-danger">Contacto de emergencia</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <InputField
              type="text"
              label="Parentesco"
              name="parentesco"
              defaultValue={inputValues.contacto_emergencia.parentesco}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <InputField
              type="text"
              label="Nombre y apellido"
              name="nombre_parentesco"
              defaultValue={inputValues.contacto_emergencia.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <div className="form-group mt-2">
              <label htmlFor="">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                className="form-control custom-form-control"
                placeholder="000-000-0000"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                defaultValue={inputValues.contacto_emergencia.telefono}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-3">
            <SelectField
              label="Etiqueta"
              name="etiqueta"
              defaultValue={inputValues.contacto_emergencia.etiqueta}
              onChange={handleChange}
              options={options.etiquetas}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-light btn-sm float-left"
              onClick={() => dispatch({ type: "PREV_STEP" })}
            >
              <ArrowBack /> Volver
            </button>
            <button className="btn btn-danger btn-sm float-right">
              Siguiente <ArrowForward />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(FichaMedica);

const options = {
  grupos_sanguineos: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  etiquetas: ["Casa", "Teléfono", "Celular"],
};
