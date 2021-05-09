'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('command', [
      {
        name: "Команда по танкам 1",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },
      {
        name: "Команда по танкам 2",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },
      {
        name: "Команда по танкам 3",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },
      {
        name: "Команда по танкам 4",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },
      {
        name: "Команда по КС ",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },
      {
        name: "Команда по КС 1",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },
      {
        name: "Команда по КС 2",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },
      {
        name: "Команда по КС 3",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },    
      {
        name: "Команда по Доте 1",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },
      {
        name: "Команда по Доте 2",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },
      {
        name: "Команда по FIFA 4",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },
      {
        name: "Команда по FIFA 1",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },
      {
        name: "Команда по FIFA 2",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      }, 
      {
        name: "Команда по FIFA 3",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },    
      {
        name: "Команда по WARFACE 1",
        password: "$2a$12$ztYcl7rf3EGlFWaKcTLPN.ZdOaa6y8Shr3xbg3M165le3MjGNZDeO"
      },     
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('command', null, {});
  }
};
