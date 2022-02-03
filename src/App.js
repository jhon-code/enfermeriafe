import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import EnfermerasPage from './Enfermeras/EnfermerasPage';
import EnfermeraCreate from './Enfermeras/EnfermeraCreate';
import EnfermeraUpdate from './Enfermeras/EnfermeraUpdate';
import Navbar from "./Componentes/Navbar";
import UsuariosPage from './Usuarios/UsuariosPage';
function App () {

  return (
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/enfermera" element={<EnfermerasPage />} />             
        <Route path="/createenfermera" element={ <EnfermeraCreate />   }/>   
        <Route path="/updateenfermera/:enfermeraId" element={ <EnfermeraUpdate />   }/>
        <Route path="/paciente" element={<UsuariosPage />} /> 
 
     
        
      </Routes>

    </BrowserRouter>   
  );
}

export default App;