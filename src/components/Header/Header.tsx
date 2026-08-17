import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { trackEvent } from "../../utils/analytics";

const navigation = [
  { label: "Как работает", href: "#how-it-works" },
  { label: "Возможности", href: "#insights" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="GlucoTrack — на главную">
          <span className="brand__mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>GlucoTrack</span>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button--small desktop-cta" href="#early-access">
          Попробовать бесплатно
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${isOpen ? " mobile-nav--open" : ""}`}
        aria-label="Мобильная навигация"
        aria-hidden={!isOpen}
      >
        <div className="container mobile-nav__inner">
          {navigation.map((item) => (
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
            Попробовать бесплатно
          </a>
        </div>
      </nav>
    </header>
  );
}
