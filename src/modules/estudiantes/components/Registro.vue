<template>
  <div class="contenedor">
    <div class="registro">
      <h1>SUSCRÍBETE</h1>
      <label for="">Cédula</label>
      <input v-model="cedula" type="text" maxlength="10" />
      <label for="">Nombre</label>
      <input v-model="nombre" type="text" />
      <label for="">Apellido</label>
      <input v-model="apellido" type="text" />
      <label for="">Fecha de Nacimiento</label>
      <input v-model="fechaNacimiento" type="datetime-local" />
      <button @click="guardarEstudiante">Suscribirse</button>
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