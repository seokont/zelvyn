import { Eye, KeyRound, LockKeyhole, ShieldCheck, Stethoscope, Trash2 } from "lucide-react";

const securityItems = [
  {
    icon: LockKeyhole,
    title: "Защищённая передача",
    text: "Безопасность закладывается в архитектуру продукта с самого начала.",
  },
  {
    icon: KeyRound,
    title: "Контроль доступа",
    text: "Доступ к истории должен оставаться только у самого пользователя.",
  },
  {
    icon: Trash2,
    title: "Удаление аккаунта",
    text: "Планируем дать понятный способ удалить профиль и связанные данные.",
  },
  {
    icon: Eye,
    title: "Прозрачная политика",
    text: "Объясним простым языком, какие данные нужны продукту и зачем.",
  },
];

export function Security() {
  return (
    <section className="section security" aria-labelledby="security-title">
      <div className="container">
        <div className="security__heading">
          <div className="security__heading-icon">
            <ShieldCheck aria-hidden="true" />
          </div>
          <div className="section-intro">
            <span className="section-label">Приватность по умолчанию</span>
            <h2 id="security-title">Разработано с заботой о твоих данных</h2>
            <p>
              Это принципы будущего продукта. Конкретные механизмы будут
              проверены и описаны до запуска приложения.
            </p>
          </div>
        </div>

        <div className="security-grid">
          {securityItems.map(({ icon: Icon, title, text }) => (
            <article className="security-card" key={title}>
              <span className="security-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
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
            <h3 id="medical-note-title">Важно о назначении GlucoTrack</h3>
            <p>
              GlucoTrack не ставит диагнозы, не заменяет врача и не изменяет
              назначенное лечение. Информация приложения предназначена для
              отслеживания и анализа пользовательских данных.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
