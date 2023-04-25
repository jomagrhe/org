import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

//voy a reemplar para mostrar que se puede crear de otra forma el boton <Boton texto="Crear"/> por <Boton> Crear</Boton> luego de haber usado props.children en el index.jsx de la carpeta boton
const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    //Al usar evento.preventDefault() evitamos que una página se este recargando
const manejarEnvio = (evento)=>{
    evento.preventDefault(); 
    //Crear objeto, este objeto es el que podemos conectar con el backend para unirlo a la base de datos
    let datosAEnviar = {
        nombre,
        puesto,
        foto, 
        equipo
    }
    //console.log(datosAEnviar)
    registrarColaborador(datosAEnviar)
}

const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo, colorPrimario:color})
}
    return <section className="formulario" >
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingrresar nombre" 
                required 
                valor={nombre}
                setValor={actualizarNombre}
                />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingrresar puesto" 
                required 
                valor={puesto}
                setValor={actualizarPuesto}
                />
            <Campo 
                titulo="Foto" 
                placeholder="Ingrresar enlace de foto" 
                required
                valor={foto}
                setValor={actualizarFoto}
                />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingrresar titulo" 
                required 
                valor={titulo}
                setValor={actualizarTitulo}
                />
            <Campo 
                titulo="Color" 
                placeholder="Ingrresar el color en Hex" 
                required 
                valor={color}
                setValor={actualizarColor}
                type="color"
                />
            <Boton>
                Registrar Equipo
            </Boton>
            </form>
    </section>

}

export default Formulario;