import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
      <>
        <nav className="navbar">
            <a href="/" className="img"><img src="/itrlogo.png" width="140" /></a>
            <ul className="nav-links"> 
            <div className="logo" >
                <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Renault.png" alt="Logo" />
            </div>
                <li><Link to="/">PRINCIPAL</Link></li>
                <li><Link to="/info">INFO</Link></li>
                <li><Link to="/juego">JUEGO</Link></li>
                <li><Link to="/calculadora">CALCULADORA</Link></li>
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