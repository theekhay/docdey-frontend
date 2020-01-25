/* eslint-disable padded-blocks */
import baseService from "./Api";

// const resource = 'user'
const resource = "auth";

export default {
  /**
   * Authenticate user
   */
  authenticateUser: function(params) {
    // Use vue-resource or any other http library to send your request
    return baseService.post(`${resource}/login`, params);
  }
};
