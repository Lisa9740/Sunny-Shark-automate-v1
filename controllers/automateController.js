var Automate = require("../models/AutomateModel");
var Ville = require ("../models/villeModel");
var Bassin = require("../models/bassinModel");

/*-------------------------------------------------------------------*/
var automateController = {};


//Add show list of automates.
automateController.list = function(req, res) {
  Automate.find({}).populate({ path: 'bassin_affecte', select: 'nom' }).exec(function (err, automates) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/automates/index", {automates: automates});
    }
  });
};

// Add show single automates by id function.
automateController.show = function(req, res) {
  Automate.findOne({_id: req.params.id}).exec(function (err, automates) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/automates/show", {automates: automates});
    }
  });
};
//Add create automates function, it just redirects to create the page.
automateController.create = function(req, res) {
  res.render("../views/automates/create");
};


automateController.save = function(req, res) {
  var automate = new Automate(req.body);

  automate.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/automates/index");
    } else {
      console.log("Successfully created an employee.");
      res.redirect("/automate/");
    }
  });
};

//Add edit automates by id function, it just redirects to edit page.
automateController.edit = function(req, res) {
  Automate.findOne({_id: req.params.id}).exec(function (err, automates) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/automates/edit/_id", {automates: automates});
    }
  });
};

// //Add update automates function for updating currently edited 

  automateController.update = function(req, res) {
    // recuperation des tous les champs du formulaire à editer
    var id=req.body.idAutomate;
    var marque=req.body.marque;
    var modele=req.body.modele;
    var numeroserie = req.body.numeroserie;
    var bassin = req.body.bassin;
    var configuration = req.body.configuration;
    

Automate.findByIdAndUpdate(id, { 
  $set: { 
    marque : marque,
    modele : modele,
    numeroserie:numeroserie,
    bassin:bassin,
    configuration:configuration
  }
  }, function (err) {
  if (!err) {
    res.redirect("/automate");
  }else{
    res.redirect("/error")
  }
  
})
  };


  automateController.selectBassins = function(req, res){
    Bassin.find({}).exec(function (err, result) {
        if(!err){
            res.render('../views/automates/selectBassin',{
                bassins : result
            })
        }
    })
  };
//Add delete automates by id function for remove single automates data.
automateController.delete = function(req, res) {
var id=req.params.id;
  Automate.remove({_id:id},function(err) {
    if(err) {
      console.log(err)
      res.redirect("/");
    }
    else {
      console.log("Automate deleted!");
      res.redirect("/");
    }
  });
};
/*------------------------------------------------------------- */


module.exports = automateController;

