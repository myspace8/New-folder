"use client"

import { useState } from 'react';
import styles from '../Home.module.css';
import { products } from '../lib/data.js';

export default function Men() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          {products.map((product) => (
            <button
              key={product.id}
              className={styles.card}
              onClick={() => openModal(product)}
            >
              <img src={product.image} alt="Nike shoe" />
              <h3>{product.name}</h3>

              <p>Price: GH₵ {product.price}</p>
              <p>{product.description}</p>
            </button>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedProduct && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <img src={selectedProduct.image} alt="Nike shoe" />
            <p className={styles.productId}>
              ProductID: {selectedProduct.uniqueID}
            </p>
            <h3>{selectedProduct.name}</h3>
            <p>GH₵ {selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
            <a
              className={styles.orderButton}
              target="_blank"
              href="https://wa.me/message/HIE6U7QO4VDNN1"
            >
              Proceed To WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
