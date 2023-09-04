<template>
    <div>
      <!-- Título del formulario -->
      <h1>Formulario de Cédula</h1>
  
      <!-- Checkbox para mostrar/ocultar el campo de cédula -->
      <label for="checkCedula">Marcar para ingresar la cédula:</label>
      <input type="checkbox" id="checkCedula" v-model="mostrarCedula" />
  
      <!-- Campo de cédula, visible solo si mostrarCedula es verdadero -->
      <div v-if="mostrarCedula">
        <label for="cedulaEstudiante">Cédula:</label>
        <input type="text" id="cedulaEstudiante" v-model="cedulaEstudiante" placeholder="Ingresa tu cédula" />
      </div>
  
      <!-- Sección de anonimato, visible si mostrarCedula es falso -->
      <div v-else>
        <p>Anónimo</p>
      </div>

    
    <input type="text" id="asuntoForo" v-model="descripcion"  /><br>
    
  
      <!-- Botón para guardar el comentario -->
      <button @click="guardarComentario">Guardar Comentario</button>
    </div>
  </template>
  
  <script>
  import { guardarComentarioFachada } from '../helpers/ComentarioCliente';
  
  export default {
    data() {
      return {
        descripcion: null,   // Datos del formulario
        cedulaEstudiante: null,
        asuntoForo: null,
        mostrarCedula: false, // Controla la visibilidad del campo de cédula
      };
    },
    methods: {
      guardarComentario() {
        // Recolecta los datos del formulario
        const data = {
          descripcion: this.descripcion,
          cedulaEstudiante: this.cedulaEstudiante,
          asuntoForo:'Clases',
        };
  
        // Llama a la función ficticia para guardar los datos (reemplaza esto con tu lógica real)
        guardarComentarioFachada(data);
      },
    },
   
  };
  </script>
  
  <style scoped>
  /* Puedes eliminar este estilo si ya no lo necesitas */
  #asuntoForo{
    height: 250px;
    width: 250px;
  }
  </style>
  