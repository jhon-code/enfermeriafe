import React, { useState } from "react";
import { createEnfermera } from '../service/EnfermeraService'

function EnfermeraCreate() {
  
  const [idenfermeras, setIdEnfermeras] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');


  const onSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      idenfermeras:idenfermeras,
      nombre: nombre,
      apellido: apellido,
      direccion: direccion,
      
    }
    createEnfermera(objeto)

  }

  const onChange = (event) =>{

    if(event.target.name==='idenfermeras')
    setIdEnfermeras(event.target.value)

    if(event.target.name==='nombre')
    setNombre(event.target.value)
    
    if(event.target.name==='apellido')
    setApellido(event.target.value)

    if(event.target.name==='direccion')
    setDireccion(event.target.value)


  }

  return (
    <div>
      <h2>Crear Enfermera</h2>
      <form onSubmit={onSubmit}>
        <label>
          id
          <input 
            name="idenfermeras"
            value={idenfermeras}
            onChange={onChange}
          />
        </label>
        <label>
          nombre
          <input 
            name="nombre"
            value={nombre}
            onChange={onChange}
          />
        </label>
        <label>
          Apellido
          <input 
            name="apellido"
            value={apellido}
            onChange={onChange}
          />
        </label>
        <label>
          Direccion
          <input 
            name="direccion"
            value={direccion}
            onChange={onChange}
          />
        </label>

        
        

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default EnfermeraCreate;