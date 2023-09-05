<template>
  <div class="comentario">
    <div class="imagen">
      <img
        src="https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=40"
        alt="Imagen por defecto"
      />
    </div>
    <div class="contenido">
      <div class="informacion">
        <div class="nombre">
          {{ nombreAutor }}
        </div>
        <div class="fecha">
          {{ fechaFormateada }}
        </div>
        <div class="descripcion">
          {{ comentario.descripcion }}
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { consultarEstudianteFachada } from "@/modules/estudiantes/helpers/EstudianteCliente";

export default {
  data() {
    return {
      nombreAutor: "",
    };
  },
  props: {
    comentario: Object,
  },
  methods: {
    async obtenerAutor() {
      const { nombre, apellido } = await consultarEstudianteFachada(
        this.comentario.cedulaEstudiante
      );
      this.nombreAutor = nombre + " " + apellido;
    },
  },
  mounted() {
    this.obtenerAutor();
  },
  computed: {
    fechaFormateada() {
      const fechaISO = new Date(this.comentario.fecha);
      const opciones = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return fechaISO.toLocaleDateString("es-ES", opciones);
    },
  },
};
</script>
  
<style scoped>
.comentario {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 50%;
}

.imagen {
  margin-right: 2%;
  max-width: 125px;
}

.imagen img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.contenido {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
}

.fecha {
  font-weight: bold;
  font-size: 1vw;
  margin-bottom: 1%;
}

.descripcion {
  font-size: 1.1vw;
  margin-bottom: 1%;
}

.nombre {
  text-align: center;
  font-size: 1.6vw;
  font-weight: bold;
  margin-top: 2%;
  margin-bottom: 1%;
}

@media (max-width: 600px) {
  .imagen {
    display: none;
  }
  .fecha {
    font-size: 2vw;
  }

  .descripcion {
    font-size: 2.2vw;
  }

  .nombre {
    font-size: 3.2vw;
  }
}
</style>