'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class MainPageSlider extends Model { 
    static associate(models) {
      MainPageSlider.belongsTo(models.Tournaments, {
        foreignKey: 'id_tour',
        as: 'tour'
      });
    } 
};
  MainPageSlider.init({
    id_tour: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'main-page-slider',
    modelName: 'MainPageSlider',
    timestamps: false
  });
  
  return MainPageSlider;
};