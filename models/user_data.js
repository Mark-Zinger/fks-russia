'use strict';
const { Model } = require('sequelize');
const UserAuth = require('./user_auth');

module.exports = (sequelize, DataTypes) => {
  class UserData extends Model { static associate(models) {

    UserData.belongsTo(models.UserAuth, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
  }};
  UserData.init({    
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'user_data',
    modelName: 'UserData',
    timestamps: false,
  });

  // UserData.belongsTo(UserAuth, {
  //   foreignKey: 'userId',
  //   onDelete: 'CASCADE'
  // });
  
  return UserData;
};