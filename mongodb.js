const mongoose = require('mongoose');
const URL_MONGOOSE = process.env.URL_MONGOOSE;

mongoose.connect(URL_MONGOOSE, { useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', (error) => console.log(`Erreur de connexion  ${error}`));
db.once('open', () => console.log('connecter la base de données'));

module.exports = mongoose.connection;

