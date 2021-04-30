"use strict";
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable("user", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: Sequelize.STRING,
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      createAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      fullname: Sequelize.STRING(128),
      avatar: Sequelize.STRING,
      role: {
        type: Sequelize.STRING(1),
        defaultValue: "0",
      },
      confirm: {
        type: Sequelize.STRING(1),
        defaultValue: '0'
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable("user");
  },
};
