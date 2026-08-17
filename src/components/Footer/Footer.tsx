import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import { trackEvent } from "../../utils/analytics";

export function Footer() {
  const { copy } = useLanguage();
  const text = copy.footer;

  return (
    <>
      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="container">
          <div className="final-cta__card">
            <span className="final-cta__ring final-cta__ring--one" aria-hidden="true" />
            <span className="final-cta__ring final-cta__ring--two" aria-hidden="true" />
            <div>
              <span className="section-label section-label--light">{text.label}</span>
              <h2 id="final-cta-title">{text.title}</h2>
              <p>{text.intro}</p>
            </div>
            <a
              className="button button--light"
              href="#early-access"
              onClick={() =>
                trackEvent("hero_cta_click", { placement: "final_cta" })
              }
            >
              {text.cta} <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__top">
            <div>
              <a className="brand brand--footer" href="#top" aria-label={copy.header.brandHome}>
                <span className="brand__mark" aria-hidden="true">
                  <span /><span /><span />
                </span>
                <span>Zelvyn</span>
              </a>
              <p>{text.tagline}</p>
            </div>
            <nav aria-label={text.legalNav}>
              <a href="#privacy">{text.privacy}</a>
              <a href="#terms">{text.terms}</a>
              <a href="#medical-disclaimer">{text.medical}</a>
              <a href="mailto:hello@zelvyn.app">{text.contacts}</a>
            </nav>
          </div>

          <div className="site-footer__legal">
            <p id="privacy">
              <strong>{text.privacy}:</strong> {text.privacyText}
            </p>
            <p id="terms">
              <strong>{text.terms}:</strong> {text.termsText}
            </p>
          </div>

          <div className="site-footer__bottom">
            <p>{text.copyright}</p>
            <span>{text.madeWith}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
