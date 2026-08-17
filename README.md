# Zelvyn landing page

Односторінковий лендинг для перевірки продуктової гіпотези health-tech сервісу
Zelvyn. Інтерфейс показує лише демонстраційні дані та не є
медичним застосунком.

## Запуск

Потрібен Node.js 20 або новіший.

```bash
npm install
npm run dev
```

Після запуску сторінка доступна за адресою `http://localhost:3000`.

## Production build

```bash
npm run build
npm run preview
```

Готові статичні файли з’являться в каталозі `dist`.

## Технології

- React 19 і TypeScript
- Vite
- SCSS із CSS-змінними
- Lucide React

Форма раннього доступу працює лише локально через React state: email нікуди
не надсилається. Події аналітики виводяться в консоль лише в development-режимі.
