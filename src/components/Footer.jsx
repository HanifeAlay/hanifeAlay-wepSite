import React from "react";
import "../style/Footer.css";

function Footer() {
  const yil = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_icerik">
        <p className="footer_satir footer_baslik">
          © {yil} Hanife Alay
        </p>

        <p className="footer_satir footer_altBaslik">
          Frontend Developer | React & JavaScript
        </p>

        <p className="footer_satir footer_aciklama">
          Bu site, öğrenme sürecimde geliştirdiğim projeleri ve yetkinliklerimi sergilemek amacıyla hazırlanmıştır.
        </p>

        <p className="footer_satir footer_imza">
          © 2026 Hanife Alay. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
