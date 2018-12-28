const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {

    res.render("index");
});

router.get("/loggedIn", function (req, res) {
    
    res.render("loggedIn");
});

router.get("/loggedOut", function (req, res) {
    
    res.render("loggedOut");
});


module.exports = router;