<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <PublicarNoticia />
  <br>
  <PublicarForo />
  <br>
  <RegistroPage/>
</template>

<script>
import RegistroPage from './modules/estudiantes/pages/RegistroPage.vue';
import PublicarForo from './modules/foros/components/PublicarForo.vue';
import PublicarNoticia from "./modules/noticias/components/PublicarNoticia.vue";

export default {
  name: "App",
  components: {
    PublicarNoticia,
    PublicarForo,
    RegistroPage
    
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
