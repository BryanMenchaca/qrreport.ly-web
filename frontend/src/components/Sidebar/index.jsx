import React from 'react'
import { Link } from 'react-router-dom'
import { HomeOutlined, 
        SearchOutlined, 
        SettingsOutlined, 
        PeopleOutline, 
        PersonAddOutlined } 
from '@material-ui/icons'
import './menu.css'

const Sidebar = () => {
    return (
        <div id="sidebar" className="sidebar">
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard"><HomeOutlined/> <b>Inicio</b> </Link>
                </li>
                <li>
                    <Link to="/dashboard/busqueda"><SearchOutlined/> <b>Busqueda</b></Link>
                </li>
                <li>
                    <Link to="/dashboard/grupos"><PeopleOutline/> <b>Grupos</b></Link>
                </li>
                <li>
                    <Link to="/dashboard/registrar"><PersonAddOutlined/> <b>Registrar alumno</b> </Link>
                </li>
                <li>
                    <Link to="#"><SettingsOutlined/> <b>Configuración</b> </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
