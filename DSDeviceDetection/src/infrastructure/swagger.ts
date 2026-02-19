/**
 * @openapi
 * components:
 *   schemas:
 *     DetectionResult:
 *       type: object
 *       properties:
 *         isBot:
 *           type: boolean
 *         device:
 *           type: object
 *           properties:
 *             type:
 *               type: string
 *               enum: [desktop, mobile, tablet, tv, console, bot]
 *             brand:
 *               type: string
 *               example: Apple
 *             model:
 *               type: string
 *               example: iPhone 15 Pro
 *         os:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: iOS
 *             version:
 *               type: string
 *               example: 17.4
 *         browser:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: Safari
 *             version:
 *               type: string
 *               example: 605.1
 *             engine:
 *               type: string
 *               example: WebKit
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'DsDeviceDetection API',
            version: '2.0.0',
            description: 'Servicio de detección de dispositivos de alto rendimiento (In-Memory).',
        },
        servers: [
            {
                url: '/',
                description: 'Servidor Actual (Relativo)'
            },
            {
                url: 'http://localhost:15230',
                description: 'Desarrollo Local'
            },
            {
                url: 'https://api.dsdevicedetection.com',
                description: 'Producción (Demo)'
            }
        ],
    },
    apis: [
        path.join(__dirname, './routes/*.js'),
        path.join(__dirname, './routes/*.ts'),
        path.join(__dirname, './server.js'),
        path.join(__dirname, './server.ts'),
        path.join(__dirname, './swagger.js'),
        path.join(__dirname, './swagger.ts'),
    ],
};
