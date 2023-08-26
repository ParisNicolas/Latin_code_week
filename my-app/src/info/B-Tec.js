import React from "react";
import { Link, Outlet } from "react-router-dom";
import './css/B-Man.css'; 

function Btec(){

return(
    <>
   <div className="fondo2">
    <div className="tarjeta2">
    <h1 style={{ color: 'rgb(123, 19, 21)' }}>Tecnologias emergentes sobre los paneles solares</h1>
    <h3>Existen muchos tipos de tecnologias emergentes, a continuacion te mostramos algunas </h3>
    <ul>
        <h4>
        <strong style={{ color: 'rgb(123, 19, 21)' }}>Numero1</strong><br></br>
        Paneles Solares de Capa Delgada: Estos paneles utilizan materiales semiconductores en capas delgadas, lo que los hace más flexibles y livianos. Son ideales
        para aplicaciones en las que se requiere flexibilidad, como la integración en superficies curvas o flexibles.
        </h4>
        <h4>
        <strong style={{ color: 'rgb(123, 19, 21)' }}>Numero2</strong><br></br>
        Paneles Solares Perovskita: Los paneles solares de perovskita son una tecnología emergente que utiliza un mineral llamado perovskita para absorber la luz solar y generar electricidad.
        Son eficientes y tienen un bajo costo de producción, lo que los hace prometedores para la adopción masiva.
        Las perovskitas son un tipo de material cristalino con propiedades fotovoltaicas excepcionales 
        </h4>
        <h4>
        <strong style={{ color: 'rgb(123, 19, 21)' }}>Numero3</strong><br></br>
        Paneles Solares Flotantes: Los paneles solares flotantes se instalan en cuerpos de agua, como lagos y embalses.
        Además de generar energía, reducen la evaporación del agua y mejoran la eficiencia de la generación solar debido al efecto de enfriamiento del agua.
        </h4>
    </ul>
    </div>
    <Link  className="regresar" to="/info">Regresar</Link>
    </div>
    </>
);
}
export default Btec;