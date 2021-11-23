var createError = require('http-errors');
var express = require("express");
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/utd-gamify');
var userColl = db.get('users');

// login is checking if the user entered the correct netid and password
router.post('/login', (req, res) => {

});

// signing up the user into
router.post('/signup', (req, res) => {
    var netId = req.body.netId.trim();
    var name = req.body.name;
    var email = req.body.email.trim();
    var pswd = req.body.password.trim();
    var msg = ''
    //check if the user already exists
    userColl.findOne({netId:netId},function(err, findRes){
        if (err) msg='500';
        if (findRes) {
            msg='400';
        } else {
            //insert the user
            try {
                userColl.insert({
                    netId : netId,
                    name : name,
                    email : email,
                    password : pswd,
                }, function(err, insertRes) {
                    if (err) throw err;
                });
            }catch(err){
                msg = '500';
            }
        }
        res.json(msg);
    });
});

module.exports = router;