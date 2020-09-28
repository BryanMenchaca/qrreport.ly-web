import React from 'react'
import { MoreVert } from '@material-ui/icons'

const Suspension = (props) => {
    const { fecha, motivo, observaciones, desde, hasta, folio } = props;
    return (
        <div>
            <div className="d-flex">
                <p className="text-secondary mr-auto">
                    <small>{fecha} - Reporte de suspensión</small>
                </p>
                <a className="text-secondary" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                    <MoreVert/>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/logout">Eliminar</a>
                </div>
            </div>
            <h5>{motivo}</h5>
            <p>{observaciones}</p>
            <div className="d-flex">
                <p className="text-secondary mr-auto">
                    <small>Periodo de suspensión:</small><br/>
                    <small className="text-dark">Desde el {desde} hasta {hasta}</small>
                </p>
                <p className="text-secondary mr-2">
                    <small>{folio}</small>
                </p>
            </div>
        </div>
    )
}

export default Suspension
