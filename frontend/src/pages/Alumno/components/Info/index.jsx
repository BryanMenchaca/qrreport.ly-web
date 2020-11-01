import React, { useState, useEffect, useContext } from "react";
import imgDefault from "../../../../assets/default.png";
import { StudentContext } from "../../common/context";
import api from "../../../../services/students";

const Info = ({ noControl }) => {
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState({});

  const { dispatch } = useContext(StudentContext);

  useEffect(() => {
    if (noControl.length !== 0) {
      api
        .getStudentInfo(noControl)
        .then((res) => {
          dispatch({ type: "SET_STUDENT_ID", payload: noControl });
          setStudentData(res.studentData);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [noControl, dispatch]);

  if (!loading) {
    return (
      <div className="box">
        <div className="row">
          <div className="col-md-12 d-flex">
            <img
              src={imgDefault}
              alt="student"
              className="rounded-circle"
              id="student-photo"
              width="100px"
            />
            <h6 className="my-auto ml-4" style={{ fontSize: 19 }}>
              {`${studentData.nombre} ${studentData.apellidoP} ${studentData.apellidoM}`}
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="custom-badge">{`${studentData.especialidad}`}</div>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-6">
            <ul
              className="list-unstyled"
              style={{ fontSize: 15, fontWeight: 600 }}
            >
              <li className="mb-2">Semestre</li>
              <li className="mb-2">Grupo</li>
              <li className="mb-2">Generación</li>
              <li className="mb-2">Estatus</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul
              className="list-unstyled"
              style={{ fontSize: 15, fontWeight: 400 }}
            >
              <li className="mb-2">{`${studentData.semestre}`}</li>
              <li className="mb-2">{`${studentData.grupo}`}</li>
              <li className="mb-2">{`${studentData.generacion}`}</li>
              <li className="mb-2">
                {studentData.status ? "Cursando" : "Baja"}
              </li>
            </ul>
          </div>
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

export default Info;
