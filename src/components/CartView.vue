<template>
  <div class="cart-page">
    <h2>Your Cart</h2>

    <div v-if="cartItems.length > 0" class="cart-items">
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <img :src="item.image" alt="Product image" class="product-image" />
        <div class="product-details">
          <h3>{{ item.name }}</h3>
          <p>Price: {{ item.price }}</p>
          <div class="quantity-selector">
            <button @click="decreaseQuantity(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)">+</button>
          </div>
          <button class="remove-button" @click="removeItem(item.id)">
            Remove
          </button>
        </div>
        <p class="item-total">Total: {{ itemTotal(item) }}</p>
      </div>

      <div class="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Price: {{ totalPrice }}</p>
        <button class="checkout-button" @click="proceedToCheckout">
          Proceed to Checkout
        </button>
      </div>
    </div>

    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartView",
  data() {
    return {
      cartItems: [
        {
          id: 1,
          name: "Laptop XYZ",
          price: 999,
          image: require("@/assets/hppx.jpg"),
          quantity: 1,
        },
        {
          id: 2,
          name: "Smartphone ABC",
          price: 599,
          image: require("@/assets/iphoone.jpg"),
          quantity: 2,
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem(itemId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    },
    itemTotal(item) {
      return item.price * item.quantity;
    },
    proceedToCheckout() {
      alert("Proceeding to checkout!");
    },
  },
};
</script>

<style scoped>
.cart-page {
  margin-top: 20px;
  padding: 2rem;
  font-family: "Arial", sans-serif;
  background: linear-gradient(-135deg, #2e3b4e, #2575fc);
  min-height: 100vh; /* Ensure the page covers the full viewport height */
}

h2 {
  font-size: 2.5rem;
  color: white; /* Darker color for better readability */
  margin-bottom: 2rem;
  text-align: center; /* Center the header */
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cart-item {
  width: 60%; /* Set the width to 60% */
  margin: 0 auto; /* Center the component horizontally */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px; /* Rounded corners */
  background: linear-gradient(90deg, white, #2575fc);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: box-shadow 0.3s ease; /* Smooth shadow transition */
}

.cart-item:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* Shadow effect on hover */
}

.product-image {
  width: 80px;
  border-radius: 5px;
}

.product-details {
  flex: 1;
  margin-left: 1rem;
}

.product-details h3 {
  margin: 0.5rem 0; /* Adjust margin for better spacing */
  font-size: 1.5rem; /* Increase font size */
  color: #007bff; /* Primary color for product name */
}

.quantity-selector {
  display: flex;
  align-items: center;
}

.quantity-selector button {
  width: 35px;
  height: 35px;
  background-color: #007bff; /* Primary button color */
  color: white;
  border: none;
  border-radius: 5px; /* Rounded button */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth background transition */
}

.quantity-selector button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

.quantity-selector span {
  margin: 0 1rem;
  font-size: 1.2rem;
}

.remove-button {
  margin-top: 0.5rem;
  background-color: #ff4d4d; /* Danger color for remove button */
  color: white;
  border: none;
  border-radius: 5px; /* Rounded corners */
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition */
}

.remove-button:hover {
  background-color: #c0392b; /* Darker red on hover */
}

.item-total {
  font-size: 1.5rem;
  font-weight: bold; /* Bold for emphasis */
}

.cart-summary {
  margin-top: 1rem;
  text-align: right;
  padding: 1rem; /* Add some padding for better layout */
  background-color: #ffffff; /* White background */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

.cart-summary h3 {
  margin-bottom: 1rem; /* Space between summary title and total price */
}

.checkout-button {
  padding: 0.75rem 2rem;
  background-color: #28a745; /* Success color for checkout button */
  color: white;
  border: none;
  border-radius: 5px; /* Rounded corners */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth background transition */
}

.checkout-button:hover {
  background-color: #218838; /* Darker shade on hover */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .cart-item {
    flex-direction: column; /* Stack elements on smaller screens */
    align-items: flex-start; /* Align items to the start */
  }

  .quantity-selector {
    margin-top: 1rem; /* Space between quantity selector and other elements */
  }
}
</style>
