import nextConnect from 'next-connect';
import { Tournaments, Game, MainPageSlider} from '../../../../db/models'
// const { Tournaments, Game, MainPageSlider} = require('../models');


const handler = nextConnect()
  .get(async (req, res) => {
  
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


export default handler;