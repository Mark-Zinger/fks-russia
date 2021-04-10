'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('main-page-slider', [
      {id: 1, id_tour: 18},
      {id: 2, id_tour: 13},
      {id: 3, id_tour: 10},
      {id: 4, id_tour: 2},
      {id: 5, id_tour: 17},
      {id: 6, id_tour: 3},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('main-page-slider', null, {});
  }
};
