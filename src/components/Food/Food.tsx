import { Camera, Check, Drumstick, Salad, ScanLine, Wheat } from "lucide-react";

const ingredients = [
  { icon: Wheat, label: "Рис", amount: "близько 120 г", tone: "yellow" },
  { icon: Drumstick, label: "Курка", amount: "близько 90 г", tone: "peach" },
  { icon: Salad, label: "Овочі", amount: "близько 140 г", tone: "green" },
];

export function Food() {
  return (
    <section className="section section--cream food" aria-labelledby="food-title">
      <div className="container food__layout">
        <div className="food__content">
          <div className="section-label-row">
            <span className="section-label">Щоденник харчування</span>
            <span className="coming-badge">Незабаром</span>
          </div>
          <h2 id="food-title">Покажи, що ти їси</h2>
          <p>
            У майбутньому ти зможеш сфотографувати страву, а застосунок допоможе
            додати її до щоденника — швидко й без довгих списків.
          </p>
          <div className="food__feature-list">
            <span>
              <Camera aria-hidden="true" /> Одне фото страви
            </span>
            <span>
              <ScanLine aria-hidden="true" /> Попереднє розпізнавання
            </span>
            <span>
              <Check aria-hidden="true" /> Підтвердження перед записом
            </span>
          </div>
          <p className="food__future-note">
            Це попередній інтерфейс майбутньої функції. Склад страви завжди
            можна буде виправити вручну.
          </p>
        </div>

        <div className="food-phone" aria-label="Демо розпізнавання страви за фото">
          <div className="food-phone__notch" aria-hidden="true" />
          <div className="food-phone__header">
            <span className="food-phone__back" aria-hidden="true">‹</span>
            <strong>Додати прийом їжі</strong>
            <span />
          </div>
          <div className="meal-photo" role="img" aria-label="Стилізована страва з рисом, куркою та овочами">
            <span className="meal-photo__plate">
              <span className="meal-photo__rice" />
              <span className="meal-photo__chicken meal-photo__chicken--one" />
              <span className="meal-photo__chicken meal-photo__chicken--two" />
              <span className="meal-photo__greens meal-photo__greens--one" />
              <span className="meal-photo__greens meal-photo__greens--two" />
              <span className="meal-photo__tomato meal-photo__tomato--one" />
              <span className="meal-photo__tomato meal-photo__tomato--two" />
            </span>
            <span className="meal-photo__scan"><ScanLine aria-hidden="true" /></span>
            <span className="meal-photo__label">Фото страви</span>
          </div>
          <div className="food-phone__body">
            <div className="recognition-title">
              <span>
                <Check aria-hidden="true" />
              </span>
              <div>
                <strong>Страву розпізнано</strong>
                <small>Перевір склад перед збереженням</small>
              </div>
            </div>
            <div className="ingredient-list">
              {ingredients.map(({ icon: Icon, label, amount, tone }) => (
                <div className="ingredient" key={label}>
                  <span className={`ingredient__icon ingredient__icon--${tone}`}>
                    <Icon aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{label}</strong>
                    <small>{amount}</small>
                  </span>
                  <button type="button" aria-label={`Змінити: ${label}`}>Змінити</button>
                </div>
              ))}
            </div>
            <button className="food-confirm" type="button">
              Підтвердити
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
