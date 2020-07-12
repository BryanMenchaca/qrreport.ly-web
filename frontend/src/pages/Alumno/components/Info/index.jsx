import React from 'react'
import imgDefault from '../../../../assets/default.png'

const Info = () => {
    return (
        <div className="box">
            <div className="row">
                <div className="col-md-12 d-flex">
                    <img 
                        src={imgDefault} 
                        alt="student" 
                        className="rounded-circle"
                        id="student-photo"
                        width="100px"/>
                    <h6 className="my-auto ml-4" style={{fontSize: 19}}>
                        Jesus Guillermo Lagunes Robles
                    </h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="custom-badge">
                        Programación
                    </div>
                </div>
            </div>
            <div className="row d-flex">
                <div className="col-md-6">
                    <ul className="list-unstyled" style={{fontSize: 15, fontWeight: 600}}>
                        <li className="mb-2">Semestre</li>
                        <li className="mb-2">Grupo</li>
                        <li className="mb-2">Generación</li>
                        <li className="mb-2">Estatus</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="list-unstyled" style={{fontSize: 15, fontWeight: 400}}>
                        <li className="mb-2">6</li>
                        <li className="mb-2">H</li>
                        <li className="mb-2">2017 - 2020</li>
                        <li className="mb-2">Cursando</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Info
