import React, { useState } from 'react';
import './css/Calculadora.css';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Calculadora = () => {
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [consumoMensual, setConsumoMensual] = useState('');
    const [resultado, setResultado] = useState('');
    const [resultadoVisible, setResultadoVisible] = useState(false);
    const [gastoMesPasado, setGastoMesPasado] = useState('');
    const [gastoMesActual, setGastoMesActual] = useState('');
    const [chartData, setChartData] = useState(null);

    const calcularComparativa = () => {
        const gastoPasado = parseFloat(gastoMesPasado);
        const gastoActual = parseFloat(gastoMesActual);

        if (isNaN(gastoPasado) || isNaN(gastoActual)) {
            // Manejo de error si los valores ingresados no son válidos
            alert('Por favor, ingrese valores numéricos válidos para los gastos.');
            return;
        }

        // Crear datos para el gráfico
        const data = {
            labels: ['Mes Pasado', 'Mes Actual'],
            datasets: [
                {
                    label: 'Gasto Mensual',
                    data: [gastoPasado, gastoActual],
                    backgroundColor: ['#36A2EB', '#FFCE56'],
                },
            ],
        };

        setChartData(data);
    };

    const calcularAhorro = () => {

        const consumoMes = parseFloat(consumoMensual);

        if (isNaN(consumoMes)) {
            // Manejo de error si los valores ingresados no son válidos
            alert('Por favor, ingrese valores numéricos válidos para calcular el ahorro.');
            return;
        }

        const costoElectricidad = 21.855;
        const ahorroMensual = consumoMes * costoElectricidad;

        setResultado(`El ahorro mensual estimado con paneles solares es de $${ahorroMensual.toFixed(2)} 💸💸.`);
        setResultadoVisible(true); // Mostrar el resultado después de calcular
    };

    const toggleInfo = () => {
        setMostrarInfo(!mostrarInfo);
    };

    return (
        <div className='main-container'>
            <div className="calculator">
                <div className="text-aux">
                    <h2>Calculadora de Ahorro-Consumo</h2>
                    <label htmlFor="consumo">Consumo de Electricidad Mensual (kWh):</label>
                </div>
                <input type="number" id="consumo" placeholder="Coloque su gasto en kWh - Aplicable para Argentina" value={consumoMensual} onChange={(e) => setConsumoMensual(e.target.value)} />
                <button onClick={calcularAhorro}><h3>Calcular</h3></button>
                <br></br>

                {resultadoVisible && ( // Mostrar el resultado solo cuando resultadoVisible es verdadero
                    <p className="resultado">{resultado}</p>
                )}

                <br></br>

                <div>
                    <div className="text-aux">
                        <h2>Calculadora de Comparación de Gastos Mensuales</h2>
                    </div>
                    <div>
                        <h2 className="text-aux-small">Gasto Mensual Mes Pasado:</h2>
                        <div>

                            <input
                                type="number"
                                id="gastoMesPasado"
                                placeholder="Ingrese el gasto del mes pasado"
                                value={gastoMesPasado}
                                onChange={(e) => setGastoMesPasado(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-aux-small">Gasto Mensual Mes Actual:</h2>
                        <div>

                            <input
                                type="number"
                                id="gastoMesActual"
                                placeholder="Ingrese el gasto del mes actual"
                                value={gastoMesActual}
                                onChange={(e) => setGastoMesActual(e.target.value)}
                            />
                        </div>
                    </div>

                    <br></br>

                    <button onClick={calcularComparativa}><h3>Calcular Comparativa</h3></button>

                    <br></br>

                    {chartData && (
                        <div className="chart-container-global">
                            <Bar
                                data={chartData}
                                options={{
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                        },
                                    },
                                }}
                            />
                        </div>
                    )}

                    <br></br>

                </div>

                <br></br>

                <div>
                    <button onClick={toggleInfo}>
                        <h3>Datos Interesantes</h3>
                    </button>
                    <div>
                        <br></br>
                        {mostrarInfo && (
                            <div className="info-extra">
                                <p>¿Cómo sacar el consumo mensual en kWh?</p>
                                <p className="size-text">Si queremos conocer su consumo mensual, sólo tenemos que multiplicar su consumo diario por el número de días del mes, por ejemplo, 30. Tendríamos un consumo mensual de 12 kWh.</p>
                                <p>¿Cuál es el consumo normal de kWh en una casa?</p>
                                <p className="size-text">El consumo de energía eléctrica promedio en el hogar en kWh va de 150 a 300 mensuales. Suele aumentar en verano.</p>
                                <p>Consejos para la Comparación</p>
                                <p className="size-text">Para entender mejor la comparación de gastos, ten en cuenta los siguientes consejos:</p>
                                <ul className="size-text">
                                    <li>Los cambios en la temporada o el clima pueden afectar el consumo de electricidad.</li>
                                    <li>Si observas un aumento significativo en el gasto, verifica si ha habido cambios en tus hábitos de consumo.</li>
                                    <li>Considera medidas de eficiencia energética para reducir tus gastos a largo plazo.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculadora;