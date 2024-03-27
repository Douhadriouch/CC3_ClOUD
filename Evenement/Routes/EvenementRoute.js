const express = require('express');
const EvenementModel = require('../models/EvenementModel');
const router = express.Router();

router.post('/', async (req, res) => {
    const evenement = new Evenement(req.body);
    try {
      const savedEvenement = await evenement.save();
      res.send(savedEvenement);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erreur serveur');
    }
  });
  router.get('/:id', async (req, res) => {
    try {
      const evenement = await Evenement.findById(req.params.id);
      if (!evenement) return res.status(404).send('Événement non trouvé');
      res.send(evenement);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erreur serveur');
    }
  });
  