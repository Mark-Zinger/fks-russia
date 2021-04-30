const {crud,sequelizeCrud } = require('express-sequelize-crud');
const { UserAuth, Tournaments } = require('../models');
const fetch = require('node-fetch');


const _default = {
  getList: ({ filter, limit, offset, order }) => UserAuth.findAndCountAll({ limit, offset, order, where: filter }),
  getOne: id => UserAuth.findByPk(id),
  create: body => UserAuth.create(body),
  update: (id, body) => UserAuth.update(body, { where: { id } }),
  destroy: id => UserAuth.destroy({ where: { id } }),
}

module.exports = (app) => {
  app.use(crud('/users', {
    ..._default,
    update: async (id, body) => { 
      if(body.avatar.src) {
        const blob = new Blob(body.avatar.src)
      }
      console.log(body);
      UserAuth.update(body, { where: { id } })
    },
  }))
  app.use(crud('/tour', sequelizeCrud(Tournaments)))
}
