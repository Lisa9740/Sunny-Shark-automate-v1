var express = require('express');
var router = express.Router();
var siteController = require("../controllers/siteController.js");


// Get all automateControllers
router.get('/', siteController.list);

// Get single automateController by id
router.get('/show/:id', siteController.show);

// Create automateController
router.get('/create', siteController.create);

// Save automateController
 router.post('/save', siteController.save);

// Edit automateController
router.get('/edit/:id', siteController.edit);

// Edit update
router.post('/update/', siteController.update);

// Edit update
router.post('/delete/:id', siteController.delete);

module.exports = router;
