<template>
    <div id="app">
      <div class="contenedor-comentarios">
        <DatoComentario v-for="(comentario, index) in comentarios" :key="index" :comentario="comentario" />
      </div>
    </div>
  </template>
  
  <script>
  import {consultarComentariosFachada} from "../helpers/ComentarioCliente"
  import DatoComentario from "../components/BuscarComentarios.vue"
  
  export default {
      components:{
          DatoComentario
      },
      data(){
          return{
              comentarios:[]
          }
      },
      methods:{
          async consumirAPI(){
              try {
                  // Llama a tu función de fachada para obtener los datos de noticias
                  const data = await consultarComentariosFachada();
  
                  // Actualiza el estado de Vue con los datos de noticias
                  this.comentarios = data;
              } catch (error) {
                  console.error("Error al cargar las noticias:", error);
              }     
          }
      },
      mounted(){
          this.consumirAPI();   
     
      }
  }
  </script>
  
  <style>
  
  </style>