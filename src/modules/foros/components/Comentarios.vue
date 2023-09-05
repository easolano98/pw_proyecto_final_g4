<template>
  <div class="container">
    <div class="comentario">
      <!-- Título del formulario -->
      <h4>Envia tu comentario</h4>

      <!-- Checkbox para mostrar/ocultar el campo de cédula -->
      <div>
        <input
          type="checkbox"
          class="btn-check"
          id="btn-check-2-outlined"
          checked
          autocomplete="off"
          v-model="anonimo"
        />
        <label class="btn btn-outline-secondary" for="btn-check-2-outlined"
          ><strong>Anónimo</strong></label
        >
      </div>

      <!-- Campo de cédula, visible solo si anonimo es falso -->
      <div v-if="!anonimo">
        <div class="form-floating mb-3">
          <input
            type="text"
            maxlength="10"
            class="form-control"
            id="floatingInput"
            placeholder="17XXXXXXXX"
            v-model="cedulaEstudiante"
          />
          <label for="floatingInput"><strong>Cédula</strong></label>
        </div>
      </div>

      <div class="form-floating mb-3">
        <textarea
          type="text"
          class="form-control"
          style="height: 250px"
          id="floatingInput"
          placeholder="..."
          v-model="descripcion"
        ></textarea>
        <label for="floatingInput"><strong>Descripción</strong></label>
      </div>

      <!-- Botón para guardar el comentario -->
      <button
        type="button"
        class="btn btn-outline-info btn-lg"
        @click="guardarComentario"
      >
        Guardar Comentario
      </button>
    </div>
  </div>
</template>
  
  <script>
import { consultarEstudianteFachada } from "@/modules/estudiantes/helpers/EstudianteCliente";
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
    async guardarComentario() {
      if (this.verificarCampos()) {
        const data = {
          descripcion: this.descripcion,
          cedulaEstudiante: this.cedulaEstudiante,
          asuntoForo: this.asuntoForo,
        };

        try {
          await consultarEstudianteFachada(this.cedulaEstudiante);
          guardarComentarioFachada(data);

          location.reload();
        } catch (error) {
          alert("Ingrese una cédula válida.");
        }
      }
    },
    verificarCampos() {
      if (
        this.descripcion.trim() == "" ||
        (!this.anonimo && this.cedulaEstudiante.trim() == "")
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
  watch: {
    anonimo() {
      this.cedulaEstudiante = "";
    },
  },
};
</script>
  
<style scoped>
/* Puedes eliminar este estilo si ya no lo necesitas */

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.comentario {
  width: 100%;
  padding: 15px;
}

.comentario * {
  margin-bottom: 15px;
}
</style>
  