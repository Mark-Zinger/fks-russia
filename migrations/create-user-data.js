'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: { type: Sequelize.STRING },
      userName: { type: Sequelize.STRING},
      createAt: { 
        type: Sequelize.DATE,
      },
      avatar: { type: Sequelize.STRING },
      role: Sequelize.STRING(8),
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_data');
  }
};