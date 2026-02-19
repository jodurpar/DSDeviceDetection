import { Router } from 'express';
import { DetectionController } from '../controllers/detection.controller.js';

const router = Router();

/**
 * @openapi
 * /api/v1/detect:
 *   get:
 *     summary: Detecta dispositivo, OS y navegador usando GET (Query params o Headers).
 *     parameters:
 *       - in: query
 *         name: useragent
 *         schema:
 *           type: string
 *         description: El string del User-Agent (opcional si se envía en headers)
 *     responses:
 *       200:
 *         description: Resultado de la detección.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetectionResult'
 *   post:
 *     summary: Detecta dispositivo, OS y navegador usando POST.
 *     responses:
 *       200:
 *         description: Resultado de la detección exitoso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetectionResult'
 */
router.get('/detect', DetectionController.detect);
router.post('/detect', DetectionController.detect);

export const apiRoutes = router;
