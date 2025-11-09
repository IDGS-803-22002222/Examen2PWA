import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink to="/" className="navbar-brand" onClick={closeNavbar}>
          Congreso TIC's
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeNavbar}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/participantes"
                className="nav-link"
                onClick={closeNavbar}
              >
                Participantes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/registro"
                className="nav-link"
                onClick={closeNavbar}
              >
                Registro
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
