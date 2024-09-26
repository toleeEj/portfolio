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
          <p>📞 Phone: +251 940 655 725</p>
        </div>
        <div class="info-item">
          <p>📧 Email: tollichoo123@gmail.com</p>
        </div>
        <div class="info-item">
          <p>📍 Location: 123 Tolee St, Addis Ababa, Ethiopia</p>
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
/* Main container styling */
.contact-us-page {
  padding: 8rem 2rem;
  background: linear-gradient(-135deg, #2e3b4e, #2575fc);
  color: #eee;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
}

/* Contact Info Section */
.contact-info {
  text-align: center;
  max-width: 800px;
}

.contact-info h2 {
  font-size: 2.5rem;
  color: #ffeb3b;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.contact-info p {
  font-size: 1.2rem;
  color: #ddd;
}

.info-details {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.info-item {
  text-align: center;
  font-size: 1.1rem;
  margin: 1rem 0;
  flex-basis: 30%;
  padding: 1rem;
  background: #394a59;
  border-radius: 8px;
  transition: transform 0.3s ease, background 0.3s ease;
}

.info-item:hover {
  background: #ffeb3b;
  color: #333;
  transform: translateY(-5px);
}

.info-item i {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #ffeb3b;
}

/* Contact Form Section */
.contact-form {
  text-align: center;
  max-width: 600px;
  width: 100%;
  background: #394a59;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.contact-form h2 {
  color: #ffeb3b;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  font-size: 1.1rem;
  color: #ddd;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #2e3b4e;
  color: #fff;
  font-size: 1rem;
  margin-top: 0.5rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ffeb3b;
}

button {
  padding: 0.75rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .info-details {
    flex-direction: column;
    gap: 2rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .info-item {
    width: 80%;
  }
}
</style>
