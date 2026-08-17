import {
  Activity,
  ArrowDown,
  ArrowRight,
  BedDouble,
  Droplet,
  Lightbulb,
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
            Дневник, который видит связи
          </div>
          <h1>
            Пойми, что влияет<br /> на твой <em>сахар</em>
          </h1>
          <p className="hero__lead">
            Записывай глюкозу, питание, активность и сон. GlucoTrack помогает
            находить персональные закономерности именно в твоих данных.
          </p>

          <div className="hero__actions">
            <a
              className="button"
              href="#early-access"
              onClick={() =>
                trackEvent("hero_cta_click", { placement: "hero" })
              }
            >
              Попробовать бесплатно
              <ArrowRight aria-hidden="true" />
            </a>
            <a
              className="button button--secondary"
              href="#how-it-works"
              onClick={() => trackEvent("how_it_works_click")}
            >
              Как это работает
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <p className="hero__note">
            Бесплатный ранний доступ <span aria-hidden="true">·</span> Без
            банковской карты
          </p>
        </div>

        <div className="hero-dashboard-wrap" aria-label="Демо экрана GlucoTrack">
          <div className="hero-dashboard__glow" aria-hidden="true" />
          <div className="hero-dashboard">
            <div className="hero-dashboard__topbar">
              <div>
                <span className="hero-dashboard__kicker">12 июня, среда</span>
                <p>
                  Доброе утро <Sun aria-hidden="true" />
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
                <span className="status-pill">Натощак</span>
              </div>
              <div className="mini-chart" aria-label="Декоративный график глюкозы">
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
                <span>Сейчас</span>
              </div>
            </div>

            <p className="dashboard-subtitle">Сегодня</p>
            <div className="today-grid">
              <div className="today-card">
                <span className="today-card__icon today-card__icon--peach">
                  <Utensils aria-hidden="true" />
                </span>
                <div>
                  <span>Завтрак</span>
                  <strong>08:20</strong>
                </div>
              </div>
              <div className="today-card">
                <span className="today-card__icon today-card__icon--green">
                  <Activity aria-hidden="true" />
                </span>
                <div>
                  <span>Активность</span>
                  <strong>4 231 шаг</strong>
                </div>
              </div>
              <div className="today-card">
                <span className="today-card__icon today-card__icon--lavender">
                  <BedDouble aria-hidden="true" />
                </span>
                <div>
                  <span>Сон</span>
                  <strong>7ч 20м</strong>
                </div>
              </div>
            </div>

            <div className="dashboard-insight">
              <span className="dashboard-insight__icon">
                <Lightbulb aria-hidden="true" />
              </span>
              <div>
                <span>Персональное наблюдение</span>
                <p>
                  После позднего ужина утренний показатель был выше в 7 из 10
                  похожих случаев.
                </p>
              </div>
            </div>
          </div>
          <div className="floating-stat floating-stat--top" aria-hidden="true">
            <span>30 дней</span>
            <strong>истории</strong>
          </div>
          <div className="floating-stat floating-stat--bottom" aria-hidden="true">
            <span className="floating-stat__dot" />
            <span>
              <strong>Данные</strong>
              <small>только твои</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
