import axios from "axios";

export const guardarEstudianteFachada = async (bodyEstudiante) => {
    await guardarEstudiante(bodyEstudiante)
}

export const consultarEstudianteFachada = async (cedula) => {
    return await consultarEstudiante(cedula)

}

const guardarEstudiante = async (bodyEstudiante) => {

    axios.post(`http://localhost:8080/API/v1.0/Facultad/estudiantes`, bodyEstudiante).then(r => r.data)
}

const consultarEstudiante = async (cedula) => {
    
        const data = axios.get(`http://localhost:8080/API/v1.0/Facultad/estudiantes/${cedula}`).then(r => r.data)
        return data
    
    
}
