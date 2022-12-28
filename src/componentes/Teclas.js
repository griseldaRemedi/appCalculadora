import React, { useEffect, useState } from "react";
import Titulos from "./Titulos";
import Resultados from "./Resultados";

const Teclas = () => {

    const [datoNuevo, setDatoNuevo] = useState([]);
    let datosParaCalculo = []; 
    let datosIngresadosBoton = []; //datos ingresados individualmente con cada botón presionado
    let botonResultadoTrack = '';

    const ingresarDato = (e) => {
        setDatoNuevo([...datoNuevo, e.currentTarget.textContent]);
        //console.log(datoNuevo);
    }    

    function evaluarYOperar(dato){
        let datoIngresado = dato[0][dato[0].length-1];
        let arrayDatos = [...dato[0]];
        console.log(arrayDatos);
        switch (datoIngresado) {
            case "AC":
                datosParaCalculo=[];
                datosIngresadosBoton=[];
                setDatoNuevo([]);
                break;
        
            default:
                if (isNaN(datoIngresado) && (datoIngresado!==".")){ // si no es número
                        /* con los datos individuales ingresados armo el número para operar */
                        let nroResultante = arrayDatos.reduce((acumulador, nroActual) => acumulador +  nroActual, '');
                        datosParaCalculo.push(nroResultante.substring(0, nroResultante.length - 1)); 
                        console.log('Ingresado ' + datoIngresado + '  para calculo: ' + nroResultante.substring(0, nroResultante.length - 1));
                        switch (datosParaCalculo.length) {
                            case 1: // operaciones unarias
                                console.log("lenght 1 y case 1 " + datosParaCalculo);
                                if (datoIngresado === "f!")
                                    console.log("operar: factorial!");
                                    else 
                                    console.log("operar: NO factorial!");
                                break;
                        
                            default:
                                // agrego nuevoDato a datosParaCalculo
                                break;
                        }
                } else { // si es número
                    console.log('Es número! ');
                }
                break;
        }
    }
    
    useEffect(() => {
        datosIngresadosBoton.push(datoNuevo);
        evaluarYOperar(datosIngresadosBoton);
    },[datoNuevo])
    
    return(
        <div>
                <div className="salida">
                        <div id="res" className="resultado">
                            <Titulos  />
                            <Resultados btnResultado =  {datoNuevo} btnResultadoTrack = {botonResultadoTrack} />
                        </div>
                </div>

                <div className="teclas" id="numeros">
                        <div className="fila">
                            <button onClick={ingresarDato} className="btn btn-outline-dark num">1</button>
                            <button onClick={ingresarDato}  className="btn btn-outline-dark num">2</button>
                            <button onClick={ingresarDato}  className="btn btn-outline-dark num">3</button>
                        </div>
                        <div className="fila">
                            <button onClick={ingresarDato} className="btn btn-outline-dark num">4</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark num">5</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark num">6</button>
                        </div>
                        <div className="fila">
                            <button onClick={ingresarDato}  className="btn btn-outline-dark num">7</button>
                            <button onClick={ingresarDato}  className="btn btn-outline-dark num">8</button>
                            <button onClick={ingresarDato}  className="btn btn-outline-dark num">9</button>
                        </div>  
                        <div className="fila">
                            <button onClick={ingresarDato}  className="btn btn-outline-dark">.</button>
                            <button onClick={ingresarDato}  className="btn btn-outline-dark num">0</button>
                            <button onClick={ingresarDato}  className="btn btn-outline-success">=</button>
                        </div> 
                </div>
                <div className="teclas" id="operaciones-basicas">
                        <div className="fila">
                            <button onClick={ingresarDato} className="btn btn-outline-dark">+</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark">-</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark">*</button>
                        </div>
                        <div className="fila">
                            <button onClick={ingresarDato}  className="btn btn-outline-dark">/</button>
                            <button onClick={ingresarDato}  className="btn btn-outline-dark">%</button>
                            <button onClick={ingresarDato}  className="btn btn-outline-dark">f!</button>
                        </div>
                        <div className="fila">
                            <button onClick={ingresarDato} className="btn btn-outline-dark">&radic;</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark"><sup>3</sup>&radic;</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark"><sup>n</sup>&radic;</button>
                        </div>
                        <div className="fila">
                            <button onClick={ingresarDato} className="btn btn-outline-dark">X<sup>2</sup></button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark">X<sup>3</sup></button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark">X<sup>n</sup></button>
                        </div>
                </div>
                <div className="teclas" id="operaciones-complejas">
                        <div className="fila">
                            <button onClick={ingresarDato} className="btn btn-outline-dark">sen</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark">cos</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark">tag</button>
                        </div>
                        <div className="fila">
                            <button onClick={ingresarDato} className="btn btn-outline-dark">log</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark">Ln</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark">e</button>
                        </div>
                        <div className="fila">
                            <button onClick={ingresarDato} className="btn btn-outline-dark">Pi</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark">(</button>
                            <button onClick={ingresarDato} className="btn btn-outline-dark">)</button>
                        </div>
                        <div className="fila">
                            <button onClick={ingresarDato}  className="btn btn-outline-info"
                                    title="(Memory) Guarda el contenido del visor en memoria">M</button>
                            <button onClick={ingresarDato}  style={{width: 102}} className="btn btn-outline-warning"
                                    title="(Clear) Borra el contenido del visor">AC</button>
                        </div>
                </div>
        </div>
    )

    

}

export default Teclas;