import { Request, Response } from 'express';
import { DetectionCoordinator } from '../../application/detection-coordinator.js';
import { DetectionContext } from '../../domain/models.js';

export class DetectionController {
    public static detect(req: Request, res: Response) {
        const queryUA = req.query.useragent as string;
        const userAgent = queryUA || req.headers['user-agent'] || '';

        // Si se pasa useragent por query, ignoramos los Client Hints de los headers del navegador
        // ya que probablemente el usuario quiere probar un UA específico.
        const hasQueryUA = !!queryUA;

        const clientHints: DetectionContext['clientHints'] = !hasQueryUA ? {
            platform: req.headers['sec-ch-ua-platform'] as string,
            platformVersion: req.headers['sec-ch-ua-platform-version'] as string,
            mobile: req.headers['sec-ch-ua-mobile'] === '?1',
            model: req.headers['sec-ch-ua-model'] as string,
        } : undefined;

        const ctx: DetectionContext = {
            userAgent,
            clientHints: clientHints && (clientHints.platform || clientHints.model) ? clientHints : undefined
        };

        const result = DetectionCoordinator.process(ctx);
        return res.json(result);
    }
}
