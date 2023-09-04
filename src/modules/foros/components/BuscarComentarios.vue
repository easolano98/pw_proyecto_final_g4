<template>
    <div class="comentario">
      <div class="informacion">
        <h2>{{ comentario.cedulaEstudiante }}</h2>
        <p>{{ comentario.asuntoForo }}</p>
        <p>{{ comentario.fecha }}</p>
        <p>{{ comentario.descripcion }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props:{
          comentario: Object,
      }
  
  }
  </script>
  
  <style scoped>
  .comentario {
    display: flex;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .informacion {
    flex-grow: 1;
  }
  
  .informacion h2 {
    font-size: 18px;
    margin-top: 0;
  }
  
  .informacion p {
    font-size: 14px;
    margin: 5px 0;
  }
  </style>