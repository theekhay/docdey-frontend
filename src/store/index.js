import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dosageTimes: [],
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

    removeAuth: function(state) {
      state.authToken = null;
      state.authUser = {};
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");
    },

    addDosageTime: function (state, payload) {
      state.dosageTimes.push(payload);
    },

    removeDosageTime: function (state, payload) {
      let index = state.dosageTimes.indexOf(payload);
      state.dosageTimes.slice(index, 1);
    },

    updateDosageTime: function(state, payload) {
      if (!payload.index) {
        state.dosageTimes.push(payload.time);
      } else {
        state.dosageTimes[payload.index] = payload.time;
      }
    }
  },

  actions: {},

  getters: {
    dosageTimes: function(state) {
      return state.dosageTimes;
    }
  },

  modules: {}
});