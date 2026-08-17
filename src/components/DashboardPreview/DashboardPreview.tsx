import { Activity, BedDouble, Droplet, TrendingUp, Utensils } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const metrics = [
  {
    icon: Droplet,
    tone: "green",
  },
  {
    icon: Utensils,
    tone: "peach",
  },
  {
    icon: Activity,
    tone: "blue",
  },
  {
    icon: BedDouble,
    tone: "lavender",
  },
];

export function DashboardPreview() {
  const { copy } = useLanguage();
  const text = copy.dashboard;

  return (
    <section className="section dashboard-preview" aria-labelledby="dashboard-title">
      <div className="container">
        <div className="dashboard-preview__heading">
          <div className="section-intro">
            <span className="section-label">{text.label}</span>
            <h2 id="dashboard-title">{text.title}</h2>
          </div>
          <div className="dashboard-preview__summary">
            <TrendingUp aria-hidden="true" />
            <span>
              <strong>{text.summaryTitle}</strong>
              <small>{text.summaryText}</small>
            </span>
          </div>
        </div>

        <div className="metric-grid">
          {metrics.map(({ icon: Icon, tone }, index) => {
            const metric = text.metrics[index];

            return (
            <article className={`metric-card metric-card--${tone}`} key={metric.label}>
              <div className="metric-card__top">
                <span className="metric-card__icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="metric-card__trend">
                  {index === 0 ? text.today : text.day}
                </span>
              </div>
              <p>{metric.label}</p>
              <strong>
                {metric.value} <small>{metric.unit}</small>
              </strong>
              <span className="metric-card__note">{metric.note}</span>
              <span className="metric-card__spark" aria-hidden="true">
                {[30, 48, 36, 62, 52, 75, 66, 85].map((height, barIndex) => (
                  <i key={barIndex} style={{ height: `${height}%` }} />
                ))}
              </span>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
