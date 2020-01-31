import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import Appointments from "@/views/Appointments.vue";
import DrugCompatibilityCheck from "@/views/DrugCompatibilityCheck.vue";
import DrugCreate from "@/views/DrugCompatibilityCheck.vue";
import Drugs from "@/views/Drugs.vue";
import Login from "@/views/Login.vue";
import Lock from "@/views/Lock.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import Register from "@/views/Register.vue";
import MedicationCreate from "@/views/MedicationCreate.vue";
import MedicationList from "@/views/MedicationList.vue";
import Specialists from "@/views/Specialists.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/lock",
    name: "lock",
    component: Lock
  },
  {
    path: "/password/reset",
    name: "resetPassword",
    component: ResetPassword
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/dashboard",
    name: "",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }

  },
  {
    path: "/appointments",
    name: "appointments",
    component: Appointments,
    meta: {
      requiresAuth: true
    }

  },
  {
    path: "/drug/check",
    name: "drug-check",
    component: DrugCompatibilityCheck,
    meta: {
      requiresAuth: true
    }

  },
  {
    path: "/drug/create",
    name: "drug-create",
    component: DrugCreate,
    meta: {
      requiresAuth: true
    }

  },
  {
    path: "/drugs",
    name: "drugs",
    component: Drugs,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/specialists",
    name: "specialists",
    component: Specialists,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/medication/create",
    name: "createMedication",
    component: MedicationCreate,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/medication",
    name: "listMedication",
    component: MedicationList,
    meta: {
      requiresAuth: true
    }

  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;