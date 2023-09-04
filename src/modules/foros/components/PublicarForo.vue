<template>
  <div class="container">
    <div class="publicar">
      <h1>Foro</h1>
      <label for="">Cédula</label>
      <input type="text" v-model="cedula" />
      <label for="">Asunto</label>
      <input type="text" v-model="asunto" />
      <label for="">Descripción</label>
      <input type="text" v-model="descripcion" />

      <button @click="insertarForo">Publicar Foro</button>
    </div>
  </div>
</template>

<script>
import {
  guardarForoFachada,
  consultarForoFachada,
} from "../helpers/ForoCliente";
export default {
  data() {
    return {
      cedula: "",
      asunto: "",
      descripcion: "",
    };
  },
  methods: {
    async insertarForo() {
      const data = {
        asunto: this.asunto,
        descripcion: this.descripcion,
        cedulaEstudiante: this.cedula,
      };
      try {
        await consultarForoFachada(this.asunto);
        alert(
          "No se pudo publicar el foro debido a que existe un foro con ese asunto. \nUtilice otro asunto"
        );
      } catch {
        guardarForoFachada(data);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.publicar {
  display: grid;
}
</style>