<template>
  <div class="container">
    <h3>Información del estudiante</h3>

    <div>
      <label for="nombre">Nombre:</label>
      <input v-model="nombre" type="text" id="nombre" disabled />
    </div>

    <div>
      <label for="apellido">Apellido:</label>
      <input v-model="apellido" type="text" id="apellido" disabled />
    </div>

    <div>
      <label id="fecha1" for="fechaNacimiento">Fecha Nacimiento:</label>
      <input
        v-model="fechaNacimiento"
        type="datetime-local"
        id="fechaNacimiento"
        disabled
      />
    </div>
  </div>
</template>

<script>
import { consultarEstudianteFachada } from "../helpers/EstudianteCliente";

export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
    };
  },
  methods: {
    async consultarEstudiante() {
      const data = await consultarEstudianteFachada(this.cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fechaNacimiento = data.fechaNacimiento;
    },
  },
  mounted() {
    this.consultarEstudiante();
  },
  props: {
    cedula: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid black;

  padding: 20px;
  width: 300px; 
  margin: 0 auto; 
}

button:hover {
  background-color: aqua;
}

button {
  width: 150px;
  height: 25px;
  border-radius: 25px;
  margin-top: 25px;
}

label {
  margin-left: 1px;
}

#fecha1 {
  margin-left: -55px;
}

input {
  margin-left: 4px;
  width: 150px;
}
.container > div:not(:last-child) {
  margin-bottom: 10px;
}
</style>
  