import { DetectionContext, DetectionResult } from '../../domain/models.js';
import { IDetectorStrategy } from '../../domain/interfaces.js';
import signatures from '../../../data/signatures.json' with { type: 'json' };

export class LegacyRegexDetector implements IDetectorStrategy {
    detect(context: DetectionContext): Partial<DetectionResult> | null {
        const ua = context.userAgent;

        // Browser
        let browser = { name: 'unknown', version: 'unknown', engine: 'unknown' };
        for (const b of (signatures.browsers as any[])) {
            const match = ua.match(new RegExp(b.regex, 'i'));
            if (match) {
                browser.name = b.name;
                browser.version = match[1] || 'unknown';
                browser.engine = b.engine || 'unknown';
                break;
            }
        }

        // OS
        let os = { name: 'unknown', version: 'unknown' };
        for (const o of signatures.os) {
            const match = ua.match(new RegExp(o.regex, 'i'));
            if (match) {
                os.name = o.name;
                os.version = match[1]?.replace(/_/g, '.') || 'unknown';
                break;
            }
        }

        // Device
        let device = { type: 'desktop' as any, brand: 'unknown', model: 'unknown' };
        for (const d of signatures.devices) {
            const match = ua.match(new RegExp(d.regex, 'i'));
            if (match) {
                device.type = d.type;

                // Basic heuristics to extract brand/model from mobiles if no Client Hints are available
                if (d.type === 'mobile' || d.type === 'tablet') {
                    const mobileMatch = ua.match(/\(([^;]+);/);
                    if (mobileMatch && mobileMatch[1]) {
                        const parts = mobileMatch[1].split(' ');
                        device.brand = parts[0] || 'unknown';
                        device.model = mobileMatch[1];
                    }
                }
                break;
            }
        }

        return {
            isBot: false,
            browser,
            os,
            device
        };
    }
}
