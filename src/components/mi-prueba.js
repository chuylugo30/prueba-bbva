import React from 'react'

export default function Prueba (props) { // Con los props traemos los datos que nos pasaron de App.js
     const {gobierno,setGobierno} = props;
     
     const resetPage =() =>{
        console.log("Resetear");
         setGobierno(null)
      }
    return (

        <div>
            <h5>Nombre : {gobierno[0].compiledRelease.publisher.name}</h5>
            <h5>Ciclo :{gobierno[0].compiledRelease.ciclo}</h5>
            <h5>Id :{gobierno[0].compiledRelease.id}</h5>
            <button onClick={resetPage}>Volver a la home</button>
        </div>

     
    )
}