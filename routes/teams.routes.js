const {Router, request} = require('express');
const { Command, CommandUser, UserAuth, CommandTour,Tournaments, Game  } = require('../models');
const Sequelize = require('sequelize');
const {check, validationResult} = require('express-validator');
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

router.post('/',
  [
    check('name', 'Введите имя команды').isLength({ min: 6 }),
    check('id_user', 'Для создания команды нужно авторизироваться').exists()
  ],
    async(req, res) => {
      try {
        const {name, password=null, id_user} = req.body;

        const candidate = await Command.findOne({where: {name}});
        if(candidate) res.status(403).json({messege: "Команда с таки именем уже существует"});

        const team = await Command.create({ name, password});
        if(team) {
          const comandUser = await CommandUser.create({
            isAdmin: true,
            id_command: team.id,
            id_user: 
          }) 
        }


        res.json(team)
      } catch (e) {
        console.log(e);
        res.status(500).json(e)
      }

    }
  )

module.exports = router
