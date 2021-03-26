'use strict';
const { Model } = require('sequelize');
const UserData = require('./user_data')


module.exports = (sequelize, DataTypes) => {
  class UserAuth extends Model { 
    static associate(models) {
      UserAuth.hasOne(models.UserData, {
        foreignKey: 'id',
      })
  } };
  UserAuth.init({
   
    email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        unique: true
    },
    username: DataTypes.STRING(32),
    password: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'user_auth',
    modelName: 'UserAuth',
    timestamps: false
  });

  // UserAuth.hasOne(UserData, {
  //   foreignKey: 'userId',
  // })
  
  return UserAuth;
};