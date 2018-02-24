// Node Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all burger to DOM)
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var burgObject = { burger: data };
    console.log(burgObject);
    res.render('index', burgObject);
  });
});


// Makes a Burger
router.post('/burger/make', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});


// Devours Burger
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = router;