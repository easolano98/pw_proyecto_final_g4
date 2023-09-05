<template>
  <div class="contenedor-foro-component">
    <div class="contenido">
      <img
        src="../store/usuarioForoAsunto.png"
        class="imagen-foro"
        alt="Imagen del foro"
      />

      <div class="informacion">
        <h1 class="titulo-foro">Foro</h1>

        <div class="fila">
          <p class="etiqueta">Cédula Estudiante:</p>
          <p class="valor">{{ cedulaEstudiante }}</p>
        </div>

        <div class="fila">
          <p class="etiqueta">Asunto:</p>
          <p class="valor">{{ asunto }}</p>
        </div>

        <div class="fila">
          <p class="etiqueta">Fecha:</p>
          <p class="valor">{{ fecha }}</p>
        </div>

        <div class="descripcion">
          <p>{{ descripcion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarEstudianteFachada } from "@/modules/estudiantes/helpers/EstudianteCliente";
import { consultarForoFachada } from "../helpers/ForoCliente";

export default {
  data() {
    return {
      cedulaEstudiante: null,
      nombreEstudiante: null,
      descripcion: null,
      fecha: null,
    };
  },

  methods: {
    async buscarForo() {
      const dato = await consultarForoFachada(this.asunto);
      const { nombre, apellido } = await consultarEstudianteFachada(
        dato.cedulaEstudiante
      );
      this.nombreEstudiante = nombre + " " + apellido;
      this.cedulaEstudiante = dato.cedulaEstudiante;
      this.descripcion = dato.descripcion;
      this.fecha = dato.fecha;
    },
  },
  props: {
    asunto: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.buscarForo();
  },
};
</script>

<style scoped>
.contenedor-foro-component {
  background-color: #f8f8f8;
  width: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contenido {
  display: flex;
  align-items: center;
}

.imagen-foro {
  width: 200px; /* Ancho inicial de la imagen */
  max-width: 100%; /* La imagen no será más ancha que su contenedor */
  height: auto; /* Ajustar la altura automáticamente según el ancho */
  margin-right: 20px; /* Espacio entre la imagen y la información */
}

.titulo-foro {
  font-size: 2vw;
  margin-bottom: 10px;
}

.fila {
  display: flex;
  margin-bottom: 5px;
  align-items: center;
}

.etiqueta {
  font-weight: bold;
  margin-right: 10px; /* Espacio entre la etiqueta y el valor */
  font-size: 1vw;
}

.valor {
  font-size: 1vw;
}

.descripcion {
  text-align: left;
  font-size: 1vw;
}

@media (max-width: 600px) {
  .imagen-foro {
    display: none;
  }

  .etiqueta {
    font-weight: bold;
    margin-right: 10px; /* Espacio entre la etiqueta y el valor */
    font-size: 10px;
  }

  .valor {
    font-size: 10px;
  }

  .descripcion {
    text-align: left;
    font-size: 10px;
  }

  .titulo-foro {
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>