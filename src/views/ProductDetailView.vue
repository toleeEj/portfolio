<template>
  <div v-if="product" class="product-detail-page">
    <div class="product-gallery">
      <img :src="product.image" alt="Product Image" class="main-image" />
      <div class="image-thumbnails">
        <img
          v-for="image in product.gallery"
          :key="image"
          :src="image"
          :alt="product.name"
          class="thumbnail"
        />
      </div>
    </div>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p class="price">{{ product.price }}</p>
      <p class="rating">Rating: {{ product.rating }} ⭐</p>
      <div class="product-options">
        <label for="size">Size:</label>
        <select id="size" v-model="selectedSize">
          <option v-for="size in product.sizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
        <label for="color">Color:</label>
        <select id="color" v-model="selectedColor">
          <option v-for="color in product.colors" :key="color" :value="color">
            {{ color }}
          </option>
        </select>
      </div>
      <button @click="addToCart">Add to Cart</button>
      <button @click="addToWishlist">Add to Wishlist</button>
      <div class="product-description">
        <h2>Description</h2>
        <p>
          equipped with advanced computing capabilities, connectivity, and often
          AI-powered features. designed to enhance communication, productivity,
          and convenience in everyday life by offering a range of functions like
          internet access, multimedia processing, fitness tracking, and
          real-time data synchronization.
        </p>
        <p>{{ product.description }}</p>
      </div>
      <div class="related-products">
        <h2>Related Products</h2>
        <div class="related-list">
          <ProductCard
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            :product="relatedProduct"
          />
        </div>
      </div>
    </div>
  </div>
  <p v-else>Loading product details...</p>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "ProductDetailView",
  components: {
    ProductCard,
  },
  data() {
    return {
      selectedSize: "",
      selectedColor: "",
      product: null, // Set to null initially
      relatedProducts: [
        {
          id: 1,
          name: "hppx",
          price: "$599",
          image: require("@/assets/hppx.jpg"),
          category: "Laptops",
        },
        {
          id: 2,
          name: "del Diablo",
          price: "$599",
          image: require("@/assets/del Diablo-.jpg"),
          category: "Laptops",
        },
        {
          id: 5,
          name: "labtop2",
          price: "$599",
          image: require("@/assets/hhp.jpg"),
          category: "Laptops",
        },
        {
          id: 7,
          name: "Samsung-Galaxy-S23",
          price: "$599",
          image: require("@/assets/Samsung-Galaxy-S23.jpg"),
          category: "Smartphones",
        },
        {
          id: 10,
          name: "iphoone",
          price: "$599",
          image: require("@/assets/iphoone.jpg"),
          category: "Smartphones",
        },
        {
          id: 11,
          name: "iphone",
          price: "$599",
          image: require("@/assets/iphone.jpg"),
          category: "Smartphones",
        },
        {
          id: 13,
          name: "Camera",
          price: "$749",
          image: require("@/assets/cameras1.jpg"),
          category: "Cameras",
        },
        {
          id: 14,
          name: "Camera",
          price: "$749",
          image: require("@/assets/cameras2.jpg"),
          category: "Cameras",
        },
        {
          id: 15,
          name: "Camera",
          price: "$749",
          image: require("@/assets/cameras4.jpg"),
          category: "Cameras",
        },
        {
          id: 16,
          name: "Smartwatch X",
          price: "$299",
          image: require("@/assets/smartwathch.jpg"),
          category: "Smartwatches",
        },
        {
          id: 17,
          name: "Best-5-smart-watches",
          price: "$299",
          image: require("@/assets/Best-5-smart-watches-16-12-23-teaser.jpg"),
          category: "Smartwatches",
        },
        {
          id: 18,
          name: "Tablet Pro",
          price: "$449",
          image: require("@/assets/Tablets.jpg"),
          category: "Tablets",
        },
        {
          id: 19,
          name: "Tablet",
          price: "$449",
          image: require("@/assets/Tablets1.jpg"),
          category: "Tablets",
        },
      ],
    };
  },

  created() {
    const productId = this.$route.params.id;
    // Fetch the correct product based on productId
    this.product = this.relatedProducts.find(
      (product) => product.id == productId
    );
    if (!this.product) {
      console.error("Product not found");
    }
  },

  methods: {
    addToCart() {
      alert(
        `${this.product.name} added to cart with size ${this.selectedSize} and color ${this.selectedColor}!`
      );
    },
    addToWishlist() {
      alert(`${this.product.name} added to wishlist!`);
    },
  },
};
</script>

<style scoped>
/* Main container for the product detail page */
.product-detail-page {
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  background: linear-gradient(
    135deg,
    #2e3b4e,
    #4f6478
  ); /* Light dark gradient */
  color: #eee;
  border-radius: 15px;
  min-height: 100vh;
  margin-top: 50px;
}

/* Product gallery styling */
.product-gallery {
  width: 40%;
}

.main-image {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.4s ease, box-shadow 0.4s ease; /* Smooth zoom on hover */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow */
}

.main-image:hover {
  transform: scale(1.05); /* Slight zoom on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Enhanced shadow effect */
}

/* Thumbnails styling */
.image-thumbnails {
  display: flex;
  margin-top: 1rem;
}

.thumbnail {
  width: 80px;
  margin-right: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #ddd;
  transition: transform 0.3s ease, border 0.3s ease;
}

.thumbnail:hover {
  transform: scale(1.1); /* Zoom in on hover */
  border-color: #6c859e; /* Lighter border color on hover */
}

/* Product info styling */
.product-info {
  width: 50%;
}

.product-info h1 {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.75rem;
  color: #ffcc00;
}

.rating {
  font-size: 1.25rem;
  color: #ffdd57;
  margin-bottom: 1rem;
}

/* Dropdown options styling */
.product-options {
  margin: 1rem 0;
}

.product-options label {
  font-size: 1.1rem;
  margin-right: 0.5rem;
  color: #ddd;
}

.product-options select {
  padding: 0.5rem;
  background-color: #4f6478;
  color: white;
  border: 1px solid #6c859e;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.product-options select:hover {
  border-color: #9ab8cf; /* Lighten border on hover */
}

/* Buttons styling */
button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #6c859e;
  transform: translateY(-5px); /* Lift effect */
}

/* Product description styling */
.product-description {
  margin-top: 2rem;
  color: #ddd;
}

.product-description h2 {
  font-size: 1.75rem;
  color: #fff;
}

/* Related products section styling */
.related-products {
  margin-top: 3rem;
}

.related-products h2 {
  font-size: 1.75rem;
  color: #fff;
}

.related-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

/* Product cards in related products section */
.related-list .product-card {
  background-color: #394a59;
  border-radius: 15px;
  padding: 1rem;
  width: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.related-list .product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4); /* Hover lift effect with shadow */
}

/* Loader message for loading product details */
p {
  color: #eee;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 2rem;
}
</style>
