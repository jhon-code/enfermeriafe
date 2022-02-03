
function EnfermeraList(props){
    return(
        <table>
        <thead >
          <tr>
            <th >Id</th>
            <th>nombre</th>
            <th>apellido</th>
            <th>direccion</th>
    
          </tr>
        </thead>
        <tbody>
        
            {props.children}
        
            </tbody>
      </table>
    );
    }
    
    export default EnfermeraList