import "./Boton.css"

//en ves de dar el nombre al boton con props.nombre del botn, puedo usar la clase hija y nombrarlo en formulario.js 
const Boton = (props) => {
    return <button className="boton">{props.children}</button>
}


export default Boton