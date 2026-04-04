"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";

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
    document.body.style.overflow = menuOpen ? "hidden" : "";
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
          <span>Lorem ipsum dolor</span>
          <span className="top-banner-desktop-only">Lorem ipsum dolor</span>
          <span className="top-banner-desktop-only">Lorem ipsum dolor</span>
        </div>
      </div>

      {/* Header  */}
      <header className="header-wrapper">
        <div className="container">
          <div className="header-main">

            {/* Left */}
            <div className="header-left">
              <button
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
                className="hamburger"
              >
                <Menu size={24} />
              </button>

              <Link href="/" className="header-logo">
                LOGO
              </Link>
            </div>

            {/* Center Nav */}
            <nav className="nav-links">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="header-actions">
              <button aria-label="Search">
                <Search size={20} />
              </button>

              <button aria-label="Favorites">
                <Heart size={20} />
              </button>

              <button aria-label="Cart">
                <ShoppingCart size={20} />
              </button>

              <button
                aria-label="Profile"
                className="top-banner-desktop-only"
              >
                <User size={20} />
              </button>

              <span className="top-banner-desktop-only">ENG</span>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`mobile-nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Drawer */}
      <nav
        className={`mobile-nav-drawer ${menuOpen ? "open" : ""}`}
      >
        {/* Drawer Header */}
        <div className="mobile-nav-header">
          <span className="header-logo">LOGO</span>

          <button onClick={closeMenu} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="mobile-nav-bottom">
          <button className="profile-btn">
            <User size={20} />
            <span>Sign In</span>
          </button>

          <span className="lang">ENG</span>
        </div>
      </nav>
    </>
  );
}
