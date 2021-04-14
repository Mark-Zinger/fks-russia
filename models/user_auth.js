'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class UserAuth extends Model { 
    static associate(models) {
      UserAuth.hasMany(models.CommandUser, { foreignKey: 'id' });
  } };
  UserAuth.init({
   
    email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        unique: true
    },
    username: {
      type:DataTypes.STRING(32),
      unique: true
    },
    password: DataTypes.STRING,
    createAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    fullname: DataTypes.STRING(128),
    avatar: DataTypes.STRING,
    role: DataTypes.STRING(8),
  }, {
    sequelize,
    tableName: 'user_auth',
    modelName: 'UserAuth',
    timestamps: false
  });
  
  return UserAuth;
};