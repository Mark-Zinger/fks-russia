'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('main-page-slider', [
      {id: 1, id_tour: 10},
      {id: 2, id_tour: 7},
      {id: 3, id_tour: 18},
      {id: 4, id_tour: 20},
      {id: 5, id_tour: 13},
      {id: 6, id_tour: 21},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('main-page-slider', null, {});
  }
};
