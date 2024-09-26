<template>
  <header class="header">
    <div class="logo">
      <img
        src="@/assets/logo1.jpg"
        alt="Tolee ElectroMart Logo"
        class="logo-image"
      />
      <span class="logo-text">Tolee ElectroMart</span>
    </div>
    <nav class="nav-menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/shop">Shop Now</router-link></li>
        <li><router-link to="/about-us">About Us</router-link></li>
        <li><router-link to="/contact-us">Contact Us</router-link></li>
      </ul>
    </nav>
    <div class="user-options">
      <router-link to="/cart" class="icon-link">🛒 Cart</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed; /* Fix the header at the top */
  top: 0; /* Position it at the top of the page */
  left: 0; /* Align it to the left */
  right: 0; /* Stretch it to the right */
  z-index: 1000; /* Ensure it's above other content */
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 50px; /* Adjust width to fit your design */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Space between logo image and text */
  border-radius: 25px;
}

.logo-text {
  font-size: 1.5rem; /* Adjust logo text size */
  font-weight: bold;
  letter-spacing: 1px;
}

.nav-menu ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-menu ul li {
  position: relative;
}

.nav-menu ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.nav-menu ul li a:hover {
  color: #ffeb3b;
  font-weight: bold;
}

.nav-menu ul li a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px;
  height: 2px;
  background: #ffeb3b;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-menu ul li:hover a::after {
  transform: scaleX(1);
}

.user-options {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-options .icon-link {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.user-options .icon-link:hover {
  color: #ffeb3b;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .nav-menu ul {
    flex-direction: column;
    gap: 1rem;
  }

  .user-options {
    margin-top: 1rem;
  }
}
</style>
