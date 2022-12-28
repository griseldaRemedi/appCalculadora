import React from "react";

const Resultados = (props) =>{

    return(
        <div>
            <div id="textoResultado" className="textoResultado">{props.btnResultado}</div>
            <div id="textoCalculo" className="textoCalculo">{props.btnResultadoTrack}</div>
        </div>
    )
}
export default Resultados;