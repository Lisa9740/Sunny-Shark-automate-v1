var Site = require("../models/siteModel");

var siteController = {};


//Add show list of bassin.
siteController.list = function(req, res) {
  Site.find({}).exec(function (err, sites) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/site/index", {sites: sites});
    }
  });
};

// Add show single automates by id function.
siteController.show = function(req, res) {
  Site.findOne({_id: req.params.id}).exec(function (err, sites) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/show", {sites: sites});
    }
  });
};
//Add create automates function, it just redirects to create the page.
siteController.create = function(req, res) {
  res.render("../views/sites/create");
};


siteController.save = function(req, res) {
  var site = new Site(req.body);

  site.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/site/create");
    } else {
      console.log("Successfully created an employee.");
      res.redirect("/");
    }
  });
};

//Add edit automates by id function, it just redirects to edit page.
siteController.edit = function(req, res) {
  Site.findOne({_id: req.params.id}).exec(function (err, sites) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/sites/edit/_id", {sites: sites});
    }
  });
};

// //Add update automates function for updating currently edited 

  siteController.update = function(req, res) {
    // recuperation des tous les champs du formulaire à editer
    var nom=req.body.nom;
    var ville=req.body.ville;
    var adresse=req.body.adresse;
    var numero_client=req.body.numero_client;
    var id = req.body.idSite;
 

Site.findByIdAndUpdate(id, { 
  $set: { 
   nom:nom,
   ville:ville,
   adresse:adresse,
   numero_client:numero_client
  }
  }, function (err) {
  if (!err) {
    res.redirect("/site/");
  }else{
    res.redirect("/error")
  }
  
})
  };

//Add delete automates by id function for remove single automates data.
siteController.delete = function(req, res) {
var id=req.params.id;
  Site.remove({_id:id},function(err) {
    if(err) {
      console.log(err)
      res.redirect("/");
    }
    else {
      console.log("Sites deleted!");
      res.redirect("/site/");
    }
  });
};

module.exports = siteController ;