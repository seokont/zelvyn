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
import { useLanguage } from "../../i18n/LanguageContext";
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
  const { copy } = useLanguage();
  const text = copy.hero;

  return (
    <section className="hero" id="top">
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <div className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            {text.eyebrow}
          </div>
          <h1>
            {text.title}
            <br /> <em>{text.titleAccent}</em>
          </h1>
          <p className="hero__lead">
            {text.lead}
          </p>

          <div className="hero__actions">
            <a
              className="button"
              href="#early-access"
              onClick={() =>
                trackEvent("hero_cta_click", { placement: "hero" })
              }
            >
              {text.primaryCta}
              <ArrowRight aria-hidden="true" />
            </a>
            <a
              className="button button--secondary"
              href="#how-it-works"
              onClick={() => trackEvent("how_it_works_click")}
            >
              {text.secondaryCta}
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <p className="hero__note">
            {text.noteFirst} <span aria-hidden="true">·</span> {text.noteSecond}
          </p>
        </div>

        <div className="hero-visual">
          <figure className="hero-main-photo">
            <img
              src="/images/cooking-together.jpg"
              alt={text.photoAlt}
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>
              <span>
                <Sparkles aria-hidden="true" /> {text.photoTag}
              </span>
              <strong>{text.photoTitle}</strong>
            </figcaption>
            {/* <a
              className="hero-main-photo__credit"
              href="https://unsplash.com/photos/woman-smiling-while-cooking-GrdJp16CPk8"
              target="_blank"
              rel="noreferrer"
            >
              Фото: Jason Briscoe
            </a> */}
          </figure>

          <div className="hero-dashboard-wrap" aria-label={text.dashboardAria}>
            <div className="hero-dashboard__glow" aria-hidden="true" />
            <div className="hero-dashboard">
              <div className="hero-dashboard__topbar">
                <div>
                  <span className="hero-dashboard__kicker">
                    {text.date}
                  </span>
                  <p>
                    {text.greeting} <Sun aria-hidden="true" />
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
                      <Droplet aria-hidden="true" /> {text.glucose}
                    </span>
                    <strong>
                      7.8 <small>mmol/L</small>
                    </strong>
                  </div>
                  <span className="status-pill">{text.fasting}</span>
                </div>
                <div
                  className="mini-chart"
                  aria-label={text.chartAria}
                >
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
                  <span>{text.now}</span>
                </div>
              </div>

              <p className="dashboard-subtitle">{text.today}</p>
              <div className="today-grid">
                <div className="today-card">
                  <span className="today-card__icon today-card__icon--peach">
                    <Utensils aria-hidden="true" />
                  </span>
                  <div>
                    <span>{text.breakfast}</span>
                    <strong>08:20</strong>
                  </div>
                </div>
                <div className="today-card">
                  <span className="today-card__icon today-card__icon--green">
                    <Activity aria-hidden="true" />
                  </span>
                  <div>
                    <span>{text.activity}</span>
                    <strong>{text.steps}</strong>
                  </div>
                </div>
                <div className="today-card">
                  <span className="today-card__icon today-card__icon--lavender">
                    <BedDouble aria-hidden="true" />
                  </span>
                  <div>
                    <span>{text.sleep}</span>
                    <strong>{text.sleepValue}</strong>
                  </div>
                </div>
              </div>

              <div className="dashboard-insight">
                <span className="dashboard-insight__icon">
                  <Lightbulb aria-hidden="true" />
                </span>
                <div>
                  <span>{text.insightLabel}</span>
                  <p>{text.insightText}</p>
                </div>
              </div>
            </div>
            <div
              className="floating-stat floating-stat--top"
              aria-hidden="true"
            >
              <span>{text.days}</span>
              <strong>{text.history}</strong>
            </div>
            <div
              className="floating-stat floating-stat--bottom"
              aria-hidden="true"
            >
              <span className="floating-stat__dot" />
              <span>
                <strong>{text.data}</strong>
                <small>{text.onlyYours}</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
