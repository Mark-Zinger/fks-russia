'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class UserAuth extends Model { 
    static associate(models) {
      UserAuth.belongsToMany(models.Command, {
        through: "CommandUser",
        foreignKey: 'id_user',
        as: 'command'
      });
    } 
  };
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
    role: {
      type: DataTypes.STRING(1),
      defaultValue: '0'
    },
    confirm: {
      type: DataTypes.STRING(1),
      defaultValue: '0'
    },
  }, {
    sequelize,
    tableName: 'user',
    modelName: 'UserAuth',
    timestamps: false
  });
  
  return UserAuth;
};