const express = require('express');
const path = require('path');
const app = express();
const port = 3000
const db = require('./models')

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    db.User.findAll()
        .then((data)=> {
            res.render('homepage', {...data[0].dataValues} )
        })
        .catch(console.error)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})