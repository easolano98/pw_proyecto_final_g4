<template>
  <div class="noticia">
    <img
      v-if="noticia.urlImagen"
      :src="noticia.urlImagen"
      :alt="'Imagen de ' + noticia.titulo"
    />
    <div class="informacion">
      <h2>{{ noticia.tituloLargo }}</h2>
      <p>{{ "Fecha: " + noticia.fecha }}</p>
      <p>{{ "Autor: " + nombreAutor }}</p>
      <p>{{ noticia.descripcion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombreAutor: "",
    };
  },
  props: {
    noticia: Object,
  },
  methods: {
    async obtenerAutor() {
      var urlAutor = "";
      for (const link of this.noticia.links) {
        if (link.rel == "autor") {
          urlAutor = link.href;
        }
      }

      const autor = await fetch(urlAutor).then((r) => r.json());

      this.nombreAutor = autor.nombre + " " + autor.apellido;
    },
  },
  mounted() {
    this.obtenerAutor();
  },
};
</script>

<style>
.noticia {
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.noticia img {
  max-height: 100px;
  margin-right: 10px;
}

.informacion {
  flex-grow: 1;
}

.informacion h2 {
  font-size: 18px;
  margin-top: 0;
}

.informacion p {
  font-size: 14px;
  margin: 5px 0;
}
</style>