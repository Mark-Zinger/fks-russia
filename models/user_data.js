'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserData extends Model {
    static associate(models) {}
  };
  UserData.init({
    userId: DataTypes.STRING,
    nickName: DataTypes.STRING(32),
    createdAt: DataTypes.DATE,
    avatar: DataTypes.STRING,
  }, {
    sequelize
  });
  return UserData;
};