
import './Usuarios.css'

function Usuario(props){
   
return(
    <tr > 
        <td>{props.itemUsuario.idpacientes}</td>        
        <td> {props.itemUsuario.username}  </td>
        <td> {props.itemUsuario.password}  </td>
        <td> {props.itemUsuario.status}    </td>        
        

        
    </tr>
);

}
export default Usuario