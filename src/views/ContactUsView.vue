<template>
  <div class="contact-us-page">
    <section class="contact-info">
      <h2>Contact Us</h2>
      <p>
        We’d love to hear from you! Whether you have a question about products,
        pricing, or anything else, our team is ready to answer all your
        questions.
      </p>
      <div class="info-details">
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <p>Phone: +251 940 655 725</p>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <p>Email: tollichoo123@gmail.com</p>
        </div>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>Location: 123 Tolee St, Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </section>

    <section class="contact-form">
      <h2>Send Us a Message</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input
            v-model="name"
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Your Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea
            v-model="message"
            id="message"
            rows="5"
            placeholder="Write your message"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactUsView",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.name}! We have received your message.`);
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.contact-us-page {
  padding-top: 3rem;
  font-family: "Arial", sans-serif;
  background: linear-gradient(-135deg, #2e3b4e, #2575fc);
  color: #eee;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.contact-info {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-info h2 {
  text-decoration: underline;
  margin-top: 20px;
  font-size: 2rem;
  color: #ffeb3b;
  margin-bottom: 1rem;
}

.contact-info p {
  font-size: 1.2rem;
  color: #ddd;
}

.info-details {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  margin-top: 2rem;
}

.info-item {
  text-align: center;
  font-size: 1.1rem;
  color: #eee;
  margin: 1rem 0; /* Margin for vertical spacing */
  flex-basis: calc(33.33% - 2rem); /* Three items in a row with spacing */
}

.info-item i {
  font-size: 1.5rem;
  color: #ffeb3b;
  margin-bottom: 0.5rem;
}

.contact-form {
  text-align: center;
  margin-bottom: 1rem; /* Space below form */
}

.contact-form h2 {
  color: #ffeb3b;
  text-decoration: underline;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #eee;
}

.form-group input,
.form-group textarea {
  width: 50%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #394a59;
  color: #fff;
}

button {
  padding: 0.75rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.social-media {
  text-align: center;
  margin-top: 3rem;
}

.social-media h2 {
  font-size: 2rem;
  color: #ffeb3b;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center; /* Center social icons */
}

.social-icons a {
  margin: 0 1rem;
  font-size: 2rem;
  color: #ffeb3b;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #0056b3;
}

@media (max-width: 768px) {
  .info-details {
    flex-direction: column; /* Stack items vertically on smaller screens */
    align-items: center; /* Center align items */
  }

  .info-item {
    flex-basis: auto; /* Allow items to take full width on smaller screens */
    margin-bottom: 1.5rem; /* Space between stacked items */
  }
}
</style>
