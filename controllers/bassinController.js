var Bassin = require("../models/bassinModel");
var Site = require("../models/siteModel")
var bassinController = {};

//Add show list of bassin.
bassinController.list = function(req, res) {
  Bassin.find({}).populate({ path: 'site_id', select: 'nom' }).exec(function (err, bassins) {
    if (!err) {
      res.render("../views/bassins/index", {bassins: bassins});
    }
  });
};

// Add show single automates by id function.
bassinController.show = function(req, res) {
  Bassin.findOne({_id: req.params.id}).exec(function (err, bassins) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/bassins/show", {bassins: bassins});
    }
  });
};
//Add create automates function, it just redirects to create the page.
bassinController.create = function(req, res) {
  res.render("../views/bassins/create");
};


bassinController.save = function(req, res) {
  var bassin = new Bassin(req.body);

  bassin.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/bassins/create");
    } else {
      console.log("Successfully created a 'bassin'.");
      res.redirect("/bassin");
    }
  });
};

//Add edit automates by id function, it just redirects to edit page.
bassinController.edit = function(req, res) {
  Bassin.findOne({_id: req.params.id}).exec(function (err, bassins) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/bassins/edit/_id", {bassins: bassins});
    }
  });
};

// //Add update automates function for updating currently edited 

  bassinController.update = function(req, res) {
    // recuperation des tous les champs du formulaire à editer
    var nom=req.body.nom;
    var taille=req.body.taille;
    var site_id=req.body.site_id;
    var id = req.body.idBassin;
Bassin.findByIdAndUpdate(id, { 
  $set: { 
   nom:nom,
   taille:taille,
   site_id:site_id
  }
  }, function (err) {
  if (!err) {
    res.redirect("/bassin");
  }else{
    res.redirect("/error")
  }
  
})
  };

  bassinController.selectSites = function(req, res){
    Site.find({}).exec(function (err, result) {
        if(!err){
            res.render('../views/bassins/selectSite',{
                bassins : result
            })
        }
    })
  };

//Add delete automates by id function for remove single automates data.
bassinController.delete = function(req, res) {
var id=req.params.id;
  Bassin.remove({_id:id},function(err) {
    if(err) {
      console.log(err)
      res.redirect("/");
    }
    else {
      console.log("Bassins deleted!");
      res.redirect("/bassin");
    }
  });
};

module.exports = bassinController ;
