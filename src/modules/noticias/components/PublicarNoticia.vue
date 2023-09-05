<template>
  <div class="container">
    <div class="publicar">
      <h1>Noticia</h1>

      <div>
        <div class="form-floating mb-3">
          <input
            type="text"
            maxlength="10"
            class="form-control"
            id="floatingInput"
            placeholder="17XXXXXXXX"
            v-model="cedula"
          />
          <label for="floatingInput">Cédula</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="El mundo y su naturaleza"
            v-model="tituloCorto"
          />
          <label for="floatingInput">Título Corto</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="El mundo y su naturaleza"
            v-model="tituloLargo"
          />
          <label for="floatingInput">Título Largo</label>
        </div>
      </div>

      <div
        class="btn-group margen"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input
          type="checkbox"
          class="btn-check"
          id="btncheck1"
          autocomplete="off"
          v-model="hasText"
        />
        <label class="btn btn-outline-primary" for="btncheck1"
          >Descripción</label
        >

        <input
          type="checkbox"
          class="btn-check"
          id="btncheck2"
          autocomplete="off"
          v-model="hasImage"
        />
        <label class="btn btn-outline-primary" for="btncheck2">Imagen</label>

        <input
          type="checkbox"
          class="btn-check"
          id="btncheck3"
          autocomplete="off"
          v-model="hasVideo"
        />
        <label class="btn btn-outline-primary" for="btncheck3">Video</label>
      </div>

      <div v-if="hasText">
        <div class="form-floating mb-3">
          <textarea
            type="text"
            class="form-control descripcion"
            id="floatingInput"
            placeholder="El mundo y su naturaleza"
            v-model="tituloLargo"
          ></textarea>
          <label for="floatingInput">Descripción</label>
        </div>
      </div>

      <div v-if="hasImage">
        <div class="input-group mb-3">
          <input
            type="file"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            @change="manejoArchivoSubido"
          />
        </div>
        <img v-if="urlImagen != ''" :src="urlImagen" alt="" />
      </div>

      <div v-if="hasVideo">
        <div class="form-floating mb-3">
          <input
            type="url"
            class="form-control"
            id="floatingInput"
            placeholder=""
            v-model="urlVideo"
          />
          <label for="floatingInput">Inserte la URL del video</label>
        </div>
      </div>

      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="insertarNoticia"
      >
        Publicar Noticia
      </button>
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
      descripcion: "",
      urlImagen: "",
      urlVideo: "",
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
    verificarCampos() {
      if (
        this.tituloCorto.trim() == "" &&
        this.tituloLargo.trim() == "" &&
        this.cedula.trim() == ""
      ) {
        alert("Ingrese todos los campos por favor");
        return false;
      } else {
        if (this.hasText && this.descripcion.trim() == "") {
          alert("Ingrese la descripción de su noticia");
          return false;
        }
        if (this.hasImage && this.urlImagen.trim() == "") {
          alert("Ingrese la imagen de su noticia");
          return false;
        }
        if (this.hasVideo && this.urlVideo.trim() == "") {
          alert("Ingrese el enlace del video de su noticia");
          return false;
        }
        return true;
      }
    },
    limpiar() {
      this.hasText = false;
      this.hasImage = false;
      this.hasVideo = false;
      this.cedula = "";
      this.tituloCorto = "";
      this.tituloLargo = "";
      this.descripcion = "";
      this.urlImagen = "";
      this.urlVideo = "";
    },
    async insertarNoticia() {
      if (this.verificarCampos) {
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
            "La noticia con el titulo corto '" +
              this.tituloCorto +
              "' ya existe"
          );
        } catch {
          await guardarNoticiaFachada(data);
          this.limpiar();
        }
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
.margen {
  margin-bottom: 15px;
}
.descripcion {
  width: 600px;
  height: 250px;
  resize: vertical;
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

input {
  width: 600px;
}

img {
  max-width: 600px;
  max-height: 400px;
}
</style>