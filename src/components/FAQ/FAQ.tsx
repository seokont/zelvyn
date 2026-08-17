import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { trackEvent } from "../../utils/analytics";

export function FAQ() {
  const { copy } = useLanguage();
  const text = copy.faq;
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    const isOpening = openItem !== index;
    setOpenItem(isOpening ? index : null);
    if (isOpening) {
      trackEvent("faq_open", { question_index: index + 1 });
    }
  };

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq__layout">
        <div className="section-intro faq__intro">
          <span className="section-label">FAQ</span>
          <h2 id="faq-title">{text.title}</h2>
          <p>{text.intro}</p>
          <a href="mailto:seokont@gmail.com">hello@zelvyn.app</a>
        </div>

        <div className="accordion">
          {text.questions.map(({ question, answer }, index) => {
            const isOpen = openItem === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article
                className={`accordion__item${isOpen ? " accordion__item--open" : ""}`}
                key={question}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                  >
                    <span>{question}</span>
                    <ChevronDown aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="accordion__panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
