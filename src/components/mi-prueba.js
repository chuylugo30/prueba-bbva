import React from 'react'

export default function Prueba (props) {
     const {gobierno,setGobierno} = props;
     console.log("esto trae los props", gobierno);
    return (

        <div>Hola desde mi prueba  </div>
    )
}