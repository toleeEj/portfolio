<template>
  <div class="shop-page">
    <h1>Sellect a device you want to Shop</h1>
    <FilterBar @filter-products="filterProducts" />
    <div class="product-listings">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import FilterBar from "../components/FilterBar.vue";

export default {
  name: "ShopView",
  components: {
    ProductCard,
    FilterBar,
  },
  data() {
    return {
      products: [
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
      filteredProducts: [],
    };
  },
  created() {
    this.filteredProducts = this.products; // Show all products by default
  },
  methods: {
    filterProducts(category) {
      if (category === "All") {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(
          (product) => product.category === category
        );
      }
    },
  },
};
</script>

<style scoped>
/* Main shop page styling */
.shop-page {
  padding-top: 3rem;
  background: linear-gradient(
    -90deg,
    #6a11cb,
    #2575fc
  ); /* A cool, subtle dark gradient */
  text-align: center;
  min-height: 100vh;
  color: white; /* Lighter text for contrast */
}

.shop-page h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff; /* White title for contrast */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Slightly darker shadow */
}

/* Product listings grid */
.product-listings {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Product card styling */
.product-card {
  background-color: white; /* Dark card background */
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
  width: 280px;
  cursor: pointer;
}

/* Image styling */
.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #4f6478; /* Matches the dark gradient */
  transition: transform 0.4s ease;
}

/* Product name and price styling */
.product-card h3 {
  font-size: 1.25rem;
  color: #fff;
  margin: 1rem 0;
}

.product-card p {
  font-size: 1rem;
  color: white;
  margin-bottom: 1rem;
}

/* Hover effect for the product card */
.product-card:hover {
  transform: translateY(-10px); /* Lifts the card slightly */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4); /* Stronger shadow on hover */
}

.product-card:hover img {
  transform: scale(1.1); /* Zoom-in effect on hover */
}

/* Button styling for filtering */
.filter-bar button {
  padding: 0.75rem 1.5rem;
  background-color: white;
  border: none;
  color: white;
  border-radius: 5px;
  margin: 0 0.5rem;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.filter-bar button:hover {
  background-color: #6c859e; /* Lightens on hover */
  transform: translateY(-3px); /* Lift effect on hover */
}

.filter-bar button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(79, 100, 120, 0.5);
}
</style>
