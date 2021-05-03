'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('command_tour', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      id_command: {
        type: Sequelize.INTEGER,
        references: {
          model: 'command',
          key: 'id',
          as: 'id_command'
        }
      },
      id_tour: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tour',
          key: 'id',
          as: 'id_tour'
        }
      },
      confirm: {
        type: Sequelize.STRING(1),
        defaultValue: '0'
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('command_tour');
  }
};
