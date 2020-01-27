import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authUser: {},
    authToken: null
  },
  mutations: {
    setAuthUser: function(state, user) {
      state.authUser = JSON.stringify(user);
      localStorage.setItem("authUser", state.authUser);
    },

    setAuthToken: function(state, token) {
      state.authToken = token;
      localStorage.setItem("authToken", state.authToken);
    },

    removeAuthToken: function(state) {
      state.authToken = null;
      window.localStorage.removeItem("authToken");
    }
  },

  actions: {},

  getters: {
    authUser: function(state) {
      return state.authUser;
    }
  },

  modules: {}
});