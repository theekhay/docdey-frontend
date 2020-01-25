
/* eslint-disable padded-blocks */
import baseService from "./Api";

const resource = "drug";

export default {
  /**
   * Call to register a new user
   *
   */
  getDrugs: function() {
    // Use vue-resource or any other http library to send your request
    return baseService.get(`${resource}`);
  },

  getInteraction: function(drug1, drug2) {
    // Use vue-resource or any other http library to send your request
    return baseService.get(`${resource}/interaction/${drug1}/${drug2}`);
  }
};
