var mongoose = require('mongoose');

var AutomateSchema = new mongoose.Schema({
    marque: String,
    modele: String,
    secteur: String,
    lieu: String,
    bassin: String,
    numeroserie: Number,
  });

  module.exports = mongoose.model('Automate', AutomateSchema);