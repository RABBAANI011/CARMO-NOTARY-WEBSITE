import { createContext, useContext, useState } from "react";
import translations from "../translations/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "en" ? "so" : "en"
    );
  };

  const t = (key) => {
    const keys = key.split(".");

    let value = translations[language];

    for (const item of keys) {
      value = value?.[item];
    }

    // Haddii translation-ka la waayo,
    // English-ka ayaa fallback noqonaya.
    if (value === undefined) {
      let fallback = translations.en;

      for (const item of keys) {
        fallback = fallback?.[item];
      }

      return fallback ?? key;
    }

    return value;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}