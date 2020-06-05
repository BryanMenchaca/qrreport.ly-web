import React from 'react'
import './alumno.css'

import Info from './Info'
import FichaMedica from './FichaMedica'
import Historial from './Historial'

const index = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Info/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <FichaMedica/>
                    <div className="box mt-4">
                        <h5 className="mb-4">Opciones</h5>
                        <button className="btn btn-light btn-sm w-100 mb-3">
                            <span className="text-primary">Exportar informe completo</span>
                        </button>
                        <button className="btn btn-light btn-sm w-100 mb-3">
                            <span className="text-danger">Generar baja</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-8">
                    <Historial/>
                </div>
            </div>
        </div>
    )
}

export default index
