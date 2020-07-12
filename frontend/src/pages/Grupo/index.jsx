import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MoreHoriz } from '@material-ui/icons'
//import jsPDF from 'jspdf'
//import html2canvas from 'html2canvas'

import GrupoSkeleton from './LoadingSkeleton/'

const Grupo = ({match}) => {
    const [loading, setLoading] = useState(true);
    const [grupo, setGrupo] = useState([]);
    const [generacion, setGeneracion] = useState([]);
    const params = match.params;

    useEffect(() => {
        setGrupo(params.grupo.split(''));
        setGeneracion(params.generacion.split(''));
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, [params.grupo, params.generacion]);

    return (
        <div id="pdfdiv">
            <div className="row">
                <div className="col-md-12">
                    <h4>{`${grupo[0]} ° ${grupo[1]}`} - Programación</h4>
                </div>
            </div>
            <div className="row" id="ignorePDF">
                <div className="col-md-12 d-flex justify-content-end">
                    <button onClick={() => window.print()} className="btn btn-info btn-sm ml-2 ignorePrint">
                        Exportar PDF
                    </button>
                    <button className="btn btn-danger btn-sm ml-2 ignorePrint">
                        Nuevo reporte
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-12">
                    {loading ?
                    <GrupoSkeleton/> :
                    <div id="pdfdiv" className="table-responsive-xl">
                        <table className="table custom-table">
                            <thead>
                                <tr>
                                    <th>No. control</th>
                                    <th>Nombre del alumno</th>
                                    <th>Reportes</th>
                                    <th>Citatorios</th>
                                    <th>Suspensiones</th>
                                    <th className="ignorePrint">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="mt-3">
                                    <td>17328060220509</td>
                                    <td>Lagunes Robles Jesus Guillermo</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td className="ignorePrint">
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
                                    <td className="ignorePrint">
                                        <Link to="/dashboard/alumno" className="btn btn-sm btn-light">
                                            <MoreHoriz className="text-info"/> Ver más
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> }
                </div>
            </div>
        </div>
    )
}

export default Grupo
