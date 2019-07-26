var express = require('express');
var router = express.Router();

/* GET profile listing. */
router.get('/', function(req, res, next) {
  //res.send('PROFILE make by RedWolf Team: Zemeister,Zakari,Behruz,Shohnur');
  res.render('profile.jade');
});
/* POST profile listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a PROFILE POST METHOD');
});
module.exports = router;
