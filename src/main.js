import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import axios from "axios";
import Toaster from "v-toaster";

import "v-toaster/dist/v-toaster.css";
Vue.prototype.$http = axios;

Vue.use(Toaster, { timeout: 5000 });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
