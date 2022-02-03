const urlCrud = 'http://localhost:3001';


const getListEnfermeras = async () => {
    const response = await fetch(`${urlCrud}/enfermera`);  
    const data = await response.json();     
    return  data;
}
// Obtener solo un id
const findByIdEnfermera = async (enfermeraId) => {
    
    const response = await fetch(`${urlCrud}/enfermera/${enfermeraId}`);  
    const data = await response.json();     
    return  data;
}

const createEnfermera = async (enfermera) => {

    const resp = await fetch(`${urlCrud}/enfermera`, {
        method: 'POST',
        body: JSON.stringify(enfermera),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateEnfermera = async (enfermera) => {
    
    const resp = await fetch(`${urlCrud}/enfermera`, {
        method: 'PUT',
        body: JSON.stringify(enfermera),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListEnfermeras,
    createEnfermera,
    updateEnfermera,
    findByIdEnfermera

}