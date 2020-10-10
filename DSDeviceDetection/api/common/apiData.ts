
/******************************************************************
 * 09/10/2020 - Jose Dur�n Pareja
 * 
 * Contains api basic data
 * V0.2.0 - Updated version
 */


class _apiData {

    private _apiName: string = 'dsDeviceDetectionApi';
    private _apiVersion: string = '0.2.0';
    private _apiSupportedVersions: [string] = ['1.0.0'];
    private _apiHost: string = 'localhost';
    private _apiPort: string = '51235';
    private _apiDescription: string = 'Demonstrating how to detect devices with user agent, restify and swagger';

    get apiName(): string {
        return this._apiName;
    }
    set apiName(value: string) {
        this._apiName = value;
    }
    get apiVersion(): string {
        return this._apiVersion;
    }
    set apiVersion(value: string) {
        this._apiVersion = value;
    }

    get apiSupportedVersions(): [string] {
        return this._apiSupportedVersions;
    }
    set apiSupportedVersions(value: [string]) {
        this._apiSupportedVersions = value;
    }

    get apiHost(): string {
        return this._apiHost;
    }
    set apiHost(value: string) {
        this._apiHost = value;
    }

    get apiPort(): string {
        return this._apiPort;
    }
    set apiPort(value: string) {
        this._apiPort = value;
    }

    get apiDescription(): string {
        return this._apiDescription;
    }
    set apiDescription(value: string) {
        this._apiDescription = value;
    }

}

export let apiData = new _apiData();

