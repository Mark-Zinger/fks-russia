'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_auth', [
      {
        email: 'demo@demo.com',
        userId: "userId",
        password: "password"
      },
      {
        email: 'test@email.com',
        userId: "test@email.comtest123",
        password: "$2a$12$WsS4g7rTZMMJmx2m2kGTn.h6D8y/gy5xtV2zJzGt.TqdcrtDaMDrO"
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_auth', null, {});
  }
};
