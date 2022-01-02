const express = require('express');
const routes = express.Router();

const neas = require("../controllers/neas");

routes.get("/neas", neas.getNeas );

module.exports = routes;