'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_data', [
      {
        avatar: "/resources/images/user_avatar/test_avatar.png",
        createAt: new Date (),
        role: 'user'
      },
    ], {
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_data', null, {});
  }
};
