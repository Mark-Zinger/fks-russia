const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render('home'));
router.get("/tour", (req, res) => res.render('tours_list', {
    "list" : [1, 2, 3, 4]
}))

module.exports = router;