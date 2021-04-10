
import {Tournaments} from '../../../../db/models';

// import { Tournaments, Game, MainPageSlider} from '../../../../db/models';

const handler = async (req, res) => {
  // console.log(__dirname);
  const tournaments = await Tournaments.findAll();
  res.json(tournaments)
  // res.json({test: 'ts'})
}

export default handler;