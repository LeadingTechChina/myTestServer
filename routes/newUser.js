var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/TestDB');

router.get('/', function(req, res, next) {
  res.render('newUser', { title: 'newUser' });
});

module.exports = router;
