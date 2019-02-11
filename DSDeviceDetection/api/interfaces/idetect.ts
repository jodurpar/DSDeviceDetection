import * as restify from 'restify';

export interface IDeviceDetect {
	DeviceDetect(req: restify.Request, res: restify.Response);
	DeviceDetectAsync(req: restify.Request, res: restify.Response): Promise<object>;
}