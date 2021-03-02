const express = require('express');
const path = require('path');
const app = express();
const port = 3000
const db = require('./models');
let session = require('express-session');

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/pages"));

app.use(session({
  secret: 'aaa2C44-4D44-WppQ38Siuyiuy',
  cookie: { userId: 'test123'},
  resave: true,
  saveUninitialized: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // db.User.findOne()
    //   .then((data)=> {
    //       console.log(data)
    //       req.session.save(function(err) {
    //         // session saved
    //       })
    //       res.render('homepage', {...data.dataValues} )
    //   })
    //   .catch(console.error)
    res.render('homepage')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})