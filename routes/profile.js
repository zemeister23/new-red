var express = require('express');
var router = express.Router();

/* GET profile listing. */
router.get('/', function(req, res, next) {
  res.render('profile.jade');
});
/* POST profile listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a PROFILE POST METHOD');
});
module.exports = router;
