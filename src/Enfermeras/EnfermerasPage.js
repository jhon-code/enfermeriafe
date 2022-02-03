import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EnfermeraList from './EnfermeraList';
import Enfermera from './Enfermera'
import { getListEnfermeras } from '../service/EnfermeraService'

function EnfermeraPage() {

  const [enfermera, setEnfermera] = useState([]);

  useEffect(() => {
    
    getListEnfermeras().then(data => {
      setEnfermera(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de Enfermeras</h2>
      <Link to='/createenfermera' >
        Crear
      </Link>
      <EnfermeraList>
        {
          enfermera.map(item =>
            <Enfermera
              key={item.idenfermera}
              itemEnfermera={item} />
          )
        }
      </EnfermeraList>
    </div>
  );
}

export default EnfermeraPage;