import React from "react";
import { Link, Outlet } from "react-router-dom";
import './css/Info.css'; 
import Chatbot from "./chatGPT"

function Info() {

  return (
    <>
    <div className="main-container">
      
      <div className="links">
        <h2>¿Que necesitas?</h2>
        <ul className="items-container">
          <li><Link className="items" to="/preg">* Preguntas frecuentes</Link></li>
          <li><Link className="items" to="/man">* Mantenimiento</Link></li>
          <li><Link className="items" to="/ven">* Ventajas</Link></li>
          <li><Link className="items" to="/tec">* Tecnologias emergentes</Link></li>
        </ul>
      </div>
      <div className="content">
        <h1>Si tenes alguna duda sobre paneles solares puedes coonsultar nuestro catalogo</h1>
        <br/>
        <Chatbot />
      </div>

      
      
    </div>
    <Outlet></Outlet>
    </>
  );
}

export default Info;