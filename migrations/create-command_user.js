'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('command_user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      id_command:{
        type: Sequelize.INTEGER,
        references: {
          model: 'command',
          key: 'id',
          as: 'id_command'
        },
        onDelete: 'CASCADE'
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          as: 'id_user'
        }
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('command_user');
  }
};
