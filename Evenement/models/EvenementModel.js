const mongoose = require('mongoose');

const evenementSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  titre: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  lieu: {
    type: String,
    required: true,
  },
  categorie: {
    type: String,
  },
});

const EvenementModel = mongoose.model('Evenement', evenementSchema);
module.exports = EvenementModel;
