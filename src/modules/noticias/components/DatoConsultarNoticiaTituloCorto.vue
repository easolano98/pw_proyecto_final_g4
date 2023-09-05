<template>
  <div class="contenedor-noticia-component">
    <div>
      <h1>Noticia</h1>
    </div>

    <div class="contenedor-noticia-info">
      <h1>{{ tituloCorto }}</h1>
      <h2>{{ tituloLargo }}</h2>
      <p><strong>Fecha: </strong> {{ fechaFormateada }}</p>
      <p><strong>Autor: </strong>{{ nombreEstudiante }}</p>

      <div v-if="urlImagen">
        <label for="imagen">Imagen</label>
        <img :src="urlImagen" alt="Imagen cargada" />
      </div>

      <div v-if="urlVideo" class="video-container">
        <label for="imagen">Video</label>
        <iframe :src="embedURL" frameborder="0" allowfullscreen></iframe>
      </div>

      <p>{{ descripcion }}</p>
    </div>
  </div>
</template>

<script>
import { consultarEstudianteFachada } from "@/modules/estudiantes/helpers/EstudianteCliente.js";
import { consultarNoticiaFachada } from "../helpers/NoticiaCliente.js";

export default {
  data() {
    return {
      id: null,
      tituloLargo: null,
      descripcion: null,
      fecha: null,
      cedula: null,
      urlImagen: null,
      urlVideo: null,
      nombreEstudiante: "",
    };
  },

  computed: {
    embedURL() {
      // Extraer el ID del video de YouTube de la URL
      const videoID = this.getVideoIDFromURL(this.urlVideo);
      if (videoID) {
        // Crear una URL de iframe para mostrar el video de YouTube
        return `https://www.youtube.com/embed/${videoID}`;
      } else {
        return "";
      }
    },

    fechaFormateada() {
      const fechaISO = new Date(this.fecha);
      const opciones = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return fechaISO.toLocaleDateString("es-ES", opciones);
    },
  },

  methods: {
    async buscarNoticia() {
      const dato = await consultarNoticiaFachada(this.tituloCorto);

      this.tituloLargo = dato.tituloLargo;
      this.descripcion = dato.descripcion;
      this.fecha = dato.fecha;
      this.cedula = dato.cedulaEstudiante;

      const { nombre, apellido } = await consultarEstudianteFachada(
        dato.cedulaEstudiante
      );
      this.nombreEstudiante = nombre + " " + apellido;

      if (dato.urlImagen != null && dato.urlImagen != "") {
        this.urlImagen = dato.urlImagen;
      }

      if (dato.urlVideo != null && dato.urlVideo != "") {
        this.urlVideo = dato.urlVideo;
      }

      this.mostrar = true;
    },

    getVideoIDFromURL(url) {
      // Función para extraer el ID del video de YouTube desde la URL
      const match = url.match(
        /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=|embed\/watch\?feature=player_embedded&v=))([^#\&\?]*).*/
      );
      return match && match[1];
    },
  },
  mounted() {
    this.buscarNoticia();
  },
  props: {
    tituloCorto: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 150px;
}

.contenedor-noticia-component {
  display: inline-block;
  justify-content: center;
}
.contenedor-noticia-info {
  border: 1px solid grey;
  border-radius: 5px;
  margin-top: 10px;
  width: 500px;
}
</style>