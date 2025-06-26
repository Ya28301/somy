import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/LOGO.png';

const Header = () => {
  const messages = [
    'مرحبًا بك في موقع SOMY ✨',
    'أفضل أنواع التمر المحشي 🏆',
    'جودة عالية ونكهة لا تُقاوم 😋',
    'تمورنا من أجود نخيل المملكة 🌴',
  ];

  const [currentMsg, setCurrentMsg] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsg((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = () => {
    // يغلق القائمة عند اختيار رابط (مفيد للجوال)
    setMenuOpen(false);
  };

  return (
    <>
      <div className="announcement-bar">
        <p>{messages[currentMsg]}</p>
      </div>

      <header className="main-header">
        <div className="header-container">
          <div className="logo-hamburger">
            <img src={logo} alt="SOMY Logo" className="logo-img" />
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>

          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li><a href="#home" onClick={handleLinkClick}>الرئيسية</a></li>
            <li><a href="#products" onClick={handleLinkClick}>المنتجات</a></li>
            <li><a href="#about" onClick={handleLinkClick}>من نحن</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>تواصل معنا</a></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
