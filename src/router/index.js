import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "registo",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/home",
    name: "homeLoged",
    component: () => import("../views/HomeAfterLogin.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/sobre",
    name: "sobre",
    component: () => import("../views/About.vue")
  },
  {
    path: "/reserva",
    name: "reserva",
    component: () => import("../views/Reservation/Reservation.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../views/Contacts.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/editProfile",
    name: "editProfile",
    component: () => import("../views/EditProfile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/data",
    name: "data",
    component: () => import("../views/Reservation/Date.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/homeAdmin",
    name: "HomeAdmin",
    component: () => import("../views/Admin/HomeAdmin.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/reservationsAdmin",
    name: "reservationsAdmin",
    component: () => import("../views/Admin/ReservationsAdmin.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/stockAdmin",
    name: "stockAdmin",
    component: () => import("../views/Admin/StockAdmin.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/usersAdmin",
    name: "usersAdmin",
    component: () => import("../views/Admin/UsersAdmin.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
