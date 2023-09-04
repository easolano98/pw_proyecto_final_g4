<template>
    <div id="app">
      <div class="contenedor-noticias">
        <DatoNoticia v-for="(noticia, index) in noticias" :key="index" :noticia="noticia" />
      </div>
    </div>
  </template>
  
  <script>
  import {consultarNoticiasFachada} from "../helpers/NoticiaCliente"
  import DatoNoticia from "../components/BuscarNoticias.vue"
  export default {
      components:{
          DatoNoticia
      },
      data(){
          return{
              noticias:[]
          }
      },
      methods:{
          async consumirAPI(){
              try {
                  // Llama a tu función de fachada para obtener los datos de noticias
                  const noticias = await consultarNoticiasFachada();
  
                  // Actualiza el estado de Vue con los datos de noticias
                  this.noticias = noticias;
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