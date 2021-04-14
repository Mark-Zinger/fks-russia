const {Router, request} = require('express');
const { Command, CommandUser, UserAuth, CommandTour,Tournaments, Game  } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const router = Router();

router.get('/', async(req, res) => {

  try {
    const teams = await CommandTour.findAll({
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
              include: [
                {
                  model: UserAuth, 
                  as: 'user_auth',
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
    })
    
    const filterTeams = teams.filter(el => el.command.command_user[0])

    res.json(filterTeams);
  } catch (e) {
    res.status(500).json(e);
  }  
})

module.exports = router
