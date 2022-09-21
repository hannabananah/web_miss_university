import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ko from "./ko/trans.json";
import en from "./en/trans.json";

i18n.use(initReactI18next).init({
  // fallbackLng: "ko",
  debug: true,
  lng: "en",
  resources: {
    en: {
      lang: en,
    },
    ko: {
      lang: ko,
    },
  },
  ns: ["lang"],

  interpolation: {
    escapeValue: false,
  },
});
export default i18n;