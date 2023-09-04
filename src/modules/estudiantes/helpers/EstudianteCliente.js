import axios from "axios";

export const guardarEstudianteFachada = async (bodyEstudiante) => {
    await guardarEstudiante(bodyEstudiante)
}

export const consultarEstudianteFachada = async (cedula) => {
    return await consultarEstudiante(cedula)
}

export const consultarNoticiasEstudianteFachada = async (cedula) => {
    return await consultarNoticiasEstudiante(cedula)
}

export const consultarForosEstudianteFachada = async (cedula) => {
    return await consultarForosEstudiante(cedula)
}

const guardarEstudiante = async (bodyEstudiante) => {

    axios.post(`http://localhost:8080/API/v1.0/Facultad/estudiantes`, bodyEstudiante).then(r => r.data)
}

const consultarEstudiante = async (cedula) => {
    const data = await axios.get(`http://localhost:8080/API/v1.0/Facultad/estudiantes/${cedula}`).then(r => r.data)
    return data
}

const consultarNoticiasEstudiante = async (cedula) => {
    const data = await axios.get(`http://localhost:8080/API/v1.0/Facultad/estudiantes/${cedula}/noticias`).then(r => r.data)
    return data
}

const consultarForosEstudiante = async (cedula) => {
    const data = await axios.get(`http://localhost:8080/API/v1.0/Facultad/estudiantes/${cedula}/foros`).then(r => r.data)
    return data
}
