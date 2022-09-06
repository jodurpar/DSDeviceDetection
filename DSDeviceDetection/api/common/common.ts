
/// 

import { Utility } from '../../utility/utility';
import { api100 } from '../V1/controllers/devicedetect/devicedetect';
import { CommonConstants } from '../../domain/enums/commonconstants';
import { HTTPStatusCodes } from '../../domain/enums/httpstatuscodes';


export class Common extends Utility.version {

	public static executeFunctionByName(functionName, context, req, res): any {
		var namespaces = functionName.split('.');
		var func = namespaces.pop();
		for (var i = 0; i < namespaces.length; i++) {
			context = context[namespaces[i]];
		}
		try {
			let _context = new context;
			return (_context)[func].call(_context, req, res);
		} catch (e) {
			return e;
		}
	}

	public static executeFunctionByNameAsync(functionName, context, req, res): Promise<any> {
		var namespaces = functionName.split('.');
		var func = namespaces.pop();
		for (var i = 0; i < namespaces.length; i++) {
			context = context[namespaces[i]];
		}
		let _context = new context;
		return new Promise<any>(async (resolve, reject) => {
			try {
				try {
					resolve(await (_context)[func].call(_context, req, res));
				} catch (e) {
					reject(e);
				}
			}
			catch (e) {
				reject(e);
			}
		});
	}



	public static createClassByName(functionName, context): any {
		var namespaces = functionName.split(".");
		var func = namespaces.pop();
		for (var i = 0; i < namespaces.length; i++) {
			context = context[namespaces[i]];
		}
		try {
			return new context;
		} catch (e) {
			var message = e;
		}

	}

	public static getPropertyByName(functionName, context): any {
		var namespaces = functionName.split(".");
		var func = namespaces.pop();
		for (var i = 0; i < namespaces.length; i++) {
			context = context[namespaces[i]];
		}
		try {
			return new context;

		} catch (e) {
			var message = e;
		}

	}

	public static getApiVersion(req): string {
		return req.headers[CommonConstants.ACCEPTVERSION].replace(/\./g, "")
	}



	public static executeSync(req, res, next, classRoute, apiRoute) {
		let ApiCalls;
		try {
			let apiVersion = '100';

			ApiCalls = apiRoute.split('.');
			if (ApiCalls.length > 1) {
				(import('../V' + apiVersion.substring(0, 1) + '/controllers' + classRoute + '/' + ApiCalls[0]) as Promise<typeof api100>)
					.then((k) => {
						try {
							Common.executeFunctionByName('api' + apiVersion + '.' + apiRoute, k, req, res);
						} catch (e) {
							res.send(HTTPStatusCodes.INTERNAL_SERVER_ERROR, e.message);
						}
					})
					.catch(function (e) {
						res.send(HTTPStatusCodes.INTERNAL_SERVER_ERROR, Utility.Messages.sendObjectMessage(HTTPStatusCodes.INTERNAL_SERVER_ERROR, e.message, ApiCalls[1] + ': ' + req.headers['accept-version']));
					});
			}
			else throw 'Bad route: ' + apiRoute;

		} catch (e) {
			console.log('5');

			res.send(HTTPStatusCodes.INTERNAL_SERVER_ERROR, Utility.Messages.sendObjectMessage(HTTPStatusCodes.INTERNAL_SERVER_ERROR, e.message, ApiCalls[1] + ': ' + req.headers['accept-version']));
		}
		finally {
			next();
		}

	}


	public static async executeAsync(req, res, next, classRoute, apiRoute) {
		let ApiCalls;
		try {
			// let apiVersion = req.headers[CommonConstants.ACCEPTVERSION].replace(/\./g, "");
			let apiVersion = '100';


			ApiCalls = apiRoute.split('.');
			if (ApiCalls.length > 1) {

				var selectedNamespace = import('../V' + apiVersion.substring(0, 1) + '/controllers' + classRoute + '/' + ApiCalls[0]) as Promise<typeof api100>;
				selectedNamespace
					.then(async (k) => {
						try {
							await Common.executeFunctionByNameAsync('api' + apiVersion + '.' + apiRoute, k, req, res)
								.then(() => {
								})
								.catch(() => {
								});
						} catch (e) {
							res.send(Utility.Messages.sendObjectMessage(HTTPStatusCodes.INTERNAL_SERVER_ERROR, e.message, req.getRoute()));
						}
					})
					.catch(function (e) {
						res.send(Utility.Messages.sendObjectMessage(HTTPStatusCodes.INTERNAL_SERVER_ERROR, e.message, ApiCalls[1] + ': ' + req.headers[CommonConstants.ACCEPTVERSION]));
					});
			}
			else res.send(Utility.Messages.sendObjectMessage(HTTPStatusCodes.INTERNAL_SERVER_ERROR, 'Bad route:' + apiRoute, ApiCalls[1] + ': ' + req.headers[CommonConstants.ACCEPTVERSION]));

		} catch (e) {
			res.send(Utility.Messages.sendObjectMessage(HTTPStatusCodes.INTERNAL_SERVER_ERROR, e.message, ApiCalls[1] + ': ' + req.headers[CommonConstants.ACCEPTVERSION]));
		}
		finally {
			next();
		}

	}


}

