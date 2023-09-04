<template>
  <div class="contenedor-foro-component">
    <div>
      <h1>Foro</h1>
    </div>
    <label for="">Asunto</label>
    <div>
      <input v-model="asunto" type="text" />
    </div>
    <div v-if="mostrar" class="contenedor-foro-info">
      <h1>{{ cedulaEstudiante }}</h1>
      <p>{{ fecha }}</p>
      <p>{{ asunto }}</p>
      <p>{{ descripcion }}</p>
    </div>

    <button @click="buscarForo">Buscar</button>
  </div>
</template>

<script>
import { consultarComentarioFachada } from "../helpers/ForoCliente.js";

export default {
  data() {
    return {
      cedulaEstudiante: null,
      asunto: null,
      descripcion: null,
      fecha: null,
      cedulaEstudiante: null,
      mostrar: false,
    };
  },

  methods: {
    async buscarForo() {
      

      if (this.asunto != null && this.asunto != "") {
        const dato = await consultarComentarioFachada(this.asunto);
        console.log("hola")
        this.cedulaEstudiante = dato.cedulaEstudiante;
        this.asunto = dato.asunto;
        this.descripcion = dato.descripcion;
        this.fecha = dato.fecha;
        this.mostrar = true;
      }else{
        this.mostrar = false;
      }
    },
  },
};
</script>

<style scoped>

.contenedor-foro-component{
    display: inline-block;
    justify-content: center;
}
.contenedor-foro-info {
  border: 1px solid grey;
  border-radius: 5px;
  margin-top: 10px;
  width: 500px;
}
</style>