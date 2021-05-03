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
      backgroundURL: Sequelize.STRING,
      fond: Sequelize.INTEGER,
      brackets_url: Sequelize.STRING(128)
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tour');
  }
};