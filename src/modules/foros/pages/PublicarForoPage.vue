<template>
  <div class="container-publicar-foro">
    <PublicarForo />
  </div>
 
</template>

<script>
import PublicarForo from "../components/PublicarForo.vue";
export default {
  components: {
    PublicarForo,
  },
};
</script>

<style scoped>

.container-publicar-foro{
  display: grid;
  justify-content: center;
  justify-items: center;
  margin-top: 50px;
  padding: 30px;
}

</style>