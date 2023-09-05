<template>
  <div class="container">
    <div class="titulo">
      <h1>
        Publica en el <br />
        foro Aquí
      </h1>
      <div class="image-container">
        <img
          src="../store/ForoPublicarImagen.png"
          alt="No se pudo cargar la imagen"
          class="forum-image"
        />
      </div>
    </div>
    <div class="publicar">
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
          v-model="asunto"
        />
        <label for="floatingInput">Asunto</label>
      </div>
      <div class="form-floating mb-3">
        <textarea
          type="text"
          class="form-control descripcion"
          style="height: 250px"
          id="floatingInput"
          placeholder="El mundo y su naturaleza"
          v-model="descripcion"
        ></textarea>
        <label for="floatingInput">Descripción</label>
      </div>

      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="insertarForo"
      >
        Publicar Foro
      </button>
    </div>
  </div>
</template>

<script>
import {
  guardarForoFachada,
  consultarForoFachada,
} from "../helpers/ForoCliente";

import { consultarEstudianteFachada } from "@/modules/estudiantes/helpers/EstudianteCliente";

export default {
  data() {
    return {
      cedula: "",
      asunto: "",
      descripcion: "",
    };
  },
  methods: {
    async insertarForo() {
      if (this.verificarCampos()) {
        const data = {
          asunto: this.asunto,
          descripcion: this.descripcion,
          cedulaEstudiante: this.cedula,
        };
        try {
          await consultarForoFachada(this.asunto);

          alert(
            "No se pudo publicar el foro debido a que existe un foro con ese asunto. \nUtilice otro asunto"
          );
        } catch {
          try {
            await consultarEstudianteFachada(this.cedula);
            guardarForoFachada(data);

            this.cedula = null;
            this.asunto = null;
            this.descripcion = null;
          } catch {
            alert(
              "No se pudo publicar el foro debido a la cedula. \nUtilice otra cedula"
            );
          }
        }
      }
    },
    verificarCampos() {
      if (
        this.cedula.trim() == "" ||
        this.asunto.trim() == "" ||
        this.descripcion.trim() == ""
      ) {
        alert("Asegúrese de ingresar todos los campos.");
        return false;
      } else {
        return true;
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

.titulo {
  margin-right: 50px;
  margin-left: 50px;
  text-align: center;
  font-size: 2vw;
}

.image-container {
  text-align: center;
  margin-top: 20px;
}

.forum-image {
  max-width: 100%;
  height: auto;
}

.publicar {
  width: 60%;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

/*label {
  font-size: 1.5vw;
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 1.2vw;
  border: 1px solid #ccc;
  border-radius: 5px;
}*/
.descripcion {
  width: 100%;
  resize: vertical;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 1.2vw;
  /*background-color: #333;*/
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>
