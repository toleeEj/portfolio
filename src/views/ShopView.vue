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
          name: "iphoone",
          price: "$599",
          image: require("@/assets/hero3.jpg"),
          category: "Smartphones",
        },
        {
          id: 5,
          name: "Headphone",
          price: "$749",
          image: require("@/assets/hero2.jpg"),
          category: "headphones",
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
  background: linear-gradient(-90deg, #6a11cb, #2575fc);
  text-align: center;
  min-height: 100vh;
  color: white;
}

.shop-page h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

/* Product listings grid */
.product-listings {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
  max-width: 100%; /* Make it flexible */
  margin: 0 auto;
}

/* Product card styling */
.product-card {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 280px; /* Set a max width for larger screens */
  cursor: pointer;
}

/* Image styling */
.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #4f6478;
  transition: transform 0.4s ease;
}

.product-card h3 {
  font-size: 1.25rem;
  color: #fff;
  margin: 1rem 0;
}

.product-card p {
  font-size: 1rem;
  color: green;
  margin-bottom: 1rem;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.product-card:hover img {
  transform: scale(1.1);
}

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
  background-color: #6c859e;
  transform: translateY(-3px);
}

.filter-bar button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(79, 100, 120, 0.5);
}

/* Media Queries for Responsiveness */
@media screen and (max-width: 768px) {
  .shop-page h1 {
    margin-top: 140px;
    font-size: 2rem;
  }

  .product-listings {
    flex-direction: column;
    gap: 1.5rem;
  }

  .product-card {
    max-width: 70%; /* Adjust width on smaller screens */
  }
}

@media screen and (max-width: 480px) {
  .shop-page h1 {
    font-size: 1.5rem;
  }

  .product-card img {
    height: 150px;
  }

  .product-card {
    max-width: 100%; /* Full width on mobile */
  }
}
</style>
