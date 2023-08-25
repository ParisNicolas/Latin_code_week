import react from "react";
import {useState} from 'react';
import {useEffect} from 'react';
import "./Juego.css"


function Juego() {

  const [mostrarTuto, setMostrarTuto] = useState(false);
      
  function reset(){
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
          <h4>Bienvenido mi Eco-Amigo a un juego donde prenderas focos para que brillen como tu.</h4>
          
        </div>
        <button id="resetButton" onClick={toggleInfo}> 
          Como jugar 
        </button>
        {mostrarTuto && (
                        <div className="info-text">
                            <p>¿Cómo sacar el consumo mensual en kWh?</p>
                            
                        </div>
                    )}
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