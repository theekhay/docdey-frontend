/* eslint-disable padded-blocks */
import baseService from "./Api";

const resource = "healthtip";

export default {
  /**
   * Call to register a new user
   *
   */
  getTip: function() {
    // Use vue-resource or any other http library to send your request
    return baseService.get(`${resource}/tip`);
  }
};
