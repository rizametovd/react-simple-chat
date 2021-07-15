# Чат приложение на React и FireBase

![React](https://img.shields.io/badge/-React-61daf8?logo=react&logoColor=black)
![HTML5](https://img.shields.io/badge/-HTML5-e34f26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572b6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-f7df1e?logo=javaScript&logoColor=black)
![FireBase](https://img.shields.io/badge/-FireBase-e34f26?logo=FireBase&logoColor=black)
![Webpack](https://img.shields.io/badge/-Webpack-99d6f8?logo=webpack&logoColor=black)


## Описание
SPA приложение — чат на React и FireBase.</br>
[Деплой](https://react-simple-chat.rizametov.com/)

## Стек
* React
* JavaScript
* FireBase
* HTML5
* CSS

## Установка
Для запуска на локальной машине необходимо:
1. Установить зависимости
```sh
npm install
```

2. Добавить файл конфигурации fireBaseConfig.js в папку /src/firebase/ . Файл должен содержать конфигурацию в следующем формате:

```sh
export const CONFIG = {
  apiKey: 'Данные из вашего аккаунта в FireBase',
  authDomain: 'Данные из вашего аккаунта в FireBase',
  projectId: 'Данные из вашего аккаунта в FireBase',
  storageBucket: 'Данные из вашего аккаунта в FireBase',
  messagingSenderId: 'Данные из вашего аккаунта в FireBase',
  appId: 'Данные из вашего аккаунта в FireBase',
};
```

3. Запустить в режиме разработки:</br>
```sh
npm run start
```
Если все прошло успешно, проект будет запущен на `http://localhost:3000`

## Превью
![Превью проекта](./public/preview.gif)