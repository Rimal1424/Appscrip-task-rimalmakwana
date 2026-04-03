"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "SHOP", href: "#" },
  { label: "SKILLS", href: "#" },
  { label: "STORIES", href: "#" },
  { label: "ABOUT", href: "#" },
  { label: "CONTACT US", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Top Banner ── */}
      <div className="top-banner">
        <div className="top-banner-items">
          <span className="top-banner-desktop-only">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <path d="M3 9h18" />
            </svg>
            Lorem ipsum dolor
          </span>
          <span className="top-banner-desktop-only">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <path d="M3 9h18" />
            </svg>
            Lorem ipsum dolor
          </span>
          <span>
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <path d="M3 9h18" />
            </svg>
            Lorem ipsum dolor
          </span>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className="header-wrapper">
        <div className="container">
          <div className="header-main">
            {/* Left: Hamburger + Logo */}
            <div className="header-left">
              <button
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className="hamburger"
                onClick={() => setMenuOpen(true)}
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Link href="/" className="header-logo">
                LOGO
              </Link>
            </div>

            {/* Center: Desktop Nav */}
            <nav className="nav-links" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: Action Icons */}
            <div className="header-actions">
              <button aria-label="Search">
                <svg fill="none" stroke="#252020" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button aria-label="Favorites">
                <svg fill="none" stroke="#252020" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button aria-label="Cart">
                <svg fill="none" stroke="#252020" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
              <button aria-label="Profile" className="top-banner-desktop-only">
                <svg fill="none" stroke="#252020" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </button>
              <div className="top-banner-desktop-only" style={{ fontWeight: 700, fontSize: "14px" }}>
                ENG
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Nav Overlay ── */}
      <div
        className={`mobile-nav-overlay${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile Nav Drawer ── */}
      <nav
        className={`mobile-nav-drawer${menuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-header">
          <span className="header-logo">LOGO</span>
          <button
            aria-label="Close menu"
            className="mobile-nav-close"
            onClick={closeMenu}
          >
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="22" height="22">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom actions in drawer */}
        <div style={{ padding: "24px", borderTop: "1px solid var(--border-color)", display: "flex", gap: "16px", alignItems: "center" }}>
          <button aria-label="Profile" style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "14px" }}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="20" height="20">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            Sign In
          </button>
          <span style={{ fontWeight: 700, fontSize: "14px", marginLeft: "auto" }}>ENG</span>
        </div>
      </nav>
    </>
  );
}