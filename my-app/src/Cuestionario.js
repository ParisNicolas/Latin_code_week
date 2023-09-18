import React from "react";
import './css/Cuestionario.css';

const stylo1 = {
    border:' none',
    width: '650px', /* Define el ancho deseado para la tarjeta */
    height: '700px',
}

const stylo2 = {
    "text-align": "center",
}

function Cuestionario() {
    return (
        <>
        <div class="fondo-cues">
    <div>
        <h1 class="titulo-cuesrionario-juego">Cuestionario de Eficiencia Energetica</h1>
        <br></br>
        <h5 class="texto-cuestionario">A continuacion vas a tener una serie de preguntas de verdadero o falso para corroborar tus conocimientos sobre eficiencia energetica</h5>
        <p class="texto-cuestionario">Toca cualquir boton para jugar</p>
    </div>
        <div style={stylo2}>
            <iframe src="/Cuestionario/index.html" style={stylo1}/>
        </div>
        </div>
        </>
    )
}

export default Cuestionario;