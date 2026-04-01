import React from "react";
import "./Footer.css"; 
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-branding">
        <strong>
          Sheryians <span>eXCHANGE</span>
        </strong>{" "}
        &copy; {currentYear}
        <span className="footer-divider">|</span>
        Made by <strong>Ashutosh Aman</strong>
      </div>

      <div className="footer-links">
        <span className="footer-link-item">Support</span>
        <span className="footer-link-item">Help Center</span>
        <span className="footer-link-item">Privacy</span>
        <span className="footer-link-item">Terms</span>
      </div>
    </footer>
  );
}
