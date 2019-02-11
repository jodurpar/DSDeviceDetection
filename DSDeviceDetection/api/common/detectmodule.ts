
import { DeviceDetectorService } from '../common/ngx-device-detector/DeviceDetector';

export class DetectModule {

	constructor(e) {
	}

	public static Detect(userAgent: string): any {
		let deviceService = new DeviceDetectorService(userAgent);
		return {
			deviceInfo: deviceService.getDeviceInfo(),
			isMobile: deviceService.isMobile() && !deviceService.isTablet(),
			isDesktop: deviceService.isDesktop(),
			isTablet: deviceService.isTablet()
		};
	}

}