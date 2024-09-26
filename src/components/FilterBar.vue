<template>
  <div class="filter-bar">
    <select v-model="selectedCategory" @change="applyFilter">
      <option value="All">All Categories</option>
      <option value="Laptops">Laptops</option>
      <option value="Smartphones">Smartphones</option>
      <option value="Cameras">Cameras</option>
      <option value="Smartwatches">Smartwatches</option>
      <option value="Tablets">Tablets</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  data() {
    return {
      selectedCategory: "All",
    };
  },
  methods: {
    applyFilter() {
      this.$emit("filter-products", this.selectedCategory);
    },
  },
};
</script>

<style scoped>
.filter-bar {
  margin-bottom: 2rem;
  text-align: center;
  color: white;
}

select {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
}
</style>
