'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_auth', [
      {
        email: 'testemail@email.com',
        username: "MarkZinger",
        password: "$2a$12$cMllgFxSUfXx0y6QULw88.UiF8h3FKfOhSGXgGrUmcOD9dgJSZNSm",
        avatar: "/resources/images/user_avatar/test_avatar.png",
        fullname: "Бодренков Михаил Дмитриевич",
        createAt: new Date (),
        role: 'user'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_auth', null, {});
  }
};
