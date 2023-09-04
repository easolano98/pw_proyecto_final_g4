<template>
  <table border="2">
    <tr>
      <th>Asunto</th>
      <th>Descripcion</th>
      <th>Fecha</th>
    </tr>

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
      <td><input type="datetime-local" v-model="foro.fecha" disabled /></td>
    </tr>
    <tbody></tbody>
  </table>
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
  },
  mounted() {
    this.buscarForos();
  },
};
</script>

<style>
button {
  border: none;
}
</style>