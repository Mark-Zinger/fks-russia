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

      Tournaments.belongsToMany(models.Command, {
        through: "CommandTour",
        foreignKey: 'id_tour',
        as: 'command'
      });
    } 
};
  Tournaments.init({
    id_game: DataTypes.INTEGER,
    name: DataTypes.STRING(64),
    dateBegin: DataTypes.DATE,
    backgroundURL: DataTypes.STRING,
    fond: DataTypes.INTEGER,
    brackets_url:  DataTypes.STRING(128)
  }, {
    sequelize,
    tableName: 'tour',
    modelName: 'Tournaments',
    timestamps: false
  });
  
  return Tournaments;
};