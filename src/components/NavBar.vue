<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #359ee9"
  >
    <div class="container-fluid">
      <router-link class="nav-link active" aria-current="page" to="/"
        ><img src="../assets/UCE.png" alt="no se puede mostrar la imagen"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/estudiantes/registro"
              >Suscripción</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/foros"
              >Foros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/noticias"
              >Noticias</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/quejas"
              >Quejas</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  margin-top: -60px;
  font-weight: bold;
}

img {
  width: 75px;
  height: 75px;
}

li:hover {
  color: black;
}

.navbar-nav .nav-link:hover {
  background-color: #33b8ec;
  color: black;
  border-radius: 25%;
}

@media screen and (max-width: 990px) {
  .nav-link {
    font-size: 2vw;
  }
}
</style>