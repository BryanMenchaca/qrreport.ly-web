import React, { useState, useContext } from "react";
import { ArrowForward } from "@material-ui/icons";
import { RegisterContext } from "../../common/context";
import { InputField, SelectField } from "../../../../components/Inputs/";

const DatosPrincipales = () => {
  const { state, dispatch } = useContext(RegisterContext);
  const { studentData } = state;

  const [inputValues, setInputValues] = useState({ ...studentData });

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
      <h5 className="font-weight-regular mb-4">Datos principales</h5>
      <form className="row mt-2" onSubmit={handleSubmit} noValidate>
        <div className="col-md-4">
          <InputField
            type="text"
            label="Número de control"
            name="noControl"
            value={inputValues.noControl}
            onChange={handleChange}
          />
          <InputField
            type="text"
            label="Nombre(s)"
            name="nombre"
            value={inputValues.nombre}
            onChange={handleChange}
          />
          <InputField
            type="text"
            label="Apellido Paterno"
            name="apellidoP"
            value={inputValues.apellidoP}
            onChange={handleChange}
          />
          <InputField
            type="text"
            label="Apellido Materno"
            name="apellidoM"
            value={inputValues.apellidoM}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <InputField
            type="text"
            label="Semestre"
            name="semestre"
            value={inputValues.semestre}
            onChange={handleChange}
          />
          <InputField
            type="text"
            label="Grupo"
            name="grupo"
            value={inputValues.grupo}
            onChange={handleChange}
          />
          <SelectField
            label="Especialidad"
            name="especialidad"
            value={inputValues.especialidad}
            onChange={handleChange}
            options={especialidades}
          />
          <InputField
            type="text"
            label="Generacion"
            name="generacion"
            value={inputValues.generacion}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <InputField
            type="text"
            label="CURP"
            name="curp"
            value={inputValues.curp}
            onChange={handleChange}
          />
          <InputField
            type="text"
            label="Número de seguridad social"
            name="nss"
            value={inputValues.nss}
            onChange={handleChange}
          />
          <div className="form-group mt-2">
            <label htmlFor="" className="text-white mt-2">
              -
            </label>
            <button
              id="nextStepBtn"
              className="btn btn-primary btn-sm form-control"
            >
              Siguiente <ArrowForward />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(DatosPrincipales);

const especialidades = [
  "Contabilidad",
  "Electricidad",
  "Enfermería General",
  "Fuentes de Energías Alternas",
  "Laboratorista Químico",
  "Programación",
  "Soporte y Mantenimiento de Comput",
];
