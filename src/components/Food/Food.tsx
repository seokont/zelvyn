import {
  BatteryMedium,
  Camera,
  Check,
  Drumstick,
  Salad,
  ScanLine,
  Signal,
  Wheat,
  Wifi,
} from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const ingredients = [
  { icon: Wheat, tone: "yellow" },
  { icon: Drumstick, tone: "peach" },
  { icon: Salad, tone: "green" },
];

export function Food() {
  const { copy } = useLanguage();
  const text = copy.food;

  return (
    <section className="section section--cream food" aria-labelledby="food-title">
      <div className="container food__layout">
        <div className="food__content">
          <div className="section-label-row">
            <span className="section-label">{text.label}</span>
            <span className="coming-badge">{text.coming}</span>
          </div>
          <h2 id="food-title">{text.title}</h2>
          <p>{text.intro}</p>
          <div className="food__feature-list">
            <span>
              <Camera aria-hidden="true" /> {text.features[0]}
            </span>
            <span>
              <ScanLine aria-hidden="true" /> {text.features[1]}
            </span>
            <span>
              <Check aria-hidden="true" /> {text.features[2]}
            </span>
          </div>
          <p className="food__future-note">
            {text.note}
          </p>
        </div>

        <div className="food-phone" aria-label={text.phoneAria}>
          <span className="food-phone__button food-phone__button--silent" aria-hidden="true" />
          <span className="food-phone__button food-phone__button--volume-up" aria-hidden="true" />
          <span className="food-phone__button food-phone__button--volume-down" aria-hidden="true" />
          <span className="food-phone__button food-phone__button--power" aria-hidden="true" />

          <div className="food-phone__screen">
            <div className="food-phone__notch" aria-hidden="true" />
            <div className="food-phone__status" aria-hidden="true">
              <strong>9:41</strong>
              <span>
                <Signal />
                <Wifi />
                <BatteryMedium />
              </span>
            </div>
            <div className="food-phone__header">
              <span className="food-phone__back" aria-hidden="true">‹</span>
              <strong>{text.addMeal}</strong>
              <span />
            </div>
            <div className="meal-photo">
              <img
                className="meal-photo__image"
                src="/images/balanced-meal.jpg"
                alt={text.imageAlt}
                loading="lazy"
              />
              <span className="meal-photo__scan"><ScanLine aria-hidden="true" /></span>
              <span className="meal-photo__label">{text.photoLabel}</span>
            </div>
            <div className="food-phone__body">
              <div className="recognition-title">
                <span>
                  <Check aria-hidden="true" />
                </span>
                <div>
                  <strong>{text.recognized}</strong>
                  <small>{text.verify}</small>
                </div>
              </div>
              <div className="ingredient-list">
                {ingredients.map(({ icon: Icon, tone }, index) => {
                  const ingredient = text.ingredients[index];

                  return (
                  <div className="ingredient" key={ingredient.label}>
                    <span className={`ingredient__icon ingredient__icon--${tone}`}>
                      <Icon aria-hidden="true" />
                    </span>
                    <span>
                      <strong>{ingredient.label}</strong>
                      <small>{ingredient.amount}</small>
                    </span>
                    <button type="button" aria-label={`${text.editAria}: ${ingredient.label}`}>
                      {text.edit}
                    </button>
                  </div>
                  );
                })}
              </div>
              <button className="food-confirm" type="button">
                {text.confirm}
              </button>
            </div>
            <span className="food-phone__home" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
