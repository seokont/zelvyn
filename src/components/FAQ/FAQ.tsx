import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "../../utils/analytics";

const questions = [
  {
    question: "Для кого Zelvyn?",
    answer:
      "Для людей с диабетом 2 типа, которые хотят отслеживать глюкозу и связанные с ней факторы.",
  },
  {
    question: "Нужно ли менять лечение?",
    answer: "Нет. Zelvyn не назначает и не изменяет лечение.",
  },
  {
    question: "Бесплатно ли приложение?",
    answer:
      "На этапе раннего доступа базовые функции предоставляются бесплатно.",
  },
  {
    question: "Будет ли мобильное приложение?",
    answer:
      "Да, мобильная версия планируется после проверки первой версии продукта.",
  },
  {
    question: "Можно ли подключить глюкометр?",
    answer:
      "Интеграции с устройствами планируются на следующих этапах. В первой версии данные будут добавляться вручную.",
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
          <h2 id="faq-title">Частые вопросы</h2>
          <p>
            Не нашёл ответ? Напиши нам — мы собираем вопросы, чтобы сделать
            Zelvyn понятнее ещё до запуска.
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
