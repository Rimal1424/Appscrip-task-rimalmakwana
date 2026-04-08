"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./SidebarFilter.module.css";

const FilterBlock = ({
  title,
  defaultOpen = false,
}: {
  title: string;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [checked, setChecked] = useState({
    opt1: false,
    opt2: false,
    opt3: false,
  });

  const handleUnselectAll = () => {
    setChecked({ opt1: false, opt2: false, opt3: false });
  };

  return (
    <div className={styles.filterSection}>
      
      {/* Header */}
      <div
        className={styles.filterHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <div>{title}</div>
          <div className={styles.filterSubtitle}>All</div>
        </div>

        {/* Icon */}
        <ChevronDown
          size={16}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        />
      </div>

      {/* Options */}
      {isOpen && (
        <div className={styles.filterOptions}>
          <div
            onClick={handleUnselectAll}
            style={{
              color: "#888",
              textDecoration: "underline",
              fontSize: "14px",
              cursor: "pointer",
              marginBottom: "8px",
            }}
          >
            Unselect all
          </div>

          <label className={styles.optionLabel}>
            <input
              type="checkbox"
              checked={checked.opt1}
              onChange={(e) => setChecked({ ...checked, opt1: e.target.checked })}
            />{" "}
            Option 1
          </label>

          <label className={styles.optionLabel}>
            <input
              type="checkbox"
              checked={checked.opt2}
              onChange={(e) => setChecked({ ...checked, opt2: e.target.checked })}
            />{" "}
            Option 2
          </label>

          <label className={styles.optionLabel}>
            <input
              type="checkbox"
              checked={checked.opt3}
              onChange={(e) => setChecked({ ...checked, opt3: e.target.checked })}
            />{" "}
            Option 3
          </label>
        </div>
      )}
    </div>
  );
};

export default function SidebarFilter() {
  return (
    <div style={{ width: "100%" }}>
      
      <div
        className={styles.filterSection}
        style={{ borderTop: "none", paddingTop: 0 }}
      >
        <label className={styles.checkboxLabel}>
          <input type="checkbox" /> CUSTOMIZABLE
        </label>
      </div>

      <FilterBlock title="IDEAL FOR" defaultOpen />
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