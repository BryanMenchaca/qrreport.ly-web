import React from 'react'
import { ArrowForward } from '@material-ui/icons'

const DatosPrincipales = () => {
    return (
        <div className="box">
            <form action="">
                <h5 className="font-weight-regular">Datos principales</h5>
                <div className="row mt-4">
                    <div className="form-group col-md-4">
                        <label htmlFor="">Nombre(s)</label>
                        <input type="text" className="form-control" name="nombre" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Apellido Paterno</label>
                        <input type="text" className="form-control" name="apellidoP" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Apellido Materno</label>
                        <input type="text" className="form-control" name="nombre" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group col-md-3">
                        <label htmlFor="">Semestre</label>
                        <input type="text" className="form-control" name="semestre" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="">Grupo</label>
                        <input type="text" className="form-control" name="grupo" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Especialidad</label>
                        <select className="custom-select" defaultValue="Seleccionar">
                            <option>Seleccionar especialidad</option>
                            <option value="contabilidad">Contabilidad</option>
                            <option value="electricidad">Electricidad</option>
                            <option value="enfermeria">Enfermería General</option>
                            <option value="fuentes">Fuentes alternas de energía</option>
                            <option value="laboratorista">Laboratorista Químico</option>
                            <option value="programacion">Programación</option>
                            <option value="soporte">Soporte y Mantenimiento de Computo</option>
                            <option value="trabajoSocial">Trabajo Social</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Generación</label>
                        <input type="text" className="form-control" name="Generación" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Número de control</label>
                        <input type="text" className="form-control" name="noControl" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="form-group col-md-6">
                        <label htmlFor="">CURP</label>
                        <input type="text" className="form-control" name="curp" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Número de seguridad social</label>
                        <input type="text" className="form-control" name="nss" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <button className="btn btn-primary btn-sm float-right">
                            Siguiente <ArrowForward/>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DatosPrincipales
