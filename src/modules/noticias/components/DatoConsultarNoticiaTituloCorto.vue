<template>
  <div class="contenedor-noticia-component">
    <div>
      <h1>Noticia</h1>
    </div>

    <label for="">Titulo Corto</label>
    <div>
      <input v-model="tituloCorto" type="text" />
    </div>

    <button @click="buscarNoticia">Buscar</button>

    <div v-if="mostrar" class="contenedor-noticia-info">
      <h1>{{ tituloCorto }}</h1>
      <h2>{{ tituloLargo }}</h2>
      <p>Fecha: {{ fecha }}</p>
      <p>Autor: {{ cedula }}</p>

      <label v-if="mostrar" for="imagen">Imagen</label>
      <div>
        <img v-if="urlImagen" :src="urlImagen" alt="Imagen cargada" />
      </div>

      <label v-if="mostrar" for="imagen">Video</label>
      <div v-if="urlVideo" class="video-container">
        <iframe :src="embedURL" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarNoticiaFachada } from "../helpers/NoticiaCliente.js";

export default {
  data() {
    return {
      id: null,
      tituloCorto: null,
      tituloLargo: null,
      descripcion: null,
      fecha: null,
      cedula: null,
      urlImagen: null,
      urlVideo: null,
      mostrar: false,
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
  },

  methods: {
    async buscarNoticia() {
      if (this.tituloCorto != null && this.tituloCorto != "") {
        const dato = await consultarNoticiaFachada(this.tituloCorto);

        this.tituloLargo = dato.tituloLargo;
        this.descripcion = dato.descripcion;
        this.fecha = dato.fecha;
        this.cedula = dato.cedulaEstudiante;

        if (dato.urlImagen != null && dato.urlImagen != "") {
          this.urlImagen = dato.urlImagen;
        }

        if (dato.urlVideo != null && dato.urlVideo != "") {
          this.urlVideo = dato.urlVideo;
        }

        this.mostrar = true;
        console.log(dato);
      } else {
        this.mostrar = false;
        console.log("llene el campo titulo corto");
      }
    },

    getVideoIDFromURL(url) {
      // Función para extraer el ID del video de YouTube desde la URL
      const match = url.match(
        /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=|embed\/watch\?feature=player_embedded&v=))([^#\&\?]*).*/
      );
      return match && match[1];
    },
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 150px;
}

.contenedor-noticia-component{

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