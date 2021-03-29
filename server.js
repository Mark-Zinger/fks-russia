const express = require('express')
const config = require('config')
const path = require('path')
const bodyParser = require('body-parser');
const db = require('./models')


const app = express()

// app.use(express.json({ extended: true }))

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/auth', require('./routes/auth.routes'))
app.use('/tournaments', require('./routes/tournaments.routes'))
app.use('/main-page-slider', require('./routes/main-page-slider.routes'))


// app.use('/api/link', require('./routes/link.routes'))
// app.use('/t', require('./routes/redirect.routes'))

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
    // await mongoose.connect(config.get('mongoUri'), {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true
    // })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

