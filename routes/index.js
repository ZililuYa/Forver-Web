var express = require('express');
var router = express.Router();


router.all('/*', function (req, res, next) {
  console.log('路过！');
  res.render('index');
  next();
});


module.exports = router;
