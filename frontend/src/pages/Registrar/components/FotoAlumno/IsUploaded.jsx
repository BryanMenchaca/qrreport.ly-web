import React from "react";
import { CloudUploadOutlined } from "@material-ui/icons";

const IsUploaded = ({ dragActive, filesArray }) => {
  if (dragActive) {
    if (filesArray) {
      return (
        <>
          <CloudUploadOutlined style={{ fontSize: 50 }} />
          <p>Ya ha seleccionado una fotografía</p>
        </>
      );
    } else {
      return (
        <>
          <CloudUploadOutlined style={{ fontSize: 50 }} />
          <p>Suelte la fotografía aquí</p>
        </>
      );
    }
  } else if (filesArray) {
    return (
      <>
        <CloudUploadOutlined
          className="text-primary"
          style={{ fontSize: 50 }}
        />
        <p className="text-primary">
          {filesArray[0].name} - {filesArray[0].size / 1000000} mb
        </p>
      </>
    );
  } else {
    return (
      <>
        <CloudUploadOutlined style={{ fontSize: 50 }} />
        <p>
          Arratre y suelte una fotografía para cargarla ó presione aquí para
          seleccionar
        </p>
      </>
    );
  }
};

export default IsUploaded;
