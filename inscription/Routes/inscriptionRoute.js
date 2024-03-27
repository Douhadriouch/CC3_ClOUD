const express = require('express');
const router = express.Router();
const Inscription = require('../models/inscription');


router.post('/', async (req, res) => {

  const utilisateur = await Utilisateur.findById(req.body.utilisateur_id);
  if (!utilisateur) return res.status(404).send('Utilisateur non trouvé');
  const evenement = await Evenement.findById(req.body.evenement_id);
  if (!evenement) return res.status(404).send('Événement non trouvé');

  const inscription = new Inscription(req.body);
  try {
    const savedInscription = await inscription.save();
    res.send(savedInscription);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;
