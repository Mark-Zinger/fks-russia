'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class CommandTour extends Model { 
    static associate(models) {
      CommandTour.belongsTo(models.Command, {
        foreignKey: 'id_command',
        as: 'command'
      });
      CommandTour.belongsTo(models.CommandUser, {
        // through: 'command_user',
        foreignKey: 'id_command',
        as: 'command_user'
      });
      CommandTour.belongsTo(models.Tournaments, {
        foreignKey: 'id_tour',
        as: 'tour'
      });
    } 
  };
  CommandTour.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    
    id_command: {
      type: DataTypes.INTEGER,
    },
    id_tour: {
      type: DataTypes.INTEGER,
    },
    confirm: {
      type: DataTypes.STRING(1),
      defaultValue: '0'
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
  }, {
    sequelize,
    tableName: 'command_tour',
    modelName: 'CommandTour',
    timestamps: false
  });
  
  return CommandTour;
};