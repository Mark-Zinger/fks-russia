import nextConnect from 'next-connect';
import { Tournaments, Game, MainPageSlider} from '../../../../db/models'
// const { Tournaments, Game, MainPageSlider} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const handler = nextConnect()
  .get(async (req, res) => {

    const limit = req.query.limit? parseInt(req.query.limit) : 10;
    const search = req.query.search? req.query.search : false;
    const game = req.query.game? parseInt(req.query.game) : false;
    const page = req.query.page? req.query.page: 1;
    console.log(limit,search, game, req.query.game, page);

    const where = {};
  
    if(search) where.name = {[Op.like]: `%${search}%`};
    if(game) where.id_game = game;
  
    const dbQuery = {
      limit,
      include: [{ model: Game, as: 'game'}],
      where
    }

    try {
      const tournaments = await Tournaments.findAll(dbQuery)
  
      res.json(tournaments);
    } catch (e) {
      res.status(500).json(e);
    }  
  })
    


export default handler;