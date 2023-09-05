<template>
  <div class="noticia">
    <div class="overlay" @click="redirigirAVerNoticia">

      <img v-if="noticia.urlImagen" :src="noticia.urlImagen" :alt="'Imagen de ' + noticia.titulo" />
      <img v-else src="../store/noticias.jpg" :alt="'Imagen de ' + noticia.titulo" />
      <div class="titulo">
        <div class="titulo-largo">{{ noticia.tituloLargo }}</div>
        <div class="informacion-adicional">
          <p class="autor">{{ "Autor: " + nombreAutor }}</p>
          <p class="fecha">{{ "Fecha: " + fechaFormateada }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/routers/router";
export default {
  data() {
    return {
      nombreAutor: "",
      hover: false,
      
    };
  },
  props: {
    noticia: Object,
  },
  methods: {
    async redirigirAVerNoticia() {
      console.log(this.noticia.tituloCorto);
      const ruta = `/noticias/${this.noticia.tituloCorto}`;
      await router.push({ path: ruta });
    },

    async obtenerAutor() {
      var urlAutor = "";
      for (const link of this.noticia.links) {
        if (link.rel == "autor") {
          urlAutor = link.href;
        }
      }

      const autor = await fetch(urlAutor).then((r) => r.json());
      
      this.nombreAutor = autor.nombre + " " + autor.apellido;
      console.log(this.nombreAutor)
    },
  },
  mounted() {
    this.obtenerAutor();
  },
  computed: {
    fechaFormateada() {
      const fechaISO = new Date(this.noticia.fecha);
      const opciones = { year: "numeric", month: "2-digit", day: "2-digit" };
      return fechaISO.toLocaleDateString("es-ES", opciones);
    },
  },
};
</script>

<style scoped>
.noticia {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
 
  overflow: visible;
  position: relative;
  
}

.overlay {
  position: relative;
  flex-grow: 1;
  max-width: 35%;
  transition: transform 0.3s;
  box-shadow: 5px 5px 5px 5px;
  margin-bottom: 2%;
  border: 1px solid black;
  border-radius: 5px;
}

.overlay:hover {
  transform: translateY(-10px);
}

.overlay img {
  max-width: 100%;
  height: auto;
}

.titulo {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 1.5vw;
  font-weight: bold;
  transition: opacity 0.3s;
  opacity: 0.75;
}

.overlay:hover .titulo {
  opacity: 1;
}

.informacion-adicional {
  padding: 1%;
  display: none;
  text-align: center;
  font-size: 1vw;
}

.overlay:hover .informacion-adicional {
  display: block;
  margin-top: 10px;
}

.autor {
  font-size: 18px; /* Tamaño de fuente diferente para el autor */
  color: #ffffff; /* Color diferente para el autor */
}

.fecha {
  font-size: 16px; /* Tamaño de fuente diferente para la fecha */
  color: #ffffff; /* Color diferente para la fecha */
}
</style>