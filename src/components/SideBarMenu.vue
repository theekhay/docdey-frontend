<template>
  <!-- <div> -->
  <li class="nav-item">
    <router-link :to="menuLink" class="nav-link nav-toggle">
      <i class="material-icons">{{ menuIcon }}</i>
      <span class="title">{{ menuName }}</span>
    </router-link>
  </li>
  <!-- </div> -->
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      menuName: this.name,
      menuLink: this.link,
      menuIcon: this.icon
    };
  }
};
</script>