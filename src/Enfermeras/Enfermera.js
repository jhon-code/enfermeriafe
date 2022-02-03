import { Link } from "react-router-dom";
import './Enfermeras.css'

function Enfermera(props){
   
return(
    <tr > 
        <td>{props.itemEnfermera.idenfermeras}</td>        
        <td> {props.itemEnfermera.nombre} </td>
        <td> {props.itemEnfermera.apellido} </td>
        <td>{props.itemEnfermera.direccion}</td>        
        
        <td><Link to={`/updateenfermera/${props.itemEnfermera.idenfermeras}`}>Edit</Link></td>
        
    </tr>
);

}
export default Enfermera