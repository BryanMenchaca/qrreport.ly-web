import React from 'react'
import { Link } from 'react-router-dom';
import { SearchOutlined, MoreHoriz } from '@material-ui/icons'
import './styles.css'

const Busqueda = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <h4>Búsqueda</h4>
                </div>
                <div className="col-md-4">
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping">
                                <SearchOutlined/>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Buscar" aria-describedby="addon-wrapping"/>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="table-responsive-xl">
                        <table className="table custom-table">
                            <thead>
                                <tr>
                                    <th>No. control</th>
                                    <th>Nombre del alumno</th>
                                    <th>Semestre</th>
                                    <th>Grupo</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="mt-3">
                                    <td>17328060220509</td>
                                    <td>Lagunes Robles Jesus Guillermo</td>
                                    <td>6</td>
                                    <td>H</td>
                                    <td>Cursando</td>
                                    <td>
                                        <Link to="/dashboard/alumno" className="btn btn-sm btn-light">
                                            <MoreHoriz className="text-info"/> Ver más
                                        </Link>
                                    </td>
                                </tr>
                                <tr className="mt-3">
                                    <td>17328060220509</td>
                                    <td>Lagunes Robles Jesus Guillermo</td>
                                    <td>6</td>
                                    <td>H</td>
                                    <td>Cursando</td>
                                    <td>
                                        <Link to="/dashboard/alumno" className="btn btn-sm btn-light">
                                            <MoreHoriz className="text-info"/> Ver más
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Busqueda
