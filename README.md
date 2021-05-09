# Федерация Кибер Спорта

## Что нужно знать о проекте

### Если вы первый раз работаете с Web-приложением:
- Что нужно знать:
  - Язык гипертекстовой разметки `HTML`
  - Язык каскадных таблиц стилей `CSS` и препроцессор к нему `SCSS`( Именно он используется в проекте)
  - Основы `JavaScript (ES6)`, `JSX`
  - Как работать с системой контроля версий `Git` и `GitHub`
  - Основы построения Web-приложений на `React.js` и `Redux.js`
  - Основы серверного програмирования, работа с базой данных `MySQL`

- Сборка проекта производиться на полатформе `Node.js`
- Используемый сборщик `Webpack`
- В основе проекта находятся 2 фреймворка:
  - `React.js` - клиентский интерфейс
  - `Express.js` - минималистичный серверный фреймворк

 **todo:** В планах было переписать всё на `Next.js` (Он клёвый)

## Как развернуть проект

для начала нужно запустить сервер базы данных, на данном компьютере есть `OpenServer`, в нём есть второенный `MySQLServer`.

```bash
  #Данные для входа
  login: mysql
  password: mysql
```

### Установка зависимостей и старт локального сервера для разработки
```bash
# Установка Серверных зависимостей
npm install
# Развернуть базу данных
npm run db:reset
# Установка Клиентский зависимостей
cd client 
npm install
# Запуск проекта
cd ../
npm run dev
```

