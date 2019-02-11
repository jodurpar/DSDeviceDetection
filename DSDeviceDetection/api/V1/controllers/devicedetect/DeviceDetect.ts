
import * as restify from 'restify';

import { Utility } from '../../../../utility/utility';
import { IDeviceDetect } from '../../../interfaces/idetect';
import { getMethodName } from '../../decorators/decorators';
import { DetectModule } from '../../../common/detectmodule';
import { HTTPStatusCodes } from '../../../../domain/enums/httpstatuscodes';



export namespace api100 {

	export class DeviceDetect extends Utility.version implements IDeviceDetect {

		@getMethodName
		public DeviceDetect(req: restify.Request, res: restify.Response) {
			const _self = this;
			try {
				let deviceInfo = DetectModule.Detect(req.params.useragent);
				res.send(HTTPStatusCodes.OK, deviceInfo);
			}
			catch (e) {
				const error = Utility.status.getStatusFromMessage(e.message);
				res.send(error, Utility.Messages.sendObjectMessage(error, e.message, Utility.method.getMethodName(_self)));
			}
		}

		@getMethodName
		public async DeviceDetectAsync(req: restify.Request, res: restify.Response) {
			const _self = this;
			return new Promise<any>(async (resolve, reject) => {
				try {

					let deviceInfo = DetectModule.Detect(req.params.useragent);
					resolve(res.send(HTTPStatusCodes.OK, deviceInfo));
				}
				catch (e) {
					const error = Utility.status.getStatusFromMessage(e.message);
					reject(await res.send(error, Utility.Messages.sendObjectMessage(error, e.message, Utility.method.getMethodName(_self))));
				}
			});
		}
	}
}

