var mongoose = require('mongoose');

var marqueSchema = new mongoose.Schema({
    nom: String,
  });

  module.exports = mongoose.model('marque', marqueSchema);