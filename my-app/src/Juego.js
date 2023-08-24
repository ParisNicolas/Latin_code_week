import React, {useEffect} from "react";
import "./game.css"


function Juego() {
      
  function reset(){
    const iframe = document.getElementById('miIframe');
    iframe.src = iframe.src;
    console.log(iframe.src)
  }

    return (
      <div className="main-container"> 
      <div className="containerGame">
        <h1>Juego</h1>
        <h3>Rápido mi eco-amigo trata de encender todos los foquitos, y evita que tu eficencia baje. Sino tu panel se rompera!!.</h3>
        <div id="iframeContainer">
          <iframe id="miIframe" src="/galaga/index.html"></iframe>
        </div>
        <button id="resetButton" onClick={reset}>Reset</button>
      </div>
      </div>
    );
  }
  
  export default Juego;