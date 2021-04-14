'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class CommandUser extends Model { 
    static associate(models) {

      CommandUser.belongsTo(models.UserAuth, {
        foreignKey: 'id_user',
        as: 'user'
      });
      CommandUser.belongsTo(models.Command, {
        foreignKey: 'id_command',
        as: 'command'
      });
     
    } 
  };
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
    tableName: 'command_user',
    modelName: 'CommandUser',
    timestamps: false
  });
  
  return CommandUser;
};