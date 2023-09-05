<template>
  <div id="app">
    <ConsultarForosVue />
    <button type="button" class="btn btn-outline-info btn-lg" style="margin-bottom: 25px;">
      <router-link class="op" to="/foros/publicar"
        >Crear nuevo foro</router-link
      >
    </button>
  </div>
</template>

<script>
import ConsultarForosVue from "../components/ConsultarForos.vue";

export default {
  components: {
    ConsultarForosVue,
  },
};
</script>

<style scoped>
button {
  margin-inline-start: 70%;
}

.op {
  text-decoration: none;
  color: black;
}
</style>