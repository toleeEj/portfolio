<template>
  <section class="hero-section">
    <div class="slider">
      <transition name="fade" mode="out-in">
        <div
          class="slide"
          v-bind:key="currentSlide"
          :style="{ backgroundImage: `url(${slides[currentSlide].image})` }"
        >
          <div class="container">
            <div class="hero-content">
              <h1>{{ slides[currentSlide].title }}</h1>
              <p>{{ slides[currentSlide].message }}</p>
              <div class="hero-buttons">
                <button @click="shopNow" class="btn-primary">Shop Now</button>
                <button @click="learnMore" class="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      slides: [
        {
          image: require("@/assets/hero.jpg"),
          title: "Welcome to Tolee ElectroMart",
          message: "Your one-stop shop for the latest electronic gadgets.",
        },
        {
          image: require("@/assets/hero1.jpg"),
          title: "Discover Cutting-Edge Technology",
          message: "Explore our range of high-tech devices.",
        },
        {
          image: require("@/assets/hero5.jpg"),
          title: "Unbeatable Deals Await",
          message: "Shop now and enjoy exclusive discounts.",
        },
      ],
      currentSlide: 0,
    };
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    shopNow() {
      this.$router.push("/shop");
    },
    learnMore() {
      this.$router.push("/about-us");
    },
    startSlideShow() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 6000); // Change slide every 4 seconds
    },
  },
};
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.slider {
  position: relative;
  height: 100%;
}

.slide {
  height: 700px; /* Maintain the height for each slide */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-item img {
  max-width: 100%; /* Fully responsive */
  max-height: 200px; /* Set a max height to keep it within bounds */
  object-fit: contain; /* Ensure the entire image is visible */
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  text-align: center; /* Center text */
  color: white;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center; /* Center buttons */
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #e74c3c;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #c0392b;
}

.btn-secondary {
  background-color: #2c3e50;
  color: white;
  border: none;
}

.btn-secondary:hover {
  background-color: #1a242f;
}

/* Keyframes for smoother slide-in and slide-out animation */
@keyframes slideInAnimation {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutAnimation {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}

/* Apply the slide animations */
.slide-enter-active {
  animation: slideInAnimation 4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-leave-active {
  animation: slideOutAnimation 4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Hidden elements during their entry or leave */
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%); /* Start off-screen */
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .btn-primary,
  .btn-secondary {
    font-size: 0.9rem;
    padding: 0.5rem 1.5rem;
  }
}
</style>
