var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'rudes.de' });
});


/* GET work page. */
router.get('/work', function(req, res) {
  res.render('work', { title: 'WORK' });
});


/* GET work page. */
router.get('/profile', function(req, res) {
  res.render('profile', { title: 'PROFILE' });
});

module.exports = router;
