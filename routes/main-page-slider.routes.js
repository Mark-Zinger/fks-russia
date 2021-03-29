const {Router} = require('express');
const { Tournaments, Game, MainPageSlider } = require('../models');


const router = Router();

router.get('/', async(req, res) => {
  // const limit = req.query.limit? parseInt(req.query.limit) : 10;
  
  try {
    const mainPageSlides = await MainPageSlider.findAll(
      { include: [{all: true}]
    })
    
    res.json(mainPageSlides);
  } catch (e) {
    res.status(500).json(e);
  }  
})

module.exports = router
