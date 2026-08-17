import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { trackEvent } from "../../utils/analytics";

const navigation = [
  { label: "Як це працює", href: "#how-it-works" },
  { label: "Можливості", href: "#insights" },
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
        <a className="brand" href="#top" aria-label="Zelvyn — на головну">
          <span className="brand__mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Zelvyn</span>
        </a>

        <nav className="desktop-nav" aria-label="Основна навігація">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button--small desktop-cta" href="#early-access">
          Спробувати безкоштовно
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
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
        aria-label="Мобільна навігація"
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
            Спробувати безкоштовно
          </a>
        </div>
      </nav>
    </header>
  );
}
