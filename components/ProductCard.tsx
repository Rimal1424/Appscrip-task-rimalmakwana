"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProductCard.module.css";

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          style={{ objectFit: "contain", padding: "20px" }}
        />
      </div>
      <div className={styles.cardInfo}>
        <div style={{ flex: 1, overflow: "hidden" }}>
          <h2 className={styles.title} title={product.title}>
            {product.title}
          </h2>
          <div className={styles.pricingInfo}>
            <span style={{ textDecoration: "none" }}>Sign in</span> or Create an account to see pricing
          </div>
        </div>
        <button
          className={`${styles.heartBtn} ${isLiked ? styles.active : ""}`}
          onClick={() => setIsLiked(!isLiked)}
          aria-label="Toggle Wishlist"
        >
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}