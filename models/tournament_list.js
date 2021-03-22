'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TournamentList extends Model { static associate(models) {

  }};
  TournamentList.init({
    userId: DataTypes.STRING,
    idTour: DataTypes.INTEGER,
    isActual: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName: 'tour_list',
    modelName: 'TournamentList'
  });
  return TournamentList;
};