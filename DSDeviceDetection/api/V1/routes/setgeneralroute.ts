﻿

import * as restify from "restify";

import { Common } from '../../Common/Common';
import { Utility } from '../../../utility/utility';
import { CommonConstants } from '../../../domain/enums/commonconstants';
import { HTTPStatusCodes } from '../../../domain/enums/httpstatuscodes';

export class setGeneralRoute {

	constructor() { }
	public static async Set(server: any, verb: string, route: string, asyncRoute: string, params: string, pathName: string, className: string, methodName: string) {
		await this.SetSync(server, verb, route, params, pathName, className, methodName);
		if (asyncRoute != undefined) {
			await this.SetAsync(server, verb, asyncRoute, params, pathName, className, methodName + CommonConstants.ASYNC);
		}
	}



	private static async SetSync(server: any, verb: string, route: string, params: string, pathName: string, className: string, methodName: string): Promise<void> {
		await server[verb](route + params, async function (req: restify.Request, res: restify.Response, next: restify.Next): Promise<void> {
			return new Promise<void>(async (resolve, reject) => {
				try {
					resolve(Common.executeSync(req, res, next, pathName, className + '.' + methodName));
				} catch (e) {
					reject(Utility.Messages.sendObjectMessage(HTTPStatusCodes.INTERNAL_SERVER_ERROR, e.message, className + CommonConstants.POINT + methodName));
				}
			})
		});
	}

	public static async SetAsync(server: any, verb: string, route: string, params: string, pathName: string, className: string, methodName: string): Promise<void> {
		await server[verb](route + params, async function (req: restify.Request, res: restify.Response, next: restify.Next): Promise<void> {
			try {
				return new Promise<void>(async (resolve, reject) => {
					try {
						resolve(await Common.executeAsync(req, res, next, pathName, className + CommonConstants.POINT + methodName));
					} catch (e) {
						reject(Utility.Messages.sendObjectMessage(HTTPStatusCodes.INTERNAL_SERVER_ERROR, e.message, className + CommonConstants.POINT + methodName));
					}
				})
			}
			catch (e) {
				return new Promise<void>(async (resolve, reject) => {
					try {
						resolve(await Common.executeAsync(req, res, next, pathName, className + '.' + methodName));
					} catch (e) {
						reject(Utility.Messages.sendObjectMessage(HTTPStatusCodes.INTERNAL_SERVER_ERROR, e.message, className + CommonConstants.POINT + methodName));
					}
				})
			}
		});
	}
}
