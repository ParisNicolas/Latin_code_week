import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './Barra.css';
import './Info.css'; 
import Form from './formGPT'

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
          <li><Link className="items" to="/preg">Preguntas frecuentes</Link></li>
          <li><Link className="items" to="/man">Mantenimiento</Link></li>
          <li><Link className="items" to="/ven">Ventajas</Link></li>
          <li><Link className="items" to="/tec">Tecnologias emergentes</Link></li>
        </ul>
      </div>
      <div className="content">
        <div className="title">
            <h1> Si tenes alguna duda sobre paneles solares puedes coonsultar nuestro catalogo</h1>
            <iframe src="https://wordwall.net/embed/7509c1f3f1a040149c4f0530388131b8?themeId=1&templateId=3&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>
            <Form/>
        </div>
      </div>

      
      
    </div>
    <Outlet></Outlet>
    </>
  );
}

export default Info;