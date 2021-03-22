'use strict';
const { Model } = require('sequelize');
const user_auth = require('./user_auth');
module.exports = (sequelize, DataTypes) => {
  class UserData extends Model { static associate(models) {
  }};
  UserData.init({
    userId: DataTypes.STRING,
    nickName: DataTypes.STRING(32),
    createdAt: DataTypes.DATE,
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'user_data',
    modelName: 'UserData'
  });
  // UserData.hasOne(UserAuth,
  //   {
  //     foreignKey: "userId"
  //   }
  // );
  return UserData;
};