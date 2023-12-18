import React from "react";
import styles from "./ProductSection.module.css";
import towelsImage from '../images/Towels.png'; // Corrected the variable name to match the content
import robesImage from '../images/Robes.png'; // Make sure the path is correct

export default function ProductSection() {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.productHeader}>Shop Our Products</h2>
      <div className={styles.productContainer}>
        <div className={styles.productCard}>
          <h3 className={styles.productTitle}>TOWELS</h3>
          <img src={towelsImage} alt="Towels" className={styles.productImage}/>
        </div>
        <div className={styles.productCard}>
          <h3 className={styles.productTitle}>ROBES</h3>
          <img src={robesImage} alt="Robes" className={styles.productImage}/>
        </div>
      </div>
    </section>
  );
}

