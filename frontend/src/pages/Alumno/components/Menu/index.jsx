import React from "react";

const Menu = () => {
  return (
    <ul
      className="nav nav-pills my-4 ignorePrint"
      id="pills-tab"
      role="tablist"
    >
      <li className="nav-item" role="presentation">
        <a
          className="nav-link active"
          id="pills-home-tab"
          data-toggle="pill"
          href="#pills-historial"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Historial
        </a>
      </li>
      <li className="nav-item" role="presentation">
        <a
          className="nav-link"
          id="pills-profile-tab"
          data-toggle="pill"
          href="#pills-ficha"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Ficha médica
        </a>
      </li>
      <li className="nav-item" role="presentation">
        <a
          className="nav-link"
          id="pills-contact-tab"
          data-toggle="pill"
          href="#pills-info"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          Más información
        </a>
      </li>
    </ul>
  );
};

export default Menu;
