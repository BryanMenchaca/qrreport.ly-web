import React, { useState, useEffect } from 'react'
import api from "../../services/students"

const Editar = ({match}) => {
    const [studentData, setStudentData] = useState({});
    const [fichaMedica, setFichaMedica] = useState({});
    const { noControl } = match.params;

    useEffect(() =>{
        api
            .getStudentInfo(noControl)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="box">
            
        </div>
    )
}

export default Editar
