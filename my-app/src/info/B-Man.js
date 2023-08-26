import React from "react";
import { Link, Outlet } from "react-router-dom";
import './css/B-Man.css'; 

function Bman(){

return(
    <>
    <div className="fondo2">
    <div className="tarjeta2">
    <h1 style={{ color: 'rgb(123, 19, 21)' }}>Mantenimiento de paneles solares</h1>
    <ul>
        <h4>Se recomienda realizar una limpieza o una inspeccion regular de los paneles, para verificar su correcto funcionamiento y que estos tengan
            un rendimiento optimo.
            <br></br>
            <br></br>
            Segun las condiciones climaticas en donde viva, va a hacer variar la frecuencia con la que va a tener que limpiar su/s paneles. Por ejemplo si vive en una zona desertica o arida, va a tener
            que limpiar sus paneles msa seguido para evitar la acumulacion de polvo, en cambio si vive en una zona mas humeda o con lluvias regulares, puede disminuir la frecuencia de mantenimiento
            ya que estos se estarian "limpiando solos".
            <br></br>
            <br></br>
            Tambien es muy importante Llevar un registro detallado de las inspecciones y el mantenimientos realizados. Esto te ayudará a hacer un seguimiento del estado del sistema a lo largo del tiempo.
            Recuerda que la mayoria de estos paneles cuentan con seguro, asi que siempre puedes contactar a alguien en caso de tener un problema. 
        </h4>
    </ul>
    </div>
    <Link  className="regresar" to="/info">Regresar</Link>
    </div>
    <Outlet></Outlet>
    </>
);
}

export default Bman;