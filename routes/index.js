var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/buttons.ejs', function(req, res, next) {
  res.render('buttons');
});

router.get('/cards.ejs', function(req, res, next) {
  res.render('cards');
});

router.get('/404.ejs', function(req, res, next) {
  res.render('404');
});

router.get('/blank.ejs', function(req, res, next) {
  res.render('blank');
});


router.get('/charts.ejs', function(req, res, next) {
  res.render('charts');
});


router.get('/error.ejs', function(req, res, next) {
  res.render('error');
});
router.get('/forgot-password.ejs', function(req, res, next) {
  res.render('forgot-password');
});

router.get('/login.ejs', function(req, res, next) {
  res.render('login');
});

router.get('/register.ejs', function(req, res, next) {
  res.render('register');
});

router.get('/tables.ejs', function(req, res, next) {
  res.render('tables');
});

router.get('/utilities-animation.ejs', function(req, res, next) {
  res.render('utilities-animation');
});

router.get('/utilities-border.ejs', function(req, res, next) {
  res.render('utilities-border');
});
router.get('/utilities-color.ejs', function(req, res, next) {
  res.render('utilities-color');
});
router.get('/utilities-other.ejs', function(req, res, next) {
  res.render('utilities-other');
});
module.exports = router;
