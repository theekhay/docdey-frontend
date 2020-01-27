<template>
  <div>
    <div class="container-login100 page-background">
      <div class="wrap-login100">
        <form @submit.prevent="login" class="login100-form validate-form">
          <span class="login100-form-logo">
            <img
              src="../assets/img/docdey-logo.jpg"
              class="imgroundcorners"
              alt="John Doe"
            />
          </span>
          <span class="login100-form-title p-t-27">Dr. Emily</span>
          <p class="text-center txt-locked">Locked</p>
          <div
            class="wrap-input100 validate-input"
            data-validate="Enter password"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              placeholder="Password"
              v-model="password"
            />
            <span class="focus-input100"></span>
          </div>
          <div class="container-login100-form-btn">
            <button class="login100-form-btn">Login</button>
          </div>
          <div class="text-center p-t-27">
            <a class="txt1" href="login.html">sign in as a different user</a>
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
