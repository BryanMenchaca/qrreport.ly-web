import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../../common/context";
import { EditOutlined, PrintOutlined, ArrowDownward } from "@material-ui/icons";

const Opciones = () => {
  const { state } = useContext(StudentContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state.noControl?.length !== 0) {
      setLoading(false);
    }
  }, [state.noControl]);

  return (
    <div className="box ignorePrint">
      <h5 className="mb-4">Opciones</h5>
      <Link
        to={`/dashboard/editar/${state.noControl}`}
        className="btn btn-light btn-sm w-100 mb-3"
        disabled={loading}
      >
        <span className="text-primary">
          <EditOutlined className="mr-1" /> Editar información
        </span>
      </Link>
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
