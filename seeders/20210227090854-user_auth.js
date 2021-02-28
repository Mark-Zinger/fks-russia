'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_auth', [{
      email: 'demo@demo.com',
      userId: "userId",
      pwd: "password"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_auth', null, {});
  }
};
