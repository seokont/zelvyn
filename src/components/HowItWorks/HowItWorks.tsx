import { ClipboardPenLine, ScanSearch, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardPenLine,
    title: "Записывай",
    text: "Добавь показатель глюкозы и несколько деталей о своём дне.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Живи обычной жизнью",
    text: "Отмечай питание, сон и активность без необходимости менять привычный распорядок.",
  },
  {
    number: "03",
    icon: ScanSearch,
    title: "Находи закономерности",
    text: "Приложение анализирует твою историю и показывает повторяющиеся паттерны.",
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
          <span className="section-label">Как это работает</span>
          <h2 id="how-title">Три шага до более понятной картины</h2>
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
