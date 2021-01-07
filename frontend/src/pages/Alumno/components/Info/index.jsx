import React, { useContext } from "react";
import { StudentContext } from "../../common/context";
import { Group, WatchLater, HdrStrong } from "@material-ui/icons";

const Info = () => {
  const { state } = useContext(StudentContext);

  if (!state.loading) {
    const { studentData } = state;
    return (
      <div className="box">
        <h5 className="mb-3">Información</h5>
        <div className="form-group">
          <small>
            <Group className="text-muted mr-3" />
            <span className="text-muted">Semestre y grupo: </span>
            {`${studentData.semestre} ° ${studentData.grupo}`}
          </small>
        </div>
        <div className="form-group">
          <small>
            <HdrStrong className="text-muted mr-3" />
            <span className="text-muted">Especialidad: </span>
            {studentData.especialidad}
          </small>
        </div>
        <div className="form-group">
          <small>
            <WatchLater className="text-muted mr-3" />
            <span className="text-muted">Generación: </span>
            {studentData.generacion}
          </small>
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
