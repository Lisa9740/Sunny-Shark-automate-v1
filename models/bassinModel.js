var mongoose = require('mongoose');

var bassinSchema = new mongoose.Schema({
    nom: String,
    taille : String,
    site_id: {type: mongoose.Schema.ObjectId, ref:'site'}
  });

  module.exports = mongoose.model('bassin', bassinSchema);