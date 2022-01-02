const express = require('express');
const routes = express.Router();

const landings = require("../controllers/landings");

routes.get("/landings/mass/:value?", landings.getLandingsByMass );
routes.get("/landings/class/:value?", landings.getLandingsByClass );
routes.get("/landings", landings.getLandings );

module.exports = routes;