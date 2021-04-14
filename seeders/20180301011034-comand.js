'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('command', [
      {
        name: "Команда по танкам 1",
        password: "123"
      },
      {
        name: "Команда по танкам 2",
        password: "123"
      },
      {
        name: "Команда по танкам 3",
        password: "123"
      },
      {
        name: "Команда по танкам 4",
        password: "123"
      },
      {
        name: "Команда по КС ",
        password: "123"
      },
      {
        name: "Команда по КС 1",
        password: "123"
      },
      {
        name: "Команда по КС 2",
        password: "123"
      },
      {
        name: "Команда по КС 3",
        password: "123"
      },    
      {
        name: "Команда по Доте 1",
        password: "123"
      },
      {
        name: "Команда по Доте 2",
        password: "123"
      },
      {
        name: "Команда по Доте 3",
        password: "123"
      },
      {
        name: "Команда по FIFA 1",
        password: "123"
      },
      {
        name: "Команда по FIFA 2",
        password: "123"
      }, 
      {
        name: "Команда по FIFA 3",
        password: "123"
      },    
      {
        name: "Команда по WARFACE 1",
        password: "123"
      },     
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('command', null, {});
  }
};
