import { DetectionContext, DetectionResult } from '../../domain/models.js';
import { IDetectorStrategy } from '../../domain/interfaces.js';
import signatures from '../../../data/signatures.json' with { type: 'json' };

export class BotDetector implements IDetectorStrategy {
    detect(context: DetectionContext): Partial<DetectionResult> | null {
        for (const bot of signatures.bots) {
            if (new RegExp(bot.regex, 'i').test(context.userAgent)) {
                return {
                    isBot: true,
                    device: { type: 'bot', brand: bot.category, model: bot.name },
                    os: { name: 'unknown', version: 'unknown' },
                    browser: { name: bot.name, version: 'unknown', engine: 'BotEngine' }
                };
            }
        }
        return null;
    }
}
