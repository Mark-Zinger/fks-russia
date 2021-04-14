'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: Sequelize.STRING,
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      createAt: {
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      fullname: Sequelize.STRING(128),
      avatar: Sequelize.STRING,
      role: {
        type: Sequelize.STRING(8),
        defaultValue: 'user'
      },
      isConfirmUser:{
        type: Sequelize.STRING(16),
        defaultValue: 'not confirmed'
      } 
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('user');
  }
};
