import React from 'react'

import CardGrupo from './components/GrupoItem'

const grupos = {
    first: [
        {semestre: '2', grupo: 'I', especialidad: 'Programación', reportes: 0, generacion: '2019-2022'},
        {semestre: '2', grupo: 'J', especialidad: 'Contabilidad', reportes: 0, generacion: '2019-2022'},
        {semestre: '2', grupo: 'K', especialidad: 'Enfermería General', reportes: 0, generacion: '2019-2022'},
        {semestre: '2', grupo: 'L', especialidad: 'Enfermería General', reportes: 0, generacion: '2019-2022'},
        {semestre: '2', grupo: 'M', especialidad: 'Laboratorísta Químico', reportes: 0, generacion: '2019-2022'},
        {semestre: '2', grupo: 'N', especialidad: 'Trabajo Social', reportes: 0, generacion: '2019-2022'},
        {semestre: '2', grupo: 'O', especialidad: 'Trabajo Social', reportes: 0, generacion: '2019-2022'},
    ],
    second: [
        {semestre: '4', grupo: 'I', especialidad: 'Programación', reportes: 0, generacion: '2018-2021'},
        {semestre: '4', grupo: 'J', especialidad: 'Contabilidad', reportes: 0, generacion: '2018-2021'},
        {semestre: '4', grupo: 'K', especialidad: 'Enfermería General', reportes: 0, generacion: '2018-2021'},
        {semestre: '4', grupo: 'L', especialidad: 'Enfermería General', reportes: 0, generacion: '2018-2021'},
        {semestre: '4', grupo: 'M', especialidad: 'Laboratorísta Químico', reportes: 0, generacion: '2018-2021'},
        {semestre: '4', grupo: 'N', especialidad: 'Trabajo Social', reportes: 0, generacion: '2018-2021'},
        {semestre: '4', grupo: 'O', especialidad: 'Trabajo Social', reportes: 0, generacion: '2018-2021'},
    ],
    third: [
        {semestre: '6', grupo: 'H', especialidad: 'Programación', reportes: 0, generacion: '2017-2020'},
        {semestre: '6', grupo: 'I', especialidad: 'Contabilidad', reportes: 0, generacion: '2017-2020'},
        {semestre: '6', grupo: 'J', especialidad: 'Enfermería General', reportes: 0, generacion: '2017-2020'},
        {semestre: '6', grupo: 'K', especialidad: 'Enfermería General', reportes: 0, generacion: '2017-2020'},
        {semestre: '6', grupo: 'L', especialidad: 'Laboratorísta Químico', reportes: 0, generacion: '2017-2020'},
        {semestre: '6', grupo: 'M', especialidad: 'Trabajo Social', reportes: 0, generacion: '2017-2020'},
        {semestre: '6', grupo: 'N', especialidad: 'Trabajo Social', reportes: 0, generacion: '2017-2020'},
    ]
}

const Grupos = () => {   
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h4>Grupos</h4>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <h6 style={{color: '#a4b1cb'}}>Primer año</h6>
                </div>
                {
                    grupos.first.map((grupo, index) => {
                        return <CardGrupo 
                        semestre={grupo.semestre} 
                        grupo={grupo.grupo} 
                        especialidad={grupo.especialidad}
                        reportes={grupo.reportes}
                        generacion={grupo.generacion}
                        key={index} />
                    })
                }
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <h6 style={{color: '#a4b1cb'}}>Segundo año</h6>
                </div>
                {
                    grupos.second.map((grupo, index) => {
                        return <CardGrupo 
                        semestre={grupo.semestre} 
                        grupo={grupo.grupo} 
                        especialidad={grupo.especialidad}
                        reportes={grupo.reportes}
                        generacion={grupo.generacion}
                        key={index} />
                    })
                }
            </div>
            <div className="row my-4">
                <div className="col-md-12">
                    <h6 style={{color: '#a4b1cb'}}>Tercer año</h6>
                </div>
                {
                    grupos.third.map((grupo, index) => {
                        return <CardGrupo 
                        semestre={grupo.semestre} 
                        grupo={grupo.grupo} 
                        especialidad={grupo.especialidad}
                        reportes={grupo.reportes}
                        generacion={grupo.generacion}
                        key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Grupos
