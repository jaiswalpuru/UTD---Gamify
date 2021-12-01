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

    userColl.find({netId:netId}, (err, findRes) => {
        if (err) {
            throw err;
        }

        if (findRes.length !== 0) {
            var pswd = findRes[0].password;
            if (password === pswd) {
                res.json({username : netId});
            } else {
                res.json({message : "","error" : 'Username/Password didn\'t match'});
            }
        } else {
            res.json({message : "","error" : 'Username/Password didn\'t match'});
        }
    });
});

// signing up the user into
router.post('/signup', (req, res) => {
    let netId = req.body.signUpBody.netIdSU.trim();
    let name = req.body.signUpBody.name;
    let email = req.body.signUpBody.email.trim();
    let pswd = req.body.signUpBody.passwordSU.trim();
    let msg = '';
    let err_msg = '';

    //check if the user already exists
    userColl.findOne({netId:netId}, (err, findRes) => {
        if (err) throw err;
        if (findRes) {
            msg='User already exits';
            res.json({"message" : msg, "error" : err_msg});
        } else {
            //insert the user
            userColl.insert({
                netId : netId,
                username : name,
                email : email,
                role : "student",
                password : pswd,
                created_date: new Date(),
            }, function(err, insertRes) {
                if (err) { throw err; }
            });    
            msg = 'User SignUp Successfull';
            res.json({"message" : msg, "error" : err_msg});
        }
    });
});

module.exports = router;