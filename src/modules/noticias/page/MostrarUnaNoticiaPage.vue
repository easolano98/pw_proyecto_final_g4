<template>
  <DatoConsultarNoticiaTituloCorto :tituloCorto="tituloCorto" />
</template>

<script>
import DatoConsultarNoticiaTituloCorto from "../components/DatoConsultarNoticiaTituloCorto.vue";
export default {
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