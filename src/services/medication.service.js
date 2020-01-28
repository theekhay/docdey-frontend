/* eslint-disable padded-blocks */
import baseService from "./Api";

const resource = "medication";

export default {
  /**
   * Call to register a new user
   *
   */
  getMedications: function() {
    // Use vue-resource or any other http library to send your request
    return baseService.get(`${resource}/`);
  },

  createMedication: function(medication) {
    // Use vue-resource or any other http library to send your request
    return baseService.post(`${resource}/create`, medication);
  },

  getActiveMedication: function() {
    const user = JSON.parse(localStorage.getItem("authUser") );
    // Use vue-resource or any other http library to send your request
    return baseService.get(`${resource}/getActiveMedication/${user._id}`);
  }
};
