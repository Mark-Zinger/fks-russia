'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_auth', [
      {
        email: 'zubenko@mail.ru',
        username: "Zubenko",
        password: "$2a$12$I3ewkH0RqLn36a9Zdip9G.far7EOnIdq3OMCDczrKNJOouBmgNceu",
        avatar: "/resources/images/user_avatar/test_avatar.png",
        fullname: "Зубенко Михаил Петрович",
        createAt: new Date(),
        
      },
      {
        email: 'firsttestuser@test.com',
        username: "firstTestUser",
        password: "$2a$12$/mj0FFp9tRY0FHMt9I9uMOgunQX5DmxzgeuSE2YBToc5y7XzuGmdW",
        avatar: "/resources/images/user_avatar/test_avatar.png",
        fullname: "Первый Тестовый Пользователь",
        createAt: new Date(),
        
      },{
        email: 'secondtestuser@test.com',
        username: "secondtestuser",
        password: "$2a$12$I/FBevvoGDj3Kjy0.Vz1NuV..FKv19l0E3tP8OndK7uS3Ptaetgea",
        avatar: "/resources/images/user_avatar/test_avatar.png",
        fullname: "Второй Тестовый Пользователь",
        createAt: new Date(),
        
      },{
        email: 'markzingergithub@gmail.com',
        username: "Michail_Zinger",
        password: "$2a$12$CJaF03cUJ8LIlvu5bgZ0pe8uZaSDh8nD6caYFNHKClSvGNEaYN.i.",
        avatar: "/resources/images/user_avatar/test_avatar.png",
        fullname: "Бодренков Михаил Дмитриевич",
        createAt: new Date(),
      },
      {
        email: 'dashkevitch@test.ru',
        username: "Dashkevitch",
        password: "$2a$12$ClhU2gugxGjf6yyPZfP11.sBrkdedS5vCk.R6A3Ih2ilndwHLufRq",
        avatar: "/resources/images/user_avatar/test_avatar.png",
        fullname: "Дашкевич Андрей Максимович",
        createAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_auth', null, {});
  }
};
