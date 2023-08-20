import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
      <>
      <nav >
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/juego">Juego</Link></li>
        </ul>
      </nav>
  
     
  
      <Outlet></Outlet>
      </>
    );
  }
  
  export default Navbar;