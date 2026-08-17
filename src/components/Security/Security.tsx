import { Eye, KeyRound, LockKeyhole, ShieldCheck, Stethoscope, Trash2 } from "lucide-react";

const securityItems = [
  {
    icon: LockKeyhole,
    title: "Захищена передача",
    text: "Безпека закладається в архітектуру продукту із самого початку.",
  },
  {
    icon: KeyRound,
    title: "Контроль доступу",
    text: "Доступ до історії має залишатися лише в самого користувача.",
  },
  {
    icon: Trash2,
    title: "Видалення акаунта",
    text: "Плануємо надати зрозумілий спосіб видалити профіль і пов’язані дані.",
  },
  {
    icon: Eye,
    title: "Прозора політика",
    text: "Пояснимо простою мовою, які дані потрібні продукту й навіщо.",
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
            <span className="section-label">Приватність за замовчуванням</span>
            <h2 id="security-title">Розроблено з турботою про твої дані</h2>
            <p>
              Це принципи майбутнього продукту. Конкретні механізми буде
              перевірено й описано до запуску застосунку.
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
            <h3 id="medical-note-title">Важливо про призначення Zelvyn</h3>
            <p>
              Zelvyn не встановлює діагнози, не замінює лікаря й не змінює
              призначене лікування. Інформація застосунку призначена для
              відстеження й аналізу користувацьких даних.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
