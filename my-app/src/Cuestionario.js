import React from "react";

const stylo1 = {
    border:' none' ,
  }

function Cuestionario() {
    return (
        <div>
            <iframe src="/Cuestionario/index.html" width="100%" height="700px" style={stylo1}/>
        </div>
        
    )
}

export default Cuestionario;