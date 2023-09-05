<template>
  <ConsultarForosVue/>
  <button type="button" class="btn btn-outline-info"><router-link class="op" to="/foros/publicar">Crear nuevo foro</router-link></button>
  
</template>

<script>
import ConsultarForosVue from '../components/ConsultarForos.vue'


export default {
    components:{
      ConsultarForosVue
    }

}
</script>

<style scoped>
button{
  margin-inline-start: 70%;
  background:#72DDF7;
}

.op{
  text-decoration: none;
  color: black;
}

</style>