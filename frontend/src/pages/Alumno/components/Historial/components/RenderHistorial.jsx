import React from 'react'

/* Cards Items */
import Reporte from "./SancionesItems/Reporte";
import Citatorio from "./SancionesItems/Citatorio";
import Suspension from "./SancionesItems/Suspension";

const RenderHistorial = ({historialArray, isEmpty}) => {
    return (
        <div>
            {isEmpty ? (
          <p className="text-muted">No hay sanciones.</p>
        ) : (
          historialArray.map((item, index) => {
            if (item.type === "Reporte") {
              return (
                <Reporte
                  fecha={item.fecha}
                  motivo={item.motivo}
                  observaciones={item.observaciones}
                  docente={item.docente}
                  folio={item.folio}
                  key={index}
                />
              );
            } else if (item.type === "Citatorio") {
              return (
                <Citatorio
                  fecha={item.fecha}
                  motivo={item.motivo}
                  observaciones={item.observaciones}
                  fechaCita={item.fechaCita}
                  horaCita={item.horaCita}
                  folio={item.folio}
                  asistencia={item.asistencia}
                  key={index}
                />
              );
            } else if (item.type === "Suspension") {
              return (
                <Suspension
                  fecha={item.fecha}
                  motivo={item.motivo}
                  observaciones={item.observaciones}
                  desde={item.desde}
                  hasta={item.hasta}
                  folio={item.folio}
                  key={index}
                />
              );
            }
          })
        )}
        </div>
    )
}

export default RenderHistorial
