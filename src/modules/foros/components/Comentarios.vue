<template>
  <div>
    <!-- Título del formulario -->
    <h3>Envia tu comentario</h3>

    <!-- Checkbox para mostrar/ocultar el campo de cédula -->
    <label for="checkCedula">Hacer anónimo el comentario:</label>
    <input type="checkbox" id="checkCedula" v-model="anonimo" />

    <!-- Campo de cédula, visible solo si anonimo es falso -->
    <div v-if="!anonimo">
      <label for="cedulaEstudiante">Cédula:</label>
      <input
        type="text"
        id="cedulaEstudiante"
        v-model="cedulaEstudiante"
        placeholder="Ingresa tu cédula"
      />
    </div>

    <!-- Sección de anonimato, visible si anonimo es verdadero -->
    <div v-else>
      <p>Anónimo</p>
    </div>

    <input type="text" id="asuntoForo" v-model="descripcion" /><br />

    <!-- Botón para guardar el comentario -->
    <button @click="guardarComentario">Guardar Comentario</button>
  </div>
</template>
  
  <script>
import { guardarComentarioFachada } from "../helpers/ComentarioCliente";

export default {
  data() {
    return {
      descripcion: "", // Datos del formulario
      cedulaEstudiante: "",
      anonimo: "",
    };
  },
  methods: {
    guardarComentario() {
      if (this.verificarCampos()) {
        const data = {
          descripcion: this.descripcion,
          cedulaEstudiante: this.cedulaEstudiante,
          asuntoForo: this.asuntoForo,
        };
        console.log(this.cedulaEstudiante);
        guardarComentarioFachada(data);

        location.reload();
      }
    },
    verificarCampos() {
      if (
        this.descripcion.trim() == "" &&
        !this.anonimo &&
        this.cedulaEstudiante.trim() == ""
      ) {
        alert("Por favor, llene todos los campos.");
        return false;
      } else if (this.descripcion.trim() == "") {
        alert("Por favor, llene todos los campos.");
        return false;
      } else {
        if (this.anonimo) {
          this.cedulaEstudiante = "0000000000";
        }
        return true;
      }
    },
  },
  props: {
    asuntoForo: {
      type: String,
      required: true,
    },
  },
};
</script>
  
  <style scoped>
/* Puedes eliminar este estilo si ya no lo necesitas */
#asuntoForo {
  height: 250px;
  width: 250px;
}
</style>
  