import "./ListaOpciones.css"
const ListaOpciones = (props) => {
    //El método map - > arreglo.map ((le pasamos el nombre de la constante del arrelo, y el index osea la posicion) => { return para etse ejemplo un <option></option> de html}), este metdo me permite recorrer un arreglo  al momento de usarlo en nuestro archivo jsx
   
   /*
    const equipos = [
        "Programación",
        "Frontend",
        "DataScience",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
    */

    //Saber que opcion selecciono el usurio 
    const capturarValorSelect = (e) => {
        props.actualizarEquipo(e.target.value)
    }


    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={capturarValorSelect} >
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo} >{equipo}</option>
            )}
        </select>
    </div>
}

export default ListaOpciones