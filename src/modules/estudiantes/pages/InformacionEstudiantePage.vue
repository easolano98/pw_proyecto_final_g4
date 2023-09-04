<template>
  <InformacionEstudiante :cedula="cedula" />
</template>

<script>
import InformacionEstudiante from "../components/InformacionEstudiante.vue";
export default {
  data() {
    return {
      cedula: this.$route.params.cedula,
    };
  },
  components: {
    InformacionEstudiante,
  },
};
</script>

<style>
</style>