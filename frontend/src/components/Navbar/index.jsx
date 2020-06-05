import React from 'react'
import { Menu, PersonOutlineOutlined } from '@material-ui/icons'
import logo from '../../assets/logo.png'

const NavbarTop = () => {

    const toggleSidebar = () => document.querySelector('#sidebar').classList.toggle('toggled');

    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <Menu className="nav-white mr-3" onClick={toggleSidebar}/>
            <a href="/dashboard" className="navbar-brand mr-auto">
                <img src={logo} alt="qrreport" width="90px"/>
            </a>
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle nav-white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                            <PersonOutlineOutlined/> Ing. Maxim Jimenez
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/logout">Cerrar sesión</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarTop
