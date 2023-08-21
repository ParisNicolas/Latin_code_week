import React, {useEffect} from "react";
import "./game.css"


function Juego() {
      
  function reset(){
    const iframe = document.getElementById('miIframe');
    iframe.src = iframe.src;
    console.log(iframe.src)
  }

    return (
      <div className="containerGame">
        <h1>Juego</h1>
        <div id="iframeContainer">
          <iframe id="miIframe" src="/galaga/index.html"></iframe>
        </div>
        <button id="resetButton" onClick={reset}>Reset</button>
      </div>
    );
  }
  
  export default Juego;