import React from "react";
import "../style/Contact.css";

// MUI ikonları 
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// memoji görseli
import contactMemoji from "../assets/selamMemoji.png";

// cv 
import cv from "../assets/cv.png"

function Contact() {
  return (
    <section className="contact_section" id="iletisim">
      <div className="contact_container">
        {/* SOL TARAF */}
        <div className="contact_left">
          <h2 className="contact_title">İletişim</h2>

          <p className="contact_desc">
            Junior / staj pozisyonları ve proje iş birlikleri için benimle iletişime geçebilirsiniz.
            Profil ve özgeçmiş bağlantıları aşağıda.
          </p>

          <div className="contact_grid">
            {/* CV */}
            <a
              className="contact_card"
              href={cv}
              target="_blank"
              rel="noreferrer"
            >
              <span className="card_icon">
                <DescriptionOutlinedIcon />
              </span>
              <span className="card_text">
                <span className="card_label">CV</span>
                <span className="card_value">PDF görüntüle</span>
              </span>
              <span className="card_arrow">→</span>
            </a>

            {/* LinkedIn */}
            <a
              className="contact_card"
              href="https://www.linkedin.com/in/hanife-alay-867954313/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="card_icon">
                <LinkedInIcon />
              </span>
              <span className="card_text">
                <span className="card_label">LinkedIn</span>
                <span className="card_value">Profilime git</span>
              </span>
              <span className="card_arrow">→</span>
            </a>

            {/* GitHub */}
            <a
              className="contact_card"
              href="https://github.com/HanifeAlay"
              target="_blank"
              rel="noreferrer"
            >
              <span className="card_icon">
                <GitHubIcon />
              </span>
              <span className="card_text">
                <span className="card_label">GitHub</span>
                <span className="card_value">Projelerimi incele</span>
              </span>
              <span className="card_arrow">→</span>
            </a>

            {/* Email */}
            <a className="contact_card" href="mailto:hanifealay@icloud.com">
              <span className="card_icon">
                <MailOutlineIcon />
              </span>
              <span className="card_text">
                <span className="card_label">E-posta</span>
                <span className="card_value">Benimle iletişime geç</span>
              </span>
              <span className="card_arrow">→</span>
            </a>

            {/* WhatsApp */}
            <a
              className="contact_card contact_card_whatsapp"
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
            >
              <span className="card_icon">
                <WhatsAppIcon />
              </span>
              <span className="card_text">
                <span className="card_label">WhatsApp</span>
                <span className="card_value">Mesaj gönder</span>
              </span>
              <span className="card_arrow">→</span>
            </a>
          </div>
        </div>

        {/* SAG TARAF */}
        <div className="contact_right" aria-hidden="true">
          <div className="memoji_frame">
            <img className="contact_memoji" src={contactMemoji} alt="Memoji" />
          </div>
          <div className="memoji_glow glow1" />
          <div className="memoji_glow glow2" />
        </div>
      </div>

      {/*  alt çizgi */}
      <div className="contact_cizgi" aria-hidden="true" />
    </section>
  );
}

export default Contact;
