import React from 'react'

import DatosPrincipales from './DatosPrincipalesForm'
//import FichaMedica from './FichaMedicaForm'
//import Dropzone from './Dropzone'

const index = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h4>Registrar alumno(a)</h4>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <DatosPrincipales/>
                </div>
            </div>
        </div>
    )
}

export default index
