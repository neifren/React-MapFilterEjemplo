import React from "react";

function Actividad1({reyes}){   
    const url='https://www.html6.es/img/rey_';
    const resultado1=reyes.map(e=><div className="rey" key={e.nombre}><span className="rojo">{e.nombre.toUpperCase()}</span> ha comido {e.reinado*e.vacasComidas*365} vacas en sus {e.reinado} años de reinado
    <img className="imagen" src={url+e.nombre.toUpperCase()+".png"}/>  
    </div>);
        
    return <>
    <h1>Actividad 1</h1>
        <div className="root">
            {resultado1}            
        </div>
    </>;
}

export default Actividad1;