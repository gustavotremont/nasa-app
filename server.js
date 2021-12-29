/****************** Nodejs Dependencies ******************/
const express = require('express');
require('dotenv').config();

/****************** database connection ******************/
require('./utils/dbMongo');

/****************** Enable Express ******************/
const app = express();
const port = process.env.PORT || 3000;

/****************** Express Settings ******************/
app.use(express.json());
app.use(express.urlencoded( { extended: false } ));
// app.use(cors()); //Inhabilita el error de CORS

/****************** Import routes ******************/
const indexLandings = require('./routes/landings');

/****************** Routes ******************/
app.use('/api/astronomy', indexLandings);

/****************** Actice Server ******************/
app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
});