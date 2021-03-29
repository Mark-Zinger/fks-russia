'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('user_auth', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: Sequelize.STRING,
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      createAt: Sequelize.DATE,
      fullname: Sequelize.STRING(128),
      avatar: Sequelize.STRING,
      role: Sequelize.STRING(8),
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('user_auth');
  }
};
