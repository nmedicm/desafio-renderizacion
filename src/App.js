import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";

function App() {
  
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: "",
    nombre: "",
    correo: "",
  });

  const [busqueda, setBusqueda] = useState("");

  const agregarColaborador = (e) => {
    e.preventDefault();
    
    if( nuevoColaborador.nombre === "" || nuevoColaborador.correo === ""){
      return alert("Faltan campos por rellenar");
    }

    setNuevoColaborador({
      id: Date.now(),
      nombre: nuevoColaborador.nombre,
      correo: nuevoColaborador.correo
    })

    setColaboradores([...colaboradores, nuevoColaborador]);

    setNuevoColaborador({
      id: "",
      nombre: "",
      correo: ""
    })

  }

  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    if(colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())){
      return true;
    }

    return false;
  })



  return (
    <div className="container">
      <nav className="navbar bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-light">Buscador de Colaboradores</a>
          <form className="d-flex">
            <input
              className="form-control me-2 my-3"
              placeholder="Busca un colaborador"
              onChange={(e) => setBusqueda(e.target.value)}
              value={busqueda} 
            />
          </form>
        </div>
      </nav>

      <form action="" onSubmit={agregarColaborador}>

        <div className="mt-3">
          <label>Nombre del colaborador</label>
          <input
            className="form-control me-2 my-3"
            type="text"
            placeholder="Ingresa el nombre del colaborador"
            onChange={(e) => setNuevoColaborador({
              id: nuevoColaborador.id,
              nombre: e.target.value,
              correo: nuevoColaborador.correo
            })}
            value={nuevoColaborador.nombre}
          />
        </div>

        <div className="mt-3">
          <label>Correo del colaborador</label>
          <input
            className="form-control me-2 my-3"
            type="email"
            placeholder="Ingresa correo del colaborador"
            onChange={(e) => setNuevoColaborador({
              id: nuevoColaborador.id,
              nombre: nuevoColaborador.nombre,
              correo: e.target.value
            })}
            value={nuevoColaborador.correo}  
          />
        </div>

        <button
          className="mt-3 btn btn-success"
          type="submit">
            Agregar un colaborador
        </button>

      </form>

      <hr />

      <div className="mt-3">
        <h3>Listado de colaboradores</h3>

        <ul>
          {colaboradoresFiltrados.map( ({id, nombre, correo}) => <li key={id}>{nombre} | {correo}</li>)}
        </ul>



      </div>

    </div>
  );
}

export default App;
