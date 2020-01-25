/* eslint-disable padded-blocks */
import baseService from "./Api";

const resource = "specialist";

export default {
  /**
   * Call to register a new user
   *
   */
  registerSpecialist: function(params) {
    // Use vue-resource or any other http library to send your request
    return baseService.post(`${resource}/create`, params);
  },

  getSpecialists: function() {
    // Use vue-resource or any other http library to send your request
    return baseService.get(`${resource}`);
  }
};
