<template>
  <BuscarForosEstudiantes :cedula="cedula" />
</template>

<script>
import BuscarForosEstudiantes from "../components/BuscarForosEstudiantes.vue";
export default {
  data() {
    return {
      cedula: this.$route.params.cedula,
    };
  },
  components: {
    BuscarForosEstudiantes,
  },
};
</script>

<style>
</style>