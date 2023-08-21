import React from "react";
import './Home.css';

function Home() {
    return (
        <div className="main-container">
            <div className="content">
                <div className="title">
                    <img src="https://o.remove.bg/downloads/c5061903-1830-4126-819a-1f187b7b7eb1/png-sol-removebg-preview.png" alt="Sol" className="sun-image" />
                    <h1 className="title-text">Paneles Solares</h1>
                    <img src="https://o.remove.bg/downloads/c5061903-1830-4126-819a-1f187b7b7eb1/png-sol-removebg-preview.png" alt="Sol" className="sun-image" />
                </div>
                <h3 className="subtitle">Buenos días, tardes o noches. ¿Sabes qué es un panel solar? Si tu respuesta es no, nosotros te lo explicamos.</h3>
                <p className="description">Un panel solar es un dispositivo simple, eficaz y dinámico que nos permite aprovechar la energía de nuestro sol. La energía que proporciona el sol al planeta es inmensa, ya que una hora de luz solar le permitiría al mundo abastecerse de electricidad por un año aproximadamente.</p>
                <p className="description">Los paneles solares constan de células fotovoltaicas que convierten la luz solar en electricidad de manera limpia y sostenible. Esta electricidad puede utilizarse para alimentar hogares, empresas y más, reduciendo nuestra dependencia de fuentes de energía no renovable.</p>
                <p className="description">Además de ser ecológicos, los paneles solares también pueden ayudarte a ahorrar dinero a largo plazo al reducir tus facturas de electricidad. ¡Es una forma inteligente de aprovechar la energía del sol!</p>

                <div className="paneles">
                <img src="https://www.fiixcom.mx/es/img/iconos/paneles-1.png" alt="pan1" className="pan1-image" />
                <img src="https://www.labodegasolar.com/cdn/shop/articles/placas-solares-tejado-thinkstock-getty-1662535982.jpg?v=1667323017" alt="Panel" className="panel-image" />
                <img src="https://www.fiixcom.mx/es/img/iconos/paneles-1.png" alt="pan1" className="pan1-image" />
                </div>
            </div>
        </div>
    );
}

export default Home;