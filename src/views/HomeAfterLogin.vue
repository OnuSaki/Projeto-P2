<template>
  <div class="home">
    <NavBar />
    <div
      class="imgContainer position-relative d-flex align-items-center justify-content-center"
    >
      <img src="../assets/background.jpg" id="bg" alt class="img-fluid" />
      <div class="barra d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <img
              src="../assets/logo.png"
              id="logo"
              alt
              class="img-fluid pt-5 pb-4"
            />
            <hr />
            <p id="welcome" class="welcomeText pt-4 pb-4">Bem vindo!</p>
            <p class="welcomeText pb-4 text-justify pl-5 pr-5">
              Este projeto foi realizado em prol da aprovação às disciplinas P2,
              PW1, BD e AMS, contando com a ajuda do professor José António
              sendo que o objetivo é implementar um website para o restaurante
              da Escola Superior de Hotelaria e Turismo que brevemente irá ser
              inaugurado.
            </p>
            <hr />
            <div class>
              <img
                src="../assets/ipplogo.png"
                id="logo"
                alt
                class="img-fluid"
              />
              <small class="form-text mt-3"
                >Escola Superior de Hotelaria e Turismo</small
              >
              <small class="form-text">Rua D. Sancho I, n.º 981</small>
              <small class="form-text">4480-876 Vila do Conde</small>
              <small class="form-text">Portugal</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="fixed-bottom" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "about",
  components: {
    Footer,
    NavBar
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

p {
  font-family: "Muli", sans-serif;
  font-size: 12pt;
}

.imgContainer {
  top: -1%;
  width: 100%;
  height: 90vh;
}

a {
  text-decoration: none !important ;
  color: white !important;
}

a:hover {
  text-decoration: none !important ;
  color: #2c3e50 !important;
}

#welcome {
  font-size: 30px;
}

.barra {
  background-color: #2c3e50;
  height: 100%;
  width: 30rem;
  opacity: 0.75;
  top: 0;
  position: absolute;
}

img#logo {
  height: auto;
  width: 30%;
}

img#bg {
  position: fixed;
  height: 100%;
  width: 100%;
  filter: brightness(75%);
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

hr {
  height: 1px;
  width: 20rem;
  background-color: white;
}

small {
  font-family: "Muli", sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  opacity: 1;
}

.form-control {
  background-color: #707070;
  border-color: #707070;
}

input::placeholder {
  color: white;
}

input:active {
  background-color: #707070;
}

input:focus {
  background-color: #707070;
  border: 1px solid black !important;
  box-shadow: unset;
}

.welcomeText {
  color: white;
}
</style>
