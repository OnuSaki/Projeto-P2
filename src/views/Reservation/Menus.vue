<template>
  <div class="home position-relative">
    <NavBar />
    <div class="container d-flex align-items-center justify-content-center">
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <div class="col-12 pt-5">
              <p id="title" v-html="title"></p>
            </div>
            <div class="col-12 pt-4">
              <div class="row">
                <div
                  class="col-lg-4 d-flex align-items-center justify-content-center pb-3"
                >
                  <div class="card" style="width: 18rem;">
                    <img
                      src="https://portalrbv.com.br/cacanjure/wp-content/uploads/sites/2/2019/12/9166725s1280h960.jpg"
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Lombo de Porco Assado</h5>
                      <p class="card-text">Prato de Carne</p>
                      <div
                        class="d-inline-block d-flex align-items-center justify-content-center"
                      >
                        <div class="pr-3">
                          <button
                            type="button"
                            class="btn btn-success pr-3 pl-3"
                            @click="addMenuCount('meat'), advanceToNext()"
                          >
                            +
                          </button>
                        </div>
                        {{ nMeat }}
                        <div class="pl-3">
                          <button
                            type="button"
                            class="btn btn-danger pr-3 pl-3"
                            @click="removeMenuCount('meat'), advanceToNext()"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 d-flex align-items-center justify-content-center pb-3"
                >
                  <div class="card" style="width: 18rem;">
                    <img
                      src="https://www.receitas-sem-fronteiras.com/media/filesalmao_crop.jpg/rh/salmao-assado.jpg"
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Salmão Assado</h5>
                      <p class="card-text">Prato de Peixe</p>
                      <div
                        class="d-inline-block d-flex align-items-center justify-content-center"
                      >
                        <div class="pr-3">
                          <button
                            type="button"
                            class="btn btn-success pr-3 pl-3"
                            @click="addMenuCount('fish'), advanceToNext()"
                          >
                            +
                          </button>
                        </div>
                        {{ nFish }}
                        <div class="pl-3">
                          <button
                            type="button"
                            class="btn btn-danger pr-3 pl-3"
                            @click="removeMenuCount('fish'), advanceToNext()"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 d-flex align-items-center justify-content-center pb-3"
                >
                  <div class="card" style="width: 18rem;">
                    <img
                      src="https://www.jessicagavin.com/wp-content/uploads/2019/03/mediterranean-couscous-salad-2-1200.jpg"
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Couscous</h5>
                      <p class="card-text">Prato Vegetariano</p>
                      <div
                        class="d-inline-block d-flex align-items-center justify-content-center"
                      >
                        <div class="pr-3">
                          <button
                            type="button"
                            class="btn btn-success pr-3 pl-3"
                            @click="addMenuCount('veg'), advanceToNext()"
                          >
                            +
                          </button>
                        </div>
                        {{ nVeg }}
                        <div class="pl-3">
                          <button
                            type="button"
                            class="btn btn-danger pr-3 pl-3"
                            @click="removeMenuCount('veg'), advanceToNext()"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="position-relative pt-5 pb-5"
              :style="{ visibility: hidden }"
            >
              <router-link to="/observation" class="text-center">
                <img
                  src="../../assets/arrowDown.png"
                  id="arrow"
                  alt
                  class="img-fluid"
                  @click="setReservationMenu()"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
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
  },
  data() {
    return {
      title: "",
      reservationMenu: [],
      reservationTable: {},
      nMeat: 0,
      nFish: 0,
      nVeg: 0,
      hidden: "hidden"
    };
  },
  created() {
    this.reservationTable = this.$store.getters.getReservationTable;

    if (this.reservationTable.nPeople > 1) {
      this.title = `Escolha os Menus (${this.reservationTable.nPeople})`;
    } else {
      this.title = `Escolha o Menu`;
    }
  },
  methods: {
    setReservationMenu() {
      this.$store.commit("SET_RESERVATION_MENU", {
        menu: this.reservationMenu
      });
    },
    addMenuCount(menu) {
      if (this.reservationTable.nPeople > this.nMeat + this.nFish + this.nVeg) {
        if (menu == "meat") {
          this.nMeat += 1;
        } else if (menu == "fish") {
          this.nFish += 1;
        } else if (menu == "veg") {
          this.nVeg += 1;
        }
      }
    },
    removeMenuCount(menu) {
      if (
        this.reservationTable.nPeople >= this.nMeat + this.nFish + this.nVeg &&
        this.nMeat + this.nFish + this.nVeg > 0
      ) {
        if (menu == "meat") {
          this.nMeat -= 1;
        } else if (menu == "fish") {
          this.nFish -= 1;
        } else if (menu == "veg") {
          this.nVeg -= 1;
        }
      }
    },
    advanceToNext() {
      if (
        this.nMeat + this.nFish + this.nVeg ==
        this.reservationTable.nPeople
      ) {
        this.reservationMenu = `${this.nMeat} Prato de Carne; ${this.nFish} Prato de Peixe; ${this.nVeg} Prato Vegetariano`;
        this.hidden = "visible";
      } else {
        this.hidden = "hidden";
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

#title {
  font-family: "Muli", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
}

img#arrow {
  height: 30px;
  width: 30px;
}

.card-title,
.card-text {
  font-family: "Muli", sans-serif;
}

.card-title {
  font-weight: bold;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.card-img-top {
  height: 250px;
  border-radius: 20px 20px 0 0;
}

.card {
  border-radius: 20px;
}
</style>
