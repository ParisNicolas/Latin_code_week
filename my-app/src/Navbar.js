import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
      <>
        <nav className="navbar">
            <ul className="nav-links">
            <div className="logo">
                <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Renault.png" alt="Logo" />
            </div>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/info">Info</Link></li>
                <li><Link to="/juego">Juego</Link></li>
            <div className="logo">
                <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Renault.png" alt="Logo" />
            </div>
            </ul>
        </nav>
    <Outlet></Outlet>
    </>
    );
  }
  
  export default Navbar;