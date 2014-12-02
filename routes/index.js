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
  var myClients = [];
  myClients = appdata.works;
  //loop in the works object
	appdata.works.forEach ( function (item){
    //loop in more in the projects object
    //item.projects.forEach(function(project) {
      myProjects = myProjects.concat(item.namecase);
    //});
  });
  res.render('work', { 
  	title: 'Work',
  	projects: myProjects,
    clients: myClients
  });
});


/* GET client page. */
router.get('/work/:clientid', function(req, res) {
  var myProjects = [];
  var myClients = [];
  myClients = appdata.works;
  appdata.works.forEach ( function (item){
    //find what client matches what
    if (item.namecase == req.params.clientid) {
     //myClients.push(item);
      //item.projects.forEach(function(project) {
      //myProjects = myProjects.concat(project["namecase"]);
    //});
      myProjects = myProjects.concat(item.namecase, item.client, item.preview, item.desc);
    } else {
      return;
    }

  });
  res.render('work', { 
    title: 'Work',
    projects: myProjects,
    clients: myClients,
  });
});




/* GET profile page. */
router.get('/profile', function(req, res) {
  res.render('profile', { title: 'Profile' });
});

module.exports = router;
