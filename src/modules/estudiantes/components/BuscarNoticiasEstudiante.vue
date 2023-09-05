<template>
  <div id="app">
    <div class="contenedor-noticias">
      <h1>Publicados por {{ autor }}</h1>
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
import {
  consultarNoticiasEstudianteFachada,
  consultarEstudianteFachada,
} from "../helpers/EstudianteCliente";
export default {
  components: {
    BuscarNoticias,
  },
  data() {
    return {
      noticias: [],
      autor: "",
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
    async buscarAutor() {
      const { nombre, apellido } = await consultarEstudianteFachada(
        this.cedula
      );
      this.autor = nombre + " " + apellido;
    },
  },
  mounted() {
    this.consultarNoticias();
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
h1{
  margin-bottom: 20px;
  font-size: 3.25vw;
}
</style>