const {Router, request} = require('express');
const { Command, CommandUser, UserAuth, CommandTour,Tournaments, Game  } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const router = Router();

router.get('/', async(req, res) => {

  try {

    const search = req.query.search? req.query.search : false;
    const game = req.query.game? parseInt(req.query.game) : false;

    const dbQuery = {
      attributes: ['id_command', 'id_tour'],
      include: [
        {
          model: Command, 
          as: 'command',
          attributes: ['name', 'password'],
          include: [
            {
              model: CommandUser,
              as: 'command_user',
              attributes: ['isAdmin'],
              // required: true,

              include: [
                {
                  model: UserAuth, 
                  as: 'user',
                  attributes: ['id','username','avatar'],
                }
              ]
            }
          ]
        },
        {
          model: Tournaments, 
          as: 'tour',
          include: [{ model: Game, as: 'game'}]
        },
      ]
    }

    const where = {}
    if(game) where['$tour.id_game$'] = game;
    if(search) where['$command.name$'] = {[Op.like]: `%${search}%`};;
    
    dbQuery.where = where;

    const teams = await CommandTour.findAll(dbQuery);
    res.json(teams);
  } catch (e) {
    res.status(500).json(e);
  }  
})

module.exports = router
