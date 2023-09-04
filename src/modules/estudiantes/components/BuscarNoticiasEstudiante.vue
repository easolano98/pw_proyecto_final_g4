<template>
  <div id="app">
    <div class="contenedor-noticias">
      <BuscarNoticias
        v-for="(noticia, index) in noticias"
        :key="index"
        :noticia="noticia"
      />
    </div>
  </div>
</template>

<script>
import BuscarNoticias from "@/modules/noticias/components/BuscarNoticias.vue";
import { consultarNoticiasEstudianteFachada } from "../helpers/EstudianteCliente";
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
    async consultarNoticias() {
      try {
        const noticias = await consultarNoticiasEstudianteFachada(this.cedula);

        this.noticias = noticias;
      } catch (error) {
        console.error("Error al cargar las noticias:", error);
      }
    },
  },
  mounted() {
    this.consultarNoticias();
  },
  props: {
    cedula: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>