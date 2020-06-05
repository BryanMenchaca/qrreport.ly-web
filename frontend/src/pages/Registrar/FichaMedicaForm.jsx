import React from 'react'
import { ArrowForward, ArrowBack } from '@material-ui/icons'

const FichaMedicaForm = () => {
    return (
        <div className="box">
            <form action="">
                <h5 className="font-weight-regular text-danger">Ficha médica</h5>
                <div className="row mt-3">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Padecimientos médicos</label>
                        <input type="text" className="form-control" name="padecimientos"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Notas médicas</label>
                        <input type="text" className="form-control" name="notasMedicas"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Alergías y sus reacciones</label>
                        <input type="text" className="form-control" name="alergias"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Medicamentos</label>
                        <input type="text" className="form-control" name="medicamentos"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="form-grouo col-md-4">
                        <label htmlFor="">Grupo sanguíneo</label>
                        <input type="text" className="form-control" name="grupoSanguineo"/>
                    </div>
                    <div className="form-grouo col-md-4">
                        <label htmlFor="">Estatura</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" name="estatura"/>
                            <div class="input-group-append">
                                <span class="input-group-text">cm</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-grouo col-md-4">
                        <label htmlFor="">Peso</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" name="peso"/>
                            <div class="input-group-append">
                                <span class="input-group-text">kg</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <p className="text-danger">Contacto de emergencia</p>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="">Parentesco</label>
                        <input type="text" className="form-control" name="parentesco"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="">Nombre y apellido</label>
                        <input type="text" className="form-control" name="nombreParentesco"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="">Número telefónico</label>
                        <input type="text" className="form-control" name="telefono"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="">Etiqueta</label>
                        <select className="custom-select" defaultValue="Seleccionar">
                            <option>Seleccionar etiqueta</option>
                            <option value="casa">Casa</option>
                            <option value="telefono">Teléfono</option>
                            <option value="celular">Celular</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <button className="btn btn-light btn-sm float-left">
                            <ArrowBack/> Volver
                        </button>
                        <button className="btn btn-danger btn-sm float-right">
                            Siguiente <ArrowForward/>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FichaMedicaForm
