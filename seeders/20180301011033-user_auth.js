'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
        email: 'zubenko@mail.ru',
        username: "Zubenko",
        password: "$2a$12$I3ewkH0RqLn36a9Zdip9G.far7EOnIdq3OMCDczrKNJOouBmgNceu",
        avatar: "/resources/images/user_avatar/20f7-97ac-4066-b44e-bae180ddeeaa.jpg",
        fullname: "Зубенко Михаил Петрович",
        createAt: new Date(),
        
      },
      {
        email: 'firsttestuser@test.com',
        username: "firstTestUser",
        password: "$2a$12$/mj0FFp9tRY0FHMt9I9uMOgunQX5DmxzgeuSE2YBToc5y7XzuGmdW",
        avatar: "/resources/images/user_avatar/hqdefault.jpg",
        fullname: "Первый Тестовый Пользователь",
        createAt: new Date(),
        
      },{
        email: 'secondtestuser@test.com',
        username: "secondtestuser",
        password: "$2a$12$I/FBevvoGDj3Kjy0.Vz1NuV..FKv19l0E3tP8OndK7uS3Ptaetgea",
        avatar: "/resources/images/user_avatar/s1200.png",
        fullname: "Второй Тестовый Пользователь",
        createAt: new Date(),
        
      },{
        email: 'markzingergithub@gmail.com',
        username: "Michail_Zinger",
        password: "$2a$12$CJaF03cUJ8LIlvu5bgZ0pe8uZaSDh8nD6caYFNHKClSvGNEaYN.i.",
        avatar: "/resources/images/user_avatar/user_avatar.png",
        fullname: "Бодренков Михаил Дмитриевич",
        createAt: new Date(),
      },
      {
        email: 'dashkevitch@test.ru',
        username: "Dashkevitch",
        password: "$2a$12$ClhU2gugxGjf6yyPZfP11.sBrkdedS5vCk.R6A3Ih2ilndwHLufRq",
        avatar: "/resources/images/user_avatar/iuja9iq5ib1no_thumb.jpg",
        fullname: "Дашкевич Андрей Максимович",
        createAt: new Date(),
      },
      {
        email: 'testemail1@email.com',
        username: "TestUser1",
        password: "$2a$12$ze2CmZUwaNC/sOg5lVe8VukP/C/AE5MhxD70gngtlPRaebE3ZLzGq",
        avatar: "/resources/images/user_avatar/user_avatar.jpg",
        fullname: "Тестовый пользователь 1",
        createAt: new Date(),
      },
      {
        email: 'testemail2@email.com',
        username: "TestUser2",
        password: "$2a$12$5I1RJebN4O6bIuiGNpytL.uuwUG1AfeBcwiPrbpPqJOAl.avNr.Qq",
        avatar: "/resources/images/user_avatar/rkXzfWvhycA.jpg",
        fullname: "Тестовый пользователь 2",
        createAt: new Date(),
      },
      {
        email: 'testemail3@email.com',
        username: "TestUser3",
        password: "$2a$12$5I1RJebN4O6bIuiGNpytL.uuwUG1AfeBcwiPrbpPqJOAl.avNr.Qq",
        avatar: "/resources/images/user_avatar/_default.png",
        fullname: "Тестовый пользователь 3",
        createAt: new Date(),
      },
      {
        email: 'testemail4@email.com',
        username: "TestUser4",
        password: "$2a$12$5I1RJebN4O6bIuiGNpytL.uuwUG1AfeBcwiPrbpPqJOAl.avNr.Qq",
        avatar: "/resources/images/user_avatar/profile_pic_new_2x_1607924605_1jerlui_1596543053_1551511862_48.jpg",
        fullname: "Тестовый пользователь 4",
        createAt: new Date(),
      },
      {
        email: 'testemail5@email.com',
        username: "TestUser5",
        password: "$2a$12$5I1RJebN4O6bIuiGNpytL.uuwUG1AfeBcwiPrbpPqJOAl.avNr.Qq",
        avatar: "/resources/images/user_avatar/_default.png",
        fullname: "Тестовый пользователь 5",
        createAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
