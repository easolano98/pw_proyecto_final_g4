import axios from "axios";

export const guardarNoticiaFachada = async (bodyNoticia) => {
    await guardarNoticia(bodyNoticia)
}

export const consultarNoticiaFachada = async (titulo) => {
    return await consultarNoticia(titulo)
}

export const consultarNoticiaEstudianteFachada = async (titulo) => {
    return await consultarNoticiaEstudiante(titulo)
}

export const consultarNoticiasFachada = async () => {
    return await consultarNoticias()
}


export const actualizarNoticiaFachada = async (bodyNoticia, titulo) => {
    await actualizarNoticia(bodyNoticia, titulo)
}

export const eliminaNoticiaFachada = async (titulo) => {
    await eliminaNoticia(titulo)
}


const guardarNoticia = async (bodyNoticia) => {
    axios.post(`http://localhost:8080/API/v1.0/Facultad/noticias`, bodyNoticia).then(r => r.data)
}

const consultarNoticia = async (titulo) => {
    
        const data = await axios.get(`http://localhost:8080/API/v1.0/Facultad/noticias/${titulo}`).then(r => r.data)
        return data
   
   
}

const consultarNoticiaEstudiante = async (cedula) => {
    const data = await axios.get(`http://localhost:8080/API/v1.0/Facultad/noticias?cedula=${cedula}`).then(r => r.data)
    return data
}

const consultarNoticias = async () => {
    const data = await axios.get(`http://localhost:8080/API/v1.0/Facultad/noticias/`).then(r => r.data)
    return data
}

const actualizarNoticia = async (bodyNoticia, titulo) => {
    axios.put(`http://localhost:8080/API/v1.0/Facultad/noticias/${titulo}`, bodyNoticia).then(r => r.data)
}

const eliminaNoticia = async (titulo) => {
    axios.delete(`http://localhost:8080/API/v1.0/Facultad/foros/${titulo}`).then(r => r.data)
}