<template>
  <table border="2">
    <tr>
      <th>Asunto</th>
      <th>Descripcion</th>
      <th>Fecha</th>
        
    </tr>

    <tr v-for="foro in foros" :key="foro.id" >
      <td><button>{{ foro.asunto }}</button></td>
      <td><button>{{ foro.descripcion }}</button></td>
      <td><input type="datetime-local" v-model="foro.fecha" disabled></td>
    </tr>
    <tbody></tbody>
</table>
</template>

<script>

import {consultarForosFachada} from "../helpers/ForoCliente"

export default {
    data(){
        return{
           foros:[] 
        }
    },
    methods:{
        async buscarForos(){
            var foros = await consultarForosFachada();
            this.foros= foros;
        }
    },
    mounted(){
        this.buscarForos();
    }
}
</script>

<style>
button{
    border: none;
}
</style>