import React from 'react'

const BusquedaSkeleton = () => {
    return (
        <div className="table-responsive-xl">
            <table className="table custom-table">
                <thead>
                    <tr>
                        <th>No. control</th>
                        <th>Nombre del alumno</th>
                        <th>Semestre</th>
                        <th>Grupo</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    { [1,2,3,4,5,6,7].map(value => {
                        return (
                            <tr className="mt-3" key={value.toString()}>
                                {[80,70,30,40,70,70].map((value, index) => {
                                    return (
                                        <td key={index}>
                                            <div 
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

export default BusquedaSkeleton
