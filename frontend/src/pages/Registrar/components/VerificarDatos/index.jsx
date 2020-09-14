import React, { useContext } from "react";
import { RegisterContext } from "../../common/context";
import { ArrowBack, DoneOutlined } from "@material-ui/icons";
import { InputField, TextArea } from "../../../../components/Inputs/index";

const VerificarDatos = () => {
  const { state, dispatch } = useContext(RegisterContext);
  console.log(state);
  const { studentData, ficha_medica } = state;

  return (
    <div className="box">
      <h5>Verificar datos</h5>
      <small className="text-muted">
        Verifique que los datos ingresados son correctos. En caso de no ser así,
        puede volver y corregir los datos incorrectos.
      </small>
      <div className="row mt-4">
        <div className="col-md-12">
          <h6 className="text-primary">Datos principales</h6>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4">
          <InputField
            type="text"
            label="Número de control"
            name="noControl"
            defaultValue={studentData.noControl}
            readOnly
          />
          <InputField
            type="text"
            label="Nombre(s)"
            name="nombre"
            defaultValue={studentData.nombre}
            readOnly
          />
          <InputField
            type="text"
            label="Apellido Paterno"
            name="apellidoP"
            defaultValue={studentData.apellidoP}
            readOnly
          />
          <InputField
            type="text"
            label="Apellido Materno"
            name="apellidoM"
            defaultValue={studentData.apellidoM}
            readOnly
          />
        </div>
        <div className="col-md-4">
          <InputField
            type="text"
            label="Semestre"
            name="semestre"
            defaultValue={studentData.semestre}
            readOnly
          />
          <InputField
            type="text"
            label="Grupo"
            name="grupo"
            defaultValue={studentData.grupo}
            readOnly
          />
          <InputField
            type="text"
            label="Especialidad"
            name="especialidad"
            defaultValue={studentData.especialidad}
            readOnly
          />
          <InputField
            type="text"
            label="Generacion"
            name="generacion"
            defaultValue={studentData.generacion}
            readOnly
          />
        </div>
        <div className="col-md-4">
          <InputField
            type="text"
            label="CURP"
            name="curp"
            defaultValue={studentData.curp}
            readOnly
          />
          <InputField
            type="text"
            label="Número de seguridad social"
            name="nss"
            defaultValue={studentData.nss}
            readOnly
          />
        </div>
      </div>
      <div className="mt-4">
        <h6 className="text-danger">Ficha médica</h6>
        <div className="row mt-3">
          <div className="col-md-6">
            <TextArea
              label="Padecimientos médicos"
              name="padecimientos"
              cols="30"
              rows="2"
              value={ficha_medica.padecimientos}
              readOnly
            />
          </div>
          <div className="col-md-6">
            <TextArea
              label="Notas médicas"
              name="notas_medicas"
              cols="30"
              rows="2"
              value={ficha_medica.notas_medicas}
              readOnly
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
              value={ficha_medica.alergias}
              readOnly
            />
          </div>
          <div className="col-md-6">
            <TextArea
              label="Medicamentos"
              name="medicamentos"
              cols="30"
              rows="2"
              value={ficha_medica.medicamentos}
              readOnly
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <InputField
              label="Grupo sanguíneo"
              name="grupo_sanguineo"
              defaultValue={ficha_medica.grupo_sanguineo}
              readOnly
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
                value={ficha_medica.estatura}
                readOnly
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
                value={ficha_medica.peso}
                readOnly
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
              value={ficha_medica.contacto_emergencia.parentesco}
              readOnly
            />
          </div>
          <div className="col-md-3">
            <InputField
              type="text"
              label="Nombre y apellido"
              name="nombre_parentesco"
              value={ficha_medica.contacto_emergencia.nombre}
              readOnly
            />
          </div>
          <div className="col-md-3">
            <div className="form-group mt-2">
              <label htmlFor="">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                className="form-control custom-form-control"
                defaultValue={ficha_medica.contacto_emergencia.telefono}
                readOnly
              />
            </div>
          </div>
          <div className="col-md-3">
            <InputField
              label="Etiqueta"
              name="etiqueta"
              defaultValue={ficha_medica.contacto_emergencia.etiqueta}
              readOnly
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <button
              className="btn btn-light btn-sm float-left"
              onClick={() => dispatch({ type: "PREV_STEP" })}
            >
              <ArrowBack /> Volver
            </button>
            <button
              className="btn btn-primary btn-sm float-right"
              onClick={() => dispatch({ type: "REGISTER" })}
            >
              Registrar datos <DoneOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(VerificarDatos);
