var mongoose = require('mongoose');

var AutomateSchema = new mongoose.Schema({
    marque: String,
    modele: String,
    numeroserie: Number,
    configuration: JSON,
    bassin_affecte: {type: mongoose.Schema.ObjectId, ref:'bassin'}
  });

  module.exports = mongoose.model('Automate', AutomateSchema);