const mongoose = require('mongoose');

const inscriptionSchema = new mongoose.Schema({
  id: {
        type: Number,
        required: true,
        unique: true
      },

  utilisateur_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur',
    required: true,
  },
  evenement_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Evenement',
    required: true,
  },
});

const InscriptionModel = mongoose.model('Inscription', inscriptionSchema);
module.exports = InscriptionModel;
