import React from 'react'
import imgDefault from '../../assets/default.png'

const Info = () => {
    return (
        <div className="box">
            <div className="row">
                <div className="col-md-5 d-flex">
                    <img 
                    src={imgDefault} 
                    alt="student" 
                    className="rounded-circle"
                    id="student-photo"
                    width="140px"/>
                    <h5 className="my-auto ml-4">
                        Jesus Guillermo Lagunes Robles
                    </h5>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-sm-4 info-student">
                            <label htmlFor="" className="text-secondary">
                                <small>Número de control</small>
                            </label>
                            <p>17328060220509</p>
                            <label htmlFor="" className="text-secondary">
                                <small>Especialidad</small>
                            </label>
                            <p>Programación</p>
                        </div>
                        <div className="col-sm-4 sm-m">
                            <label htmlFor="" className="text-secondary">
                                <small>Semestre y grupo</small>
                            </label>
                            <p>6 ° H</p>
                            <label htmlFor="" className="text-secondary">
                                <small>Generación</small>
                            </label>
                            <p>2017-2020</p>
                        </div>
                        <div className="col-sm-4 sm-m">
                            <label htmlFor="" className="text-secondary">
                                <small>CURP</small>
                            </label>
                            <p>ABCD123456HTSMA5</p>
                            <label htmlFor="" className="text-secondary">
                                <small>Número de seguridad social</small>
                            </label>
                            <p>1234567890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
