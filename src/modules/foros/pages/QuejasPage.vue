<template>
  <div id="app">
    <h1>Quejas</h1>
    <BuscarComentarios
      v-for="(comentario, index) in comentarios"
      :key="index"
      :comentario="comentario"
    />
    <Comentarios :asuntoForo="'quejas'" />
  </div>
</template>

<script>
import Comentarios from "../components/Comentarios.vue";
import BuscarComentarios from "../components/BuscarComentarios.vue";
import { consultarComentariosForoFachada } from "../helpers/ForoCliente";
export default {
  components: {
    Comentarios,
    BuscarComentarios,
  },
  data() {
    return {
      comentarios: [],
    };
  },
  methods: {
    async consumirAPI() {
      try {
        const data = await consultarComentariosForoFachada("quejas");
        this.comentarios = data;
      } catch (error) {
        console.error("Error al cargar las noticias:", error);
      }
    },
  },
  mounted() {
    this.consumirAPI();
  },
};
</script>

<style>
h1{
  margin: 25px 0px;
}
</style>