import React from "react";

const stylo1 = {
    border:' none',
    width: "100vh",
    height: "100vh",
}

const stylo2 = {
    "text-align": "center",
}

function Cuestionario() {
    return (
        <div style={stylo2}>
            <iframe src="/Cuestionario/index.html" style={stylo1}/>
        </div>
        
    )
}

export default Cuestionario;