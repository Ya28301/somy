import React from "react";
import "./AboutSection.css";
import aboutImage from "../assets/about_as.png";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">نبذة عنا</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            نحن أسرة منتجة متخصصة في إعداد التمور المحشية الفاخرة بحب واهتمام،
            نقدم منتجات طبيعية بنكهات متنوعة وجودة عالية لتناسب ذوق كل عميل.
          </p>
          <p>
            نؤمن بأن التمر ليس مجرد حلوى، بل قصة تراثية نقدمها بشكل عصري وأنيق.
          </p>
          <a
            href="https://wa.me/966591683233"
            className="custom-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            تواصل معنا
          </a>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="عنّا" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
