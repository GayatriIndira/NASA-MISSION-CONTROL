const express = require('express');
const planetsRouter = require('./planets/planets.router');
const launchesRouter = require('./launches/launches.router');

//create a router that capturing version1 of API
const api = express.Router();

//versioning api
api.use('/planets', planetsRouter);
api.use('/launches', launchesRouter);

module.exports = api;