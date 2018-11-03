var mongoose = require('mongoose');

var villeSchema = new mongoose.Schema({
    nom: String,
   
  });

  module.exports = mongoose.model('ville', villeSchema);