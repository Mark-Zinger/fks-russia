'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('command_tour', [
      {
        id_command: 1,
        id_tour: 18
      },
      {
        id_command: 2,
        id_tour: 18
      },
      {
        id_command: 3,
        id_tour: 10
      },
      {
        id_command: 4,
        id_tour: 23
      },
      {
        id_command: 5,
        id_tour: 4
      },
      {
        id_command: 6,
        id_tour: 4
      },
      {
        id_command: 7,
        id_tour: 4
      },
      {
        id_command: 8,
        id_tour: 4
      },
      {
        id_command: 9,
        id_tour: 7
      },
      {
        id_command: 10,
        id_tour: 5
      },
      {
        id_command: 10,
        id_tour: 8
      },
      {
        id_command: 11,
        id_tour: 11
      },
      {
        id_command: 12,
        id_tour: 11
      },
      {
        id_command: 13,
        id_tour: 11
      },
      {
        id_command: 15,
        id_tour: 14
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('command_tour', null, {});
  }
};
