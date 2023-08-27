import React from "react";
import './css/B-Ven.css'; 
import { Link} from "react-router-dom";

function Bven(){

return(
    <>
    <div className="fondo1">
    <div className="tarjeta1">
    <h1 style={{ color: 'rgb(123, 19, 21)' }}>Ventajas de los Paneles solares</h1>
    <ul>
        <h4><strong style={{ color: 'rgb(123, 19, 21)' }}>Energia renobable y limpia: </strong>Los paneles solares utilizan la energía del sol para generar electricidad, lo que significa que es una fuente de energía renovable y limpia. No emiten gases de efecto invernadero ni contaminantes atmosféricos durante su operación, lo que contribuye a la reducción de la huella de carbono.</h4>
        <h4><strong style={{ color: 'rgb(123, 19, 21)' }}>Reducción de Costos a Largo Plazo: </strong> Aunque la inversión inicial en paneles solares puede ser significativa, a largo plazo permiten ahorrar en costos de electricidad. Una vez instalados, los paneles solares pueden generar energía durante varias décadas</h4>
        <h4><strong style={{ color: 'rgb(123, 19, 21)' }}>Bajos Costos de Mantenimiento: </strong> Los paneles solares requieren muy poco mantenimiento. Solo es necesario limpiarlos periódicamente para asegurar un rendimiento óptimo. Además, la mayoría de los sistemas vienen con garantías de larga duración.</h4>
        <h4><strong style={{ color: 'rgb(123, 19, 21)' }}>Aumento del Valor de la Propiedad: </strong> La instalación de paneles solares puede aumentar el valor de una propiedad. Los compradores valoran la eficiencia energética y la capacidad de generar su propia electricidad, lo que puede hacer que una propiedad sea más atractiva en el mercado.</h4>
        <h4><strong style={{ color: 'rgb(123, 19, 21)' }}>Incentivos y Subsidios: </strong> En muchos lugares, hay incentivos gubernamentales y programas de subsidios disponibles para alentar la instalación de sistemas solares. Estos programas pueden reducir significativamente los costos iniciales de inversión.</h4>
    </ul>
    </div>
    <Link  className="regresar" to="/info">Regresar</Link>
    </div>
    </>
);
}
export default Bven;