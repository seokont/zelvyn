import { Activity, Clock3, Moon, Utensils } from "lucide-react";

const factors = [
  {
    icon: Utensils,
    title: "Питание",
    text: "Состав блюда и размер порции",
    tone: "peach",
  },
  {
    icon: Moon,
    title: "Сон",
    text: "Продолжительность и качество",
    tone: "lavender",
  },
  {
    icon: Activity,
    title: "Активность",
    text: "Движение в течение дня",
    tone: "green",
  },
  {
    icon: Clock3,
    title: "Время приёма пищи",
    text: "Когда был завтрак или ужин",
    tone: "yellow",
  },
];

export function Problem() {
  return (
    <section className="section problem" aria-labelledby="problem-title">
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="section-label">Показатель — это только начало</span>
          <h2 id="problem-title">
            Ты видишь цифру. Но понимаешь ли ты <em>почему?</em>
          </h2>
          <p>
            Сегодня утром глюкоза 7.8. Вчера было 6.4. Что изменилось?
            Ответ может быть в контексте твоего дня.
          </p>
        </div>

        <div className="factor-grid">
          {factors.map(({ icon: Icon, title, text, tone }) => (
            <article className="factor-card" key={title}>
              <span className={`factor-card__icon factor-card__icon--${tone}`}>
                <Icon aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
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
            Zelvyn помогает собрать эти данные <strong>в одну картину.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
