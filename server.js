/****************** Nodejs Dependencies ******************/
const express = require('express');
const path = require('path');
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
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

/****************** Import routes ******************/
const indexLandings = require('./routes/landings');
const indexNeas = require('./routes/neas')

/****************** Routes ******************/
app.use('/api/astronomy', indexLandings);
app.use('/api/astronomy', indexNeas);
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

/****************** Actice Server ******************/
app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
});