import { Activity, Sparkles, Utensils } from "lucide-react";

const moments = [
  {
    className: "lifestyle-card--cooking",
    image: "/images/cooking-together.jpg",
    alt: "Жінка готує свіжу їжу на світлій кухні",
    eyebrow: "Харчування",
    title: "Їж без зайвої тривоги",
    description: "Зберігай контекст страви, а не намагайся зробити день ідеальним.",
    icon: Utensils,
    credit: "Фото: Jason Briscoe",
    source: "https://unsplash.com/photos/woman-smiling-while-cooking-GrdJp16CPk8",
  },
  {
    className: "lifestyle-card--activity",
    image: "/images/active-day.jpg",
    alt: "Дві подруги з килимками для йоги прогулюються парком",
    eyebrow: "Активність",
    title: "Рухайся у своєму темпі",
    description: "Навіть звичайна прогулянка стає корисною частиною твоєї історії.",
    icon: Activity,
    credit: "Фото: Vitaly Gariev",
    source: "https://unsplash.com/photos/two-women-holding-yoga-mats-walking-in-a-park-FGxNwCVyIj4",
  },
  {
    className: "lifestyle-card--meal",
    image: "/images/balanced-meal.jpg",
    alt: "Збалансована страва з рисом, куркою та свіжими овочами",
    eyebrow: "Контекст",
    title: "Дивись на день цілісно",
    description: "Сон, рух і харчування — поруч із показником, а не в окремих таблицях.",
    icon: Sparkles,
    credit: "Фото: joe boshra",
    source: "https://unsplash.com/photos/healthy-chicken-and-rice-bowl-with-fresh-vegetables-tB2MPTiSrsg",
  },
];

export function LifestyleGallery() {
  return (
    <section className="section lifestyle" aria-labelledby="lifestyle-title">
      <div className="lifestyle__wash lifestyle__wash--one" aria-hidden="true" />
      <div className="lifestyle__wash lifestyle__wash--two" aria-hidden="true" />
      <div className="container lifestyle__inner">
        <div className="section-intro lifestyle__intro">
          <span className="section-label">Життя, а не таблиці</span>
          <h2 id="lifestyle-title">
            Помічай закономірності у <em>звичайних моментах</em>
          </h2>
          <p>
            Їжа, рух і відпочинок — важливий контекст живе у твоєму дні. Zelvyn
            допомагає зібрати його разом і побачити зрозумілу картину.
          </p>
        </div>

        <div className="lifestyle-grid">
          {moments.map((moment) => {
            const Icon = moment.icon;

            return (
              <article className={`lifestyle-card ${moment.className}`} key={moment.title}>
                <img src={moment.image} alt={moment.alt} loading="lazy" />
                <div className="lifestyle-card__scrim" aria-hidden="true" />
                <div className="lifestyle-card__content">
                  <span className="lifestyle-card__tag">
                    <Icon aria-hidden="true" />
                    {moment.eyebrow}
                  </span>
                  <h3>{moment.title}</h3>
                  <p>{moment.description}</p>
                  <a href={moment.source} target="_blank" rel="noreferrer">
                    {moment.credit}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
