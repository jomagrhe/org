import { useState } from "react"
import "./Campo.css"

const CampoTexto = (props) => {
    
    //props es un objeto que significa propiedades externas que recibe un componente en React 
    //Si queremos agregar tres puntos al placeholder
    //e significa evento
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion
    const { type = "text"} = props

    const manejarCambio = (e) =>{
        props.setValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default CampoTexto