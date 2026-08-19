import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations } from "./translations";

export type Language = keyof typeof translations;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const supportedLanguages: Language[] = ["uk", "en", "he"];

function isLanguage(value: string | null): value is Language {
  return supportedLanguages.includes(value as Language);
}

function getInitialLanguage(): Language {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(queryLanguage)) return queryLanguage;

  const storedLanguage = window.localStorage.getItem("zelvyn-language");
  return isLanguage(storedLanguage) ? storedLanguage : "uk";
}

function updateMeta(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = translations[language];

  useEffect(() => {
    window.localStorage.setItem("zelvyn-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "he" ? "rtl" : "ltr";

    const url = new URL(window.location.href);
    if (language === "uk") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", language);
    }
    window.history.replaceState({}, "", url);

    document.title = copy.meta.title;
    updateMeta('meta[name="description"]', copy.meta.description);
    updateMeta(
      'meta[property="og:locale"]',
      language === "uk" ? "uk_UA" : language === "he" ? "he_IL" : "en_US",
    );
    updateMeta('meta[property="og:title"]', copy.meta.title);
    updateMeta('meta[property="og:description"]', copy.meta.description);
    updateMeta('meta[name="twitter:title"]', copy.meta.title);
    updateMeta('meta[name="twitter:description"]', copy.meta.shortDescription);
  }, [copy, language]);

  const value = useMemo(
    () => ({ language, setLanguage, copy }),
    [copy, language],
  );

  return (
    <LanguageContext.Provider value={value}>
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
