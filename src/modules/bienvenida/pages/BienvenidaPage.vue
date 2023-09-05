<template>
  <div class="background-container text-center">
    <div class="text-center">

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/civil.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 id="ti">Facultad de Ingeniería en Sistemas de la Información</h5>
              <p id="ti">Instalaciones de la Facultad</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/laboratorios.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 id="ti">Laboratorios de la Facultad de Ingeniería en Sistemas de la Información</h5>
              <p id="ti">Instalaciones de los laboratorios</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/murof.jpeg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 id="ti">Mural de la Universidad Central del Ecuador</h5>
              <p id="ti">Expresa los valores plasmados en el Mural</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- Texto informativo -->
      <div class="info-text">
        <h2>Facultad de Ingeniería en Sistemas de la Información</h2>
        <h3>Visión</h3>
        <p>
          Ser reconocida a nivel nacional e internacional como una facultad líder en la formación de
          profesionales en el campo de la informática y la tecnología, contribuyendo al desarrollo
          sostenible de la sociedad.
        </p>
        <h3>Misión</h3>
        <p>
          Formar profesionales altamente capacitados en sistemas de la información, promoviendo la
          investigación, la innovación y el espíritu emprendedor, para enfrentar los desafíos
          tecnológicos del mundo actual.
        </p>
        <h3>Objetivos</h3>
        <ul>
          <li>Ofrecer programas académicos de alta calidad en el área de sistemas de la información.</li>
          <li>Fomentar la investigación y la generación de conocimiento en tecnología de la información.</li>
          <li>Promover la colaboración con la industria y el sector tecnológico.</li>
          <li>Contribuir al desarrollo de soluciones tecnológicas innovadoras.</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {

}
</script>

<style scoped>


/* Cambiar el color del texto a negro */
#ti {
  background: black;
  color: white;
  margin-bottom:2% ;  
  max-width: 50%;
  
  margin: 1% auto; /* Centra horizontalmente las imágenes */


}
h1, h2, p,li {
  color: white;
}

.info-text {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
}


img {
  max-width: 50%;
  max-height: 40%;
  margin: 1% auto; /* Centra horizontalmente las imágenes */
}

.carousel-inner {
  text-align: center; /* Centra el contenido del carrusel horizontalmente */
  
}


.background-container {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/fondo.png"); /* Ruta de la imagen de fondo */
  background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
  background-position: center; /* Centra la imagen de fondo */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  /* Otros estilos de tu contenedor */
}


</style>
