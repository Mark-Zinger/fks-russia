'use strict';
const { Model } = require('sequelize');
const UserData = require('./user_data');

module.exports = (sequelize, DataTypes) => {
  class UserAuth extends Model { static associate(models) {} };
  UserAuth.init({
   
    email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        unique: true
    },
    userId: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'user_auth',
    modelName: 'UserAuth',
    timestamps: false
  });
  // UserAuth.belongsTo(UserData);
  return UserAuth;
};