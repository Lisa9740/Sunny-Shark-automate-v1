var express = require('express');
var router = express.Router();
var bassinController = require("../controllers/bassinController.js");


// Get all automateControllers
router.get('/', bassinController.list);

// Get single automateController by id
router.get('/show/:id', bassinController.show);

// Create automateController
router.get('/create', bassinController.create);

// Save automateController
 router.post('/save', bassinController.save);

// Edit automateController
router.get('/edit/:id', bassinController.edit);

// Edit update
router.post('/update/', bassinController.update);

// Permet d'integrer le site dans le document bassin 
router.get('/selectSite/', bassinController.selectSites)

// Remove 
router.post('/delete/:id', bassinController.delete);

module.exports = router;
