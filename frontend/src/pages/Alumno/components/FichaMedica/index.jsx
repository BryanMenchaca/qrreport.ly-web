import React from 'react'
import { MoreVert } from '@material-ui/icons';
import starOfLife from '../../../../assets/medic-id.png'

const FichaMedica = () => {
    return (
        <div className="box">
            <div className="d-flex mb-2">
                <img src={starOfLife} alt="medic" className="mr-2" height="25px"/>
                <h5 className="text-danger mr-auto">Ficha médica</h5>
                <a className="text-secondary" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                    <MoreVert/>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Editar</a>
                    <a className="dropdown-item" href="#">Exportar PDF</a>
                </div>
            </div>
            <InfoItem label="Padecimientos médicos" data="Ninguna indicación"/>
            <InfoItem label="Notas médicas" data="Ninguna indicación"/>
            <InfoItem label="Alergías y sus reacciones" data="Ninguna indicación"/>
            <InfoItem label="Medicamentos" data="Ninguna indicación"/>
            <label htmlFor="" className="text-danger">
                <small>Contacto de emergencia</small>
            </label>
            <br/>
            <label htmlFor="" className="text-danger">
                <small>mamá</small>
            </label>
            <p className="text-secondary">Laura Recobos</p>
            <p className="text-secondary">+52 833 446 2693</p>
            <label htmlFor="" className="text-secondary">
                <small>celular</small>
            </label>
            <br/>
            <InfoItem label="Grupo sanguíeno" data="O+"/>
            <InfoItem label="Peso" data="58 kg"/>
            <InfoItem label="Estatura" data="182 cm"/>
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
