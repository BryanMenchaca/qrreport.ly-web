import React, { useContext } from "react";
import { PersonOutlineOutlined } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import { UserContext } from "../../contexts/UserContext";
import "./styles.css";

const NavbarTop = () => {
  const { fullname } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <a href="/dashboard" className="navbar-brand mr-auto">
        <img src={logo} alt="qrreport" width="90px" />
      </a>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle nav-white"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
            >
              <PersonOutlineOutlined /> {fullname}
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/logout">
                Cerrar sesión
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarTop;
