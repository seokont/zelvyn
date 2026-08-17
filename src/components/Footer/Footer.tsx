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
              <span className="section-label section-label--light">Начни с малого</span>
              <h2 id="final-cta-title">Начни лучше понимать свой сахар</h2>
              <p>
                Несколько минут в день сегодня могут помочь тебе увидеть
                закономерности завтра.
              </p>
            </div>
            <a
              className="button button--light"
              href="#early-access"
              onClick={() =>
                trackEvent("hero_cta_click", { placement: "final_cta" })
              }
            >
              Начать бесплатно <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__top">
            <div>
              <a className="brand brand--footer" href="#top" aria-label="GlucoTrack — на главную">
                <span className="brand__mark" aria-hidden="true">
                  <span /><span /><span />
                </span>
                <span>GlucoTrack</span>
              </a>
              <p>Пойми свой сахар.</p>
            </div>
            <nav aria-label="Юридическая информация">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#medical-disclaimer">Medical Disclaimer</a>
              <a href="mailto:hello@glucotrack.app">Contact</a>
            </nav>
          </div>

          <div className="site-footer__legal">
            <p id="privacy">
              <strong>Privacy:</strong> демо-форма раннего доступа не отправляет
              введённые данные наружу.
            </p>
            <p id="terms">
              <strong>Terms:</strong> продукт находится на стадии раннего
              тестирования; показанные возможности являются концептом.
            </p>
          </div>

          <div className="site-footer__bottom">
            <p>© 2026 GlucoTrack. Продукт находится на стадии раннего тестирования.</p>
            <span>Создано с вниманием к человеку и его данным</span>
          </div>
        </div>
      </footer>
    </>
  );
}
