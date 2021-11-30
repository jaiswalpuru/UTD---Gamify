var createError = require('http-errors');
var express = require("express");
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/utd-gamify');
var locationColl = db.get('location');
var roomsColl = db.get('room');
var bookings = db.get('bookings');

function isEmptyObject(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    }
    return false;
  }
  
function insertInMongo(obj) {
    try {
        bookings.insert({
            netId:obj.netId,
            roomNum:obj.roomNum,
            timeStart:obj.timeStart,
            timeDuration:obj.timeDuration,
        },(err, res)=>{
            if (err) throw err;
            return res;
        });
    } catch (err) {
        console.log(err);
    }
    return null;
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
    } else { 
        try {
            let bookedBy = req.body.netId.trim();
            let roomNumber = req.body.roomNum;
            let timeDuration = req.body.timeDuration;
            let timeStart = Date.now();

            let obj = {
                netId : bookedBy,
                roomNum : roomNumber,
                timeStart : timeStart,
                timeDuration : timeDuration,
            }

            roomsColl.find({'roomNum':parseInt(roomNumber)},(err, result)=>{
                if (err) throw err;

                if (result.length === 0) {
                    insertInMongo(obj);
                    res.json(obj);
                } else {
                    let prevTimeStart = result.timeStart;
                    let prevTimeDuration = result.timeDuration;
                    if (prevTimeStart+prevTimeDuration < timeStart) {
                        res.json({"message":"Room is already booked"});
                    } else {
                        insertInMongo(obj);
                        res.json(obj);
                    }
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
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;

