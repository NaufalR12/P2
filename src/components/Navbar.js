import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {t("siteName")}
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              {t("navHome")}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              {t("navAbout")}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/culture"
              className={`nav-link ${
                location.pathname === "/culture" ? "active" : ""
              }`}
            >
              {t("navCulture")}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/galeri"
              className={`nav-link ${
                location.pathname === "/galeri" ? "active" : ""
              }`}
            >
              {t("navGallery")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
