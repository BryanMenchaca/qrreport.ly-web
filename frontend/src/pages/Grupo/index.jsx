import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MoreHoriz } from '@material-ui/icons'

const Index = (props) => {
    const [grupo, setGrupo] = useState([]);
    const params = props.match.params.grupo.split('');

    useEffect(() => {
        setGrupo(params);
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h4>{`${grupo[0]} ° ${grupo[1]}`} - Programación</h4>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-12">
                    <span><b>Generación: </b>2019-2022</span>
                    <button className="btn btn-info btn-sm float-right">
                        Exportar PDF
                    </button>
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
                                    <th>Reportes</th>
                                    <th>Citatorios</th>
                                    <th>Suspensiones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="mt-3">
                                    <td>17328060220509</td>
                                    <td>Lagunes Robles Jesus Guillermo</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>
                                        <Link to="/dashboard/alumno" className="btn btn-sm btn-light">
                                            <MoreHoriz className="text-info"/> Ver más
                                        </Link>
                                    </td>
                                </tr>
                                <tr className="mt-3">
                                    <td>17328060220509</td>
                                    <td>Lagunes Robles Jesus Guillermo</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
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

export default Index
