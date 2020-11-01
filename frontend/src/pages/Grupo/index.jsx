import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoreHoriz } from "@material-ui/icons";
import api from "../../services/groups";

import GrupoSkeleton from "./LoadingSkeleton/";
import ModalReporteGrupal from "./components/ModalReporteGrupal";

const Grupo = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [studentsArray, setStudentsArray] = useState([]);
  const [groupInfo, setGroupInfo] = useState({});
  const { grupo, generacion } = match.params;

  useEffect(() => {
    api
      .getInfoAndStudentsGroup({ grupo, generacion })
      .then((res) => {
        setStudentsArray(res.students);
        setGroupInfo(res.groupInfo);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [grupo, generacion]);

  return (
    <div id="pdfdiv">
      <ModalReporteGrupal grupo={grupo} generacion={generacion} />
      <div className="row">
        <div className="col-md-12">
          {loading ? (
            <h4 className="anim" style={{ width: "20%" }}>
              -
            </h4>
          ) : (
            <h4>
              {`${grupo[0]} ° ${grupo[1]}`} - {groupInfo.especialidad}
            </h4>
          )}
        </div>
      </div>
      <div className="row" id="ignorePDF">
        <div className="col-md-12 d-flex justify-content-end">
          <button
            onClick={() => window.print()}
            className="btn btn-info btn-sm ml-2 ignorePrint"
          >
            Exportar PDF
          </button>
          <button
            className="btn btn-danger btn-sm ml-2 ignorePrint"
            data-toggle="modal"
            data-target="#reporteGrupalModal"
          >
            Nuevo reporte
          </button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          {loading ? (
            <GrupoSkeleton />
          ) : (
            <div id="pdfdiv" className="table-responsive-xl">
              <table className="table custom-table">
                <thead>
                  <tr>
                    <th>No. control</th>
                    <th>Nombre del alumno</th>
                    <th>Reportes</th>
                    <th>Citatorios</th>
                    <th>Suspensiones</th>
                    <th className="ignorePrint">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsArray.map((student, index) => {
                    return (
                      <tr className="mt-3" key={index}>
                        <td>{student.noControl}</td>
                        <td>{`${student.apellidoP} ${student.apellidoM} ${student.nombre}`}</td>
                        <td>{student.reportes.length}</td>
                        <td>{student.citatorios.length}</td>
                        <td>{student.suspensiones.length}</td>
                        <td className="ignorePrint">
                          <Link
                            to={`/dashboard/alumno/${student.noControl}`}
                            className="btn btn-sm btn-light"
                          >
                            <MoreHoriz className="text-info" /> Ver más
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grupo;
