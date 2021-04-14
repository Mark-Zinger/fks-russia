'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('command_user', [
      {
        isAdmin: true,
        id_command: 1,
        id_user: 1
      },
      {
        id_command: 1,
        id_user: 2
      },
      {
        id_command: 1,
        id_user: 3
      }, 
      {
        isAdmin: true,
        id_command: 3,
        id_user: 1
      },
      {
        id_command: 3,
        id_user: 2
      },
      {
        id_command: 3,
        id_user: 3
      },
      {
        isAdmin: true,
        id_command: 2,
        id_user: 4
      },
      {
        id_command: 2,
        id_user: 5
      },
      {
        id_command: 2,
        id_user: 6
      },

      {
        isAdmin: true,
        id_command: 6,
        id_user: 4
      },
      {
        id_command: 6,
        id_user: 5
      },
      {
        id_command: 6,
        id_user: 6
      },
      
      {
        id_command: 7,
        id_user: 6
      },

      {
        isAdmin: true,
        id_command: 7,
        id_user: 4
      },
      {
        id_command: 7,
        id_user: 5
      },
      {
        id_command: 7,
        id_user: 7
      },

      {
        isAdmin: true,
        id_command: 7,
        id_user: 8
      },
      {
        id_command: 7,
        id_user: 9
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('command_user', null, {});
  }
};
