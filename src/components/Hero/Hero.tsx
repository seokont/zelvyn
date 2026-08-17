import {
  Activity,
  ArrowDown,
  ArrowRight,
  BedDouble,
  Droplet,
  Lightbulb,
  Sparkles,
  Sun,
  Utensils,
} from "lucide-react";
import { trackEvent } from "../../utils/analytics";

const chartSegments = [
  { left: "1%", top: "56%", width: "15%", rotate: -12 },
  { left: "15%", top: "48%", width: "15%", rotate: -25 },
  { left: "28%", top: "42%", width: "16%", rotate: 17 },
  { left: "42%", top: "44%", width: "16%", rotate: -31 },
  { left: "56%", top: "32%", width: "15%", rotate: 19 },
  { left: "69%", top: "34%", width: "16%", rotate: -17 },
  { left: "83%", top: "26%", width: "15%", rotate: 9 },
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <div className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Щоденник, який бачить зв’язки
          </div>
          <h1>
            Зрозумій, що впливає<br /> на твій <em>цукор</em>
          </h1>
          <p className="hero__lead">
            Записуй глюкозу, харчування, активність і сон. Zelvyn допомагає
            знаходити персональні закономірності саме у твоїх даних.
          </p>

          <div className="hero__actions">
            <a
              className="button"
              href="#early-access"
              onClick={() =>
                trackEvent("hero_cta_click", { placement: "hero" })
              }
            >
              Спробувати безкоштовно
              <ArrowRight aria-hidden="true" />
            </a>
            <a
              className="button button--secondary"
              href="#how-it-works"
              onClick={() => trackEvent("how_it_works_click")}
            >
              Як це працює
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <p className="hero__note">
            Безкоштовний ранній доступ <span aria-hidden="true">·</span> Без
            банківської картки
          </p>
        </div>

        <div className="hero-visual">
          <figure className="hero-main-photo">
            <img
              src="/images/cooking-together.jpg"
              alt="Жінка готує свіжу їжу на світлій кухні"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>
              <span>
                <Sparkles aria-hidden="true" /> Твій день має контекст
              </span>
              <strong>Звичайні звички. Зрозумілі сигнали.</strong>
            </figcaption>
            <a
              className="hero-main-photo__credit"
              href="https://unsplash.com/photos/woman-smiling-while-cooking-GrdJp16CPk8"
              target="_blank"
              rel="noreferrer"
            >
              Фото: Jason Briscoe
            </a>
          </figure>

          <div className="hero-dashboard-wrap" aria-label="Демо екрана Zelvyn">
            <div className="hero-dashboard__glow" aria-hidden="true" />
            <div className="hero-dashboard">
              <div className="hero-dashboard__topbar">
                <div>
                  <span className="hero-dashboard__kicker">12 червня, середа</span>
                  <p>
                    Доброго ранку <Sun aria-hidden="true" />
                  </p>
                </div>
                <span className="avatar" aria-hidden="true">
                  А
                </span>
              </div>

              <div className="glucose-card">
                <div className="glucose-card__heading">
                  <div>
                    <span className="metric-label">
                      <Droplet aria-hidden="true" /> Глюкоза
                    </span>
                    <strong>
                      7.8 <small>mmol/L</small>
                    </strong>
                  </div>
                  <span className="status-pill">Натще</span>
                </div>
                <div className="mini-chart" aria-label="Декоративний графік глюкози">
                  <span className="mini-chart__area" />
                  {chartSegments.map((segment, index) => (
                    <span
                      className="mini-chart__segment"
                      key={index}
                      style={{
                        left: segment.left,
                        top: segment.top,
                        width: segment.width,
                        transform: `rotate(${segment.rotate}deg)`,
                      }}
                    />
                  ))}
                  <span className="mini-chart__point" />
                </div>
                <div className="chart-labels" aria-hidden="true">
                  <span>06:00</span>
                  <span>09:00</span>
                  <span>12:00</span>
                  <span>Зараз</span>
                </div>
              </div>

              <p className="dashboard-subtitle">Сьогодні</p>
              <div className="today-grid">
                <div className="today-card">
                  <span className="today-card__icon today-card__icon--peach">
                    <Utensils aria-hidden="true" />
                  </span>
                  <div>
                    <span>Сніданок</span>
                    <strong>08:20</strong>
                  </div>
                </div>
                <div className="today-card">
                  <span className="today-card__icon today-card__icon--green">
                    <Activity aria-hidden="true" />
                  </span>
                  <div>
                    <span>Активність</span>
                    <strong>4 231 крок</strong>
                  </div>
                </div>
                <div className="today-card">
                  <span className="today-card__icon today-card__icon--lavender">
                    <BedDouble aria-hidden="true" />
                  </span>
                  <div>
                    <span>Сон</span>
                    <strong>7 год 20 хв</strong>
                  </div>
                </div>
              </div>

              <div className="dashboard-insight">
                <span className="dashboard-insight__icon">
                  <Lightbulb aria-hidden="true" />
                </span>
                <div>
                  <span>Персональне спостереження</span>
                  <p>
                    Після пізньої вечері ранковий показник був вищим у 7 із 10
                    подібних випадків.
                  </p>
                </div>
              </div>
            </div>
            <div className="floating-stat floating-stat--top" aria-hidden="true">
              <span>30 днів</span>
              <strong>історії</strong>
            </div>
            <div className="floating-stat floating-stat--bottom" aria-hidden="true">
              <span className="floating-stat__dot" />
              <span>
                <strong>Дані</strong>
                <small>лише твої</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
