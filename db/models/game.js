'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Game extends Model { 
    static associate(models) {
      Game.hasMany(models.Tournaments, { foreignKey: 'id' });
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