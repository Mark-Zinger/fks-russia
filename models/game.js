'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Game extends Model { 
    static associate(models) {
      // Task.belongsTo(models.User, {
      //   foreignKey: {
      //     name: 'userId',
      //     allowNull: false
      //   },
      //   as: 'game'
      // });
    } 
};
  Game.init({
    title: DataTypes.STRING(64),
    icon: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'game',
    modelName: 'Game',
    timestamps: false
  });
  
  return Game;
};