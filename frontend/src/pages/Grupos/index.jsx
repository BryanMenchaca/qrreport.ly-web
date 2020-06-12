import React from 'react'

import CardGrupo from './components/GrupoItem'

const grupos = [
    {semestre: '2', grupo: 'I', especialidad: 'Programación', reportes: 0, generacion: '2019-2022'},
    {semestre: '2', grupo: 'J', especialidad: 'Contabilidad', reportes: 0, generacion: '2019-2022'},
    {semestre: '2', grupo: 'K', especialidad: 'Enfermería General', reportes: 0, generacion: '2019-2022'},
    {semestre: '2', grupo: 'L', especialidad: 'Enfermería General', reportes: 0, generacion: '2019-2022'},
    {semestre: '2', grupo: 'M', especialidad: 'Laboratorísta Químico', reportes: 0, generacion: '2019-2022'},
    {semestre: '2', grupo: 'N', especialidad: 'Trabajo Social', reportes: 0, generacion: '2019-2022'},
    {semestre: '2', grupo: 'O', especialidad: 'Trabajo Social', reportes: 0, generacion: '2019-2022'},
    {semestre: '4', grupo: 'I', especialidad: 'Programación', reportes: 0, generacion: '2018-2021'},
    {semestre: '4', grupo: 'J', especialidad: 'Contabilidad', reportes: 0, generacion: '2018-2021'},
    {semestre: '4', grupo: 'K', especialidad: 'Enfermería General', reportes: 0, generacion: '2018-2021'},
    {semestre: '4', grupo: 'L', especialidad: 'Enfermería General', reportes: 0, generacion: '2018-2021'},
    {semestre: '4', grupo: 'M', especialidad: 'Laboratorísta Químico', reportes: 0, generacion: '2018-2021'},
    {semestre: '4', grupo: 'N', especialidad: 'Trabajo Social', reportes: 0, generacion: '2018-2021'},
    {semestre: '4', grupo: 'O', especialidad: 'Trabajo Social', reportes: 0, generacion: '2018-2021'},
    {semestre: '6', grupo: 'H', especialidad: 'Programación', reportes: 0, generacion: '2017-2020'},
    {semestre: '6', grupo: 'I', especialidad: 'Contabilidad', reportes: 0, generacion: '2017-2020'},
    {semestre: '6', grupo: 'J', especialidad: 'Enfermería General', reportes: 0, generacion: '2017-2020'},
    {semestre: '6', grupo: 'K', especialidad: 'Enfermería General', reportes: 0, generacion: '2017-2020'},
    {semestre: '6', grupo: 'L', especialidad: 'Laboratorísta Químico', reportes: 0, generacion: '2017-2020'},
    {semestre: '6', grupo: 'M', especialidad: 'Trabajo Social', reportes: 0, generacion: '2017-2020'},
    {semestre: '6', grupo: 'N', especialidad: 'Trabajo Social', reportes: 0, generacion: '2017-2020'},
]

const index = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h4>Grupos</h4>
                </div>
            </div>
            <div className="row">
                {
                    grupos.map(grupo => {
                        return <CardGrupo 
                        semestre={grupo.semestre} 
                        grupo={grupo.grupo} 
                        especialidad={grupo.especialidad}
                        reportes={grupo.reportes}
                        generacion={grupo.generacion}
                        key={grupo.semestre + grupo.grupo} />
                    })
                }
            </div>
        </div>
    )
}

export default index
