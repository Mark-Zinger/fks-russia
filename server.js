const express = require('express');
const path = require('path');
const app = express();
const port = 3000
const User = require('./models/user')

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    
  res.render('homepage',{title: JSON.stringify(User)})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})