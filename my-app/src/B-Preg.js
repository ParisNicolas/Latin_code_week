import React from "react";
import './B-Ven.css'; 

function Bpreg(){

return(
    <>
    <div className="fondo1">
    <div className="tarjeta1">
    <h1 style={{ color: 'rgb(123, 19, 21)' }}>Preguntas Comunes</h1>
    <ul>
        <h4>
        <strong style={{ color: 'rgb(123, 19, 21)' }}>¿Qué factores afectan el rendimiento de los paneles solares?</strong><br></br>
        Respuesta: El rendimiento de los paneles solares puede verse afectado por factores como la ubicación geográfica,
        la inclinación y orientación del panel, la calidad de los paneles y la limpieza regular.
        </h4>
        <h4>
        <strong style={{ color: 'rgb(123, 19, 21)' }}>¿Cuánto tiempo duran los paneles solares?</strong><br></br>
        Respuesta: La mayoría de los paneles solares están diseñados para tener una vida útil de al menos 25 a 30 años,
        muchos pueden seguir generando energía incluso después de esa fecha.
        </h4>
        <h4>
        <strong style={{ color: 'rgb(123, 19, 21)' }}>¿Cuánto espacio se necesita para instalar paneles solares en una casa?</strong><br></br>
        Respuesta: La cantidad de espacio necesario depende del tamaño y la potencia de los paneles solares.
        Un promedio de 1000 vatios de capacidad requerirá aproximadamente 6-8 metros cuadrados de espacio.
        </h4>
        <h4>
        <strong style={{ color: 'rgb(123, 19, 21)' }}>¿Cuándo se amortiza la inversión en paneles solares?</strong><br></br>
        Respuesta: El tiempo de amortización depende del costo inicial,
        el ahorro en facturas de electricidad y los incentivos disponibles. En promedio, puede variar entre 5 y 10 años.
        </h4>
    </ul>
    </div>
    </div>
    </>
);
}
export default Bpreg;