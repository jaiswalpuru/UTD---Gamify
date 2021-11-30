var createError = require('http-errors');
var express = require("express");
var router = express.Router();
var helpers = require('../helpers/helpers.js');

var monk = require('monk');
var db = monk('localhost:27017/utd-gamify');
var locationColl = db.get('location');
var roomsColl = db.get('room');


function isEmptyObject(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    }
    return false;
  }
  


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

//book room for play
router.post('/book', (req, res, next) => {

    if (isEmptyObject(req.body)) {
        res.sendStatus(400)
    }else{
        console.log(req.body);
        try {
            let bookedBy = req.body.netId.trim();
            let roomNumber = req.body.roomNum;
            let timeDuration = req.body.timeDuration;
            let timeStart = Date.now();
            roomsColl.find({'roomNum':parseInt(roomNumber)},(err, result)=>{
                if (err) throw err;
                if (result.length === 0) {
                    console.log("ere I a");
                }
            });
        } catch(err) {
            console.log(err);
        }
    }
});

//return the data for an individual room
router.get('/room/:id', (req, res) => {
    try {
        roomsColl.find({ '_id' : parseInt(req.params.id.trim())}, (err, result) => {
            if (err) throw  err;
            res.json(result);
        });
    } catch(err){
        console.log(err);
    }
});

module.exports = router;

