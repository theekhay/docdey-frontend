import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dosageTimes: []
  },
  mutations: {
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