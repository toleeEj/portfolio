<template>
  <HeaderBar @toggle-cart="toggleCart" />

  <div>
    <HeroSection />
    <FeaturedCategories />
    <ShopView />
    <AboutUsView />
    <ContactUsView />
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import FeaturedCategories from "../components/FeaturedCategories.vue";
import ShopView from "../views/ShopView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import ContactUsView from "../views/ContactUsView.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    FeaturedCategories,
    ShopView,
    AboutUsView,
    ContactUsView,
  },
};
</script>

<style scoped>
/* Home page specific styles can go here */
</style>
