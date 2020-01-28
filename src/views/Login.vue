<template>
  <div>
    <div class="container-login100 page-background">
      <div class="wrap-login100">
        <form @submit.prevent="login" class="login100-form validate-form">
          <span class="login100-form-logo">
            <img alt src="../assets/img/docdey-logo-v2.jpg" />
          </span>
          <span class="login100-form-title p-b-34 p-t-27">Log in</span>
          <div class="wrap-input100 validate-input" data-validate="Enter username">
            <input class="input100" type="text" name="username" placeholder="Username"  v-model="credentials.email" />
            <span class="focus-input100"></span>
          </div>
          <div class="wrap-input100 validate-input" data-validate="Enter password">
            <input class="input100" type="password" name="pass" placeholder="Password"  v-model="credentials.password" />
            <span class="focus-input100"></span>
          </div>
          <div class="contact100-form-checkbox">
            <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
            <label class="label-checkbox100" for="ckb1">Remember me</label>
          </div>
          <div class="container-login100-form-btn">
            <button type="submit" class="login100-form-btn">Login</button>
          </div>
          <div class="text-center p-t-30">
            <router-link class="txt1" to="/password/reset">Forgot Password?</router-link>
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
      credentials: {}
    };
  },
  methods: {
    login: async function() {
      try {
        let resp = await authService.authenticateUser(this.credentials);
        let { user, token } = resp.data;

        this.$store.commit("setAuthUser", user);
        this.$store.commit("setAuthToken", token);

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
