var express = require('express');
var router = express.Router();
var automateController = require("../controllers/automateController.js");


// Get all automateControllers
router.get('/', automateController.list);

// Get single automateController by id
router.get('/automate/show/:id', automateController.show);

// Create automateController
router.get('/automate/create', automateController.create);

// Save automateController
 router.post('/save', automateController.save);

// Edit automateController
router.get('/edit/:id', automateController.edit);

// Edit update
router.post('/update/', automateController.update);

router.get('/selectBassin/', automateController.selectBassins)
// Edit update
router.post('/delete/:id', automateController.delete);

module.exports = router;
