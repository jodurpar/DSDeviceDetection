export interface DetectionContext {
    userAgent: string;
    clientHints?: {
        platform?: string;
        platformVersion?: string;
        mobile?: boolean;
        model?: string;
        brands?: Array<{ brand: string; version: string }>;
    };
}

export type DeviceType = 'desktop' | 'mobile' | 'tablet' | 'tv' | 'console' | 'bot';

export interface DetectionResult {
    isBot: boolean;
    device: {
        type: DeviceType;
        brand: string;
        model: string;
    };
    os: {
        name: string;
        version: string;
    };
    browser: {
        name: string;
        version: string;
        engine: string;
    };
}
