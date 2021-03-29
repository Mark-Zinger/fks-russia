'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tour', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_game:{
        type: Sequelize.INTEGER,
        references: {
          model: 'game',
          key: 'id',
          as: 'id_game'
        },
        onDelete: 'CASCADE'
      },
      name: Sequelize.STRING(64),
      dateBegin: Sequelize.DATE,
      background: Sequelize.STRING,
      fond: Sequelize.INTEGER,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tour');
  }
};