import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t("siteName")}</h3>
          <p>
            {t(
              "heroSubtitle",
              "Pujokusuman Culture Village - A place where history and culture live together."
            )}
          </p>
        </div>
        <div className="footer-section">
          <h4>{t("footerMenu", "Menu")}</h4>
          <ul>
            <li>
              <Link to="/">{t("navHome", "Home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("navAbout", "About")}</Link>
            </li>
            <li>
              <Link to="/culture">{t("navCulture", "Culture")}</Link>
            </li>
            <li>
              <Link to="/gallery">{t("navGallery", "Gallery")}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t("footerContact", "Contact")}</h4>
          <ul>
            <li>
              <strong>{t("address")}</strong>
              <p>{t("contact.address")}</p>
            </li>
            <li>
              <strong>{t("phone")}</strong>
              <p>{t("contact.phone")}</p>
            </li>
            <li>
              <strong>{t("email")}</strong>
              <p>{t("contact.email")}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {t("siteName")}.{" "}
          {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
