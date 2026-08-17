import { ClipboardPenLine, ScanSearch, Sparkles } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const steps = [
  {
    number: "01",
    icon: ClipboardPenLine,
  },
  {
    number: "02",
    icon: Sparkles,
  },
  {
    number: "03",
    icon: ScanSearch,
  },
];

export function HowItWorks() {
  const { copy } = useLanguage();
  const text = copy.how;

  return (
    <section
      className="section section--soft how-it-works"
      id="how-it-works"
      aria-labelledby="how-title"
    >
      <div className="container">
        <div className="section-intro">
          <span className="section-label">{text.label}</span>
          <h2 id="how-title">{text.title}</h2>
        </div>

        <div className="steps-grid">
          {steps.map(({ number, icon: Icon }, index) => (
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
              <h3>{text.steps[index].title}</h3>
              <p>{text.steps[index].text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
