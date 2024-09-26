<template>
  <footer class="footer">
    <section class="social-media">
      <h2>Follow Us</h2>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-pinterest"></i></a>
      </div>
    </section>
    <div class="legal-info">
      <a href="#" class="legal-link">Terms of Service</a>
      <a href="#" class="legal-link">Privacy Policy</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  color: white;
  padding: 5px 2px; /* Reduced top padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.social-media {
  margin-bottom: 20px;
  margin-top: 0.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 100px; /* Increased gap */
}

.social-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.2s ease;
}

.social-link:hover {
  color: #ffeb3b; /* Bright yellow on hover */
  transform: scale(1.1); /* Slight scale effect */
}

.legal-info {
  margin-top: 20px;
}

.legal-info a {
  margin: 0 10px;
}

.legal-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: red; /* Bright yellow on hover */
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
  color: green;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .footer {
    padding: 20px 10px;
  }

  .newsletter-input {
    flex-direction: column;
    align-items: center;
  }

  .email-input {
    margin-bottom: 10px; /* Space between input and button */
    max-width: 100%; /* Full width on small screens */
  }
}
</style>
