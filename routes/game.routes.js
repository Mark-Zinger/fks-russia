const {Router, request} = require('express');
const { Game } = require('../models');



const router = Router();

router.get('/', async(req, res) => {
  try {
    const game = await Game.findAll();
    res.json(game)
  } catch (e) {
    res.status(500).json(e)
  }
})

module.exports = router
