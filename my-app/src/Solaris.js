import react from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import "./css/Solaris.css"


function Solaris() {

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
          <h1 className="titulo-juego">Solaris Stike</h1>
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
                <p>DISPARAR</p>
                <img className="barraspace" src="https://lh5.googleusercontent.com/Aa9Il6EDRphuEvqrCTIOMd9gqdkmHmO65Lb8SzqOLIAuqXqr1OgmHqwXQtc831b62fUCBXQAstCpUEFUxmzwpQi37qdHRysKfTjb4UdF7-eqoAvG0Nn09RbEAQAVQWOMLA"></img>
                <p>MOVIMIENTOS</p>
                <img className="Flechas" src="https://cdn-icons-png.flaticon.com/512/31/31931.png"></img>
                <img className="Flechas" src="https://cdn-icons-png.flaticon.com/512/30/30997.png"></img>
                <br></br>
                <p>POWER UPS:</p>
                <img className="martillo" src="/galaga/powerUp1.png"></img>
                <p className="zzz">Repara tu panel y otorga un escudo temporal</p>
                <br></br>
                <img className="martillo" src="/galaga/sol_powerup.png"></img>
                <p className="zzz">Sobrecarga energia y otorga un rallo laser</p>
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

export default Solaris;