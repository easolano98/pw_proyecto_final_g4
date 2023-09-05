<template>
  <div class="contenedor">
    <table class="table table-dark table-hover caption-top">
      <caption>
        Foros del estudiante
        {{
          autor
        }}
      </caption>
      <thead>
        <tr>
          <th>Asunto</th>
          <th>Descripción</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="foro in foros" :key="foro.id">
          <td>
            <button @click="redirigirAVerForo(foro.asunto)">
              {{ foro.asunto }}
            </button>
          </td>
          <td>
            <button @click="redirigirAVerForo(foro.asunto)">
              {{ foro.descripcion }}
            </button>
          </td>
          <td>
            <p>{{ fechaFormateada(foro.fecha) }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
import router from "@/routers/router";
import {
  consultarForosEstudianteFachada,
  consultarEstudianteFachada,
} from "../helpers/EstudianteCliente";

export default {
  data() {
    return {
      foros: [],
      autor: "",
    };
  },
  methods: {
    async buscarForos() {
      var foros = await consultarForosEstudianteFachada(this.cedula);
      this.foros = foros;
    },
    async buscarAutor() {
      const { nombre, apellido } = await consultarEstudianteFachada(
        this.cedula
      );
      this.autor = nombre + " " + apellido;
    },
    async redirigirAVerForo(asunto) {
      const ruta = `/foros/${asunto}`;
      await router.push({ path: ruta });
    },
    fechaFormateada(fecha) {
      const fechaISO = new Date(fecha);
      const opciones = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return fechaISO.toLocaleDateString("es-ES", opciones);
    },
  },
  mounted() {
    this.buscarForos();
    this.buscarAutor();
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
button {
  border: none;
  outline: none;
  background: none;
  color: white;
}

.fecha {
  background: none;
  outline: none;
  border: none;
  color: white;
}

caption {
  font-weight: bold;
  font-size: 1.5vw;
  color: black;
}
.contenedor {
  margin-left: 10%;
  margin-right: 10%;
}
</style>