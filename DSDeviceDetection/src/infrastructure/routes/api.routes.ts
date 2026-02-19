import { Router } from 'express';
import { DetectionController } from '../controllers/detection.controller.js';

const router = Router();

/**
 * @openapi
 * /api/v1/detect:
 *   get:
 *     summary: Detects device, OS, and browser using GET (Query params or Headers).
 *     parameters:
 *       - in: query
 *         name: useragent
 *         schema:
 *           type: string
 *         description: The User-Agent string (optional if sent in headers)
 *     responses:
 *       200:
 *         description: Detection result.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetectionResult'
 *   post:
 *     summary: Detects device, OS, and browser using POST.
 *     responses:
 *       200:
 *         description: Successful detection result.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetectionResult'
 */
router.get('/detect', DetectionController.detect);
router.post('/detect', DetectionController.detect);

export const apiRoutes = router;
