'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_data', [
      {
        userName: "Mark Zinger",
        userId: "testemail@email.comпароль12",
        avatar: "/resources/images/user_avatar/test_avatar.png",
        createAt: new Date ()
      },
    ], {
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_data', null, {});
  }
};
