import { DetectionContext, DetectionResult } from '../domain/models.js';
import { IDetectorStrategy } from '../domain/interfaces.js';
import { BotDetector } from './strategies/bot-detector.js';
import { ClientHintDetector } from './strategies/client-hint-detector.js';
import { LegacyRegexDetector } from './strategies/regex-detector.js';

export class DetectionCoordinator {
    private static strategies: IDetectorStrategy[] = [
        new BotDetector(),
        new ClientHintDetector(),
        new LegacyRegexDetector()
    ];

    public static process(ctx: DetectionContext): DetectionResult {
        let finalResult: Partial<DetectionResult> = {
            isBot: false,
            device: { type: 'desktop', brand: 'unknown', model: 'unknown' },
            os: { name: 'unknown', version: 'unknown' },
            browser: { name: 'unknown', version: 'unknown', engine: 'unknown' }
        };

        for (const strategy of this.strategies) {
            const partial = strategy.detect(ctx);
            if (partial) {
                // Merge partial results (Chain of Responsibility)
                // Merge partial results (Chain of Responsibility)
                finalResult = {
                    ...finalResult,
                    ...partial,
                    device: {
                        type: partial.device?.type || finalResult.device?.type || 'desktop',
                        brand: partial.device?.brand || finalResult.device?.brand || 'unknown',
                        model: partial.device?.model || finalResult.device?.model || 'unknown'
                    },
                    os: {
                        name: partial.os?.name || finalResult.os?.name || 'unknown',
                        version: partial.os?.version || finalResult.os?.version || 'unknown'
                    },
                    browser: {
                        name: partial.browser?.name || finalResult.browser?.name || 'unknown',
                        version: partial.browser?.version || finalResult.browser?.version || 'unknown',
                        engine: partial.browser?.engine || finalResult.browser?.engine || 'unknown'
                    }
                };

                // If it's a bot or we have enough info from Client Hints, we can stop early
                if (partial.isBot || (strategy instanceof ClientHintDetector && partial.os?.name !== 'unknown')) {
                    break;
                }
            }
        }

        return finalResult as DetectionResult;
    }
}
