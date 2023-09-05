<template>
  <div id="app" class="container">
    <div class="publicar">
      <h1>Noticia</h1>

      <div>
        <div class="form-floating mb-3">
          <input
            type="text"
            maxlength="10"
            class="form-control formulario"
            id="floatingInput"
            placeholder="17XXXXXXXX"
            v-model="cedula"
          />
          <label for="floatingInput"><strong>Cédula</strong></label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control formulario"
            id="floatingInput"
            placeholder="El mundo y su naturaleza"
            v-model="tituloCorto"
          />
          <label for="floatingInput"><strong>Título Corto</strong></label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control formulario"
            id="floatingInput"
            placeholder="El mundo y su naturaleza"
            v-model="tituloLargo"
          />
          <label for="floatingInput"><strong>Título Largo</strong></label>
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
          ><strong>Descripción</strong></label
        >

        <input
          type="checkbox"
          class="btn-check"
          id="btncheck2"
          autocomplete="off"
          v-model="hasImage"
        />
        <label class="btn btn-outline-primary" for="btncheck2"
          ><strong>Imagen</strong></label
        >

        <input
          type="checkbox"
          class="btn-check"
          id="btncheck3"
          autocomplete="off"
          v-model="hasVideo"
        />
        <label class="btn btn-outline-primary" for="btncheck3"
          ><strong>Video</strong></label
        >
      </div>

      <div v-if="hasText" class="publicar">
        <div class="form-floating mb-3">
          <textarea
            type="text"
            class="form-control descripcion"
            style="height: 300px"
            id="floatingInput"
            placeholder="El mundo y su naturaleza"
            v-model="descripcion"
          ></textarea>
          <label for="floatingInput"><strong>Descripción</strong></label>
        </div>
      </div>

      <div v-if="hasImage" class="publicar">
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
        <img
          style="margin: 25px 0px"
          v-if="urlImagen != ''"
          :src="urlImagen"
          alt=""
        />
      </div>

      <div v-if="hasVideo" class="publicar">
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
        style="margin-bottom: 25px"
        type="button"
        class="btn btn-outline-info"
        @click="insertarNoticia"
      >
        Publicar Noticia
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/routers/router";
import { consultarEstudianteFachada } from "@/modules/estudiantes/helpers/EstudianteCliente";
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
    async verificarCampos() {
      if (
        this.tituloCorto.trim() == "" ||
        this.tituloLargo.trim() == "" ||
        this.cedula.trim() == ""
      ) {
        alert("Ingrese todos los campos por favor");
        return false;
      } else {
        try {
          await consultarEstudianteFachada(this.cedula);
        } catch (error) {
          alert("Ingrese una cédula válida");
          return false;
        }

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
      if (await this.verificarCampos()) {
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
        } catch (error) {
          await guardarNoticiaFachada(data);
          this.limpiar();
          alert("La noticia fue publicada.");
          await this.redirigirANoticia();
        }
      }
    },
    async redirigirANoticia() {
      const ruta = `/noticias`;
      await router.push({ path: ruta });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.publicar {
  display: grid;
  width: 100%;
}

.margen {
  margin-bottom: 15px;
}

textarea {
  width: 100%;
  height: 250px;
  resize: vertical;
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

input {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

img {
  width: 100%;
  height: auto;
}

h1 {
  margin-top: 20px;
}

input,
textarea,
label,
button {
  font-size: 1vw;
}

@media (max-width: 1000px) {
  .comentario {
    font-size: 1.5vw;
  }

  h4 {
    font-size: 3vw;
  }

  input,
  textarea,
  label,
  button {
    font-size: 1.5vw;
  }
}

@media (max-width: 600px) {
  .publicar {
    font-size: 2.1vw;
  }

  h4 {
    font-size: 3.5vw;
  }

  input,
  textarea,
  label,
  button {
    font-size: 2.1vw;
  }
}
</style>