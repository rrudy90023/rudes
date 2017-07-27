var express = require('express');
var router = express.Router();
var appdata = require('../data.json');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'rudes.de' });
});


/* GET work page. */
router.get('/work', function(req, res) {
	var myProjects = [];
  var myClients = [];
  var myUrls = [];
  //myClients = appdata.works;
  //loop in the works object
	appdata.works.forEach ( function (item){
    //loop in more in the projects object
    //item.projects.forEach(function(project) {
      myProjects = myProjects.concat(item.namecase);
    //});
  });
  res.render('work', { 
  	title: 'work',
  	projects: myProjects,
    clients: myClients,
    urls: myUrls,
    page: 'work'
  });
});


/* GET client page. */
router.get('/work/:clientid', function(req, res) {
  var myProjects = [];
  var myClients = [];
  var myUrls = [];
  //myClients = appdata.works;
  appdata.works.forEach ( function (item){
    //find what client matches what
    if (item.namecase == req.params.clientid) {
      myProjects = myProjects.concat("Project: " + item.title, "Client: " + item.client, item.desc);
      myUrls = myUrls.concat(item.url);
     //myClients.push(item);
      item.samples.forEach(function(samples) {
        myClients = myClients.concat(samples);
      //myProjects = myProjects.concat(project["namecase"]);
    });


      

      
    } 

  });
  res.render('work', { 
    title: 'work',
    projects: myProjects,
    clients: myClients,
    urls: myUrls,
    page: 'workDetail'
  });
});




/* GET profile page. */
router.get('/profile', function(req, res) {
  res.render('profile', { title: 'profile' });
});

module.exports = router;
