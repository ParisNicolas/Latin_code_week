import React, {useState} from "react";
import { Link } from "react-router-dom";
import Cuestionario from "./Cuestionario";
import Solaris from "./Solaris";
import './css/Juegos.css';


function Juegos() {
    const [juego, setJuego] = useState("solaris");

    let handleGame = (e)=>{
        setJuego(e.target.value);
    }

    return (
        <>
        <div className="barra">
            <select onChange={handleGame} className="barra-select">
                <option value="solaris">Solaris</option>
                <option value="cuestionario">Cuestionario</option>
            </select>
            {juego == "solaris" && <Solaris/>}
            {juego == "cuestionario" && <Cuestionario/>}
        </div>
        </>
    );
}

export default Juegos;