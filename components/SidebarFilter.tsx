"use client";

import React, { useState } from "react";
import styles from "./SidebarFilter.module.css";

const FilterBlock = ({ title, defaultOpen = false }: { title: string, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.filterSection}>
      <div className={styles.filterHeader} onClick={() => setIsOpen(!isOpen)}>
        <div>
          <div>{title}</div>
          <div className={styles.filterSubtitle}>All</div>
        </div>
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      {isOpen && (
        <div className={styles.filterOptions}>
          <div style={{ color: "#888", textDecoration: "underline", fontSize: "14px", cursor: "pointer", marginBottom: "8px" }}>Unselect all</div>
          <label className={styles.optionLabel}>
            <input type="checkbox" /> Option 1
          </label>
          <label className={styles.optionLabel}>
            <input type="checkbox" /> Option 2
          </label>
          <label className={styles.optionLabel}>
            <input type="checkbox" /> Option 3
          </label>
        </div>
      )}
    </div>
  );
};

export default function SidebarFilter() {
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.filterSection} style={{ borderTop: "none", paddingTop: 0 }}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" /> CUSTOMIZABLE
        </label>
      </div>

      <FilterBlock title="IDEAL FOR" defaultOpen={true} />
      <FilterBlock title="OCCASION" />
      <FilterBlock title="WORK" />
      <FilterBlock title="FABRIC" />
      <FilterBlock title="SEGMENT" />
      <FilterBlock title="SUITABLE FOR" />
      <FilterBlock title="RAW MATERIALS" />
      <FilterBlock title="PATTERN" />
    </div>
  );
}
