import React, { useEffect, useContext } from "react";
import imgDefault from "../../../../assets/default.png";
import { StudentContext } from "../../common/context";
import { CameraAlt } from "@material-ui/icons";
import api from "../../../../services/students";
import UploadPhotoModal from "../Modal";

const Info = ({ noControl }) => {
  const { state, dispatch } = useContext(StudentContext);

  useEffect(() => {
    if (noControl.length !== 0) {
      api
        .getStudentInfo(noControl)
        .then((res) => {
          dispatch({ type: "SET_STUDENT_DATA", payload: res });
        })
        .catch((err) => console.log(err));
    }
  }, [noControl, dispatch]);

  if (!state.loading) {
    const { studentData } = state;
    return (
      <div className="box mt-4">
        <div className="row">
          <div className="col-md-12 text-center d-flex justify-content-center">
            <div className="img-student">
              <img src={studentData.urlImage} alt="student" id="photo" />
              <button
                className="btn-upload-modal"
                data-toggle="modal"
                data-target="#uploadPhotoModal"
              >
                <CameraAlt style={{ fontSize: "15px" }} />
              </button>
            </div>
            <h4 className="student-name">
              {`${studentData.nombre} ${studentData.apellidoP} ${studentData.apellidoM}`}
            </h4>
          </div>
        </div>
        <UploadPhotoModal />
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
