"use client";

import React, { useState, useMemo, useEffect } from "react";
import ProductCard, { Product } from "./ProductCard";
import SidebarFilter from "./SidebarFilter";
import { SlidersHorizontal, X } from "lucide-react";
import styles from "./ProductListing.module.css";

export default function ProductListing({ initialProducts }: { initialProducts: Product[] }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [sortOption, setSortOption] = useState("RECOMMENDED");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Lock body scroll when mobile filter drawer is open
  useEffect(() => {
    if (isFilterDrawerOpen) {
      document.body.classList.add("filter-open");
    } else {
      document.body.classList.remove("filter-open");
    }
    return () => {
      document.body.classList.remove("filter-open");
    };
  }, [isFilterDrawerOpen]);

  const products = useMemo(() => {
    const sorted = [...initialProducts];

    if (sortOption === "PRICE_HIGH_LOW") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "PRICE_LOW_HIGH") {
      sorted.sort((a, b) => a.price - b.price);
    }

    return sorted;
  }, [initialProducts, sortOption]);

  return (
    <>
      {/* ── Filter Controls ── */}
      <div className={styles.filterControls}>
        
        <div className={styles.filterLeft}>
          <span className={styles.itemCount}>
            {products.length} ITEMS
          </span>

          {/* Desktop Toggle */}
          <button
            className={styles.toggleFilterBtn}
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            {isSidebarVisible ? "< HIDE FILTER" : "> SHOW FILTER"}
          </button>

          {/* Mobile Button */}
          <button
            className={styles.mobileFilterBtn}
            onClick={() => setIsFilterDrawerOpen(true)}
          >
            <SlidersHorizontal size={16} />
            FILTER
          </button>
        </div>

        {/* Sort */}
        <select
          className={styles.sortSelect}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="RECOMMENDED">RECOMMENDED</option>
          <option value="NEWEST_FIRST">NEWEST FIRST</option>
          <option value="POPULAR">POPULAR</option>
          <option value="PRICE_HIGH_LOW">PRICE: HIGH TO LOW</option>
          <option value="PRICE_LOW_HIGH">PRICE: LOW TO HIGH</option>
        </select>
      </div>

      {/* ── Layout ── */}
      <div className={styles.layoutWrapper}>
        
        {/* Sidebar */}
        <div className={isSidebarVisible ? styles.sidebar : styles.sidebarHidden}>
          <SidebarFilter />
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Overlay — blocks touch scroll on mobile */}
      <div
        className={`${styles.filterOverlay} ${
          isFilterDrawerOpen ? styles.filterOverlayOpen : ""
        }`}
        onClick={() => setIsFilterDrawerOpen(false)}
        onTouchMove={(e) => e.preventDefault()}
      />

      {/* Drawer */}
      <div
        className={`${styles.filterDrawer} ${
          isFilterDrawerOpen ? styles.filterDrawerOpen : ""
        }`}
      >
        {/* Header */}
        <div className={styles.filterDrawerHeader}>
          <span>FILTERS</span>

          <button
            className={styles.filterDrawerClose}
            onClick={() => setIsFilterDrawerOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className={styles.filterDrawerBody}>
          {isFilterDrawerOpen && <SidebarFilter />}
        </div>
      </div>
    </>
  );
}