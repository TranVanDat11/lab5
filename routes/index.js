var express = require('express');
var router = express.Router();
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  }, filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now());
  },
})

var upload = multer({
  storage: storage,
  // dest: 'uploads/',
  limits: {fileSize: 2 * 1024 * 1024},
  fileFilter: function (req, file, cb) {
    //kiem tra duoi file hoac ca yeu cau
    var ten = file.originalname;
    var size = file.length;
    if (ten.indexOf('.jpg') > -1) {
      cb(null, true);
    } else {
      cb(new Error('duoi file phai la JPG'), false);
    }
  }
}).array('file', 2)

router.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if(err != null){
      res.send(err.message);
    }else{
      const title = req.body.exampleInputTitle;
      const detail = req.body.exampleInputDetail;
      const file = req.files[0];
      var path = file.path
      res.json({Title: title, Detail: detail, Path: path})
    //   var title = req.body.title;
    //   var description = req.body.description;
    //
    //   var files = req.files;
    //
    //   var result = new Object();
    //   result.title = title;
    //   result.description = description;
    //   result.links = [];
    //
    //   for(let i = 0 ;i < files.length; i++){
    //     result.links.push(files[i].path);
    //   }
    //
    //   res.send(JSON.stringify(result));
     }
  })
})
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

router.get('/form.ejs', function(req, res, next) {
  res.render('form');
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



