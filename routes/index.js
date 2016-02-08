var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'No Click' });
  res.render('index', { name: 'Bob' });
  
});

module.exports = router;
