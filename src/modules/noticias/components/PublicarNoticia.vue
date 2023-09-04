<template>
  <div class="container">
    <div class="publicar">
      <h1>Noticia</h1>

      <div>
        <div class="form-floating mb-3">
          <input type="text" maxlength="10" class="form-control" id="floatingInput" placeholder="17XXXXXXXX" v-model="cedula">
          <label for="floatingInput">Cédula</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="El mundo y su naturaleza" v-model="tituloCorto">
          <label for="floatingInput">Título Corto</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="El mundo y su naturaleza" v-model="tituloLargo">
          <label for="floatingInput">Título Largo</label>
        </div>
      </div>

      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" v-model="hasText">
        <label class="btn btn-outline-primary" for="btncheck1">Descripción</label>
      
        <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" v-model="hasImage">
        <label class="btn btn-outline-primary" for="btncheck2">Imagen</label>
      
        <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" v-model="hasVideo">
        <label class="btn btn-outline-primary" for="btncheck3">Video</label>
      </div>

      <div v-if="hasText">
        <div class="form-floating mb-3">
          <textarea type="text" class="form-control descripcion" id="floatingInput" placeholder="El mundo y su naturaleza" v-model="tituloLargo"></textarea>
          <label for="floatingInput">Descripción</label>
        </div>
      </div>

      <div v-if="hasImage">
        <div class="input-group mb-3">
          <input type="file" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" @change="manejoArchivoSubido">
        </div>
        <img v-if="urlImagen != ''" :src="urlImagen" alt="" />
      </div>

      <div v-if="hasVideo">
        <div class="form-floating mb-3">
          <input type="url" class="form-control" id="floatingInput" placeholder="" v-model="urlVideo">
          <label for="floatingInput">Inserte la URL del video</label>
        </div>
      </div>

      <button type="button" class="btn btn-outline-secondary" @click="insertarNoticia">Publicar Noticia</button>
    </div>
  </div>
</template>

<script>
import {
  guardarNoticiaFachada,
  consultarNoticiaFachada,
} from "../helpers/NoticiaCliente";
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
    async insertarNoticia() {
      const data = {
        tituloCorto: this.tituloCorto,
        tituloLargo: this.tituloLargo,
        descripcion: this.descripcion,
        urlImagen: this.urlImagen,
        urlVideo: this.urlVideo,
        cedulaEstudiante: this.cedula,
      };
      try {
        await consultarNoticiaFachada(this.tituloCorto);
        alert(
          "La noticia con esa identificador " + this.tituloCorto + " ya existe"
        );
      } catch {
        await guardarNoticiaFachada(data);
      }
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
.descripcion {
  width: 600px;
  height: 250px;
  resize: vertical;
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

img {
  max-width: 600px;
  max-height: 400px;
}
</style>