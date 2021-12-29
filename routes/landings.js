const express = require('express');
const routes = express.Router();

const landings = require("../controllers/landings");

routes.get("/landings/:routeParam?/:value?", landings.getLandings ); //Mostart Perfil del Usuario Logeado

module.exports = routes;