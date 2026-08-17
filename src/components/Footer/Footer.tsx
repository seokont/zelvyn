import { ArrowRight } from "lucide-react";
import { trackEvent } from "../../utils/analytics";

export function Footer() {
  return (
    <>
      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="container">
          <div className="final-cta__card">
            <span className="final-cta__ring final-cta__ring--one" aria-hidden="true" />
            <span className="final-cta__ring final-cta__ring--two" aria-hidden="true" />
            <div>
              <span className="section-label section-label--light">Почни з малого</span>
              <h2 id="final-cta-title">Почни краще розуміти свій цукор</h2>
              <p>
                Кілька хвилин на день сьогодні можуть допомогти тобі побачити
                закономірності завтра.
              </p>
            </div>
            <a
              className="button button--light"
              href="#early-access"
              onClick={() =>
                trackEvent("hero_cta_click", { placement: "final_cta" })
              }
            >
              Почати безкоштовно <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__top">
            <div>
              <a className="brand brand--footer" href="#top" aria-label="Zelvyn — на головну">
                <span className="brand__mark" aria-hidden="true">
                  <span /><span /><span />
                </span>
                <span>Zelvyn</span>
              </a>
              <p>Зрозумій свій цукор.</p>
            </div>
            <nav aria-label="Юридична інформація">
              <a href="#privacy">Конфіденційність</a>
              <a href="#terms">Умови</a>
              <a href="#medical-disclaimer">Медичне застереження</a>
              <a href="mailto:hello@zelvyn.app">Контакти</a>
            </nav>
          </div>

          <div className="site-footer__legal">
            <p id="privacy">
              <strong>Конфіденційність:</strong> демоформа раннього доступу не надсилає
              введені дані назовні.
            </p>
            <p id="terms">
              <strong>Умови:</strong> продукт перебуває на стадії раннього
              тестування; показані можливості є концептом.
            </p>
          </div>

          <div className="site-footer__bottom">
            <p>© 2026 Zelvyn. Продукт перебуває на стадії раннього тестування.</p>
            <span>Створено з увагою до людини та її даних</span>
          </div>
        </div>
      </footer>
    </>
  );
}
