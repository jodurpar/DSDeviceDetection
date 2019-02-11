import * as restify from 'restify';
import * as fs from 'fs';

import { Utility } from '../../../../utility/utility';
import { apiData } from '../../../../app';

const swaggerJSDoc = require('swagger-jsdoc');

export namespace api100 {

	export class swagger extends Utility.version {

		// Swagger init
		// swagger definition
		static swaggerDefinition = {
			info: {
				title: apiData.apiName,
				version: apiData.apiVersion,
				description: apiData.apiDescription
			},
			host: apiData.apiHost + ':' + apiData.apiPort,
			basePath: '/',
		};
		// options for the swagger docs
		static options = {
			// import swaggerDefinitions
			swaggerDefinition: swagger.swaggerDefinition,
			// path to the API docs
			apis: ['./api-docs/swaggerdoc.js'] // pass all in array,
		};
		// initialize swagger-jsdoc
		static swaggerSpec = swaggerJSDoc(swagger.options);

		public static get SwaggerSpec() { return swagger.swaggerSpec; }

		public readSwagger(req: restify.Request, res: restify.Response) {
			res.send(swagger.swaggerSpec);
		}

		public swagger(req: restify.Request, res: restify.Response) {
			try {
				const fileContent = fs.readFileSync('./api-docs/index.html', 'utf8').replace('{{host}}', swagger.swaggerDefinition.host);
				res.writeHead(200, {
					'Content-Length': Buffer.byteLength(fileContent),
					'Content-Type': 'text/html'
				});
				res.write(fileContent);
				res.end();
			} catch (e) {
				console.log('==' + e);
			}
		}

	}
}