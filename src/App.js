import { useState } from 'react';
import './App.css';
import Header from './Creado-componentes/Header/Header';
import Formulario from './Creado-componentes/Formulario/Formulario';
import MiOrg from './Creado-componentes/MiOrg';
import Equipo from './Creado-componentes/Equipo';
import Footer from './Creado-componentes/Footer';
import {v4 as uuid} from "uuid";


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  //Alm interior del useState vamos a colocar un arreglo vacio para los colaboradores
  //Tambien puedo colocar un colaborar en el arreglo para que al abrir la pagina no cargue vacio
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Jeremias",
      puesto: "Instructor",
      foto: "https://github.com/harlandlohora.png",
      equipo: "Frontend",
      fav: false
    },
    {
      id: uuid(),
      nombre: "Genesys",
      puesto: "Instructor",
      foto: "https://github.com/genesysaluralatam.png",
      equipo: "Programación",
      fav: true
    },
    {
      id: uuid(),
      nombre: "Jean Marie",
      puesto: "Instructor",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      equipo: "DataScience",
      fav: true
    },
    {
      id: uuid(),
      nombre: "Christian",
      puesto: "Instructor",
      foto: "https://github.com/christianpva.png",
      equipo: "DataScience",
      fav: true
    },
    {
      id: uuid(),
      nombre: "Jose Dario",
      puesto: "Director",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      equipo: "UX y Diseño",
      fav: false
    }
  ])

  const [equipos, actualizarEquipos] = useState( 
    [

      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
  
      {
        id: uuid(),
        titulo: "Frontend",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
  
      {
        id: uuid(),
        titulo: "DataScience",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
  
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#D86EBF",
        colorSecundario: "#FAE9F5"
      },
      
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      },
      
  ]
  )
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  //Spread operator usa tres puntos ... para copiar algo
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }
  //Eliminar Colaborador

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo

  const actualizarColor = (color, id) => {
     const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  
  //CREAR EQUIPO
  const crearEquipo = (nuevoEquipo) => {
      actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav =  !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  /*
  //Lista de equipos
  const equipos = [

    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },

    {
      titulo: "Frontend",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      titulo: "DataScience",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    
    {
      titulo: "UX y Diseño",
      colorPrimario: "#D86EBF",
      colorSecundario: "#FAE9F5"
    },
    
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
    
]
*/

  //Ternario --> condición ? seMuestra : noSeMuestra   ASI OCULTAMOS EL FORMULARIO
  //La condicion anterior tamnbien puede ser mostrada como: {condicion && seMuestra}  ejemplo: {mostrarFormulario && <Formulario/>}
  //En React algo vacio es <></>
  return (
    <div>
      <Header/>
      {mostrarFormulario ? <Formulario 
      equipos ={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> : <></>}  
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => <Equipo 
        key = {equipo.titulo} 
        datos = {equipo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
