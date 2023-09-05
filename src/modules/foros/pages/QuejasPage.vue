<template>
  <div id="app">
    <h1>Quejas</h1>
    <BuscarComentarios
      v-for="(comentario, index) in comentarios"
      :key="index"
      :comentario="comentario"
    />
    <Comentarios :asuntoForo="'Quejas'" />
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
        const data = await consultarComentariosForoFachada("Quejas");
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
  margin: 2% 0%;
  font-size: 3vw;
}
</style>