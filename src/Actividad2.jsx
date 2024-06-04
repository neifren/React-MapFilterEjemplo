import React from "react";

function Actividad2({reyes}){   
    const borrar=(e)=>{
        e.target.parentNode.remove();
    }
    const resultado1=reyes.filter(valor => !valor.nombre.includes("g")).map(e=><div className="rey" key={e.nombre}>{e.nombre} 
    <button onClick={borrar}>Borrar</button>
    </div>);
        
    return <>
    <h1>Actividad 2</h1>
        <div className="caja">
            {resultado1}            
        </div>
    </>;
}

export default Actividad2;