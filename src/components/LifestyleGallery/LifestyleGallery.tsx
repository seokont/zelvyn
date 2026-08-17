import { Activity, Sparkles, Utensils } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const moments = [
  {
    className: "lifestyle-card--cooking",
    image: "/images/cooking-together.jpg",
    icon: Utensils,
  },
  {
    className: "lifestyle-card--activity",
    image: "/images/active-day.jpg",
    icon: Activity,
  },
  {
    className: "lifestyle-card--meal",
    image: "/images/balanced-meal.jpg",
    icon: Sparkles,
  },
];

export function LifestyleGallery() {
  const { copy } = useLanguage();
  const text = copy.lifestyle;

  return (
    <section className="section lifestyle" aria-labelledby="lifestyle-title">
      <div
        className="lifestyle__wash lifestyle__wash--one"
        aria-hidden="true"
      />
      <div
        className="lifestyle__wash lifestyle__wash--two"
        aria-hidden="true"
      />
      <div className="container lifestyle__inner">
        <div className="section-intro lifestyle__intro">
          <span className="section-label">{text.label}</span>
          <h2 id="lifestyle-title">
            {text.title} <em>{text.titleAccent}</em>
          </h2>
          <p>{text.intro}</p>
        </div>

        <div className="lifestyle-grid">
          {moments.map((moment, index) => {
            const Icon = moment.icon;
            const content = text.moments[index];

            return (
              <article
                className={`lifestyle-card ${moment.className}`}
                key={content.title}
              >
                <img src={moment.image} alt={content.alt} loading="lazy" />
                <div className="lifestyle-card__scrim" aria-hidden="true" />
                <div className="lifestyle-card__content">
                  <span className="lifestyle-card__tag">
                    <Icon aria-hidden="true" />
                    {content.eyebrow}
                  </span>
                  <h3>{content.title}</h3>
                  <p>{content.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
