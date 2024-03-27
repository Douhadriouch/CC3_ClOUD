const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
 
  nom: {
    type: String,
    minlength: 5
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  login: {
    type: String,
    required: true,
    unique: true
  },

  mdp: {
    type: String
  }
});

const utilisateurModel = mongoose.model('utilisateur', utilisateurSchema);

module.exports = utilisateurModel;