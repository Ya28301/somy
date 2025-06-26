import React, { useState, useEffect, useRef } from "react";
import "./ProductsSection.css";
import product250 from "../assets/product-250g.jpg";
import product500 from "../assets/product-500g.jpg";
import product1kg from "../assets/product-1kg.jpg";
import whatsappIcon from "../assets/whatsapp-icon.png";

const products = [
  {
    id: 1,
    name: "تمر محشي - ربع كيلو",
    image: product250,
    price: "40 ريال",
    whatsappLink: "https://wa.me/966591683233?text=أرغب%20بطلب%20تمر%20ربع%20كيلو",
  },
  {
    id: 2,
    name: "تمر محشي - نصف كيلو",
    image: product500,
    price: "80 ريال",
    whatsappLink: "https://wa.me/966591683233?text=أرغب%20بطلب%20تمر%20نصف%20كيلو",
  },
  {
    id: 3,
    name: "تمر محشي - كيلو كامل",
    image: product1kg,
    price: "160 ريال",
    whatsappLink: "https://wa.me/966591683233?text=أرغب%20بطلب%20تمر%20كيلو%20كامل",
  },
];

const ProductsSection = () => {
  const [visibleId, setVisibleId] = useState(null);
  const containerRef = useRef();

  const handleToggle = (id) => {
    setVisibleId(visibleId === id ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setVisibleId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="products" className="products-section" ref={containerRef}>
      <h2 className="products-title">منتجاتنا</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${visibleId === product.id ? "show-info" : ""}`}
            onClick={() => handleToggle(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-name">{product.name}</div>
            <div className="product-info">
              <p className="product-price">{product.price}</p>
              <a
                href={product.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                اطلب عبر الواتساب
                <img
                  src={whatsappIcon}
                  alt="واتساب"
                  className="whatsapp-icon"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
