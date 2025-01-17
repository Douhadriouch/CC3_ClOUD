const express = require('express');
require('dotenv').config();

const host = process.env.HOST
const PORT = process.env.PORT || 3001;
const URL_MONGOOSE = process.env.URL_MONGOOSE;
const DBNAME = process.env.DBNAME;

var app = express()
app.use(express.json());

const db = require('../mongodb.js');
const chefRoutes = require('./Routes/inscriptionRoute.js')

app.use('/inscription', chefRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
