import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { trackEvent } from "../../utils/analytics";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EarlyAccess() {
  const { language, copy } = useLanguage();
  const text = copy.early;
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedView = useRef(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<"" | "empty" | "invalid" | "send">("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setError("empty");
      return;
    }

    if (!emailPattern.test(normalizedEmail)) {
      setError("invalid");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: normalizedEmail,
          language,
          website: formData.get("website"),
        }),
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;

      if (!response.ok || !result?.ok) {
        throw new Error("Email request was not accepted");
      }

      setIsSubmitted(true);
      trackEvent("email_submit", { source: "early_access" });
    } catch {
      setError("send");
    } finally {
      setIsSubmitting(false);
    }
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
            <span className="early-access__eyebrow">{text.eyebrow}</span>
            <h2 id="early-access-title">{text.title}</h2>
            <p>{text.intro}</p>

            {isSubmitted ? (
              <div className="form-success" role="status" tabIndex={-1}>
                <CheckCircle2 aria-hidden="true" />
                <span>
                  <strong>{text.successTitle}</strong>
                  {text.successText}
                </span>
              </div>
            ) : (
              <form
                className="access-form"
                onSubmit={handleSubmit}
                aria-busy={isSubmitting}
                noValidate
              >
                <div className="form-honeypot" aria-hidden="true">
                  <label htmlFor="early-access-website">Website</label>
                  <input
                    id="early-access-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <label className="sr-only" htmlFor="early-access-email">
                  {text.emailLabel}
                </label>
                <div className={`access-form__field${error ? " access-form__field--error" : ""}`}>
                  <Mail aria-hidden="true" />
                  <input
                    id="early-access-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={text.emailPlaceholder}
                    value={email}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "email-error" : "email-hint"}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (error) setError("");
                    }}
                  />
                </div>
                <button className="button button--light" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? text.sending : text.cta}
                  <ArrowRight aria-hidden="true" />
                </button>
                <p className="access-form__error" id="email-error" aria-live="polite">
                  {error === "empty"
                    ? text.emptyError
                    : error === "invalid"
                      ? text.invalidError
                      : error === "send"
                        ? text.sendError
                        : ""}
                </p>
                <p className="access-form__hint" id="email-hint">
                  {text.hint}
                </p>
              </form>
            )}
          </div>
          <div className="early-access__side" aria-hidden="true">
            <div className="community-stack">
              <span>{language === "uk" ? "О" : "A"}</span>
              <span>М</span>
              <span>{language === "uk" ? "Є" : "E"}</span>
              <span>+12</span>
            </div>
            <p><strong>{text.communityTitle}</strong> {text.communityText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
