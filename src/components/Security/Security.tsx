import { Eye, KeyRound, LockKeyhole, ShieldCheck, Stethoscope, Trash2 } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const securityItems = [
  {
    icon: LockKeyhole,
  },
  {
    icon: KeyRound,
  },
  {
    icon: Trash2,
  },
  {
    icon: Eye,
  },
];

export function Security() {
  const { copy } = useLanguage();
  const text = copy.security;

  return (
    <section className="section security" aria-labelledby="security-title">
      <div className="container">
        <div className="security__heading">
          <div className="security__heading-icon">
            <ShieldCheck aria-hidden="true" />
          </div>
          <div className="section-intro">
            <span className="section-label">{text.label}</span>
            <h2 id="security-title">{text.title}</h2>
            <p>{text.intro}</p>
          </div>
        </div>

        <div className="security-grid">
          {securityItems.map(({ icon: Icon }, index) => (
            <article className="security-card" key={text.items[index].title}>
              <span className="security-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{text.items[index].title}</h3>
              <p>{text.items[index].text}</p>
            </article>
          ))}
        </div>

        <aside
          className="medical-note"
          id="medical-disclaimer"
          aria-labelledby="medical-note-title"
        >
          <span className="medical-note__icon">
            <Stethoscope aria-hidden="true" />
          </span>
          <div>
            <h3 id="medical-note-title">{text.medicalTitle}</h3>
            <p>{text.medicalText}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
