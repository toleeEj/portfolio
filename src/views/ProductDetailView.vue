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
      <p class="rating">Rating: {{ product.rating }} ⭐⭐⭐⭐</p>
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
          Equipped with advanced computing capabilities, connectivity, and often
          AI-powered features. Designed to enhance communication, productivity,
          and convenience in everyday life by offering a range of functions like
          internet access, multimedia processing, fitness tracking, and
          real-time data synchronization.
        </p>
        <p>{{ product.description }}</p>
      </div>
      <button @click="shopNow" class="btn-primary">
        back to see more devices
      </button>
    </div>
  </div>
  <p v-else>Loading product details...</p>
</template>

<script>
export default {
  name: "ProductDetailView",
  data() {
    return {
      selectedSize: "",
      selectedColor: "",
      product: null, // Set to null initially
    };
  },

  created() {
    const productId = this.$route.params.id;
    // Mock related products for demonstration
    const relatedProducts = [
      {
        id: 1,
        name: "hp laptop",
        price: "$599",
        image: require("@/assets/hhp.jpg"),
        category: "Laptops",
      },
      {
        id: 2,
        name: "hp",
        price: "$599",
        image: require("@/assets/hero1.jpg"),
        category: "Laptops",
      },
      {
        id: 3,
        name: "Samsung-Galaxy",
        price: "$599",
        image: require("@/assets/Samsung.jpg"),
        category: "Smartphones",
      },
      {
        id: 4,
        name: "iPhone",
        price: "$599",
        image: require("@/assets/hero3.jpg"),
        category: "Smartphones",
      },
      {
        id: 5,
        name: "Headphone",
        price: "$749",
        image: require("@/assets/hero2.jpg"),
        category: "Cameras",
      },
      {
        id: 6,
        name: "Camera",
        price: "$749",
        image: require("@/assets/cameras1.jpg"),
        category: "Cameras",
      },
      {
        id: 7,
        name: "Smartwatch X",
        price: "$299",
        image: require("@/assets/hero5.jpg"),
        category: "Smartwatches",
      },
      {
        id: 8,
        name: "Tablet Pro",
        price: "$449",
        image: require("@/assets/Tablets3.jpg"),
        category: "Tablets",
      },
      {
        id: 9,
        name: "Tablet",
        price: "$449",
        image: require("@/assets/hero.jpg"),
        category: "Tablets",
      },
    ];

    // Fetch the correct product based on productId
    this.product = relatedProducts.find((product) => product.id == productId);

    if (!this.product) {
      console.error("Product not found");
    } else {
      // Add colors and sizes to the product dynamically
      this.product.colors = ["Red", "Blue", "Black", "White"];
      this.product.sizes = ["Small", "Medium", "Large"];
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
    shopNow() {
      this.$router.push("/shop");
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

/* Loader message for loading product details */
p {
  color: #eee;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 2rem;
}

/* Responsive Media Queries */
@media (max-width: 768px) {
  .product-detail-page {
    margin-top: 140px;
    flex-direction: column; /* Stack elements vertically */
    padding: 1rem; /* Reduce padding */
  }

  .product-gallery,
  .product-info {
    width: 100%; /* Full width for both sections */
    margin-bottom: 2rem; /* Space between sections */
  }

  .product-info h1 {
    font-size: 2rem; /* Reduce font size */
  }

  .price {
    font-size: 1.5rem; /* Reduce font size */
  }

  .rating {
    font-size: 1rem; /* Reduce font size */
  }

  button {
    width: 100%; /* Full width buttons */
  }
}

@media (max-width: 480px) {
  .thumbnail {
    width: 40px; /* Smaller thumbnails */
  }

  .product-info h1 {
    font-size: 1.5rem; /* Further reduce font size */
  }

  .price {
    font-size: 1.25rem; /* Further reduce font size */
  }

  .rating {
    font-size: 0.9rem; /* Further reduce font size */
  }
}
</style>
