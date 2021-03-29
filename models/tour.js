'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Tournaments extends Model { 
    static associate(models) {
      Tournaments.belongsTo(models.Game, {
        foreignKey: 'id_game',
        as: 'game'
      });
      Tournaments.hasMany(models.MainPageSlider, { foreignKey: 'id' });
    } 
};
  Tournaments.init({
    id_game: DataTypes.INTEGER,
    name: DataTypes.STRING(64),
    dateBegin: DataTypes.DATE,
    backgroundURL: DataTypes.STRING,
    fond: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'tour',
    modelName: 'Tournaments',
    timestamps: false
  });
  
  return Tournaments;
};