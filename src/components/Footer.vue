<template>
  <div class="container-fluid Footer-custom">
    <div class="row row-no-gutters" id="bottom-footer">
      <div class="col-xs-12 col-md-5 col-lg-4 text-center pt-4">
        <ul class="vertical-aligned small mr-5">
          <a href="https://www.ipp.pt/" class="mr-5">
            <img src="../assets/ipplogo-white.svg" />
          </a>
        </ul>
      </div>
      <div class="col-xs-12 col-md-2 col-lg-4 text-center pt-4">
        <ul class="list-unstyled list-inline">
          <!-- <a class="navegable list-inline-item pr-3">
            <router-link to="/Reserva">Reservar Mesa</router-link>
          </a>
          <a class="navegable list-inline-item pr-3">
            <router-link to="/Sobre">Sobre</router-link>
          </a>
          <a class="navegable list-inline-item pr-3">
            <router-link to="/Contacts">Contactos</router-link>
          </a>
          <br />
          <br /> -->
          <a id="copyright" class="list-inline-item"
            >&copy;Gonçalo Moreira e Jorge Martins</a
          >
        </ul>
      </div>
      <div class="col-xs-12 col-md-5 col-lg-4 text-center pt-4">
        <a href="https://www.facebook.com/pporto.esht/" class="pl-2">
          <img src="../assets/facebook.svg" />
        </a>
        <a href="https://twitter.com/politecnico" class="pl-2">
          <img src="../assets/twitter.svg" />
        </a>
        <a href="https://www.instagram.com/esht_pporto/" class="pl-2">
          <img src="../assets/instagram.svg" />
        </a>
        <a href="https://www.youtube.com/user/politecnicodoporto" class="pl-2">
          <img src="../assets/youtube.svg" />
        </a>
      </div>
    </div>
  </div>
  <!--  end row  -->
</template>

<!--script-->
<script>
export default {
  name: "Footer"
};
</script>

<!--css-->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
.Footer-custom {
  background-color: #2c3e50;
  font-family: "Muli", sans-serif;
  font-size: 1rem;
}
a {
  color: white !important;
  text-decoration: none !important;
}

#copyright {
  color: white !important;
  text-decoration: none !important;
}

.navegable:hover {
  text-decoration: none !important ;
  color: white !important;
  font-weight: bolder;
}
</style>
