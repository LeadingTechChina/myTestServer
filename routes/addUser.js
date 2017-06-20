var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/TestDB');

/* GET users listing. */
router.post('/', function(req, res, next) {
	var userName = req.body.username;
    var userEmail = req.body.useremail;

	var collection = db.get('usercollection');

	collection.insert({
            "username" : userName,
            "email" : userEmail
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // If it worked, set the header so the address bar doesn't still say /adduser
                res.location("userlist");
                // And forward to success page
                res.redirect("userlist");
            }
        });

});

module.exports = router;
