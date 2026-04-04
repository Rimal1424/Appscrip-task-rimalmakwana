"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
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
      
      {/* Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          style={{ objectFit: "contain", padding: "20px" }}
        />
      </div>

      {/* Info */}
      <div className={styles.cardInfo}>
        
        <div style={{ flex: 1, overflow: "hidden" }}>
          <p className={styles.title} title={product.title}>
            {product.title}
          </p>

          <div className={styles.pricingInfo}>
            <span style={{ textDecoration: "none" }}>Sign in</span> or Create an account to see pricing
          </div>
        </div>

        {/* Wishlist Button */}
        <button
          className={`${styles.heartBtn} ${isLiked ? styles.active : ""}`}
          onClick={() => setIsLiked(!isLiked)}
          aria-label="Toggle Wishlist"
        >
          <Heart
            size={20}
            fill={isLiked ? "currentColor" : "none"}
          />
        </button>

      </div>
    </div>
  );
}