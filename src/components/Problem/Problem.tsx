import { Activity, Clock3, Moon, Utensils } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const factors = [
  {
    icon: Utensils,
    tone: "peach",
  },
  {
    icon: Moon,
    tone: "lavender",
  },
  {
    icon: Activity,
    tone: "green",
  },
  {
    icon: Clock3,
    tone: "yellow",
  },
];

export function Problem() {
  const { copy } = useLanguage();
  const text = copy.problem;

  return (
    <section className="section problem" aria-labelledby="problem-title">
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="section-label">{text.label}</span>
          <h2 id="problem-title">
            {text.title} <em>{text.titleAccent}</em>
          </h2>
          <p>{text.intro}</p>
        </div>

        <div className="factor-grid">
          {factors.map(({ icon: Icon, tone }, index) => (
            <article className="factor-card" key={text.factors[index].title}>
              <span className={`factor-card__icon factor-card__icon--${tone}`}>
                <Icon aria-hidden="true" />
              </span>
              <h3>{text.factors[index].title}</h3>
              <p>{text.factors[index].text}</p>
            </article>
          ))}
        </div>

        <div className="context-callout">
          <span className="context-callout__mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <p>
            {text.callout} <strong>{text.calloutStrong}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
