<template>
  <div id="app">
    <h1>Noticias</h1>
    <div class="contenedor-noticias">
      <button
        type="button"
        class="btn btn-outline-info btn-lg"
        @click="redirigirAPublicarNoticia"
      >
        Publicar una noticia
      </button>

      <BuscarNoticias
        v-for="(noticia, index) in noticias"
        :key="index"
        :noticia="noticia"
      />
    </div>
  </div>
</template>

<script>
import router from "@/routers/router";
import BuscarNoticias from "../components/BuscarNoticias.vue";
import { consultarNoticiasFachada } from "../helpers/NoticiaCliente";

export default {
  components: {
    BuscarNoticias,
  },
  data() {
    return {
      noticias: [],
    };
  },
  methods: {
    async consumirAPI() {
      try {
        // Llama a tu funciÃ³n de fachada para obtener los datos de noticias
        const noticias = await consultarNoticiasFachada();

        // Actualiza el estado de Vue con los datos de noticias
        this.noticias = noticias;
      } catch (error) {
        console.error("Error al cargar las noticias:", error);
      }
    },
    async redirigirAPublicarNoticia() {
      const ruta = `/noticias/publicar`;
      await router.push({ path: ruta });
    },
  },
  mounted() {
    this.consumirAPI();
  },
};
</script>

<style scoped>
div button {
  margin-left: 80%;
  margin-bottom: 10px;
}
</style>