<template>
  <div class="contenedor">
    <table class="table table-dark table-hover caption-top">
      <caption>
        Lista de foros disponibles
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
import { consultarForosFachada } from "../helpers/ForoCliente";
import router from "@/routers/router";

export default {
  data() {
    return {
      foros: [],
    };
  },
  methods: {
    async buscarForos() {
      var foros = await consultarForosFachada();
      this.foros = foros;
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
  }
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

table{
  font-size: 1vw;
}
</style>