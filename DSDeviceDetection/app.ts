
'use strict';
import * as restify from "restify";
import { Utility } from "./utility/utility";


const corssMidleware = require('restify-cors-middleware');
import { Routes } from './api/V1/routes/routes';
import { CommonConstants } from './domain/enums/commonconstants';


export let apiData = Utility.fileUtility.readFileAsObject('./apiData.json');


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

//parsing settings
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


server.get('/*', restify.plugins.serveStatic({
	directory: './api-docs',
}));

server.get('/', function (req, res, next) {
	res.redirect(server.url.replace('[::]', 'localhost') + '/Swagger', next);
	next();
});


server.listen(apiData.apiPort, function () {
	console.log(server.name + ' listening at ' + server.url);
})