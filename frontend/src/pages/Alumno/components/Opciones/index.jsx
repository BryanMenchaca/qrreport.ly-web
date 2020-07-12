import React from 'react'
import { EditOutlined, PrintOutlined, ArrowDownward } from '@material-ui/icons';

const Opciones = () => {
    return (
        <div className="box mt-4 ignorePrint">
            <h5 className="mb-4">Opciones</h5>
            <button className="btn btn-light btn-sm w-100 mb-3">
                <span className="text-primary">
                    <EditOutlined className="mr-1"/> Editar información
                </span>
            </button>
            <button onClick={() => window.print()} className="btn btn-light btn-sm w-100 mb-3">
                <span className="text-success">
                    <PrintOutlined className="mr-1"/> Imprimir página
                </span>
            </button>
            <button className="btn btn-light btn-sm w-100 mb-3">
                <span className="text-danger">
                    <ArrowDownward className="mr-1"/> Generar baja
                </span>
            </button>
        </div>
    )
}

export default Opciones
