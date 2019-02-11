import { Utility } from '../../../utility/utility';

import { setGeneralRoute } from './setGeneralRoute';

export class Routes extends Utility.version {

	private _statistics: boolean;

	public get Statistics(): boolean { return this._statistics; }
	public set Statistics(value: boolean) {
		if (value !== undefined) this._statistics = value;
	}

	public async setRoutes(server) {

		try {

			// #region controllers

			setGeneralRoute.Set(server, 'get', '/DeviceDetect', '/DeviceDetectAsync', '', '/devicedetect', 'DeviceDetect', 'DeviceDetect').then(result => { }).catch(e => { });
			setGeneralRoute.Set(server, 'get', '/DeviceDetect', '/DeviceDetectAsync', '/:useragent', '/devicedetect', 'DeviceDetect', 'DeviceDetect').then(result => { }).catch(e => { });
			// #endregion

			// #region swagger

			setGeneralRoute.Set(server, 'get', '/Swagger', undefined, '', '/swagger', 'swagger', 'swagger').then(result => { }).catch(e => { });;
			setGeneralRoute.Set(server, 'get', '/ReadSwagger', undefined, '', '/swagger', 'swagger', 'readSwagger').then(result => { }).catch(e => { });;

			// #endregion

			return;
		}

		catch (e) {
			return;
		}
	}
}
