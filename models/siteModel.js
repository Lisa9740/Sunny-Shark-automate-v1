var mongoose = require('mongoose');

var siteSchema = new mongoose.Schema({
    nom: String,
    ville: String,
    adresse: String,
    numero_client: Number,
  });

  module.exports = mongoose.model('site', siteSchema);