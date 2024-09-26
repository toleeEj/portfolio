<template>
  <section class="featured-categories">
    <h1>Featured Categories</h1>
    <div class="category-list">
      <transition name="slide" mode="out-in">
        <div class="category-item" :key="currentIndex">
          <img
            :src="categories[currentIndex].image"
            :alt="categories[currentIndex].name"
          />
          <h3>{{ categories[currentIndex].name }}</h3>
          <h4>{{ categories[currentIndex].description }}</h4>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedCategories",
  data() {
    return {
      categories: [
        {
          name: "Laptops",
          image: require("@/assets/hp.jpg"),
          description:
            "We are dedicated to providing the latest and greatest in electronic devices, ensuring our customers have access to quality products at unbeatable prices.",
        },
        {
          name: "headphones",
          image: require("@/assets/headphones.jpg"),
          description:
            "We are dedicated to providing the latest and greatest in electronic devices, ensuring our customers have access to quality products at unbeatable prices.",
        },
        {
          name: "Cameras",
          image: require("@/assets/cameras.jpg"),
          description:
            "We are dedicated to providing the latest and greatest in electronic devices, ensuring our customers have access to quality products at unbeatable prices.",
        },
        {
          name: "Smartwatches",
          image: require("@/assets/smartwathch.jpg"),
          description:
            "We are dedicated to providing the latest and greatest in electronic devices, ensuring our customers have access to quality products at unbeatable prices.",
        },
        {
          name: "Tablets",
          image: require("@/assets/Tablets1.jpg"),
          description:
            "We are dedicated to providing the latest and greatest in electronic devices, ensuring our customers have access to quality products at unbeatable prices.",
        },
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    this.startTransition();
  },
  methods: {
    startTransition() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.categories.length;
      }, 4000); // Change every 4 seconds
    },
  },
};
</script>

<style scoped>
.featured-categories {
  padding: 2rem;
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  text-align: center;
  color: white;
}

.featured-categories h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff; /* White title for contrast */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Slightly darker shadow */
}

.category-list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Set a fixed height for centering */
  overflow: hidden; /* Hide overflow to enhance the transition effect */
  position: relative; /* For absolute positioning of items */
}

.category-item {
  width: 100%; /* Full width for sliding effect */
  text-align: center;
  position: absolute; /* Position absolute for the sliding transition */
}

/* Ensure the image is fully visible */
.category-item img {
  max-width: 100%; /* Fully responsive */
  max-height: 200px; /* Set a max height to keep it within bounds */
  object-fit: contain; /* Ensure the entire image is visible */
  border-radius: 10px; /* Rounded corners for the image */
}

/* Keyframe animation for the slide effect */
@keyframes slideAnimation {
  0% {
    transform: translateX(100%); /* Start from the right */
    opacity: 0;
  }
  20% {
    transform: translateX(0); /* Move to center */
    opacity: 1;
  }
  80% {
    transform: translateX(0); /* Stay in the center for a bit */
    opacity: 1;
  }
  100% {
    transform: translateX(-100%); /* Move to the left */
    opacity: 0;
  }
}

/* Apply the slide animation */
.slide-enter-active,
.slide-leave-active {
  animation: slideAnimation 4s ease-in-out; /* Total animation duration: 4 seconds */
}

/* Hidden elements during their entry or leave */
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%); /* Start off-screen */
}

.category-item h3 {
  margin-top: 0.5rem;
  font-size: 2rem; /* Font size for the category name */
  color: white; /* Darker text color for contrast */
}
</style>
