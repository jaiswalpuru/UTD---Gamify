var createError = require('http-errors');
var express = require("express");
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/utd-gamify');
var locationColl = db.get('location');

// return the all the locations
router.get('/locations', (req, res) => {
    try {
        locationColl.find({}, (err, result) => {
          if (err) throw err;
          res.json(result);
        });
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;

