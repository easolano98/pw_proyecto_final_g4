import axios from "axios";

export const guardarForoFachada=async(bodyForo)=>{
    await guardarForo(bodyForo)
}

export const consultarComentarioFachada=async(asunto)=>{
    return await consultarForo(asunto)

}

export const actualizarForoFachada=async(bodyForo, id)=>{
    await actualizarForo(bodyForo, id)
}

export const eliminarForoFachada=async(id)=>{
    await eliminaForo(id)
}


const guardarForo=async(bodyForo)=>{
    axios.post(`http://localhost:8080/API/v1.0/Facultad/foros`, bodyForo ).then(r=>r.data)
}

const consultarForo=async(asunto)=>{

    const data= axios.get(`http://localhost:8080/API/v1.0/Facultad/foros/${asunto}`).then(r=>r.data)
    return data
 
 }

 const actualizarForo=async(bodyForo, id)=>{
    axios.put(`http://localhost:8080/API/v1.0/Facultad/foros/${id}`, bodyForo ).then(r=>r.data)
}

const eliminaForo=async(id)=>{
    axios.delete(`http://localhost:8080/API/v1.0/Facultad/foros/${id}` ).then(r=>r.data)
}