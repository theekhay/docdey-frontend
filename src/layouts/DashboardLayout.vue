<template>
  <div>
    <Header />
    <div class="page-container">
      <side-bar />
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
export default {
  components: {
    Header,
    Footer,
    SideBar
  }
};
</script>
