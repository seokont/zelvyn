import { Check, Info, Lightbulb, MoonStar, Utensils } from "lucide-react";

const days = [
  { label: "Пн", late: true, match: true },
  { label: "Вт", late: true, match: true },
  { label: "Ср", late: false, match: false },
  { label: "Чт", late: true, match: true },
  { label: "Пт", late: true, match: false },
  { label: "Сб", late: true, match: true },
  { label: "Нд", late: true, match: true },
  { label: "Пн", late: false, match: false },
  { label: "Вт", late: true, match: true },
  { label: "Ср", late: true, match: true },
];

export function Insights() {
  return (
    <section className="section insights" id="insights" aria-labelledby="insights-title">
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="section-label">Персональні спостереження</span>
          <h2 id="insights-title">
            Не просто щоденник.<br /> <em>Зв’язки у твоїх даних.</em>
          </h2>
          <p>
            Що більше контексту ти додаєш, то зрозумілішою стає твоя
            власна історія.
          </p>
        </div>

        <article className="insight-card">
          <div className="insight-card__content">
            <div className="insight-card__badge">
              <Lightbulb aria-hidden="true" />
              Нове спостереження
            </div>
            <span className="insight-card__period">За останні 30 днів</span>
            <h3>
              У 7 із 10 випадків, коли ти вечеряв після 21:00, ранкова глюкоза
              була вищою за твоє середнє значення.
            </h3>

            <div className="insight-stats">
              <div>
                <span>10</span>
                <p>подібних днів</p>
              </div>
              <span className="insight-stats__divider" />
              <div>
                <span>7</span>
                <p>збігів</p>
              </div>
            </div>

            <p className="insight-card__disclaimer">
              <Info aria-hidden="true" />
              Спостереження ґрунтуються на даних користувача та не є
              медичними рекомендаціями.
            </p>
          </div>

          <div className="pattern-panel" aria-label="Демонстрація знайденої закономірності">
            <div className="pattern-panel__header">
              <div>
                <span>Подібна послідовність</span>
                <strong>Пізня вечеря → ранок</strong>
              </div>
              <span className="pattern-panel__score">7 / 10</span>
            </div>

            <div className="pattern-flow">
              <div className="pattern-node">
                <span className="pattern-node__icon pattern-node__icon--peach">
                  <Utensils aria-hidden="true" />
                </span>
                <span>
                  <small>Вечеря</small>
                  <strong>після 21:00</strong>
                </span>
              </div>
              <span className="pattern-flow__line" aria-hidden="true" />
              <div className="pattern-node">
                <span className="pattern-node__icon pattern-node__icon--green">
                  <MoonStar aria-hidden="true" />
                </span>
                <span>
                  <small>Ранок</small>
                  <strong>вище середнього</strong>
                </span>
              </div>
            </div>

            <div className="day-patterns">
              {days.map((day, index) => (
                <div className="day-pattern" key={`${day.label}-${index}`}>
                  <span>{day.label}</span>
                  <span
                    className={`day-pattern__bar${
                      day.late ? " day-pattern__bar--late" : ""
                    }`}
                  >
                    {day.match && <Check aria-label="Збіг" />}
                  </span>
                </div>
              ))}
            </div>
            <div className="pattern-legend">
              <span>
                <i className="pattern-legend__late" /> Пізня вечеря
              </span>
              <span>
                <i className="pattern-legend__match" /> Збіг уранці
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
