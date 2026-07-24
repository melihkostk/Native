import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "./locales/de";
import en from "./locales/en";
import tr from "./locales/tr";

const lng = getLocales()[0]?.languageCode ?? "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      tr,
      de,
    },
    lng,
    fallbackLng: "en",
    supportedLngs: ["en", "tr", "de"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;