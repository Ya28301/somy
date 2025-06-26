import React from "react";
import "./HeroSection.css";
import heroImage from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-text-box container">
        <h1 className="hero-title">
          أهلاً بك في <span className="brand">SOMY</span>
        </h1>
        <p className="hero-subtitle">
          أفضل أنواع التمور المحشية بجودة عالية وطعم لا يُقاوم
        </p>
        <a href="#products" className="btn hero-btn mt-3">
          استعرض المنتجات
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
