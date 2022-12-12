import React, { useEffect, useState } from "react";

const Teclas = () => {

    const [boton, setBoton] = useState('')
    
   
    const manejarTeclas = (e) => {
        const divDisplay = document.getElementById('display');
        setBoton( boton + e.currentTarget.textContent);
    }
    
    useEffect(() => {
    },[boton])

    
    return(
        <div>
                <div className="teclas" id="numeros">
                    <p id="display"> {boton} </p>
                        <div className="fila">
                            <button onClick={manejarTeclas} className="btn btn-outline-dark num">1</button>
                            <button onClick={manejarTeclas}  className="btn btn-outline-dark num">2</button>
                            <button onClick={manejarTeclas}  className="btn btn-outline-dark num">3</button>
                        </div>
                        <div className="fila">
                            <button onClick={manejarTeclas} className="btn btn-outline-dark num">4</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark num">5</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark num">6</button>
                        </div>
                        <div className="fila">
                            <button onClick={manejarTeclas}  className="btn btn-outline-dark num">7</button>
                            <button onClick={manejarTeclas}  className="btn btn-outline-dark num">8</button>
                            <button onClick={manejarTeclas}  className="btn btn-outline-dark num">9</button>
                        </div>  
                        <div className="fila">
                            <button onClick={manejarTeclas}  className="btn btn-outline-dark">.</button>
                            <button onClick={manejarTeclas}  className="btn btn-outline-dark num">0</button>
                            <button onClick={manejarTeclas}  className="btn btn-outline-success">=</button>
                        </div> 
                </div>
                <div className="teclas" id="operaciones-basicas">
                        <div className="fila">
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">+</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">-</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">*</button>
                        </div>
                        <div className="fila">
                            <button onClick={manejarTeclas}  className="btn btn-outline-dark">/</button>
                            <button onClick={manejarTeclas}  className="btn btn-outline-dark">%</button>
                            <button onClick={manejarTeclas}  className="btn btn-outline-dark">f!</button>
                        </div>
                        <div className="fila">
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">&radic;</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark"><sup>3</sup>&radic;</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark"><sup>n</sup>&radic;</button>
                        </div>
                        <div className="fila">
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">X<sup>2</sup></button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">X<sup>3</sup></button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">X<sup>n</sup></button>
                        </div>
                </div>
                <div className="teclas" id="operaciones-complejas">
                        <div className="fila">
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">sen</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">cos</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">tag</button>
                        </div>
                        <div className="fila">
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">log</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">Ln</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">e</button>
                        </div>
                        <div className="fila">
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">Pi</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">(</button>
                            <button onClick={manejarTeclas} className="btn btn-outline-dark">)</button>
                        </div>
                        <div className="fila">
                            <button onClick={manejarTeclas}  className="btn btn-outline-info"
                                    title="(Memory Clear)Hace el contenido de la memoria igual a cero">MC</button>
                            <button onClick={manejarTeclas}  style={{width: 102}} className="btn btn-outline-warning"
                                    title="(Clear) Borra el contenido del visor">AC</button>
                        </div>
                </div>
        </div>
    )

    

}

export default Teclas;