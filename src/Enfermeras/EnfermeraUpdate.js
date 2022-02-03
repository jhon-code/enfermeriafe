import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdEnfermera,updateEnfermera } from '../service/EnfermeraService'
import './Enfermeras.css'

function EnfermeraPage() {
  
  const { enfermeraId } = useParams();
  const [enfermera, setEnfermera] = useState({idenfermeras:'',nombre:'',apellido:'',direccion:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateEnfermera(enfermera);
  }
  const onChange = (event) =>{
    if(event.target.name==='id')
      setEnfermera({...enfermera,idenfermeras:event.target.value})
    if(event.target.name==='nombre')
      setEnfermera({...enfermera,nombre:event.target.value})    
    if(event.target.name==='apellido')    
      setEnfermera({...enfermera,apellido:event.target.value})
    if(event.target.name==='direccion')
      setEnfermera({...enfermera,direccion:event.target.value})
    
      
  }

  

  useEffect(() => {    
    findByIdEnfermera(enfermeraId).then(data => {
      setEnfermera(data);  
    }
    );
  }, [enfermeraId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actulizar Datos</h2>

          <input 
          className="formUpdateInput"
            name="idenfermeras"
            placeholder="id" 
            value={enfermera.idenfermeras}
            onChange={onChange}
   
          />
  
          <input 
          className="formUpdateInput"
            name="nombre"
            placeholder="nombre" 
            value={enfermera.nombre}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
           placeholder="apellido" 
            name="apellido"
            value={enfermera.apellido}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="direccion"
            name="direccion"
            value={enfermera.direccion}
            onChange={onChange}
          />

        

        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default EnfermeraPage;