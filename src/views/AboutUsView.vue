<template>
  <section class="about-us">
    <div class="about-section">
      <h2 class="section-title">About Us</h2>
      <p class="about-description">
        Welcome to Tolee ElectroMart! We are dedicated to providing the latest
        and greatest in electronic devices, ensuring our customers have access
        to quality products at unbeatable prices. Our mission is to empower
        people through technology by offering a wide range of devices including
        laptops, cameras, smartwatches, tablets, and smartphones.
      </p>
    </div>

    <div class="about-section">
      <h3 class="mission-title">Our Mission</h3>
      <p class="mission-description">
        We strive to enhance the lives of our customers by delivering innovative
        technology solutions that inspire and enable. Our commitment to quality
        and customer satisfaction is at the heart of everything we do.
      </p>
    </div>

    <div class="values">
      <h3 class="values-title">Our Values:</h3>
      <ul class="values-list">
        <li>Quality: We believe in offering only the best products.</li>
        <li>Integrity: We act with honesty and transparency.</li>
        <li>Customer Focus: Our customers are our top priority.</li>
        <li>Innovation: We embrace new ideas and technologies.</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  padding: 2rem;
  background: linear-gradient(135deg, #2e3b4e, #2575fc);
  color: #eee;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-us:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.about-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.section-title,
.mission-title,
.values-title {
  font-size: 2rem;
  margin: 0 0 10px;
  color: #ffeb3b;
}

.about-description,
.mission-description {
  font-size: 1rem;
  text-align: left;
}

.values-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.values-list li {
  background: #394a59;
  border-radius: 8px;
  padding: 15px;
  color: #eee;
  transition: background 0.3s ease, transform 0.2s ease;
}

.values-list li:hover {
  background: #ffeb3b;
  color: #333;
  transform: translateY(-2px);
}

/* Responsive Styles */
@media (min-width: 768px) {
  .about-section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .section-title,
  .mission-title,
  .values-title {
    flex: 0 0 20%;
    font-size: 2.4rem;
  }

  .about-description,
  .mission-description {
    flex: 0 0 80%;
    margin-left: 20px;
  }

  .values-list li {
    width: 60%;
    margin-left: 0;
  }
}

@media (min-width: 1024px) {
  .about-us {
    padding: 3rem;
  }

  .values-list li {
    width: 50%;
    margin-left: 200px;
  }
}
</style>
