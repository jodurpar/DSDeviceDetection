
'use strict';
import * as restify from "restify";
import * as restifySwaggerJsdoc from 'restify-swagger-jsdoc';
import { apiData } from "./api/common/apiData";
import { Utility } from "./utility/utility";


const corssMidleware = require('restify-cors-middleware');
import { Routes } from './api/V1/routes/routes';
import { CommonConstants } from './domain/enums/commonconstants';


export let _apiData = apiData;

// Create restify objects
const server = restify.createServer({
	name: apiData.apiName,
	versions: apiData.apiSupportedVersions
});

// setUp Cors
const cors = corssMidleware({
	origins: ['*'],
	allowHeaders: [CommonConstants.ACCEPTVERSION, CommonConstants.CLIENTAUTHORIZATION, CommonConstants.CLIENTAUTHENTICATION],
	exposeHeaders: []
});

// parsing settings
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.bodyParser({ mapParams: true }));

server.pre(restify.pre.sanitizePath());

server.pre(cors.preflight);
server.pre(cors.actual);

server.pre(function (req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	return next();
});

server.on('restifyError', function (req, res, err, callback) {
	err.toJSON = function customToJSON() {
		return err;
	};
	err.toString = function customToString() {
		return err.name + ' : ' + err.message;
	};
	return callback();
});


process.on('uncaughtException', function (err) {
	console.log('Caught exception: ' + err);
});



// #region Server default routes

(new Routes()).setRoutes(server);


restifySwaggerJsdoc.createSwaggerPage({
	title: _apiData.apiName, // Page title
	description: _apiData.apiDescription,
	version: _apiData.apiVersion, // Server version
	server: server, // Restify server instance created with restify.createServer()
	path: '/swagger', // Public url where the swagger page will be available
	apis: ['swagger/swaggerdoc.js']

});


server.listen(apiData.apiPort, function () {
	console.log(server.name + ' listening at ' + server.url);
})