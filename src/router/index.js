import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import Appointments from "@/views/Appointments.vue";
import DrugCompatibilityCheck from "@/views/DrugCompatibilityCheck.vue";
import Drugs from "@/views/Drugs.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import MedicationCreate from "@/views/MedicationCreate.vue";
import MedicationList from "@/views/MedicationList.vue";
import Specialists from "@/views/Specialists.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/dashboard",
    name: "",
    component: Dashboard
  },
  {
    path: "/appointments",
    name: "appointments",
    component: Appointments
  },
  {
    path: "/drug/check",
    name: "drug-check",
    component: DrugCompatibilityCheck
  },
  {
    path: "/drugs",
    name: "drugs",
    component: Drugs
  },
  {
    path: "/specialists",
    name: "specialists",
    component: Specialists
  },
  {
    path: "/medication/create",
    name: "createMedication",
    component: MedicationCreate
  },
  {
    path: "/medication",
    name: "listMedication",
    component: MedicationList
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
