<template>
  <div>
    <div class="container-login100 page-background">
      <div class="wrap-login100">
        <form class="login100-form validate-form">
          <span class="login100-form-logo">
            <img alt src="../assets/img/docdey-logo.jpg"/>
          </span>
          <!-- <span class="login100-form-title  p-t-27">
						Forgot Your Password?
          </span>-->
          <!-- <p class="text-center txt-small-heading">Forgot Your Password? Let Us Help You.</p> -->
          <div class="wrap-input100 validate-input" data-validate="Enter username" style="margin-top:50px">
            <input
              class="input100"
              type="text"
              name="username"
              placeholder="Enter Your Register Email Address"
            />
            <span class="focus-input100"></span>
          </div>
          <div class="container-login100-form-btn">
            <button class="login100-form-btn">Send</button>
          </div>
          <div class="text-center p-t-27">
            <router-link class="txt1" to="/">Login?</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import authService from "@/services/auth.service";

export default {
  data() {
    return {
      password: ""
    };
  },
  methods: {
    login: async function() {
      try {
        let resp = await authService.authenticateUser(this.credentials);
        let { user, token } = resp.data;

        localStorage.setItem("authToken", token);
        localStorage.setItem("authUser", user);

        this.$router.push("/dashboard");
      } catch (e) {
        this.$toaster.error("invalid username/login combination");
      }
    }
  }
};
</script>
<style scoped>
.login100-form-logo img {
  width: 100% !important;
  height: 100% !important;
  border-radius: 50%;
}
</style>
