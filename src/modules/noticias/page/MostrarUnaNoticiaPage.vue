<template>
  <DatoConsultarNoticiaTituloCorto :tituloCorto="tituloCorto" />
</template>

<script>
import DatoConsultarNoticiaTituloCorto from "../components/DatoConsultarNoticiaTituloCorto.vue";
export default {
  data() {
    return {
      tituloCorto: this.$route.params.tituloCorto,
    };
  },
  components: {
    DatoConsultarNoticiaTituloCorto,
  },
  data() {
    return {
      tituloCorto: this.$route.params.tituloCorto,
    };
  },
};
</script>

<style>
</style>