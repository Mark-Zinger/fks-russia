const express = require('express');
const path = require('path');
const db = require('./models');
let session = require('express-session');

const app = express();
const port = 3000


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/pages"));

app.use(session({
  secret: 'aaa2C44-4D44-WppQ38Siuyiuy',
  cookie: { userId: 'test123'},
  resave: true,
  saveUninitialized: true
}));

app.use(express.static(__dirname + '/public'));

const mainRoute = require("./routes/main");

app.use(mainRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

exports.app = app;