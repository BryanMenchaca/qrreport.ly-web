import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import { StudentContext } from "../../common/context";
import api from "../../../../services/students";

import starOfLife from "../../../../assets/medic-id.png";

const FichaMedica = () => {
  const { state } = useContext(StudentContext);
  const [loading, setLoading] = useState(true);
  const [fichaMedica, setFichaMedica] = useState({});

  useEffect(() => {
    if (state.noControl.length !== 0) {
      api
        .getStudentInfo(state.noControl)
        .then((res) => {
          setFichaMedica(res.fichaMedica);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [state.noControl]);

  if (!loading) {
    return (
      <div className="box">
        <div className="d-flex mb-2">
          <img src={starOfLife} alt="medic" className="mr-2" height="25px" />
          <h5 className="text-danger mr-auto">Ficha médica</h5>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InfoItem
              label="Padecimientos médicos"
              data={fichaMedica.padecimientos}
            />
          </div>
          <div className="col-md-6">
            <InfoItem label="Notas médicas" data={fichaMedica.notas_medicas} />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <InfoItem
              label="Alergías y sus reacciones"
              data={fichaMedica.alergias_reacciones}
            />
          </div>
          <div className="col-md-6">
            <InfoItem label="Medicamentos" data={fichaMedica.medicamentos} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <InfoItem
              label="Grupo sanguíeno"
              data={fichaMedica.grupo_sanguineo}
            />
          </div>
          <div className="col-md-4">
            <InfoItem label="Peso" data={fichaMedica.peso} />
          </div>
          <div className="col-md-4">
            <InfoItem label="Estatura" data={fichaMedica.estatura} />
          </div>
        </div>
        <label htmlFor="" className="text-danger">
          <small className="font-weight-bold">Contacto de emergencia</small>
        </label>
        <div className="row">
          <div className="col-md-3">
            <InfoItem
              label="Parentesco"
              data={fichaMedica.contacto_emergencia.parentesco}
            />
          </div>
          <div className="col-md-3">
            <InfoItem
              label="Nombre"
              data={fichaMedica.contacto_emergencia.nombre}
            />
          </div>
          <div className="col-md-3">
            <InfoItem
              label="Teléfono"
              data={fichaMedica.contacto_emergencia.telefono}
            />
          </div>
          <div className="col-md-3">
            <InfoItem
              label="Etiqueta"
              data={fichaMedica.contacto_emergencia.etiqueta}
            />
          </div>
        </div>
        <br />
        <div className="w-100">
          <label htmlFor="" className="text-muted">
            <small>
              <b>ACTUALIZADO</b>
            </small>
          </label>
          <p className="text-muted mr-auto">
            <small>
              {moment(fichaMedica.actualizacion).format("L") + " "}
              {moment(fichaMedica.actualizacion).format("LT")}
            </small>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="box text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
};

const InfoItem = (props) => {
  const { label, data } = props;
  return (
    <div>
      <label htmlFor="" className="text-danger">
        <small>{label}</small>
      </label>
      <p className="text-secondary">{data}</p>
    </div>
  );
};

export default FichaMedica;
