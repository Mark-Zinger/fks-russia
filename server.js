const express = require('express')
const config = require('config')
const path = require('path')
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin.routes')

const db = require('./models')


const app = express()

// app.use(express.json({ extended: true }))

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/auth', require('./routes/auth.routes'))
app.use('/tournaments', require('./routes/tournaments.routes'))
app.use('/game', require('./routes/game.routes'))
app.use('/teams', require('./routes/teams.routes'))

adminRoutes(app)

app.use('/resources', express.static(path.join(__dirname, '/resources')))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT =  5000

async function start() {
  try {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

