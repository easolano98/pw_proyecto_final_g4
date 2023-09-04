<template>
  <DatoConsultarForoAsunto :asunto="'Vacaciones'" />
  <h2>Comentarios</h2>
  <BuscarComentarios
    v-for="(comentario, index) in comentarios"
    :key="index"
    :comentario="comentario"
  />
  <Comentarios :asuntoForo="'Vacaciones'" />
</template>

<script>
import Comentarios from "../components/Comentarios.vue";
import DatoConsultarForoAsunto from "../components/DatoConsultarForoAsunto.vue";
import BuscarComentarios from "../components/BuscarComentarios.vue";
import { consultarComentariosForoFachada } from "../helpers/ForoCliente";
export default {
  components: {
    Comentarios,
    DatoConsultarForoAsunto,
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
        // Llama a tu función de fachada para obtener los datos de noticias
        const data = await consultarComentariosForoFachada("Vacaciones");

        // Actualiza el estado de Vue con los datos de noticias
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
</style>