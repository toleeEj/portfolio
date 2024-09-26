<template>
  <div>
    <HeaderBar />
    <router-view></router-view>
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  components: {
    HeaderBar,
    FooterBar,
  },
};
</script>
