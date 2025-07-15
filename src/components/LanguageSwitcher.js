import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="language-switcher">
      <button
        className="language-btn"
        aria-label="Switch Language"
        onClick={() => i18n.changeLanguage(language === "id" ? "en" : "id")}
      >
        <span
          className={language === "id" ? "active" : ""}
          onClick={(e) => {
            e.stopPropagation();
            i18n.changeLanguage("id");
          }}
        >
          ID
        </span>
        <span className="separator">|</span>
        <span
          className={language === "en" ? "active" : ""}
          onClick={(e) => {
            e.stopPropagation();
            i18n.changeLanguage("en");
          }}
        >
          EN
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
