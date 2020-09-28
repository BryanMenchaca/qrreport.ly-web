import React from "react";
import { Link } from "react-router-dom";
import { MoreHoriz } from "@material-ui/icons";

const StudentsTable = ({ students }) => {
  if (students.length !== 0) {
    return (
      <table className="table custom-table">
        <thead>
          <tr>
            <th>No. control</th>
            <th>Nombre del alumno</th>
            <th>Semestre</th>
            <th>Grupo</th>
            <th>Estatus</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr className="mt-3" key={index}>
                <td>{student.noControl}</td>
                <td>{`${student.apellidoP} ${student.apellidoM} ${student.nombre}`}</td>
                <td>{student.semestre}</td>
                <td>{student.grupo}</td>
                <td>{student.status ? "Cursando" : "Baja"}</td>
                <td>
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
    );
  } else {
    return <p className="text-muted">No hay coincidencias.</p>;
  }
};

export default StudentsTable;
