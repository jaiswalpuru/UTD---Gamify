var createError = require('http-errors');
var express = require("express");
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/utd-gamify');
var userColl = db.get('users');

// login is checking if the user entered the correct netid and password
router.post('/signin', (req, res) => {
    var netId = req.body.signInBody.netId.trim();
    var password = req.body.signInBody.password.trim();

    userColl.find({netId:netId}, function(err, findRes){
        if (err) {
            throw err;
        }else{
            
        }
        if (findRes.length !== 0) {
            var pswd = findRes[0].password;
            if (password === pswd) {
                res.json({username : netId});
            } else {
                res.json({message : "Username/Password didn't match"});
            }
        }else {
            res.json({message : "Username/Password didn't match"});
        }
    });
});

// signing up the user into
router.post('/signup', (req, res) => {
    var netId = req.body.signUpBody.netId.trim();
    var name = req.body.signUpBody.name;
    var email = req.body.signUpBody.email.trim();
    var pswd = req.body.signUpBody.password.trim();
    var msg = '';
    
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
                    if (err) {
                        msg = '500';   
                    } else {
                        msg = '200';
                    }
                    
                });
            } catch(err) {
                msg = '500';
            }
        }
        res.json(msg);
    });
});

module.exports = router;