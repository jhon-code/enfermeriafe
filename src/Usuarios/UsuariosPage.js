import React, { useState, useEffect } from "react";

import UsuarioList from './UsuarioList';
import Usuario from './Usuario'
import { getListUsuarios } from '../service/UsuarioService'

function UsuariosPage() {

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    
    getListUsuarios().then(data => {
      setUsuario(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      
      <UsuarioList>
        {
          usuario.map(item =>
            <Usuario
              key={item.idpacientes}
              itemUsuario={item} />
          )
        }
      </UsuarioList>
    </div>
  );
}

export default UsuariosPage;