import { ClipboardPenLine, ScanSearch, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardPenLine,
    title: "Записуй",
    text: "Додай показник глюкози та кілька деталей про свій день.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Живи звичайним життям",
    text: "Відмічай харчування, сон і активність без потреби змінювати звичний розпорядок.",
  },
  {
    number: "03",
    icon: ScanSearch,
    title: "Знаходь закономірності",
    text: "Застосунок аналізує твою історію та показує повторювані патерни.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="section section--soft how-it-works"
      id="how-it-works"
      aria-labelledby="how-title"
    >
      <div className="container">
        <div className="section-intro">
          <span className="section-label">Як це працює</span>
          <h2 id="how-title">Три кроки до зрозумілішої картини</h2>
        </div>

        <div className="steps-grid">
          {steps.map(({ number, icon: Icon, title, text }, index) => (
            <article className="step-card" key={number}>
              {index < steps.length - 1 && (
                <span className="step-card__connector" aria-hidden="true" />
              )}
              <div className="step-card__top">
                <span className="step-card__number">{number}</span>
                <span className="step-card__icon">
                  <Icon aria-hidden="true" />
                </span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
