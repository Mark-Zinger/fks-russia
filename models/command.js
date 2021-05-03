'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Command extends Model { 
    static associate(models) {
      // Command.hasMany(models.CommandUser, { foreignKey: 'id' });
      // Command.hasMany(models.CommandUser, {
      //   foreignKey: 'id',
      //   as: 'command_user'
      // });
      Command.belongsToMany(models.Tournaments, {
        through: "CommandTour",
        foreignKey: 'id_command',
        as: 'tour'
      });
      Command.belongsToMany(models.UserAuth, {
        through: "CommandUser",
        foreignKey: 'id_command',
        as: 'user'
      });
  } };
  Command.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(64),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: null
    }
    
  }, {
    sequelize,
    tableName: 'command',
    modelName: 'Command',
    timestamps: false
  });
  
  return Command;
};