import React, { useState } from "react";
import './Barra.css';

function Info() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <div
        className={`barra ${sidebarVisible ? 'active' : ''}`}
      >
        <h2>Barra Lateral</h2>
        <ul>
          <li><a href="/info">Inicio</a></li>
          <li><a href="/info">Acerca de</a></li>
          <li><a href="/info">Servicios</a></li>
          <li><a href="/info">Contacto</a></li>
        </ul>
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        &#9776; Mostrar Barra Lateral
      </button>
    </div>
  );
}

export default Info;