export default function handler(req, res) {
  const { id } = req.query
  res.end(`Tournaments Id: ${id}`)
}

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