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
  try{
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

  //check if the player is already playing
  logsColl.findOne({ "netId" : netId}, function(err,result){
    if (err) throw err;
    if (res!=null){
      res.json(result);
    }
  });
  
  var time = new Date();
  var minutesToAdd = 30; //will be dynamic based on the game
  var gameid = req.body.game;
  try {
    logsColl.insert({
      netId:netId,
      time : time,
      gameid :gameid,
      room :room,
      endtime : new Date(time.getTime() + minutesToAdd*60000)
    },function(err, res) { if (err) throw err; });
  } catch(err) {
    console.log(err);
  } finally {
    res.json({"message":"inserted"});  
  }
});
  