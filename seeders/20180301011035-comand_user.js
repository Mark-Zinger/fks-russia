'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('command_user', [
      {
        isAdmin: true,
        command_id: 1,
        user_id: 1
      },
      {
        command_id: 1,
        user_id: 2
      },
      {
        command_id: 1,
        user_id: 3
      }, 
      {
        isAdmin: true,
        command_id: 3,
        user_id: 1
      },
      {
        command_id: 3,
        user_id: 2
      },
      {
        command_id: 3,
        user_id: 3
      },
      {
        isAdmin: true,
        command_id: 2,
        user_id: 4
      },
      {
        command_id: 2,
        user_id: 5
      },
      {
        command_id: 2,
        user_id: 6
      },

      {
        isAdmin: true,
        command_id: 6,
        user_id: 4
      },
      {
        command_id: 6,
        user_id: 5
      },
      {
        command_id: 6,
        user_id: 6
      },
      
      {
        command_id: 7,
        user_id: 6
      },

      {
        isAdmin: true,
        command_id: 7,
        user_id: 4
      },
      {
        command_id: 7,
        user_id: 5
      },
      {
        command_id: 7,
        user_id: 7
      },

      {
        isAdmin: true,
        command_id: 7,
        user_id: 8
      },
      {
        command_id: 7,
        user_id: 9
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('command_user', null, {});
  }
};
