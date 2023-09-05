<template>
  <div class="container">
    <div class="titulo">
      <h1>Publica en el <br> foro Aquí</h1>
      <div class="image-container">
        <img src="../store/ForoPublicarImagen.png" alt="No se pudo cargar la imagen" class="forum-image">
      </div>
    </div>
    <div class="publicar">
      <form>
        <div class="form-group">
          <label for="cedula">Cédula</label>
          <input type="text" id="cedula" v-model="cedula" />
        </div>
        <div class="form-group">
          <label for="asunto">Asunto</label>
          <input type="text" id="asunto" v-model="asunto" />
        </div>
        <div class="form-group">
          <label for="descripcion">Descripción</label>
          <textarea id="descripcion" v-model="descripcion" rows="4"></textarea>
        </div>

        <div class="form-group">
          <button @click="insertarForo">Publicar Foro</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  guardarForoFachada,
  consultarForoFachada,
} from "../helpers/ForoCliente";
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
        guardarForoFachada(data);
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
  width: 50%;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
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
}

button {
  width: 106%;
  padding: 10px;
  font-size: 1.2vw;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>
