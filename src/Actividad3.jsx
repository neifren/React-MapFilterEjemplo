import React from "react";

function Actividad3({reyes}){   
    const borrar=(e)=>{
        e.target.parentNode.remove();
    }
    const resultado1=reyes.find(e => e.nombre.substring(0,1) == "A" || e.nombre.substring(0,1) == "a");
    return <>
    <h1>Actividad 3</h1>
        <div className="caja">
            {resultado1 === undefined ? "No se ha encontrado" : resultado1.nombre}            
        </div>
    </>;
}

export default Actividad3;