import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import id from "./translations/id.json";
import en from "./translations/en.json";

i18n.use(initReactI18next).init({
  resources: {
    id: { translation: id },
    en: { translation: en },
  },
  lng: "id", // default language
  fallbackLng: "id",
  interpolation: { escapeValue: false },
});

export default i18n;
