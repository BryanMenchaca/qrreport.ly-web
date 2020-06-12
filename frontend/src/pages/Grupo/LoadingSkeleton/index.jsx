import React from 'react'

const GrupoSkeleton = () => {
    return (
        <div className="table-responsive-xl">
            <table className="table custom-table">
                <thead>
                    <tr>
                        <th>No. control</th>
                        <th>Nombre del alumno</th>
                        <th>Reportes</th>
                        <th>Citatorios</th>
                        <th>Suspensiones</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    { [1,2,3,4,5,6,7].map(value => {
                        return (
                            <tr className="mt-3" key={value}>
                                {[80,70,30,28,20,70].map((value, index) => {
                                    return (
                                        <td>
                                            <div 
                                            key={index}
                                            style={{width: `${value}%`}}
                                            className="anim">-
                                            </div>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GrupoSkeleton
