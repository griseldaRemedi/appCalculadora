import ImagenSanYo from '../img/img_san_yo.png';
import LogoSanYo from '../img/logo_san_yo.png';
import React, {useState, useEffect} from 'react'; 

const Titulos = () => {

    const [mensaje, setMensaje] = useState("");
    
    useEffect(() => {
        const mensajesAlentadores = [
            "Siempre que llovió, paró",
            "Houston! tenemos un problema",
            "Puede fallaaaaaar! -Tu Sam",
            "Practicar la paciencia, debes... ",
            "No hay mal que dure cien años",
            "Oraré por tí, paaabreeee",
        ];
        setInterval(() => {
            let indice = Math.floor(Math.random() * (mensajesAlentadores.length-1));
            setMensaje(mensajesAlentadores[indice]);
        }, 5000)
    }, [])

    return(
        <div className="titulos">
            <div className="mensaje">{mensaje}</div>
            <div className="marca">
                <img src={ImagenSanYo} alt="Imagen decorativa"></img>
                <img src={LogoSanYo} alt="Logo trucho"></img>
            </div>
        </div>
    )
}

export default Titulos;





