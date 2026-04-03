"use client";

import React, { useState, useMemo, useEffect } from "react";
import ProductCard, { Product } from "./ProductCard";
import SidebarFilter from "./SidebarFilter";
import styles from "../app/page.module.css";

export default function ProductListing({ initialProducts }: { initialProducts: Product[] }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [sortOption, setSortOption] = useState("RECOMMENDED");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Lock body scroll when mobile filter drawer is open
  useEffect(() => {
    if (isFilterDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterDrawerOpen]);

  const products = useMemo(() => {
    const sorted = [...initialProducts];
    if (sortOption === "PRICE_HIGH_LOW") sorted.sort((a, b) => b.price - a.price);
    else if (sortOption === "PRICE_LOW_HIGH") sorted.sort((a, b) => a.price - b.price);
    return sorted;
  }, [initialProducts, sortOption]);

  return (
    <>
      {/* ── Filter Controls Bar ── */}
      <div className={styles.filterControls}>
        <div className={styles.filterLeft}>
          <span className={styles.itemCount}>{products.length} ITEMS</span>

          {/* Desktop: toggle sidebar text button */}
          <button
            className={styles.toggleFilterBtn}
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            aria-label="Toggle filters"
          >
            {isSidebarVisible ? "< HIDE FILTER" : "> SHOW FILTER"}
          </button>

          {/* Mobile: open drawer button */}
          <button
            className={styles.mobileFilterBtn}
            onClick={() => setIsFilterDrawerOpen(true)}
            aria-label="Open filters"
          >
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="18" height="18">
              <path d="M3 4h18M7 8h10M11 12h2M9 16h6" />
            </svg>
            FILTER
          </button>
        </div>

        <select
          className={styles.sortSelect}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          aria-label="Sort products"
        >
          <option value="RECOMMENDED">RECOMMENDED</option>
          <option value="NEWEST_FIRST">NEWEST FIRST</option>
          <option value="POPULAR">POPULAR</option>
          <option value="PRICE_HIGH_LOW">PRICE: HIGH TO LOW</option>
          <option value="PRICE_LOW_HIGH">PRICE: LOW TO HIGH</option>
        </select>
      </div>

      {/* ── Main Layout: Sidebar + Grid ── */}
      <div className={styles.layoutWrapper}>
        {/* Desktop sidebar */}
        <div className={isSidebarVisible ? styles.sidebar : styles.sidebarHidden}>
          <SidebarFilter />
        </div>

        {/* Product grid */}
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* ── Mobile Filter Drawer Overlay ── */}
      <div
        className={`${styles.filterOverlay}${isFilterDrawerOpen ? ` ${styles.filterOverlayOpen}` : ""}`}
        onClick={() => setIsFilterDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Filter Drawer ── */}
      <div
        className={`${styles.filterDrawer}${isFilterDrawerOpen ? ` ${styles.filterDrawerOpen}` : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Filters"
      >
        <div className={styles.filterDrawerHeader}>
          <span>FILTERS</span>
          <button
            className={styles.filterDrawerClose}
            onClick={() => setIsFilterDrawerOpen(false)}
            aria-label="Close filters"
          >
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="22" height="22">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className={styles.filterDrawerBody}>
          <SidebarFilter />
        </div>
      </div>
    </>
  );
}
