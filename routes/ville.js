var express = require('express');
var router = express.Router();
var villeController = require("../controllers/automateController.js");


// Get all automateControllers
router.get('/', villeController.list);

// Get single automateController by id
router.get('/show/:id', villeController.show);

// Create automateController
router.get('/create', villeController.create);

// Save automateController
 router.post('/save', villeController.save);

// Edit automateController
router.get('/edit/:id', villeController.edit);

// Edit update
router.post('/update/', villeController.update);

// Edit update
router.post('/delete/:id', villeController.delete);

module.exports = router;
