import react from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import "./css/Juego.css"


function Juego() {

  const [mostrarTuto, setMostrarTuto] = useState(false);

  function reset() {
    const iframe = document.getElementById('miIframe');
    iframe.src = iframe.src;
    console.log(iframe.src)
  }

  const toggleInfo = () => {
    setMostrarTuto(!mostrarTuto);
  };

  return (
    <>
      <div className="main-container">
        <div className="containerGame">
          <h2>Solaris Stike</h2>
          <div>
            <h4>Bienvenido, mi Eco-Amigo, a una aventura única donde te convertirás en un maestro de la energía solar.</h4>
            <p>En 'Solaris Strike', te sumergirás en el emocionante mundo de los paneles solares y la iluminación ecológica. Tu misión es ayudar a que los focos brillen como nunca antes al dirigir rayos de luz solar hacia ellos.</p>
            <p>Controlando un poderoso panel solar, tendrás la tarea de iluminar ciudades, parques y lugares oscuros en todo el mundo. Utiliza la energía del sol para disparar haces de luz precisos y encender los focos apagados.</p>
          </div>
          <button id="resetButton" onClick={toggleInfo}>
            Como jugar
          </button>
          {mostrarTuto && (
            <div id="tuto-text">
              <div class="cuadro-amarillo">
                <h3>Controles:</h3>
                <p>Barra de espacio: Disparar e iniciar el juego por primera vez</p>
                <p>Flechas izquierda y derecha: Movimiento</p>
                <br></br>
                <h3>Power Ups:</h3>
                <p>Martillo: Otorga un escudo temporal</p>
              </div>
            </div>
          )}
          <br></br>
          <div id="iframeContainer">
            <iframe id="miIframe" src="/galaga/index.html"></iframe>
          </div>
          <button id="resetButton" onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Juego;