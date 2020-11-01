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
      <div className="box mt-4">
        <div className="row">
          <div className="col-md-12 text-center d-flex justify-content-center">
            <div className="img-student">
              <img src={imgDefault} alt="student" width="110px" />
            </div>
            <h4 className="student-name">
              {`${studentData.nombre} ${studentData.apellidoP} ${studentData.apellidoM}`}
            </h4>
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
