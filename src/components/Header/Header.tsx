import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Language, useLanguage } from "../../i18n/LanguageContext";
import { trackEvent } from "../../utils/analytics";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, copy } = useLanguage();
  const { header } = copy;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    trackEvent("language_change", { language: nextLanguage });
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label={header.brandHome}>
          <span className="brand__mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Zelvyn</span>
        </a>

        <nav className="desktop-nav" aria-label={header.navLabel}>
          {header.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <div className="language-switch" role="group" aria-label={header.languageLabel}>
            {(["uk", "en", "he"] as const).map((item) => (
              <button
                key={item}
                type="button"
                lang={item}
                aria-pressed={language === item}
                onClick={() => changeLanguage(item)}
              >
                {item === "uk" ? "UA" : item === "he" ? "HE" : "EN"}
              </button>
            ))}
          </div>

          <a className="button button--small desktop-cta" href="#early-access">
            {header.cta}
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={isOpen ? header.closeMenu : header.openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${isOpen ? " mobile-nav--open" : ""}`}
        aria-label={header.mobileNavLabel}
        aria-hidden={!isOpen}
      >
        <div className="container mobile-nav__inner">
          {header.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="button"
            href="#early-access"
            onClick={() => {
              trackEvent("hero_cta_click", { placement: "mobile_menu" });
              closeMenu();
            }}
          >
            {header.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
