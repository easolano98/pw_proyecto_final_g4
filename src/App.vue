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
  <br/>
  <MotrarForosPage/>
  <br/>
  <BuscarForosEstudiantePage/>
</template>

<script>
import BuscarNoticiasEstudiantePageVue from "./modules/estudiantes/pages/BuscarNoticiasEstudiantePage.vue";
import InformacionEstudiantePageVue from './modules/estudiantes/pages/InformacionEstudiantePage.vue';
import RegistroPage from "./modules/estudiantes/pages/RegistroPage.vue";
import ForoPageVue from "./modules/foros/pages/ForoPage.vue";
import PublicarForoPage from "./modules/foros/pages/PublicarForoPage.vue";
import MostrarNoticiasPage from "./modules/noticias/page/MostrarNoticiasPage.vue";
import MostrarUnaNoticiaPage from "./modules/noticias/page/MostrarUnaNoticiaPage.vue";
import PublicarNoticiaPage from "./modules/noticias/page/PublicarNoticiaPage.vue";
import BuscarForosEstudiantePage from "./modules/estudiantes/pages/BuscarForosEstudiantePage.vue";
import MotrarForosPage from "./modules/foros/pages/MotrarForosPage.vue";


export default {
  name: "App",
  components: {
    PublicarForoPage,
    PublicarNoticiaPage,
    RegistroPage,
    MostrarNoticiasPage,
    BuscarNoticiasEstudiantePageVue,
    ForoPageVue,
    MostrarUnaNoticiaPage,
    MotrarForosPage,
    BuscarForosEstudiantePage,
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
