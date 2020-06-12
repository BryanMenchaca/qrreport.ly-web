import React from 'react'

const Info = () => {
    return (
        <div className="box">
            <div className="row">
                <div className="col-md-5 d-flex">
                    <div 
                    className="anim my-3"
                    style={{
                        width: 120,
                    }}></div>
                    <div 
                    className="my-auto ml-4 anim"
                    style={{
                        width: 230,
                        height: 30
                    }}></div>
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
