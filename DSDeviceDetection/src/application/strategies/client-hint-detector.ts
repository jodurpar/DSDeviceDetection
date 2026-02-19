import { DetectionContext, DetectionResult } from '../../domain/models.js';
import { IDetectorStrategy } from '../../domain/interfaces.js';

export class ClientHintDetector implements IDetectorStrategy {
    detect(context: DetectionContext): Partial<DetectionResult> | null {
        if (!context.clientHints) return null;

        const { platform, platformVersion, mobile, model, brands } = context.clientHints;

        if (!platform && !brands) return null;

        const mainBrand = brands?.[0];

        return {
            isBot: false,
            os: {
                name: platform || 'unknown',
                version: platformVersion || 'unknown',
            },
            device: {
                type: mobile ? 'mobile' : 'desktop',
                brand: 'unknown',
                model: model || 'unknown',
            },
            browser: {
                name: mainBrand?.brand || 'unknown',
                version: mainBrand?.version || 'unknown',
                engine: 'unknown'
            }
        };
    }
}
