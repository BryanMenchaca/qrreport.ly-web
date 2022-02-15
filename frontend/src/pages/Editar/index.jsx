import React, { useState, useEffect } from "react";
import { InputField, TextArea } from "../../components/Inputs";
import { ArrowBack, DoneOutlined } from "@material-ui/icons";
import api from "../../services/students";

const Editar = ({ match, history }) => {
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState({});
  const [fichaMedica, setFichaMedica] = useState({});
  const [newData, setNewData] = useState({});
  const { noControl } = match.params;

  useEffect(() => {
    api // Get Info student
      .getStudentInfo(noControl)
      .then((res) => {
        setStudentData(res.studentData);
        setFichaMedica(res.fichaMedica);
        setNewData({ ...res.studentData, ...res.fichaMedica });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [noControl]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    api
      .edit(newData)
      .then((res) => {
        if (res.error) {
          alert(res.message);
        } else {
          alert(res.message);
          history.goBack();
        }
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return (
      <div className="box text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="box">
        <h4>Editar datos</h4>
        <div className="row mt-4">
          <div className="col-md-12">
            <h6 className="text-primary">Datos principales</h6>
          </div>
        </div>
        <form id="verifit-data-form" className="mt-2" onSubmit={onSubmit}>
          <div className="row">
            <div className="col-md-4">
              <InputField
                type="text"
                label="Número de control"
                name="noControl"
                defaultValue={studentData.noControl}
                onChange={onChange}
              />
              <InputField
                type="text"
                label="Nombre(s)"
                name="nombre"
                defaultValue={studentData.nombre}
                onChange={onChange}
              />
              <InputField
                type="text"
                label="Apellido Paterno"
                name="apellidoP"
                defaultValue={studentData.apellidoP}
                onChange={onChange}
              />
              <InputField
                type="text"
                label="Apellido Materno"
                name="apellidoM"
                defaultValue={studentData.apellidoM}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <InputField
                type="text"
                label="Semestre"
                name="semestre"
                defaultValue={studentData.semestre}
                onChange={onChange}
              />
              <InputField
                type="text"
                label="Grupo"
                name="grupo"
                defaultValue={studentData.grupo}
                onChange={onChange}
              />
              <InputField
                type="text"
                label="Especialidad"
                name="especialidad"
                defaultValue={studentData.especialidad}
                onChange={onChange}
              />
              <InputField
                type="text"
                label="Generacion"
                name="generacion"
                defaultValue={studentData.generacion}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <InputField
                type="text"
                label="CURP"
                name="curp"
                defaultValue={studentData.curp}
                onChange={onChange}
              />
              <InputField
                type="text"
                label="Número de seguridad social"
                name="nss"
                defaultValue={studentData.nss}
                onChange={onChange}
              />
            </div>
          </div>
          {/**********
           * FichaMedica Inputs
           **********/}
          <div className="mt-4">
            <h6 className="text-danger">Ficha médica</h6>
            <div className="row mt-3">
              <div className="col-md-6">
                <TextArea
                  label="Padecimientos médicos"
                  name="padecimientos"
                  cols="30"
                  rows="2"
                  defaultValue={fichaMedica.padecimientos}
                  onChange={onChange}
                />
              </div>
              <div className="col-md-6">
                <TextArea
                  label="Notas médicas"
                  name="notas_medicas"
                  cols="30"
                  rows="2"
                  defaultValue={fichaMedica.notas_medicas}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <TextArea
                  label="Alergias y sus reacciones"
                  name="alergias"
                  cols="30"
                  rows="2"
                  defaultValue={fichaMedica.alergias_reacciones}
                  onChange={onChange}
                />
              </div>
              <div className="col-md-6">
                <TextArea
                  label="Medicamentos"
                  name="medicamentos"
                  cols="30"
                  rows="2"
                  defaultValue={fichaMedica.medicamentos}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4">
                <InputField
                  type="text"
                  label="Grupo sanguíneo"
                  name="grupo_sanguineo"
                  defaultValue={fichaMedica.grupo_sanguineo}
                  onChange={onChange}
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
                    defaultValue={fichaMedica.estatura}
                    onChange={onChange}
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
                    defaultValue={fichaMedica.peso}
                    onChange={onChange}
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
                  defaultValue={fichaMedica.contacto_emergencia.parentesco}
                  onChange={onChange}
                />
              </div>
              <div className="col-md-3">
                <InputField
                  type="text"
                  label="Nombre y apellido"
                  name="nombre_parentesco"
                  defaultValue={fichaMedica.contacto_emergencia.nombre}
                  onChange={onChange}
                />
              </div>
              <div className="col-md-3">
                <div className="form-group mt-2">
                  <label htmlFor="">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    className="form-control custom-form-control"
                    defaultValue={fichaMedica.contacto_emergencia.telefono}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <InputField
                  label="Etiqueta"
                  name="etiqueta"
                  defaultValue={fichaMedica.contacto_emergencia.etiqueta}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <button
                  type="button"
                  className="btn btn-light btn-sm float-left"
                  onClick={() => history.goBack()}
                >
                  <ArrowBack /> Volver
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm float-right"
                >
                  Guardar cambios <DoneOutlined />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Editar;
