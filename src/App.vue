<template>

<InformacionEstudiantePageVue />
  <br />
  <MostrarUnaNoticiaPage />
  <br />
  <PublicarNoticiaPage />
  <br />
  <ForoPageVue />
  <br />
  <PublicarForoPage />
  <br />
  <RegistroPage />
  <br />
  <BuscarNoticiasEstudiantePageVue />
</template>

<script>
import BuscarNoticiasEstudiantePageVue from "./modules/estudiantes/pages/BuscarNoticiasEstudiantePage.vue";
import InformacionEstudiantePageVue from './modules/estudiantes/pages/InformacionEstudiantePage.vue';
import RegistroPage from "./modules/estudiantes/pages/RegistroPage.vue";
import ForoPageVue from "./modules/foros/pages/ForoPage.vue";
import MostrarComentariosPage from "./modules/foros/pages/MostrarComentariosPage.vue";
import PageComentario from "./modules/foros/pages/PageComentario.vue";
import PublicarForoPage from "./modules/foros/pages/PublicarForoPage.vue";
import MostrarNoticiasPage from "./modules/noticias/page/MostrarNoticiasPage.vue";
import MostrarUnaNoticiaPage from "./modules/noticias/page/MostrarUnaNoticiaPage.vue";
import PublicarNoticiaPage from "./modules/noticias/page/PublicarNoticiaPage.vue";


export default {
  name: "App",
  components: {
    PublicarForoPage,
    PublicarNoticiaPage,
    RegistroPage,
    MostrarComentariosPage,
    PageComentario,
    MostrarNoticiasPage,
    BuscarNoticiasEstudiantePageVue,
    ForoPageVue,
    MostrarUnaNoticiaPage,
    InformacionEstudiantePageVue
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
