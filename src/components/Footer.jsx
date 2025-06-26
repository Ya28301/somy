import React, { useState } from "react";
import "./Footer.css";
import logo from "../assets/LOGO.png";
import comingIcon from "../assets/coming-soon.png"; // صورة صغيرة للـ popup

const Footer = () => {
  const [popup, setPopup] = useState("");

  const handleSoon = (platform) => {
    setPopup(`${platform} قريبا`);
    setTimeout(() => setPopup(""), 3000); // يخفيه بعد 3 ثواني
  };

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-logo">
          <img src={logo} alt="SOMY" />
          <p>تمور محشية فاخرة من قلب المملكة</p>
        </div>

        <div className="footer-links">
          <h4>روابط</h4>
          <ul>
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#products">المنتجات</a></li>
            <li><a href="#about">من نحن</a></li>
          </ul>
        </div>

        {/* ✅ أضفنا id="contact" هنا */}
        <div className="footer-social" id="contact">
          <h4>تابعنا</h4>
          <div className="social-icons">
            <a href="https://www.tiktok.com/@as70138" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <button onClick={() => handleSoon("سناب شات")}>
              <i className="fab fa-snapchat-ghost"></i>
            </button>
            <button onClick={() => handleSoon("إنستقرام")}>
              <i className="fab fa-instagram"></i>
            </button>
            <a href="https://wa.me/966591683233" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        جميع الحقوق محفوظة - SOMY 2025 ©
      </div>

      {/* ✅ رسالة "قريبًا" */}
      {popup && (
        <div className="coming-soon-popup">
          <img src={comingIcon} alt="قريبًا" />
          <span>{popup}</span>
        </div>
      )}
    </footer>
  );
};

export default Footer;
