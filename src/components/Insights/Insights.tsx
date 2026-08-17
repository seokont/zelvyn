import { Check, Info, Lightbulb, MoonStar, Utensils } from "lucide-react";

const days = [
  { label: "Пн", late: true, match: true },
  { label: "Вт", late: true, match: true },
  { label: "Ср", late: false, match: false },
  { label: "Чт", late: true, match: true },
  { label: "Пт", late: true, match: false },
  { label: "Сб", late: true, match: true },
  { label: "Вс", late: true, match: true },
  { label: "Пн", late: false, match: false },
  { label: "Вт", late: true, match: true },
  { label: "Ср", late: true, match: true },
];

export function Insights() {
  return (
    <section className="section insights" id="insights" aria-labelledby="insights-title">
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="section-label">Персональные наблюдения</span>
          <h2 id="insights-title">
            Не просто дневник.<br /> <em>Связи в твоих данных.</em>
          </h2>
          <p>
            Чем больше контекста ты добавляешь, тем понятнее становится твоя
            собственная история.
          </p>
        </div>

        <article className="insight-card">
          <div className="insight-card__content">
            <div className="insight-card__badge">
              <Lightbulb aria-hidden="true" />
              Новое наблюдение
            </div>
            <span className="insight-card__period">За последние 30 дней</span>
            <h3>
              В 7 из 10 случаев, когда ты ужинал после 21:00, утренняя глюкоза
              была выше твоего среднего значения.
            </h3>

            <div className="insight-stats">
              <div>
                <span>10</span>
                <p>похожих дней</p>
              </div>
              <span className="insight-stats__divider" />
              <div>
                <span>7</span>
                <p>совпадений</p>
              </div>
            </div>

            <p className="insight-card__disclaimer">
              <Info aria-hidden="true" />
              Наблюдения основаны на данных пользователя и не являются
              медицинскими рекомендациями.
            </p>
          </div>

          <div className="pattern-panel" aria-label="Демонстрация найденной закономерности">
            <div className="pattern-panel__header">
              <div>
                <span>Похожая последовательность</span>
                <strong>Поздний ужин → утро</strong>
              </div>
              <span className="pattern-panel__score">7 / 10</span>
            </div>

            <div className="pattern-flow">
              <div className="pattern-node">
                <span className="pattern-node__icon pattern-node__icon--peach">
                  <Utensils aria-hidden="true" />
                </span>
                <span>
                  <small>Ужин</small>
                  <strong>после 21:00</strong>
                </span>
              </div>
              <span className="pattern-flow__line" aria-hidden="true" />
              <div className="pattern-node">
                <span className="pattern-node__icon pattern-node__icon--green">
                  <MoonStar aria-hidden="true" />
                </span>
                <span>
                  <small>Утро</small>
                  <strong>выше среднего</strong>
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
                    {day.match && <Check aria-label="Совпадение" />}
                  </span>
                </div>
              ))}
            </div>
            <div className="pattern-legend">
              <span>
                <i className="pattern-legend__late" /> Поздний ужин
              </span>
              <span>
                <i className="pattern-legend__match" /> Совпадение утром
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
