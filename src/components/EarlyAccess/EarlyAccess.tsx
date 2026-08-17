import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { trackEvent } from "../../utils/analytics";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EarlyAccess() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedView = useRef(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTrackedView.current) {
          trackEvent("early_access_view");
          hasTrackedView.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setError("Введи email, чтобы получить приглашение.");
      return;
    }

    if (!emailPattern.test(normalizedEmail)) {
      setError("Проверь формат email — например, name@example.com.");
      return;
    }

    setError("");
    setIsSubmitted(true);
    trackEvent("email_submit", { source: "early_access" });
  };

  return (
    <section
      className="section early-access"
      id="early-access"
      aria-labelledby="early-access-title"
      ref={sectionRef}
    >
      <div className="container">
        <div className="early-access__card">
          <span className="early-access__decor early-access__decor--one" aria-hidden="true" />
          <span className="early-access__decor early-access__decor--two" aria-hidden="true" />
          <div className="early-access__content">
            <div className="early-access__icon">
              <Sparkles aria-hidden="true" />
            </div>
            <span className="early-access__eyebrow">Ранний доступ · бесплатно</span>
            <h2 id="early-access-title">
              Стань одним из первых пользователей GlucoTrack
            </h2>
            <p>
              Мы создаём приложение для людей с диабетом 2 типа и ищем первых
              пользователей, которые помогут сделать его действительно полезным.
            </p>

            {isSubmitted ? (
              <div className="form-success" role="status" tabIndex={-1}>
                <CheckCircle2 aria-hidden="true" />
                <span>
                  <strong>Спасибо! Ты в списке.</strong>
                  Мы сообщим, когда GlucoTrack будет готов к тестированию.
                </span>
              </div>
            ) : (
              <form className="access-form" onSubmit={handleSubmit} noValidate>
                <label className="sr-only" htmlFor="early-access-email">
                  Ваш email
                </label>
                <div className={`access-form__field${error ? " access-form__field--error" : ""}`}>
                  <Mail aria-hidden="true" />
                  <input
                    id="early-access-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Ваш email"
                    value={email}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "email-error" : "email-hint"}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (error) setError("");
                    }}
                  />
                </div>
                <button className="button button--light" type="submit">
                  Получить ранний доступ
                  <ArrowRight aria-hidden="true" />
                </button>
                <p className="access-form__error" id="email-error" aria-live="polite">
                  {error}
                </p>
                <p className="access-form__hint" id="email-hint">
                  Никакого спама. И никаких данных наружу — это демо-форма.
                </p>
              </form>
            )}
          </div>
          <div className="early-access__side" aria-hidden="true">
            <div className="community-stack">
              <span>А</span><span>М</span><span>Е</span><span>+12</span>
            </div>
            <p><strong>Первые участники</strong> уже помогают формировать продукт</p>
          </div>
        </div>
      </div>
    </section>
  );
}
