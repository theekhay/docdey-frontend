<template>
  <div>
    <div class="sidebar-container">
      <div class="sidemenu-container navbar-collapse collapse fixed-menu">
        <div id="remove-scroll" class="left-sidemenu">
          <ul
            class="sidemenu page-header-fixed slimscroll-style"
            data-keep-expanded="false"
            data-auto-scroll="true"
            data-slide-speed="200"
            style="padding-top: 20px"
          >
            <li class="sidebar-toggler-wrapper hide">
              <div class="sidebar-toggler">
                <span></span>
              </div>
            </li>
            <li class="sidebar-user-panel">
              <div class="user-panel">
                <div class="pull-left image">
                  <img
                    src="@/assets/img/docdey-logo-v2.jpg"
                    class="img-circle user-img-circle"
                    alt="User Image"
                  />
                </div>
                <div class="pull-left info">
                  <p>{{ showName() }}</p>
                  <small>Admin</small>
                </div>
              </div>
            </li>

            <side-bar-menu name="Dashboard" link="/dashboard" icon="dashboard" />
            <side-bar-menu name="Appointments" link="/appointments" icon="assignment" />
            <side-bar-menu name="Drug check" link="/drug/check" icon="widgets" />
            <side-bar-menu name="Specialists" link="/specialists" icon="person" />
            <side-bar-menu name="Drugs" link="/drugs" icon="dashboard" />

            <li class="nav-item active open">
              <a href="#" class="nav-link nav-toggle">
                <i class="material-icons">album</i>
                <span class="title">Medication</span>
                <span class="selected"></span>
                <span class="arrow open"></span>
              </a>
              <ul class="sub-menu">
                <li class="nav-item active open">
                  <router-link to="/medication/create" class="nav-link">
                    <span class="title">Create</span>
                    <span class="selected"></span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/medication" class="nav-link">
                    <span class="title">medicaitons</span>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBarMenu from "@/components/SideBarMenu";
export default {
  components: {
    SideBarMenu
  },
  methods: {
    showName: function(){
      let user =  localStorage.getItem("authUser");
      return JSON.parse(user).lastName;
    }
  }
};
</script>
