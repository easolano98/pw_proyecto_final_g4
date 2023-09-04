<template>
  <BuscarNoticiasEstudiante :cedula="cedula" />
</template>

<script>
import BuscarNoticiasEstudiante from "../components/BuscarNoticiasEstudiante.vue";
export default {
  data() {
    return {
      cedula: this.$route.params.cedula,
    };
  },
  components: {
    BuscarNoticiasEstudiante,
  },
};
</script>

<style>
</style>