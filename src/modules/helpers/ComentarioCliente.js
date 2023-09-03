import axios from "axios";

export const guardarComentarioFachada=async(bodyComentario)=>{
    await guardarComentario(bodyComentario)
}

export const consultarComentarioFachada=async(asunto)=>{
    return await consultarComentario(asunto)

}

export const actualizarComentarioFachada=async(bodyComentario, id)=>{
    await actualizarComentario(bodyComentario, id)
}

const guardarComentario=async(bodyComentario)=>{
    axios.post(`http://localhost:8080/API/v1.0/Facultad/comentarios`, bodyComentario ).then(r=>r.data)
}

const consultarComentario=async(asunto)=>{

    const data= axios.get(`http://localhost:8080/API/v1.0/Facultad/comentarios/${asunto}`).then(r=>r.data)
    return data
 
 }

 const actualizarComentario=async(bodyComentario, id)=>{
    axios.put(`http://localhost:8080/API/v1.0/Facultad/comentarios/${id}`, bodyComentario ).then(r=>r.data)
}

