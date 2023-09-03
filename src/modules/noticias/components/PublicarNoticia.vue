<template>
  <div class="container">
    <div class="publicar">
      <h1>Noticia</h1>
      <label for="">Cédula</label>
      <input type="text" v-model="cedula" />
      <label for="">Título Corto</label>
      <input type="text" v-model="tituloCorto" />
      <label for="">Título Largo</label>
      <input type="text" v-model="tituloLargo" />

      <div>
        <label for="">Descripción</label>
        <input type="checkbox" v-model="hasText" />
        <label for="">Imagen</label>
        <input type="checkbox" v-model="hasImage" />
        <label for="">Video</label>
        <input type="checkbox" v-model="hasVideo" />
      </div>

      <div v-if="hasText">
        <label for="">Descripcion</label>
        <input type="text" v-model="descripcion" />
      </div>
      <div v-if="hasImage">
        <label for="">Inserte una imagen</label>
        <input type="file" @change="manejoArchivoSubido" />
        <!-- v-model no soporta inputs de tipo 'file' -->
        <img v-if="urlImagen != ''" :src="urlImagen" alt="" />
      </div>
      <div v-if="hasVideo">
        <label for="">Agregue la URL del video (Youtube)</label>
        <input type="url" v-model="urlVideo" />
      </div>

      <button @click="insertarNoticia">Publicar Noticia</button>
    </div>
  </div>
</template>

<script>
import { guardarNoticiaFachada } from "../helpers/NoticiaCliente";
export default {
  data() {
    return {
      hasText: false,
      hasImage: false,
      hasVideo: false,
      cedula: "",
      tituloCorto: "",
      tituloLargo: "",
      descripcion: null,
      urlImagen: null,
      urlVideo: null,
    };
  },
  methods: {
    manejoArchivoSubido(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.urlImagen = reader.result; // Almacena la imagen en base64
        };
      }
    },
    insertarNoticia() {
      const data = {
        tituloCorto: this.tituloCorto,
        tituloLargo: this.tituloLargo,
        descripcion: this.descripcion,
        urlImagen: this.urlImagen,
        urlVideo: this.urlVideo,
        cedulaEstudiante: this.cedula,
      };
      guardarNoticiaFachada(data);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.publicar {
  display: grid;
}
</style>