const urlCrud = 'http://localhost:3001';


const getListUsuarios = async () => {
    const response = await fetch(`${urlCrud}/paciente`);  
    const data = await response.json();     
    return  data;
}



export {
    getListUsuarios,



}