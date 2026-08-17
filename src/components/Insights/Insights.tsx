import { Check, Info, Lightbulb, MoonStar, Utensils } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const days = [
  { late: true, match: true },
  { late: true, match: true },
  { late: false, match: false },
  { late: true, match: true },
  { late: true, match: false },
  { late: true, match: true },
  { late: true, match: true },
  { late: false, match: false },
  { late: true, match: true },
  { late: true, match: true },
];

export function Insights() {
  const { copy } = useLanguage();
  const text = copy.insights;

  return (
    <section className="section insights" id="insights" aria-labelledby="insights-title">
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="section-label">{text.label}</span>
          <h2 id="insights-title">
            {text.title}<br /> <em>{text.titleAccent}</em>
          </h2>
          <p>{text.intro}</p>
        </div>

        <article className="insight-card">
          <div className="insight-card__content">
            <div className="insight-card__badge">
              <Lightbulb aria-hidden="true" />
              {text.badge}
            </div>
            <span className="insight-card__period">{text.period}</span>
            <h3>{text.statement}</h3>

            <div className="insight-stats">
              <div>
                <span>10</span>
                <p>{text.similarDays}</p>
              </div>
              <span className="insight-stats__divider" />
              <div>
                <span>7</span>
                <p>{text.matches}</p>
              </div>
            </div>

            <p className="insight-card__disclaimer">
              <Info aria-hidden="true" />
              {text.disclaimer}
            </p>
          </div>

          <div className="pattern-panel" aria-label={text.patternAria}>
            <div className="pattern-panel__header">
              <div>
                <span>{text.similarSequence}</span>
                <strong>{text.sequenceTitle}</strong>
              </div>
              <span className="pattern-panel__score">7 / 10</span>
            </div>

            <div className="pattern-flow">
              <div className="pattern-node">
                <span className="pattern-node__icon pattern-node__icon--peach">
                  <Utensils aria-hidden="true" />
                </span>
                <span>
                  <small>{text.dinner}</small>
                  <strong>{text.afterNine}</strong>
                </span>
              </div>
              <span className="pattern-flow__line" aria-hidden="true" />
              <div className="pattern-node">
                <span className="pattern-node__icon pattern-node__icon--green">
                  <MoonStar aria-hidden="true" />
                </span>
                <span>
                  <small>{text.morning}</small>
                  <strong>{text.aboveAverage}</strong>
                </span>
              </div>
            </div>

            <div className="day-patterns">
              {days.map((day, index) => (
                <div className="day-pattern" key={`${text.dayLabels[index]}-${index}`}>
                  <span>{text.dayLabels[index]}</span>
                  <span
                    className={`day-pattern__bar${
                      day.late ? " day-pattern__bar--late" : ""
                    }`}
                  >
                    {day.match && <Check aria-label={text.matchAria} />}
                  </span>
                </div>
              ))}
            </div>
            <div className="pattern-legend">
              <span>
                <i className="pattern-legend__late" /> {text.lateDinner}
              </span>
              <span>
                <i className="pattern-legend__match" /> {text.morningMatch}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
