var express = require('express');
var router = express.Router();
var appdata = require('../data.json');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});


/* GET work page. */
router.get('/work', function(req, res) {
	var myProjects = [];
  //loop in the works object
	appdata.works.forEach ( function (item){
    //loop in more in the projects object
    item.projects.forEach(function(project) {
      myProjects = myProjects.concat(project["namecase"]);
    });
  });
  res.render('work', { 
  	title: 'Work',
  	projects: myProjects
  });
});


/* GET client page. */
router.get('/work/:clientid', function(req, res) {
  var myProjects = [];
  appdata.works.forEach ( function (item){
    //find what client matches what
    if (item.client == req.params.clientid) {

      item.projects.forEach(function(project) {
      myProjects = myProjects.concat(project["namecase"]);
    });

    }

  });
  res.render('work', { 
    title: 'Work',
    projects: myProjects
  });
});




/* GET profile page. */
router.get('/profile', function(req, res) {
  res.render('profile', { title: 'Profile' });
});

module.exports = router;
