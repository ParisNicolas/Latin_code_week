import React, {useState} from "react";
import { Link } from "react-router-dom";
import Cuestionario from "./Cuestionario";
import Solaris from "./Solaris";
import './css/Juegos.css';
import { Tooltip as ReactTooltip } from "react-tooltip";


function Juegos() {
    const [juego, setJuego] = useState("solaris");

    let handleGame = (e)=>{
        setJuego(e.target.value);
    }

    return (
      <>
        <div className="barra" data-tooltip-id="tool1">
            <select onChange={handleGame} className="barra-select">
                <option value="solaris">Solaris</option>
                <option value="cuestionario">Cuestionario</option>
            </select>
            {juego === "solaris" && <Solaris/>}
            {juego === "cuestionario" && <Cuestionario/>}
        </div>
        <ReactTooltip
        id="tool1"
        content="¡Elige tu juego!"
        place="bottom"
        />
      </>
    );
}

export default Juegos;