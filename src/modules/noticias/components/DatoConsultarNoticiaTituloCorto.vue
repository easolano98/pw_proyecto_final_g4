<template>
  <div id="app" class="contenedor-noticia-component">
    <div>
      <h1>Noticia</h1>
    </div>

    <div class="contenedor-noticia-info">
      <h1>{{ tituloCorto }}</h1>
      <h2>{{ tituloLargo }}</h2>
      <p><strong>Fecha: </strong> {{ fechaFormateada }}</p>
      <p class="autor" @click="redirigirAVerEstudiante">
        <strong>Autor: </strong>{{ nombreEstudiante }}
      </p>

      <div v-if="urlImagen">
        <img :src="urlImagen" alt="Imagen cargada" />
      </div>

      <div v-if="urlVideo" class="video-container">
        <iframe :src="embedURL" frameborder="0" allowfullscreen></iframe>
      </div>

      <p>{{ descripcion }}</p>
    </div>
  </div>
</template>

<script>
import router from "@/routers/router";
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
    async redirigirAVerEstudiante() {
      const ruta = `/estudiantes/${this.cedula}`;
      await router.push({ path: ruta });
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
  max-width: 100%;
  height: auto;
}

.contenedor-noticia-component {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 60px;
}

.contenedor-noticia-info {
  border: 1px solid rgb(114, 109, 226);
  border-radius: 5px;
  margin-top: 10px;
  max-width: 500px;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
}

.autor:hover {
  cursor: pointer; /* Cambia el cursor al pasar sobre el enlace del autor */
  color: #007bff; /* Cambia el color del texto del autor */
  text-decoration: underline; /* Subraya el enlace del autor */
  font-weight: bold; /* Agrega negrita al texto del autor */
}

.video-container {
  margin-top: 10px;
}

iframe {
  max-width: 100%;
}

h1 {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>