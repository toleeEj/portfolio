<template>
  <div class="product-card" @click="goToProduct">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
    <button @click.stop="addToCart">Add to Cart</button>
    <button @click.stop="addToWishlist">Add to Wishlist</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  methods: {
    goToProduct() {
      this.$router.push({
        name: "ProductDetail",
        params: { id: this.product.id },
      });
    },
    addToCart() {
      alert(`${this.product.name} added to cart!`);
    },
    addToWishlist() {
      alert(`${this.product.name} added to wishlist!`);
    },
  },
};
</script>

<style scoped>
.product-card {
  width: 200px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

button {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
