import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top">
          <div className="footer-newsletter">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettä muse.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your e-mail..." aria-label="Email address" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer-contact">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h3 style={{ marginTop: "24px" }}>CURRENCY</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontWeight: 700 }}>USD</span>
            </div>
            <p style={{ fontSize: "12px", marginTop: "8px" }}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
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
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FOLLOW US</h4>
            {/* Social Icons Placeholder */}
            <div style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
              <div style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/instagram-1-svgrepo-com.svg" alt="Instagram" width={32} height={32} />
              </div>
              <div style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={32} height={32} />
              </div>
            </div>
            <h4>mettä muse Accepts</h4>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ width: "40px", height: "24px", background: "#fff", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/google-pay-svgrepo-com.svg" alt="Google Pay" width={28} height={16} style={{ objectFit: "contain" }} />
              </div>
              <div style={{ width: "40px", height: "24px", background: "#fff", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/pay-pal-paypal-payments-platform-svgrepo-com.svg" alt="PayPal" width={28} height={16} style={{ objectFit: "contain" }} />
              </div>
              <div style={{ width: "40px", height: "24px", background: "#fff", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/apple-pay-payment-mark-logo-svgrepo-com.svg" alt="Apple Pay" width={28} height={16} style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "40px", color: "#bbb", fontSize: "14px" }}>
          Copyright © 2024 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
