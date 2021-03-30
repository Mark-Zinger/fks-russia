const {Router} = require('express');
const { Tournaments, Game, MainPageSlider} = require('../models');


const router = Router();

router.get('/', async(req, res) => {
  const limit = req.query.limit? parseInt(req.query.limit) : 10;
  
  try {
    const tournaments = await Tournaments.findAll(
      { limit, include: [{ model: Game, as: 'game'}]
    })

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
      include: [{
          model: Game,
          as: 'game'
      }]
    })
    res.json(tournament)
  } catch (e) {
    res.status(500).json(e)
  }
})



module.exports = router
