var express = require('express');
var router = express.Router();

/* GET SAHIFA listing. */
router.get('/', function(req, res, next) {
    res.render('sahifa');
});

module.exports = router;
