<template>
  <div class="error">
    <h1>404</h1>
    <img src="../store/problema.png" alt="no se puede mostrar la imagen" />
    <h2>¡Ops, Página no encontrada!</h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error {
  margin-top: 3%;
  text-align: center; /* Centra el contenido */
}

h1 {
  font-size: 5vw;
  font-weight: bold;
}

h2 {
  font-size: 2vw;
  font-weight: bold;
}

img {
  max-width: 100%; /* Hace que la imagen sea adaptable al ancho del contenedor */
  height: auto; /* Mantiene la proporción de la imagen */
}
/* Media query para ajustar el tamaño del texto en pantallas más pequeñas */
@media (max-width: 768px) {
  h1 {
    font-size: 8vw;
  }

  h2 {
    font-size: 4vw;
  }
}
</style>

