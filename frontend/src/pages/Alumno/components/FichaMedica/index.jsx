import React from 'react'
import starOfLife from '../../../../assets/medic-id.png'

const FichaMedica = () => {
    return (
        <div className="box">
            <div className="d-flex mb-2">
                <img src={starOfLife} alt="medic" className="mr-2" height="25px"/>
                <h5 className="text-danger mr-auto">Ficha médica</h5>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <InfoItem label="Padecimientos médicos" data="Ninguna indicación"/>
                </div>
                <div className="col-md-6">
                    <InfoItem label="Notas médicas" data="Ninguna indicación"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-6">
                    <InfoItem label="Alergías y sus reacciones" data="Ninguna indicación"/>
                </div>
                <div className="col-md-6">
                    <InfoItem label="Medicamentos" data="Ninguna indicación"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4">
                    <InfoItem label="Grupo sanguíeno" data="O+"/>
                </div>
                <div className="col-md-4">
                    <InfoItem label="Peso" data="58 kg"/>
                </div>
                <div className="col-md-4">
                    <InfoItem label="Estatura" data="182 cm"/>
                </div>
            </div>
            <label htmlFor="" className="text-danger">
                <small className="font-weight-bold">Contacto de emergencia</small>
            </label>
            <div className="row">
                <div className="col-md-3">
                    <InfoItem label="Parentesco" data="mamá"/>
                </div>
                <div className="col-md-3">
                    <InfoItem label="Nombre" data="Laura Recobos"/>
                </div>
                <div className="col-md-3">
                    <InfoItem label="Teléfono" data="+52 833 446 2693"/>
                </div>
                <div className="col-md-3">
                    <InfoItem label="Etiqueta" data="Celular"/>
                </div>
            </div>
            <br/>
            <div className="w-100">
                <label htmlFor="" className="text-muted">
                    <small><b>ACTUALIZADO</b></small>
                </label>
                <p className="text-muted mr-auto"><small>12/03/2020 4:24 p.m.</small></p>
            </div>
        </div>
    )
}

const InfoItem = (props) => {
    const { label, data } = props;
    return (
        <div>
            <label htmlFor="" className="text-danger">
                <small>{label}</small>
            </label>
            <p className="text-secondary">{data}</p>
        </div>
    )
}

export default FichaMedica
