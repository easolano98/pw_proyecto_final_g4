<template>
  <div id="app" class="contenedor">
    <div class="registro">
      <h1>Suscríbete</h1>

      <h5>Forma parte de nuestra asociación</h5>

      <div>
        <div class="form-floating mb-3">
          <input
            type="text"
            maxlength="10"
            class="form-control"
            id="floatingInput"
            placeholder="17XXXXXXXX"
            v-model="cedula"
          />
          <label for="floatingInput"><strong>Cédula</strong></label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Pepito"
            v-model="nombre"
          />
          <label for="floatingInput"><strong>Nombre</strong></label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="De los Palotes"
            v-model="apellido"
          />
          <label for="floatingInput"><strong>Apellido</strong></label>
        </div>
        <div class="form-floating mb-3">
          <input
            class="form-control"
            id="floatingInput"
            placeholder="El mundo y su naturaleza"
            v-model="fechaNacimiento"
            type="datetime-local"
          />
          <label for="floatingInput"
            ><strong>Fecha de Nacimiento</strong></label
          >
        </div>
      </div>

      <button
        type="button"
        class="btn btn-outline-info"
        @click="guardarEstudiante"
      >
        Suscribirse
      </button>
    </div>
  </div>
</template>

<script>
import {
  guardarEstudianteFachada,
  consultarEstudianteFachada,
} from "../helpers/EstudianteCliente";
export default {
  data() {
    return {
      cedula: "",
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
    };
  },
  methods: {
    async guardarEstudiante() {
      if (this.verificarCampos()) {
        const data = {
          cedula: this.cedula,
          nombre: this.nombre,
          apellido: this.apellido,
          fechaNacimiento: this.fechaNacimiento,
        };

        try {
          await consultarEstudianteFachada(this.cedula);
          alert("Ya existe el estudiante con la cedula " + this.cedula);
        } catch {
          await guardarEstudianteFachada(data);
          this.reiniciar();
        }
      } else {
        alert("Asegúrese de llenar todos los campos");
      }
    },
    verificarCampos() {
      if (
        this.cedula.trim() != "" &&
        this.nombre.trim() != "" &&
        this.apellido.trim() != "" &&
        this.fechaNacimiento != ""
      ) {
        return true;
      } else {
        return false;
      }
    },
    reiniciar() {
      this.cedula = null;
      this.nombre = null;
      this.apellido = null;
      this.fechaNacimiento = null;
    },
  },
};
</script>


<style scoped >
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
}
.registro {
  display: grid;
}
</style>