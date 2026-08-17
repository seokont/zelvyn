# Zelvyn landing page

Одностраничный лендинг для проверки продуктовой гипотезы health-tech сервиса
Zelvyn. Интерфейс показывает только демонстрационные данные и не является
медицинским приложением.

## Запуск

Требуется Node.js 20 или новее.

```bash
npm install
npm run dev
```

После запуска страница доступна по адресу `http://localhost:3000`.

## Production build

```bash
npm run build
npm run preview
```

Готовые статические файлы появятся в каталоге `dist`.

## Технологии

- React 19 и TypeScript
- Vite
- SCSS с CSS-переменными
- Lucide React

Форма раннего доступа работает только локально через React state: email никуда
не отправляется. События аналитики выводятся в консоль только в development-режиме.
