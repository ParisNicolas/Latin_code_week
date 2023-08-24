import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './Barra.css';
import './Info.css'; 

function Info() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
    <div className="main-container">
      
      <div className="links">
        <h2>¿Que necesitas?</h2>
        <ul>
          <li><Link to="/preg">Preguntas frecuentes</Link></li>
          <li><Link to="/man">Mantenimiento</Link></li>
          <li><Link to="/ven">Ventajas</Link></li>
          <li><Link to="/tec">Tecnologias emergentes</Link></li>
        </ul>
      </div>
      <div className="content">
        <div className="title">
            <h1> Si tenes alguna duda sobre paneles solares puedes coonsultar nuestro catalogo</h1>
        </div>
      </div>

      
      
    </div>
    <Outlet></Outlet>
    </>
  );
}

export default Info;