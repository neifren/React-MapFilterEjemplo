import React from "react";
import Actividad1 from './Actividad1';
import Actividad2 from './Actividad2';
import Actividad3 from './Actividad3';
import './App.css';

function App(){
    const reyes=[
        {
          nombre:"Atanagildo",
          reinado:12,
          vacasComidas:9
        },
        {
          nombre:"Ervigio",
          reinado:7,
          vacasComidas:3
        },
        {
          nombre:"Ataúlfo",
          reinado:5,
          vacasComidas:16
        },
        {
          nombre:"Leogivildo",
          reinado:18,
          vacasComidas:3
        },
        {
          nombre:"Sisebuto",
          reinado:9,
          vacasComidas:13
        },
        {
          nombre:"Recesvinto",
          reinado:19,
          vacasComidas:11
        },
        {
          nombre:"Teodorico",
          reinado:33,
          vacasComidas:12
        }
      ]
      const resultado1=reyes.filter(valor=>valor.vacasComidas>=10&&valor.vacasComidas<=12).map(valor=><div key={valor.nombre}>{valor.nombre} come {valor.vacasComidas} vacas al dia</div>);
          
    return <>
        <Actividad3 reyes={reyes}></Actividad3>
    </>;
}

export default App;