'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model { static associate(models) {
    
  }};
  Tournament.init({
    idTour: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    dateBegin: DataTypes.DATE,
    fond: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'tour',
    modelName: 'Tournament'
  });
  return Tournament;
};