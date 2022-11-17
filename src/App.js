import React from 'react';
import './App.css';
import Teclas from './componentes/Teclas';
import Titulos from './componentes/Titulos'

function App() {
  return (
    <div>
      <header>
      </header>
      <div className="contenedor">
          <div className="salida">
                <div className="resultado">
                      <Titulos/>
                      <div className="textoResultado"></div>
                      <div className="textoCalculo"></div>
                </div>
          </div>
          <div className="sectorTeclas">
                      <Teclas />
          </div>
      </div>

    </div>
  );
}

export default App;
