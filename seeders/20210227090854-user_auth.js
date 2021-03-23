'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_auth', [
      {
        email: 'testemail@email.com',
        userId: "testemail@email.comпароль12",
        password: "$2a$12$cMllgFxSUfXx0y6QULw88.UiF8h3FKfOhSGXgGrUmcOD9dgJSZNSm"
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_auth', null, {});
  }
};
