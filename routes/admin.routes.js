const {crud,sequelizeCrud } = require('express-sequelize-crud');
const { UserAuth, Tournaments } = require('../models');

module.exports = (app) => {
  app.use(crud('/users', {
    ...sequelizeCrud(UserAuth),
    update: async (id, body) => { 
      // if(body.avatar.src) {
      //   const blob = new Blob(body.avatar.src)
      // }
      console.log(body);
      UserAuth.update(body, { where: { id } })
    },
  }))
  app.use(crud('/tours', sequelizeCrud(Tournaments)))
}
