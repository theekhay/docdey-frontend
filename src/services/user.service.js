/* eslint-disable padded-blocks */
import baseService from "./Api";

const resource = "user";

export default {
  /**
   * Call to register a new user
   *
   */
  registerUser: function(params) {
    // Use vue-resource or any other http library to send your request
    return baseService.post(`${resource}/create`, params);
  },

  /**
   * API call to reset a user's passowrd
   */
  resetPassword: function(params) {
    // Use vue-resource or any other http library to send your request
    return baseService.post(`${resource}/resetPassword`, params);
  }
};
