import React, { useContext } from "react";
import { StudentContext } from "../../common/context";
import { EditOutlined, PrintOutlined, ArrowDownward } from "@material-ui/icons";

const Opciones = () => {
  const {
    state: { loading },
  } = useContext(StudentContext);

  return (
    <div className="box mt-4 ignorePrint">
      <h5 className="mb-4">Opciones</h5>
      <button className="btn btn-light btn-sm w-100 mb-3" disabled={true}>
        <span className="text-primary">
          <EditOutlined className="mr-1" /> Editar información
        </span>
      </button>
      <button
        onClick={() => window.print()}
        className="btn btn-light btn-sm w-100 mb-3"
        disabled={loading}
      >
        <span className="text-success">
          <PrintOutlined className="mr-1" /> Imprimir página
        </span>
      </button>
      <button className="btn btn-light btn-sm w-100 mb-3" disabled={true}>
        <span className="text-danger">
          <ArrowDownward className="mr-1" /> Generar baja
        </span>
      </button>
    </div>
  );
};

export default Opciones;
