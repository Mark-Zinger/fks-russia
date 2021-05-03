const {Router, request} = require('express');
const { Tournaments, Game, MainPageSlider, Command,CommandUser} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const router = Router();

router.get('/', async(req, res) => {
  const limit = req.query.limit? parseInt(req.query.limit) : 10;
  const search = req.query.search? req.query.search : false;
  const game = req.query.game? parseInt(req.query.game) : false;
  const page = req.query.page? req.query.page: 1;
  console.log(search, game, req.query.game);
  
  const where = {};
  
  if(search) where.name = {[Op.like]: `%${search}%`};
  if(game) where.id_game = game;

  const dbQuery = {
    limit,
    include: [{ model: Game, as: 'game'}],
    where
  }
 
  
  // if(game) where

  try {
    const tournaments = await Tournaments.findAll(dbQuery)

    res.json(tournaments);
  } catch (e) {
    res.status(500).json(e);
  }  
})

router.get('/main-slider', async(req, res) => {
  
  try {
    const mainPageSlides = await MainPageSlider.findAll(
      { 
        order: [
          ['id', 'ASC']
        ],
        include: [{ 
        model: Tournaments, 
        as: 'tour',
        
        include: [{
          model: Game,
          as: 'game',
          // fields: ['title'],
        }]
      }]
    })
    
    res.json(mainPageSlides);
  } catch (e) {
    res.status(500).json(e);
  }  
})


router.get('/:id', async(req, res) => {
  try {
    const tournament_id = req.params.id;
    const tournament = await Tournaments.findOne({
      where: {id: tournament_id} ,
      include: [
        {
          model: Game,
          as: 'game'
        },
        {
          model: Command,
          as: 'command',
          through: {attributes: ['confirm', 'createdAt']},
        }
      ]
    })
    res.json(tournament)
  } catch (e) {
    res.status(500).json(e)
  }
})



module.exports = router
