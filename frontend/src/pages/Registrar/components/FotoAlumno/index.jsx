import React, { useState, useContext, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { RegisterContext } from "../../common/context";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import IsUploaded from "./IsUploaded";

const Dropzone = () => {
  const { state, dispatch } = useContext(RegisterContext);
  const [files, setFiles] = useState(undefined || state.photo);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "NEXT_STEP",
      payload: files,
    });
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/png, image/jpeg",
    size: 1000000,
    onDrop: (acceptedFiles) => setFiles(acceptedFiles),
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className="box">
      <h5 className="font-weight-regular mb-4">Seleccionar una fotografía</h5>
      <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <IsUploaded dragActive={isDragActive} filesArray={files} />
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <small className="text-muted">
              * Omita este paso en caso de no contar en este momento con una
              fotografía del alumno(a).
            </small>
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
            <button className="btn btn-primary btn-sm float-right">
              Siguiente <ArrowForward />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dropzone;

/** Drag n' Drop Form styles **/

const baseStyle = {
  textAlign: "center",
  alignItems: "center",
  padding: "100px 50px",
  borderWidth: 2,
  borderRadius: 5,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#37EE56",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

/** End styles **/
