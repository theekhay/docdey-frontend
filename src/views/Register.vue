<template>
  <div>
    <div class="container-login100 page-background">
      <div class="wrap-login100">
        <form @submit.prevent="register" class="login100-form validate-form">
          <span class="login100-form-logo">
            <img alt src="../assets/img/docdey-logo.jpg" />
          </span>
          <span class="login100-form-title p-b-34 p-t-27">Registration</span>
          <div class="row">

            <div class="col-lg-6 p-t-20">
              <div class="wrap-input100 validate-input" data-validate="Enter username">
                <input class="input100" type="text" name="username" placeholder="first name" v-model="user.firstName" />
                <span class="focus-input100"></span>
              </div>
            </div>

            <div class="col-lg-6 p-t-20">
              <div class="wrap-input100 validate-input" data-validate="Enter username">
                <input class="input100" type="text" name="username" placeholder="last name" v-model="user.lastName" />
                <span class="focus-input100"></span>
              </div>
            </div>

            <div class="col-lg-12 p-t-20">
              <div class="wrap-input100 validate-input" data-validate="Enter email">
                <input class="input100" type="email" name="email" placeholder="Email"  v-model="user.email" />
                <span class="focus-input100"></span>
              </div>
            </div>

            <div class="col-lg-12 p-t-20">
              <div class="wrap-input100 validate-input" data-validate="Enter email">
                <input class="input100" type="text" name="email" placeholder="Address"  v-model="user.address" />
                <span class="focus-input100"></span>
              </div>
            </div>

            <div class="col-lg-6 p-t-20">
              <div class="wrap-input100 validate-input" data-validate="Enter password">
                <input class="input100" type="password" name="pass" placeholder="Password" v-model="user.password" />
                <span class="focus-input100" d></span>
              </div>
            </div>

            <div class="col-lg-6 p-t-20">
              <div
                class="wrap-input100 validate-input"
                data-validate="Enter password again"
              >
                <input
                  class="input100"
                  type="password"
                  name="pass2"
                  placeholder="Confirm password"
                  v-model="user.confirm_password"
                />
                <span class="focus-input100" d></span>
              </div>
            </div>
            
          </div>
          <div class="contact100-form-checkbox">
            <input
              class="input-checkbox100"
              id="ckb1"
              type="checkbox"
              name="remember-me"
            />
            <label class="label-checkbox100" for="ckb1">Remember me</label>
          </div>
          <div class="container-login100-form-btn">
            <button type="submit" class="login100-form-btn">Register</button>
          </div>
          <div class="text-center p-t-30">
            <router-link class="txt1" to="/">You already have an account?</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    register: async function() {
      this.$router.push("/");
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
