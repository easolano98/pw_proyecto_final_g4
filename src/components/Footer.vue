<template>
  <MDBContainer class="my-4" style="height: 180px">
    <!-- Copy this code to have a working example -->
    <MDBFooter
      bg="primary"
      :text="['white', 'center', 'lg-start']"
      class="fixed-bottom"
    >
      <!-- Grid container -->
      <MDBContainer class="p-4">
        <!--Grid row-->
        <MDBRow>
          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Universidad Central del Ecuador</h5>
            <p>
              UCE Facultad de Ingeniería y Ciencias Aplicadas<br />
              Carrera de Sistemas de Información
            </p>
          </div>
          <!--Grid column-->
          <!--Grid column-->
          <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a
                  href="http://uce-ing-informatica.blogspot.com/"
                  class="text-white"
                  >Facultad de Ingenieria</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/FingUce" class="text-white"
                  >Facebook</a
                >
              </li>
              <li>
                <a href="https://www.uce.edu.ec/web/fing" class="text-white"
                  >UCE</a
                >
              </li>
            </ul>
          </MDBCol>
          <!--Grid column-->
          <!--Grid column-->
        </MDBRow>
        <!--Grid row-->
      </MDBContainer>
      <!-- Grid container -->
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2020 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/"
          >MDBootstrap.com</a
        >
      </div>
      <!-- Copyright -->
    </MDBFooter>
    <!--/ Copy this code to have a working example -->
  </MDBContainer>
</template>
  
  <script>
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
  },
};
</script>
  
  <style>
</style>