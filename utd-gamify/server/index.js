var express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

//db connection
var monk = require('monk');
var db = monk('localhost:27017/utd-gamify');
var gamesColl = db.get('games');
var locationColl = db.get('location');
var roomColl = db.get('room');
var usersColl = db.get('users');
var logsColl = db.get('logs');


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);  
});


app.get("/index",(req,res)=>{
    res.json({message:"hello world"});
})

app.get("/getlocations",(req,res) => {
  try {
    locationColl.find({},function(err, result){
      if (err) throw err;
      res.json(result);
    });
  }catch(err){
    console.log(err);
  }
});

app.post('/bookgame',(req, res, next) => {
  var netId = req.body.netid.trim();
  var players = req.body.players;
  var gameid = req.body.game;
  var roomNumber = req.body.room;
  var time = new Date();
  var book = false;
  var gameRespone;
  var roomResponse;
  var playersLeft = 0;

  //check if the player is already playing
  logsColl.findOne({ "netId" : netId}, function(err,result){
    if (err) throw err;
    if (res!=null){
      roomColl.findOne({_id:req.body.room},function(err, roomRes){
        if (err) throw err;
        roomResponse = roomRes;
      });

      var getTimeDiff = (result.endtime-result.time)/60000;
      gamesColl.findOne({_id:result.gameid},function(err, gresult){
        if (err) throw err;
        gameRespone = gresult;
      });
      if (getTimeDiff > gameRespone.time_limit) {
        logsColl.remove({_id:result._id},function(err, delRes){
          if (err) throw(err);
          book = true;
          playersLeft = result.players;
        });
      } else{
        res.json(result);
      }
    }

    if (roomResponse.capacityleft >= players){
      book = true;
    }else{
      res.json({"message":"Capacity Full"});
    }

    //do the actual booking
    if (book===true){
      var minutesToAdd = gameResponse.time_limit; //will be dynamic based on the game
      logsColl.insert({
        netId:netId,
        time : time,
        gameid :gameid,
        room :room,
        players:players,
        endtime : new Date(time.getTime() + minutesToAdd*60000)
      },function(err, res) { if (err) throw err; });
      var newValue = {$set:{capacityleft:capacityleft-players+playersLeft}};
      roomColl.update({_id:req.body.room}, newValue,function(err, roomRes){
        if (err) throw err;
        res.json({"message":"Booked"})
      });
    }
    
  });
});
  