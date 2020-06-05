import React from 'react'
import { MoreVert } from '@material-ui/icons'

import Reporte from '../../components/Sanciones/Reporte'
import Citatorio from '../../components/Sanciones/Citatorio'
import Suspension from '../../components/Sanciones/Suspension'

const Historial = () => {
    return (
        <div>
            <div className="d-flex">
                <div className="form-inline mb-3 sm-m mr-auto">
                    <label htmlFor="show">Mostrar: </label>
                    <select className="form-control form-control-sm ml-3" id="show" defaultValue="t">
                        <option value="t">Todo</option>
                        <option value="r">Reportes</option>
                        <option value="c">Citatorios</option>
                        <option value="s">Suspensiones</option>
                    </select>
                </div>
                <div>
                    <a className="text-secondary" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                        <MoreVert/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Exportar PDF</a>
                    </div>
                </div>
            </div>
            <div className="box">
                <Reporte
                    fecha="12 de abr. de 2019"
                    motivo="Falta de respeto a maestra" 
                    observaciones="Le faltó al respeto a la maestra Brenda Zavala" 
                    docente="Ing. Maxim Jimenez"
                    folio="F001"/>
                <div className="dropdown-divider my-4"></div>
                <Citatorio
                    fecha="23 de nov. de 2019"
                    motivo="Demostración de afecto en conferencia"
                    observaciones="Demostración de afecto y falta de respeto a expositores en conferencia"
                    fechaCita="24 de nov. de 2019"
                    horaCita="16:10"
                    folio="F006"
                    asistencia={true}/>
                <div className="dropdown-divider my-4"></div>
                <Suspension
                    fecha="26 de nov. de 2019"
                    motivo="Romper una ventana"
                    observaciones="Al estar arrojando piedras rompió una ventana del salón"
                    desde="27 de nov. de 2019"
                    hasta="30 de nov. de 2019"
                    folio="F002" />
            </div>
        </div>
    )
}

export default Historial
