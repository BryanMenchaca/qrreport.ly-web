import React, { useContext } from "react";
import { RegisterContext } from "../../common/context";

const VerificarDatos = () => {
  const { state, dispatch } = useContext(RegisterContext);
  console.log(state);
  const { studentData, ficha_medica } = state;

  return (
    <div className="box">
      <h5>Verificar datos</h5>
      <div className="row mt-4">
        <div className="col-md-12">
          <p className="font-weight-bold text-primary">Datos principales</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="">
              <b>Número de control</b>
            </label>
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              value={studentData.noControl}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">
              <b>Nombre(s)</b>
            </label>
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              value={studentData.nombre}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">
              <b>Apellido Paterno</b>
            </label>
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              value={studentData.apellidoP}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">
              <b>Apellido Materno</b>
            </label>
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              value={studentData.apellidoM}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="">
              <b>Semestre</b>
            </label>
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              value={studentData.semestre}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">
              <b>Grupo</b>
            </label>
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              value={studentData.grupo}
            />
            <div className="form-group">
              <label htmlFor="">
                <b>Especialidad</b>
              </label>
              <input
                type="text"
                readonly
                className="form-control-plaintext"
                value={studentData.especialidad}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                <b>Generación</b>
              </label>
              <input
                type="text"
                readonly
                className="form-control-plaintext"
                value={studentData.generacion}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="">
              <b>CURP</b>
            </label>
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              value={studentData.curp}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">
              <b>Número de seguridad socual</b>
            </label>
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              value={studentData.nss}
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <p className="font-weight-bold text-danger">Ficha médica</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>
            <b>Número de control:</b> {studentData.noControl}
          </p>
          <p>
            <b>Nombre:</b> {studentData.nombre} {studentData.apellidoP}{" "}
            {studentData.apellidoM}
          </p>
          <p>
            <b>Semestre:</b> {studentData.semestre} °
          </p>
          <p>
            <b>Grupo:</b> {studentData.grupo}
          </p>
        </div>
        <div className="col-md-6">
          <p>
            <b>Especialidad:</b> {studentData.especialidad}
          </p>
          <p>
            <b>Generación:</b> {studentData.generacion}
          </p>
          <p>
            <b>CURP:</b> {studentData.curp}
          </p>
          <p>
            <b>Número de seguridad social:</b> {studentData.nss}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(VerificarDatos);
