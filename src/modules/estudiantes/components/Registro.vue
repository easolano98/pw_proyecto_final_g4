<template>
  <div class="contenedor">
    <div class="registro">
      <h1>SUSCRIBETE</h1>
      <label for="">Cedula</label>
      <input v-model="cedula" type="text" />
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
import { guardarEstudianteFachada } from "../helpers/EstudianteCliente";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
    };
  },
  methods: {
    async guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
      };

      await guardarEstudianteFachada(data);
      this.reiniciar();
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