import { DetectionContext, DetectionResult } from './models.js';

export interface IDetectorStrategy {
    detect(context: DetectionContext): Partial<DetectionResult> | null;
}
