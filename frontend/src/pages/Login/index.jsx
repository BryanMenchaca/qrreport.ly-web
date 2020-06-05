import React from 'react'
import logo from '../../assets/logo.png'

const Index = () => {
    const onSubmit = () => console.log('Clicked');
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="qrreport" className="my-5" width="180px"/>
            </div>
            <form noValidate onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                    type="email" 
                    name="email" 
                    className="form-control"
                    placeholder="Correo electrónico" 
                    required />
                </div>
                <div className="form-group">
                    <input 
                    type="password" 
                    name="password" 
                    className="form-control"
                    placeholder="Contraseña" 
                    required />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block">Ingresar</button>
                </div>
            </form>
        </div>
    )
}

export default Index
