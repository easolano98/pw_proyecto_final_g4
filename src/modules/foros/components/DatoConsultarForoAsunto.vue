<template>
  <div class="contenedor-foro-component">
    <div>
      <h1>Foro</h1>
    </div>

    <div class="contenedor-foro-info">
      <h1>{{ cedulaEstudiante }}</h1>
      <p>{{ fecha }}</p>
      <p>{{ asunto }}</p>
      <p>{{ descripcion }}</p>
    </div>
  </div>
</template>

<script>
import { consultarForoFachada } from "../helpers/ForoCliente";

export default {
  data() {
    return {
      cedulaEstudiante: null,
      descripcion: null,
      fecha: null,
      cedulaEstudiante: null,
    };
  },

  methods: {
    async buscarForo() {
      const dato = await consultarForoFachada(this.asunto);
      this.cedulaEstudiante = dato.cedulaEstudiante;
      this.descripcion = dato.descripcion;
      this.fecha = dato.fecha;
    },
  },
  props: {
    asunto: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.buscarForo();
  },
};
</script>

<style scoped>
.contenedor-foro-component {
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