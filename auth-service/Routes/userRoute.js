const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const utilisateurModel = require('../models/utilisateurModel'); 

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { nom, email,login ,  mdp } = req.body;

    const userexiste = await UserModel.findOne({ email });
    if (userexiste) {
      return res.status(400).json({ message: 'Cet utilisateur existe déjà.' });
    }

    const hashedPassword = await bcrypt.hash(mdp, 10);

    const newUtilisateur = new utilisateurModel({
      nom,
      email,
      login,
      mdp: hashedPassword
    });

    await newUtilisateur.save();

    res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l`inscription :', error);
    res.status(500).json({ message: 'Une erreur est survenue.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { login, mdp } = req.body;

    const utilisateur = await utilisateurModel.findOne({ login });
    if (!utilisateur) {
      return res.status(400).json({ message: 'Identifiants invalides.' });
    }

    const mdpvalid = await bcrypt.compare(mdp, user.mdp);
    if (!mdpvalid) {
      return res.status(400).json({ message: 'Identifiants invalides.' });
    }

    const token = jwt.sign({ userId: user._id }, 'votre_secret_key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Erreur lors de cnx:', error);
    res.status(500).json({ message: 'erreur est survenue lors de connexion ' });
  }
});

module.exports = router;