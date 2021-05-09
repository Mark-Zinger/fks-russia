const {Router, request} = require('express');
const config = require('config');
const bcrypt = require('bcryptjs');
const { Command, CommandUser, UserAuth, CommandTour,Tournaments, Game  } = require('../models');
const Sequelize = require('sequelize');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken')
const Op = Sequelize.Op;


const router = Router();

router.get('/test', async (req, res) => {
  try {
    const comand = await Command.findAll({
      include: [
        {
          model: Tournaments,
          as: 'tour',
          through: {attributes: []}
        },
        {
          model: UserAuth,
          as: 'user',
          through: {
            attributes: []
          }
        },
      ]
    });
    res.json(comand);
  } catch (e) {
    res.status(500).json(e)
  }
  
})


router.get('/:id?', async(req, res) => {

  try {

    const search = req.query.search? req.query.search : false;
    const game = req.query.game? parseInt(req.query.game) : false;
    const id_team =  req.params.id ? req.params.id : false;

    const dbQuery = {
      model: Command, 
      as: 'command',
      attributes: ['id','name', 'password'],
      include: [
        {
          model: UserAuth,
          as: 'user',
          attributes: ['id','username','avatar'],
          through: {
            attributes: ['isAdmin']
          }
        },
        {
          model: Tournaments, 
          as: 'tour',
          include: [{ model: Game, as: 'game'}]
        },
      ]
    }

    const where = {}
    if(id_team) where['id'] = id_team;
    if(game) where['$tour.id_game$'] = game;
    if(search) where['name'] = {[Op.like]: `%${search}%`};;
    
    dbQuery.where = where;

    const teams = await Command[id_team?'findOne':'findAll'](dbQuery);
    res.json(teams);
  } catch (e) {
    res.status(500).json(e);
  }  
})

router.post('/',
  [
    check('name', 'Введите имя команды').isLength({ min: 6 }),
    check('token', 'Для создания команды нужно авторизироваться').exists()
  ],
    async(req, res) => {
      try {
        const {name, password=null, token,id_tour} = req.body;

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json(errors.array())
        }

        const verifyToken = jwt.verify( token, config.get('jwtSecret'))
        if(!verifyToken) res.status(400).json({messege: "Для создания команды нужно авторизироваться"})
        const {userId} = verifyToken;

        const candidate = await Command.findOne({where: {name}});
        if(candidate) res.status(403).json({messege: "Команда с таки именем уже существует"});

        let HashPass = password ? await bcrypt.hash(password, 12) : null;

        const team = await Command.create({ 
          name, 
          password: HashPass
        });

        let commandTour = null

        if(id_tour) {
        
          commandTour = await CommandTour.create({
            id_command: team.id,
            id_tour: parseInt(id_tour)
          })
        }

        const commandUser = await CommandUser.create({
          isAdmin: true,
          id_command: team.id,
          id_user: userId
        }) 
        
        res.json({team,commandUser, commandTour})
      } catch (e) {
        console.log(e);
        res.status(500).json(e)
      }

    }
  )

  router.post('/join',
    async(req, res) => {
      try {
        const {id_command, password=null, token} = req.body;
        const {userId} = jwt.verify( token, config.get('jwtSecret'))
        if(!userId) res.status(500).json({messege: 'Пользователь не авторизирован'});

        const command = await Command.findOne({
          where: {id: id_command},
          include: [
            {
              model: UserAuth,
              as: 'user',
              attributes: ['id','username','avatar'],
              through: {attributes: []}
            },
          ]
        });
        if(!command) res.status(500).json({messege: "Команда не найдена"});
        if(command.user.find(el => el.id == userId)) res.status(500).json({messege: "Пользователь уже состоит в этой команде"});
        if(command.user[4]) res.status(500).json({messege: "В команде превышено количество участников"});

        if(command.password){
          const isMatch = await bcrypt.compare(password, command.password)
          if (!isMatch) {
            return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
          }
        }

        const commandUser = await CommandUser.create({
          isAdmin: false,
          id_command,
          id_user: userId
        })


        res.json(commandUser)
      } catch (e) {
        console.log(e);
        res.status(500).json(e)
      }
    }
  )


module.exports = router
