import { describe, it, expect } from 'vitest';
import { DetectionCoordinator } from './detection-coordinator.js';

describe('DetectionCoordinator', () => {
    it('should detect Windows Chrome correctly', () => {
        const ctx = {
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        };
        const result = DetectionCoordinator.process(ctx);

        expect(result.os.name).toBe('Windows');
        expect(result.browser.name).toBe('Chrome');
        expect(result.isBot).toBe(false);
    });

    it('should detect GPTBot correctly', () => {
        const ctx = {
            userAgent: 'Mozilla/5.0 (compatible; GPTBot/1.0; +https://openai.com/gptbot)'
        };
        const result = DetectionCoordinator.process(ctx);

        expect(result.isBot).toBe(true);
        expect(result.device.type).toBe('bot');
    });

    it('should prioritize Client Hints', () => {
        const ctx = {
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            clientHints: {
                platform: 'Android',
                platformVersion: '14',
                mobile: true,
                model: 'Pixel 8'
            }
        };
        const result = DetectionCoordinator.process(ctx);

        expect(result.os.name).toBe('Android');
        expect(result.os.version).toBe('14');
        expect(result.device.type).toBe('mobile');
        expect(result.device.model).toBe('Pixel 8');
    });
});
