'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('main-page-slider', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tour: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tour',
          key: 'id',
          as: 'id_tour'
        }
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('main-page-slider');
  }
};
