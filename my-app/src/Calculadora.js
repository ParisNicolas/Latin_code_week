import React, { useState } from 'react';
import './css/Calculadora.css'; 

const Calcualdora = () => {

    const [mostrarInfo, setMostrarInfo] = useState(false); 
    const [consumoMensual, setConsumoMensual] = useState('');
    const [resultado, setResultado] = useState('');

    const calcularAhorro = () => {
        const costoElectricidad = 21.855;
        const ahorroMensual = consumoMensual * costoElectricidad;

        setResultado(`El ahorro mensual estimado con paneles solares es de $${ahorroMensual.toFixed(2)} 💸💸.`);
    };

    const toggleInfo = () => {
        setMostrarInfo(!mostrarInfo);
    };


    return (
        <div className='main-container'>
        <div className="calculator">
            <h2>Calculadora de Ahorro-Consumo</h2>
            <label htmlFor="consumo">Consumo de Electricidad Mensual (kWh):</label>
            <input type="number" id="consumo" placeholder="Coloque su gasto en kWh - Aplicable para Argentina" value={consumoMensual} onChange={(e) => setConsumoMensual(e.target.value)} />
            <button onClick={calcularAhorro}><h3>Calcular</h3></button>
            <p className="resultado">{resultado}</p>

            <div>
            <button onClick={toggleInfo}>
            <h3>Datos Interesantes</h3>
            </button>
            {mostrarInfo && (
                        <div className="info-text">
                            <p>¿Cómo sacar el consumo mensual en kWh?</p>
                            <p className="size-text">Si queremos conocer su consumo mensual, sólo tenemos que multiplicar su consumo diario por el número de días del mes, por ejemplo, 30. Tendríamos un consumo mensual de 12 kWh.</p>
                            <p>¿Cuál es el consumo normal de kWh en una casa?</p>
                            <p className="size-text">El consumo de energía eléctrica promedio en el hogar en kWh va de 150 a 300 mensuales. Suele aumentar en verano.</p>
                        </div>
                    )}

        </div>
        </div>
        </div>
    );
}

export default Calcualdora;