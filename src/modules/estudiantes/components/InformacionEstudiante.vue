<template>
  <div class="container">
    <h3>Información del estudiante</h3>

    <div class="imagen">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6073/6073874.png"
        alt="Imagen por defecto"
      />
    </div>

    <div class="info-item">
      <label for="nombre">Nombre:</label>
      <div class="info-value">{{ nombre }}</div>
    </div>

    <div class="info-item">
      <label for="apellido">Apellido:</label>
      <div class="info-value">{{ apellido }}</div>
    </div>

    <div class="info-item">
      <label for="fechaNacimiento">Fecha de Nacimiento:</label>
      <div class="info-value">{{ formatDate }}</div>
    </div>

    <button
      type="button"
      class="btn btn-outline-info"
      @click="redirigirAForosEstudiante"
    >
      Foros
    </button>

    <button
      type="button"
      class="btn btn-outline-info"
      @click="redirigirANoticiasEstudiante"
    >
      Noticias
    </button>
  </div>
</template>

<script>
import router from "@/routers/router";
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
    async redirigirAForosEstudiante() {
      const ruta = `/estudiantes/${this.cedula}/foros`;
      await router.push({ path: ruta });
    },
    async redirigirANoticiasEstudiante() {
      const ruta = `/estudiantes/${this.cedula}/noticias`;
      await router.push({ path: ruta });
    },
  },
  computed: {
    formatDate() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.fechaNacimiento).toLocaleDateString(
        "es-ES",
        options
      );
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
  border: 1px solid rgb(50, 48, 48);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
}

.imagen {
  margin-bottom: 20px;
}

.imagen img {
  max-width: 150px;
  height: auto;
  border-radius: 50%;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
}

label {
  font-weight: bold;
  margin-right: 10px;
}

.info-value {
  flex-grow: 1;
  padding: 5px;
}

button {
  width: 150px;
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
  