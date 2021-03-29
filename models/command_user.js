'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class CommandUser extends Model { 
    static associate(models) {
      // CommandUser.belongsToMany(models.Ingredient, {
      //   through: "RecipeIngredient",
      //   foreignKey: 'recipeId',
      //   as: 'ingredients'
      // });
  } };
  CommandUser.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_command: {
      type: DataTypes.INTEGER,
    },
    id_user: {
      type: DataTypes.INTEGER
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
    
  }, {
    sequelize,
    tableName: 'CommandUser',
    modelName: 'CommandUser',
    timestamps: false
  });
  
  return CommandUser;
};