import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    
    <footer className="footer-wrapper">
      <div className="container">
        
        {/* Top Section */}
        <div className="footer-top">
          
          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettä muse.</p>

            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                aria-label="Email address"
              />
              <button>Subscribe</button>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>

            <h3 className={styles.contactSubheading}>CURRENCY</h3>

            <div className={styles.currencyRow}>
              <span className={styles.currencyLabel}>USD</span>
            </div>

            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          
          {/* Column 1 */}
          <div className="footer-col">
            <h4>mettä muse</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#">Orders &amp; Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment &amp; Pricing</a></li>
              <li><a href="#">Return &amp; Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4>FOLLOW US</h4>

            <div className={styles.socialIcons}>
              <div className={styles.socialIconWrap}>
                <Image
                  src="/instagram-icon.svg"
                  alt="Follow mettä muse on Instagram"
                  width={32}
                  height={32}
                />
              </div>

              <div className={styles.socialIconWrap}>
                <Image
                  src="/linkedin-icon.svg"
                  alt="Follow mettä muse on LinkedIn"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            <h4>mettä muse Accepts</h4>

            <div className={styles.paymentIcons}>
              <div className={styles.paymentIconWrap}>
                <Image
                  src="/google-pay-logo.svg"
                  alt="Google Pay accepted"
                  width={28}
                  height={16}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className={styles.paymentIconWrap}>
                <Image
                  src="/paypal-logo.svg"
                  alt="PayPal accepted"
                  width={28}
                  height={16}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className={styles.paymentIconWrap}>
                <Image
                  src="/apple-pay-logo.svg"
                  alt="Apple Pay accepted"
                  width={28}
                  height={16}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>
          Copyright &copy; 2024 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}