import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "../../utils/analytics";

const questions = [
  {
    question: "Для кого Zelvyn?",
    answer:
      "Для людей із діабетом 2 типу, які хочуть відстежувати глюкозу та пов’язані з нею фактори.",
  },
  {
    question: "Чи потрібно змінювати лікування?",
    answer: "Ні. Zelvyn не призначає й не змінює лікування.",
  },
  {
    question: "Чи безкоштовний застосунок?",
    answer:
      "На етапі раннього доступу базові функції надаються безкоштовно.",
  },
  {
    question: "Чи буде мобільний застосунок?",
    answer:
      "Так, мобільна версія планується після перевірки першої версії продукту.",
  },
  {
    question: "Чи можна підключити глюкометр?",
    answer:
      "Інтеграції з пристроями плануються на наступних етапах. У першій версії дані додаватимуться вручну.",
  },
];

export function FAQ() {
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
          <h2 id="faq-title">Часті запитання</h2>
          <p>
            Не знаходиш відповіді? Напиши нам — ми збираємо запитання, щоб зробити
            Zelvyn зрозумілішим ще до запуску.
          </p>
          <a href="mailto:hello@zelvyn.app">hello@zelvyn.app</a>
        </div>

        <div className="accordion">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openItem === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article className={`accordion__item${isOpen ? " accordion__item--open" : ""}`} key={question}>
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
