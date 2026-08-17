import { Camera, Check, Drumstick, Salad, ScanLine, Wheat } from "lucide-react";

const ingredients = [
  { icon: Wheat, label: "Рис", amount: "около 120 г", tone: "yellow" },
  { icon: Drumstick, label: "Курица", amount: "около 90 г", tone: "peach" },
  { icon: Salad, label: "Овощи", amount: "около 140 г", tone: "green" },
];

export function Food() {
  return (
    <section className="section section--cream food" aria-labelledby="food-title">
      <div className="container food__layout">
        <div className="food__content">
          <div className="section-label-row">
            <span className="section-label">Дневник питания</span>
            <span className="coming-badge">Coming soon</span>
          </div>
          <h2 id="food-title">Покажи, что ты ешь</h2>
          <p>
            В будущем ты сможешь сфотографировать блюдо, а приложение поможет
            добавить его в дневник — быстро и без длинных списков.
          </p>
          <div className="food__feature-list">
            <span>
              <Camera aria-hidden="true" /> Одно фото блюда
            </span>
            <span>
              <ScanLine aria-hidden="true" /> Предварительное распознавание
            </span>
            <span>
              <Check aria-hidden="true" /> Подтверждение перед записью
            </span>
          </div>
          <p className="food__future-note">
            Это предварительный интерфейс будущей функции. Состав блюда всегда
            можно будет поправить вручную.
          </p>
        </div>

        <div className="food-phone" aria-label="Демо распознавания блюда по фото">
          <div className="food-phone__notch" aria-hidden="true" />
          <div className="food-phone__header">
            <span className="food-phone__back" aria-hidden="true">‹</span>
            <strong>Добавить приём пищи</strong>
            <span />
          </div>
          <div className="meal-photo" role="img" aria-label="Стилизованное блюдо с рисом, курицей и овощами">
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
            <span className="meal-photo__label">Фото блюда</span>
          </div>
          <div className="food-phone__body">
            <div className="recognition-title">
              <span>
                <Check aria-hidden="true" />
              </span>
              <div>
                <strong>Блюдо распознано</strong>
                <small>Проверь состав перед сохранением</small>
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
                  <button type="button" aria-label={`Изменить: ${label}`}>Изменить</button>
                </div>
              ))}
            </div>
            <button className="food-confirm" type="button">
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
