import { Activity, BedDouble, Droplet, TrendingUp, Utensils } from "lucide-react";

const metrics = [
  {
    icon: Droplet,
    label: "Глюкоза",
    value: "7.8",
    unit: "mmol/L",
    note: "Последний показатель",
    tone: "green",
  },
  {
    icon: Utensils,
    label: "Питание",
    value: "3",
    unit: "приёма",
    note: "Сегодня",
    tone: "peach",
  },
  {
    icon: Activity,
    label: "Активность",
    value: "6 421",
    unit: "шаг",
    note: "67% дневной цели",
    tone: "blue",
  },
  {
    icon: BedDouble,
    label: "Сон",
    value: "7ч 20м",
    unit: "",
    note: "Прошлой ночью",
    tone: "lavender",
  },
];

export function DashboardPreview() {
  return (
    <section className="section dashboard-preview" aria-labelledby="dashboard-title">
      <div className="container">
        <div className="dashboard-preview__heading">
          <div className="section-intro">
            <span className="section-label">Данные дня</span>
            <h2 id="dashboard-title">Вся картина в одном месте</h2>
          </div>
          <div className="dashboard-preview__summary">
            <TrendingUp aria-hidden="true" />
            <span>
              <strong>Спокойно и наглядно</strong>
              <small>без перегруженных таблиц</small>
            </span>
          </div>
        </div>

        <div className="metric-grid">
          {metrics.map(({ icon: Icon, label, value, unit, note, tone }, index) => (
            <article className={`metric-card metric-card--${tone}`} key={label}>
              <div className="metric-card__top">
                <span className="metric-card__icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="metric-card__trend">
                  {index === 0 ? "Сегодня" : "За день"}
                </span>
              </div>
              <p>{label}</p>
              <strong>
                {value} <small>{unit}</small>
              </strong>
              <span className="metric-card__note">{note}</span>
              <span className="metric-card__spark" aria-hidden="true">
                {[30, 48, 36, 62, 52, 75, 66, 85].map((height, barIndex) => (
                  <i key={barIndex} style={{ height: `${height}%` }} />
                ))}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
