'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAuth extends Model {
    static associate(models) {}
  };
  UserAuth.init({
    email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        unique: true
    },
    userId: DataTypes.STRING,
    pwd: DataTypes.STRING,
    
  }, {
    sequelize,
    tableName: 'user_auth',
    modelName: 'UserAuth'
  });
  return UserAuth;
};