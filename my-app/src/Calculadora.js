import React, { useState } from 'react';
import './Calculadora.css'; 

const Calcualdora = () => {
    const [consumoMensual, setConsumoMensual] = useState('');
    const [resultado, setResultado] = useState('');

    const calcularAhorro = () => {
        const costoElectricidad = 21.855;
        const ahorroMensual = consumoMensual * costoElectricidad;

        setResultado(`El ahorro mensual estimado con paneles solares es de $${ahorroMensual.toFixed(2)}.`);
    };

    return (
        <>
        <div className='main-container'>
        <div className="calculator">
            <h2>Calculadora de Ahorro-Consumo</h2>
            <label htmlFor="consumo">Consumo de Electricidad Mensual (kWh):</label>
            <input type="number" id="consumo" placeholder="Coloque su gasto en kWh - Aplicable para Argentina" value={consumoMensual} onChange={(e) => setConsumoMensual(e.target.value)} />
            <button onClick={calcularAhorro}>Calcular</button>
            <p className="resultado">{resultado}</p>
        </div>
        </div>
        </>
        
    );
}

export default Calcualdora;