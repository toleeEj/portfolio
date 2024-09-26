<template>
  <router-link :to="`/product/${product.id}`" class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
    <button @click="addToCart">Add to Cart</button>
    <button @click="addToWishlist">Add to Wishlist</button>
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  methods: {
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
