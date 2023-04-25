import "./MiOrg.css"
import { useState } from "react"

const MiOrg = (props) => {
console.log(props)

        //Estado - hooks
        //useState() EL USEsTATE SIEMORE DEBE ESTAR AL INTERIOR DE UNA FUNCION
        // const [nombreVariable, funcionActualizar] = useState(valorInicial)
        /*Ejemplo: 
    const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {    
            
        actualizarMostrar(!mostrar)
    
    }
    */
    return <section className="orgSection">
        <h3 className="tittle" >Mi organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg