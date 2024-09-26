<template>
  <section class="about-us">
    <div class="about-content">
      <div class="about-section about-company">
        <h2 class="section-title">About Us</h2>
        <p class="about-description">
          Welcome to Tolee ElectroMart! We are dedicated to providing the latest
          and greatest in electronic devices, ensuring our customers have access
          to quality products at unbeatable prices. Our mission is to empower
          people through technology by offering a wide range of devices
          including laptops, cameras, smartwatches, tablets, and smartphones.
        </p>
      </div>

      <div class="about-section mission">
        <h3 class="mission-title">Our Mission</h3>
        <p class="mission-description">
          We strive to enhance the lives of our customers by delivering
          innovative technology solutions that inspire and enable. Our
          commitment to quality and customer satisfaction is at the heart of
          everything we do.
        </p>
      </div>

      <div class="about-section values">
        <h3 class="values-title">Our Values:</h3>
        <ul class="values-list">
          <li>Quality: We believe in offering only the best products.</li>
          <li>Integrity: We act with honesty and transparency.</li>
          <li>Customer Focus: Our customers are our top priority.</li>
          <li>Innovation: We embrace new ideas and technologies.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Main Section Styling */
.about-us {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2e3b4e, #2575fc);
  color: #eee;
  text-align: center;
}

/* Content Container */
.about-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Section Styling */
.about-section {
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

/* Title Styling */
.section-title,
.mission-title,
.values-title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #ffeb3b;
  text-transform: uppercase;
  border-bottom: 2px solid #ffeb3b;
  display: inline-block;
}

/* Text Styling */
.about-description,
.mission-description {
  font-size: 1.125rem;
  line-height: 1.6;
  text-align: left;
  color: #eee;
}

/* Values List Styling */
.values-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
}

.values-list li {
  background-color: #394a59;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
  color: #eee;
  transition: all 0.3s ease;
}

.values-list li:hover {
  background-color: #ffeb3b;
  color: #333;
  transform: translateY(-3px);
}

/* Responsive Layout for Tablets and Above */
@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
    gap: 3rem;
    justify-content: space-between;
  }

  .about-section {
    flex: 1;
    margin-bottom: 0;
  }

  .section-title,
  .mission-title,
  .values-title {
    font-size: 2.5rem;
  }

  .about-description,
  .mission-description {
    font-size: 1.2rem;
  }

  .values-list {
    display: flex;
    flex-direction: column;
  }

  .values-list li {
    width: 100%;
  }
}

/* Responsive Layout for Desktops and Larger Screens */
@media (min-width: 1024px) {
  .about-content {
    gap: 4rem;
    margin-top: 100px;
  }

  .about-section {
    padding: 2rem;
  }

  .section-title,
  .mission-title,
  .values-title {
    font-size: 2.8rem;
  }

  .about-description,
  .mission-description {
    font-size: 1.3rem;
  }

  .values-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .values-list li {
    width: 100%;
    padding: 1.5rem;
  }
}
</style>
