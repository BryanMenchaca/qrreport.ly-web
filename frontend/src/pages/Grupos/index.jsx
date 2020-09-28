import React, { useState, useEffect } from "react";
import api from "../../services/groups";

import GruposSkeleton from "./LoadingSkeleton";
import CardGrupo from "./components/GrupoItem";

const Grupos = () => {
  const [loading, setLoading] = useState(true);
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    api
      .getAllGroups()
      .then((res) => {
        setGrupos(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mb-3">
      <div className="row">
        <div className="col-md-12">
          <h4>Grupos</h4>
        </div>
      </div>
      {loading ? (
        <div className="row">
          <GruposSkeleton />
        </div>
      ) : (
        <div>
          <div className="row mt-3">
            <div className="col-md-12">
              <h6 style={{ color: "#a4b1cb" }}>Primer año</h6>
            </div>
            {grupos.first.map((grupo, index) => {
              return (
                <CardGrupo
                  semestre={grupo.semestre}
                  grupo={grupo.grupo}
                  especialidad={grupo.especialidad}
                  reportes={grupo.reportes}
                  generacion={grupo.generacion}
                  key={index}
                />
              );
            })}
          </div>
          <div className="row">
            <div className="col-md-12">
              <h6 style={{ marginTop: 35, color: "#a4b1cb" }}>Segundo año</h6>
            </div>
            {grupos.second.map((grupo, index) => {
              return (
                <CardGrupo
                  semestre={grupo.semestre}
                  grupo={grupo.grupo}
                  especialidad={grupo.especialidad}
                  reportes={grupo.reportes}
                  generacion={grupo.generacion}
                  key={index}
                />
              );
            })}
          </div>
          <div className="row">
            <div className="col-md-12">
              <h6 style={{ marginTop: 35, color: "#a4b1cb" }}>Tercer año</h6>
            </div>
            {grupos.third.map((grupo, index) => {
              return (
                <CardGrupo
                  semestre={grupo.semestre}
                  grupo={grupo.grupo}
                  especialidad={grupo.especialidad}
                  reportes={grupo.reportes}
                  generacion={grupo.generacion}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Grupos;
